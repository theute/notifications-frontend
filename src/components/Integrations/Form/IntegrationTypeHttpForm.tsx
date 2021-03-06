import * as React from 'react';
import { Checkbox, FormTextInput, ouiaIdConcat } from '@redhat-cloud-services/insights-common-typescript';
import { getOuiaProps } from '../../../utils/getOuiaProps';
import { IntegrationTypeForm } from './IntegrationTypeForm';

export const IntegrationTypeHttpForm: React.FunctionComponent<IntegrationTypeForm> = (props) => {
    return (
        <div className="pf-c-form" { ...getOuiaProps('Integrations/HttpForm', props) } >
            <FormTextInput
                isRequired={ true }
                label="Endpoint URL"
                type="url"
                name="url"
                id="integration-type-http-url"
                ouiaId={ ouiaIdConcat(props.ouiaId, 'endpoint-url') }
            />
            <Checkbox
                id="integration-type-http-ssl-verification-enabled"
                label="Enable SSL verification"
                name="sslVerificationEnabled"
                ouiaId={ ouiaIdConcat(props.ouiaId, 'is-ssl-verification-enabled') }
            />
            <FormTextInput
                isRequired={ false }
                label="Secret token"
                id="integration-type-http-secret-token"
                name="secretToken"
                ouiaId={ ouiaIdConcat(props.ouiaId, 'secret-token') }
            />
        </div>
    );
};
