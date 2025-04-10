import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AppPromptViewer from "@/components/organisms/app-prompt-viewer";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects/:projectId/:stageId" element={<AppPromptViewer />} />
        </Routes>
    );
};

export default AppRouter;