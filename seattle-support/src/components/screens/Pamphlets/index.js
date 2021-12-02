import React from 'react';
// import localforage from 'localforage';
import { createStore } from 'polotno/model/store';

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

import { loadFile } from './file';
import Topbar from './topbar';
import withLayout from "../../app/navigation/withLayout";

// import './index.css';

const store = createStore({ key: '1dhazL_sUsyRbsXfvCai' });
window.store = store;

// localforage.getItem('polotno-state', function (err, json) {
//   if (json) {
//     store.loadJSON(json);
//   }
//   if (!store.pages.length) {
//     store.addPage();
//   }
// });

// store.on('change', () => {
//   try {
//     const json = store.toJSON();
//     localforage.setItem('polotno-state', json);
//   } catch (e) {}
// });

const useHeight = () => {
    const [height, setHeight] = React.useState(window.innerHeight);
    React.useEffect(() => {
      window.addEventListener('resize', () => {
        setHeight(window.innerHeight);
      });
    }, []);
    return height;
  };

  const Pamphlets = ({ store }) => {
    const handleDrop = (ev) => {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();

      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        loadFile(ev.dataTransfer.files[i], store);
      }
    };

    const height = useHeight();

    return (
      <div
        style={{
          width: '100vw',
          height: height + 'px',
          display: 'flex',
          flexDirection: 'column',
        }}
        onDrop={handleDrop}
      >
        <Topbar store={store} />
        <div style={{ height: 'calc(100% - 50px)' }}>
          <PolotnoContainer className="polotno-app-container">
            {/* <SidePanelWrap>
              <SidePanel store={store} />
            </SidePanelWrap> */}
            <WorkspaceWrap>
              {/* <Toolbar store={store} /> */}
              <Workspace store={store} />
              <ZoomButtons store={store} />
            </WorkspaceWrap>
          </PolotnoContainer>
        </div>
      </div>
    );
  };

export default withLayout(Pamphlets);

// ReactDOM.render(
//   <React.StrictMode>
//     <App store={store} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );










// import React from "react";
// import withLayout from "../../app/navigation/withLayout";
// import { createDemoApp } from 'polotno/polotno-app';

// import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';

// import { Workspace } from 'polotno/canvas/workspace';
// import { SidePanel } from 'polotno/side-panel';
// import { Toolbar } from 'polotno/toolbar/toolbar';
// import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';

// // import all default sections
// // we will not use all of them in the demo
// // just to show what we have

// import { DEFAULT_SECTIONS } from 'polotno/side-panel';

// const sections = [...DEFAULT_SECTIONS];

// const Pamphlets = () => {
//     return (
//         <PolotnoContainer className="polotno-app-container">
//         <SidePanelWrap style={{ height: '90vh', width: '35vh' }}>
//           <SidePanel store={store} sections={sections} />
//         </SidePanelWrap>
//         <WorkspaceWrap style={{ height: '90vh', width: '90vh' }}>
//           <Toolbar store={store} downloadButtonEnabled />
//           <Workspace store={store} />
//           <ZoomButtons store={store} />
//         </WorkspaceWrap>
//       </PolotnoContainer>

//     );
// };

// const { store } = createDemoApp({
//     container: document.getElementById('root'),
//     key: '1dhazL_sUsyRbsXfvCai',
//     showCredit: true,
//   });


// store.addPage();
// store.activePage.addElement({
//   type: 'text',
//   text: 'hello',
// });

// export default withLayout(Pamphlets);
