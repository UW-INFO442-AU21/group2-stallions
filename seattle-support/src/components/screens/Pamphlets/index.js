import React from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { loadFile } from './file';
import Topbar from './topbar';
import withLayout from "../../app/navigation/withLayout";
import { TemplatesSection } from './template';
import { ElementsSection, TextSection, BackgroundSection, UploadSection, SizeSection} from 'polotno/side-panel';

const useHeight = () => {
    const [height, setHeight] = React.useState(window.innerHeight);
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
        });
    }, []);
    return height;
};

const sections = [TemplatesSection, ElementsSection, TextSection, BackgroundSection, UploadSection, SizeSection]

const Pamphlets = ({ store }) => {
    const handleDrop = (ev) => {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
            loadFile(ev.dataTransfer.files[i], store);
        }
    };
    // loadTemplate(store);
    const height = useHeight();

    return (
        <div
            style={{
                width: '90vw',
                height: height + 'px',
                display: 'flex',
                flexDirection: 'column',
            }}
            onDrop={handleDrop}>

            <h1> Pamphlet Generator</h1>
            <p>Use this pamhplet generator to create custom informational flyers that can be distributed to people in need who may
                lack access to technology </p>

            <Topbar store={store} />
            <div style={{ height: 'calc(90% - 50px)' }}>
                <PolotnoContainer className="polotno-app-container">
                    <SidePanelWrap>
                        <SidePanel store={store} sections={sections} defaultSection="custom-templates" />
                    </SidePanelWrap>
                    <WorkspaceWrap>
                        <Toolbar store={store} />
                        <Workspace store={store} />
                        <ZoomButtons store={store} />
                    </WorkspaceWrap>
                </PolotnoContainer>
            </div>
        </div>
    );
};

export default withLayout(Pamphlets);
