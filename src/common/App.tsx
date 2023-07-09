import { Content, Header, Sidebar } from '../components';
import { SidebarProvider } from '../context/sidebarContext';

const App = () => {
  return (
    <main>
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <Content />
    </main>
  );
};

export default App;
