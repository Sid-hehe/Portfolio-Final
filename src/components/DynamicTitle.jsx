import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Canvas Theory | Home';
        break;
      case '/services':
        document.title = 'Canvas Theory | Services';
        break;
      case '/projects':
        document.title = 'Canvas Theory | Work';
        break;
      case '/contact':
        document.title = 'Canvas Theory | Contact';
        break;
      case '/about':
        document.title = 'Canvas Theory | About Us';
        break;
      case '/terms':
        document.title = 'Canvas Theory | Terms and Conditions';
        break;
      case '/privacy':
        document.title = 'Canvas Theory | Privacy Policy';
        break;
      case '/refund':
        document.title = 'Canvas Theory | Refund Policy';
        break;
      case '/cookies':
        document.title = 'Canvas Theory | Cookie Policy';
        break;
      default:
        document.title = 'Canvas Theory';
    }
  }, [location]);

  return null;
};

export default DynamicTitle;
