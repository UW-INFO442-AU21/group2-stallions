import React from "react";
import withLayout from "../../app/navigation/withLayout";
import { createDemoApp } from 'polotno/polotno-app';

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';

import { Workspace } from 'polotno/canvas/workspace';
import { SidePanel } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';

// import all default sections
// we will not use all of them in the demo
// just to show what we have

import { DEFAULT_SECTIONS } from 'polotno/side-panel';

const sections = [...DEFAULT_SECTIONS];

const Pamphlets = () => {
    return (
        <PolotnoContainer className="polotno-app-container">
        <SidePanelWrap style={{ height: '90vh', width: '35vh' }}>
          <SidePanel store={store} sections={sections} />
        </SidePanelWrap>
        <WorkspaceWrap style={{ height: '90vh', width: '90vh' }}>
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>

    );
};

const { store } = createDemoApp({
    container: document.getElementById('root'),
    key: '1dhazL_sUsyRbsXfvCai',
    showCredit: true,
  });


store.addPage();
store.activePage.addElement({
  type: 'text',
  text: 'hello',
});

export default withLayout(Pamphlets);
