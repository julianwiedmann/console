import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { withStartGuide } from '@console/internal/components/start-guide';
import { PageHeading } from '@console/internal/components/utils';
import { RestoreGettingStartedButton } from '@console/shared';
import Dashboard from '@console/shared/src/components/dashboard/Dashboard';
import { KUBEVIRT_QUICK_START_USER_SETTINGS_KEY } from './getting-started-card/const';
import { GettingStartedContainerCard } from './getting-started-card/GettingStartedContainerCard';

export const WrappedVirtualizationOverviewPage: React.FC = () => {
  const { t } = useTranslation();
  const title = t('kubevirt-plugin~Virtualization Overview');
  const badge = (
    <RestoreGettingStartedButton userSettingsKey={KUBEVIRT_QUICK_START_USER_SETTINGS_KEY} />
  );

  return (
    <>
      <Helmet>
        <title>Virtualization Overview</title>
      </Helmet>
      <PageHeading title={title} detail badge={badge} />
      <Dashboard>
        <GettingStartedContainerCard />
      </Dashboard>
    </>
  );
};

const VirtualizationOverviewPage = withStartGuide(WrappedVirtualizationOverviewPage);

export { VirtualizationOverviewPage };
