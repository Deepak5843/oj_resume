import "./@aws-sdk/client-s3+[...].mjs";
import { c as fromContainerMetadata, d as httpRequest, n as fromInstanceMetadata, o as ENV_CMDS_FULL_URI, r as getInstanceMetadataEndpoint, s as ENV_CMDS_RELATIVE_URI, t as init_dist_es } from "./@smithy/credential-provider-imds+[...].mjs";
init_dist_es();
export { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata, getInstanceMetadataEndpoint, httpRequest };
