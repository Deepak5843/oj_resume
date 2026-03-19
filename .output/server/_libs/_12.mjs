import "./@aws-sdk/client-s3+[...].mjs";
import { t as import_sso } from "./@aws-sdk/credential-provider-sso+[...].mjs";
var GetRoleCredentialsCommand = import_sso.GetRoleCredentialsCommand;
var SSOClient = import_sso.SSOClient;
export { GetRoleCredentialsCommand, SSOClient };
