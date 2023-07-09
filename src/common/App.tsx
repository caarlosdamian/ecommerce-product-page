import { Cart, Header, Sidebar } from '../components';
import { SidebarProvider } from '../context/sidebarContext';

const App = () => {
  return (
    <main>
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <section>MainPage</section>
    </main>
  );
};

export default App;
