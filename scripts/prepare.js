var prompt = require('prompt')
var fs = require('fs')

const envCi = require('env-ci')
const { isCi } = envCi()

const simpleGit = require('simple-git')()

console.log('npm install:prepare script starting...')

if (isCi) {
  console.log('Installing:CI')
  console.log('Use default aws-exports.js')
} else {
  console.log('Installing:local')
  prompt.start()
  console.log('Enter AWS credentials:')

  prompt.get([
    'aws_cognito_identity_pool_id',
    'aws_content_delivery_bucket',
    'aws_content_delivery_cloudfront_domain',
    'aws_mobile_analytics_app_id',
    'aws_project_id',
    'aws_resource_name_prefix'
  ], function (err, result) {
    if (err) {
      console.error(err)
      console.log('aborting prepare script...')
      return
    }

    fs.writeFile('./src/aws-exports.js', "// AWS Mobile Hub Project Constants\n// Generated by npm prepare script\nconst awsmobile = {\n  'aws_app_analytics': 'enable',\n  'aws_cognito_identity_pool_id': '" +
      result.aws_cognito_identity_pool_id + "',\n  'aws_cognito_region': 'eu-central-1',\n  'aws_content_delivery': 'enable',\n  'aws_content_delivery_bucket': '" +
      result.aws_content_delivery_bucket + "',\n  'aws_content_delivery_bucket_region': 'eu-central-1',\n  'aws_content_delivery_cloudfront': 'enable',\n  'aws_content_delivery_cloudfront_domain': '" +
      result.aws_content_delivery_cloudfront_domain + "',\n  'aws_mobile_analytics_app_id': '" +
      result.aws_mobile_analytics_app_id + "',\n  'aws_mobile_analytics_app_region': 'us-east-1',\n  'aws_project_id': '" +
      result.aws_project_id + "',\n  'aws_project_name': 'circles-mobile',\n  'aws_project_region': 'eu-central-1',\n  'aws_resource_name_prefix': '" +
      result.aws_resource_name_prefix + "'\n}\n\nexport default awsmobile\n",
    function (err) {
      if (err) console.error(err)
      console.log('/src/aws-exports.js overwritten!')
      simpleGit.raw([
        'update-index',
        '--skip-worktree',
        'src/aws-exports.js'
      ], (err, result) => {
        // simpleGit.rmKeepLocal('\\src\\aws-exports.js', (err, data) => {
        if (err) console.error(err)
        console.log(result)
        console.log('removed aws-exports.js from index')
      })
    })
  })
}
