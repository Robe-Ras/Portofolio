import { useState, useEffect } from 'react';
import '../../input.css';

function Projets() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/projects?populate=image', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Réponse réseau non OK');
      }
      return response.json();
    })
    .then(data => setProjects(data.data || []))
    .catch(error => {
      console.error('Erreur lors de la récupération des projets:', error);
      setProjects([]);
    });
  }, []);

  return (
    <div>
      <h1 className="the_title">Mes Projets</h1>
      <div className="card_container bg-gray-100 w-full min-h-screen">
        {projects.map(project => {
          const randomDelay = Math.random() * 2; // Délai aléatoire entre 0 et 2 secondes
          return (
            <div key={project.id} className="card-wrapper">
              <div className="card" style={{ animationDelay: `${randomDelay}s` }}>
                <img 
                  className="h-40 object-cover rounded-xl"
                  src={`http://localhost:1337${project.attributes.image.data.attributes.url}`}
                  alt={project.attributes.image.data?.attributes.name}
                />
                <div className="p-2">
                  <div className="card_content">
                    <h3 className="card_description text-sm text-gray-600">{project.attributes.description}</h3>
                    <p className="card_big_description text-3xl font-bold">{project.attributes.content}</p>
                  </div>
                </div>
                <div className="card_button m-2">
                  <a role='button' href='#' className="card_button">
                    <i className="fas fa-globe mr-2"></i> Explorer
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="form-container">
        <form className="contact-form">
          <img src="/src/assets/images/moi.jpg" alt="ma photo" className="form_image" />
          <div className="form_content">
            <h2 className="form_title text-2xl font-bold mb-4">Contact</h2>
            <div className="mb-4">
              <label className="form_label block text-white text-sm font-bold mb-2" htmlFor="name">Nom</label>
              <input className="field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom" />
            </div>
            <div className="mb-4">
              <label className="email_label form_label block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email" />
            </div>
            <div className="mb-4">
              <label className="form_label block text-white text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="field shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Votre message"></textarea>
            </div>
            <div className="form_button_container">
              <button className="form_button" type="button">
                Envoyer
              </button>
            </div>
          </div>
        </form>
        <div className="contact_text form-text">
          <p>
            <strong style={{ color: 'beige' }}>Vous souhaitez discuter avec moi,</strong> <span className="text-normal">que ce soit pour me proposer un poste ou pour passer le temps ?</span>
            <br/>
            <br/>
            <strong style={{ color: 'beige' }}>Remplissez le formulaire,</strong><span className="text-normal"> je vous contacterai dès que je le peux.</span>
          </p>
        </div>
        <div className="paragraph-video-container">
          <video src="/src/assets/images/lofi.mp4" alt="lofi.mp4" className="lofi-gif" loop autoPlay muted />
        </div>
      </div>
    </div>
  );
}

export default Projets;

