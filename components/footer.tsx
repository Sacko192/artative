export default function Footer() {
    return (
      <footer className="bg-cyan-700 text-white py-6 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium border-b-2 border-white">Artistes Célèbres sur Artative</h3>
              <ul className="mt-2 space-y-2 cursor-pointer">
                {[
                  { name: "Parfait Ndongui" },
                  { name: "Suhkmanjit Singh" },
                  { name: "Georgel Moise" },
                  { name: "Moussa Sacko" },
                  { name: "Mohamed Jaber" },
                  { name: "Faouzi Boufares" },
                ].map((artist) => (
                  <li key={artist.name}>
                    <a className="hover:underline">
                      {artist.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-medium border-b-2 border-white">Pour les Artistes</h3>
              <ul className="mt-2 space-y-2 cursor-pointer">
                <li>
                  <a className="hover:underline">
                    Rejoindre Artative en tant qu'artiste
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    Se connecter en tant qu'Artiste
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-medium border-b-2 border-white">Service clients</h3>
              <ul className="mt-2 space-y-2 cursor-pointer">
                <li>
                  <a className="hover:underline">
                    Nous contacter
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    Expédition
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    Politique de retour
                  </a>
                </li>
                <li>
                  <a className="hover:underline">
                    +33 01 00 00 00 10
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-medium border-b-2 border-white">À propos d'Artative</h3>
              <ul className="mt-2 space-y-2 cursor-pointer">
                <li>
                  <a className="hover:underline">
                    A propos de nous
                  </a>
                </li>
                <li>
                  <a rel="noopener" className="hover:underline">
                    Magazine Artative
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6 text-sm border-t-2 p-2 border-white">&copy; {new Date().getFullYear()} Tous droits réservés.</div>
        </div>
      </footer>
    );
  }
  
