import * as React from 'react';
import { Container } from '../Layout';

export interface IIntegrationEditorNothingToConfigureProps {
  /**
   * The internationalized title.
   */
  i18nTitle: string;
  /**
   * The internationalized subtitle.
   */
  i18nSubtitle: string;
  /**
   * The internationalized alert to display.
   */
  i18nAlert: string;
}

/**
 * A component to render an alert for unconfigurable actions.
 * @see [i18nTitle]{@link IIntegrationEditorNothingToConfigureProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorNothingToConfigureProps#i18nSubtitle}
 * @see [i18nAlert]{@link IIntegrationEditorNothingToConfigureProps#i18nAlert}
 */
export class IntegrationEditorNothingToConfigure extends React.Component<
  IIntegrationEditorNothingToConfigureProps
> {
  public render() {
    return (
      <Container>
        <h1>{this.props.i18nTitle} - Choose Action</h1>
        <p>{this.props.i18nSubtitle}</p>
        <Container>
          <div className="row row-cards-pf">
            <div className="card-pf">
              <div className="card-pf-body">
                <Container>
                  <p className="alert alert-info">
                    <span className="pficon pficon-info" />
                    {this.props.i18nAlert}
                  </p>
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    );
  }
}
