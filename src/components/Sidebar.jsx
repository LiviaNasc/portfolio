import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpeg';

import '../styles/components/sidebar.sass';
import InformationContainer from './informationContainer';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Livia Oliveira'/>
      <p className='title'>Estudante de Ciências Da Computação</p>
      <SocialNetworks/>
      <InformationContainer />
    </aside>
  );
}

export default Sidebar