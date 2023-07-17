import { Content, Header, Sidebar } from '../components';
import { CartProvider } from '../context/cartContext';
import { SidebarProvider } from '../context/sidebarContext';
import { productInfo } from '../utils/contentUtil';

const App = () => {
  return (
    <main>
      <CartProvider>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <Content product={productInfo} />
        </SidebarProvider>
      </CartProvider>
    </main>
  );
};

export default App;
