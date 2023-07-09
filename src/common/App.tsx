import { Content, Header, Sidebar } from '../components';
import { SidebarProvider } from '../context/sidebarContext';
import { productInfo } from '../utils/contentUtil';

const App = () => {
  return (
    <main>
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <Content product={productInfo} />
    </main>
  );
};

export default App;
