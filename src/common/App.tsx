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
        </SidebarProvider>
        <Content product={productInfo} />
      </CartProvider>
    </main>
  );
};

export default App;
