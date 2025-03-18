
import Footer from '@/components/footer'
import Header from '@/components/header'
import Payment from '@/components/payment'
import Image from 'next/image'
import React from 'react'

const arts = [
  {
      id: 1,
      title: "Beautiful Girl",
      img: "/1.png",
      description: "À travers Beautiful Girl, Mr. Brainwash célèbre la beauté et la diversité, tout en invitant le spectateur à réfléchir sur les standards de beauté imposés par la société. Cette œuvre incarne l&apos;esprit optimiste et engagé de l&apos;artiste, qui cherche à inspirer et à émouvoir par ses créations.",
      price: 150,
      author: "Mr Brainwash"
  },
  {
      id: 2,
      title: "Marchand d&apos;art moderne",
      img: "/2.png",
      description: "Paul Guillaume, marchand d&apos;art emblématique du début du XXe siècle, s&apos;est distingué par sa collaboration avec le poète et critique Guillaume Apollinaire. Ensemble, ils ont soutenu des artistes émergents tels que Chirico et Soutine, créant une dynamique où le critique promeut les talents et le marchand prend des risques financiers. Guillaume organise des événements marquants et des vernissages spectaculaires, attirant l&apos;attention du Tout-Paris sur l&apos;art vivant. Sa revue Les Arts à Paris, fondée en 1918, sert de plateforme pour l&apos;avant-garde tout en renforçant son rôle d&apos;agitateur culturel. Son héritage perdure, témoignant de son engagement à transformer le paysage artistique de son époque.",
      price: 120,
      author: " Philippe SAUNIER"
  },
  {
      id: 3,
      title: "L&apos;esprit Déchaîné",
      img: "/3.png",
      description: "Fusion saisissante d&apos;art moderne et d&apos;échos historiques, L&apos;Esprit Déchaîné apparaît comme un témoignage de la pensée débridée et de l&apos;esprit libre. Créée dans un style audacieux au pochoir, cette œuvre peinte à la main se déploie sur une toile richement texturée, entrelacée de fragments de , un journal connu pour son esprit vif et sa critique intrépide. L&apos;interaction de l&apos;encre et du mot imprimé forme un récit à plusieurs niveaux, qui défie, provoque et libère.",
      price: 130,
      author: "Tizlu"
  },
  {
      id: 4,
      title: "Mr Brainwash (1966) - Beautiful Girl (UNQ 1/1)",
      img: "/4.png",
      description: "Silkscreen on Paper Unique work Comes with certificate of authenticity",
      price: 245,
      author: "Mr Brainwash"
  },
  {
      id: 5,
      title: "Z_CL_01",
      img: "/5.png",
      description: "L&apos;œuvre Claudy couchée de dos avec un pull bleu est une peinture qui exprime une fascination pour l&apos;humain et la beauté du corps. L&apos;artiste y capture une scène intime et paisible : une femme allongée, vue de dos, vêtue d&apos;un pull bleu qui contraste avec la douceur de sa posture et la sensualité de la composition. Avec une approche délicate, cette peinture explore le lien entre le corps et l&apos;émotion, jouant sur la lumière et les textures pour transmettre une atmosphère à la fois mélancolique et apaisante. À travers cette œuvre, l&apos;artiste témoigne de son intérêt profond pour l&apos;humain, ses postures et ses instants de vulnérabilité.",
      price: 90,
      author: "Silas"
  },
  {
      id: 6,
      title: "L&apos;amour du printemps",
      img: "/6.png",
      description: "Ce tableau de Samuel Veksler est une superbe œuvre de cubisme figuratif moderne, réalisée avec une grande maîtrise de la technique à l&apos;huile sur toile. Ses dimensions de 81x65x2 cm permettent d&apos;apprécier pleinement la richesse des formes et l&apos;intensité des couleurs Signé en bas à droite et contresigné au dos, ce tableau reflète la fusion entre le lyrisme et l&apos;énergie expressive, caractéristiques du style de l&apos;artiste. Inspirée par les traditions picturales européennes, l&apos;œuvre dégage une harmonie visuelle captivante, où chaque coup de pinceau contribue à une composition dynamique et équilibrée. Samuel Veksler, artiste répertorié dans les guides officiels d&apos;art, voit ses œuvres estimées à 1 800 € pour un format de 50x61 cm aux enchères. Cette pièce originale et unique est accompagnée d&apos;un certificat d&apos;authenticité signé par l&apos;artiste ",
      price: 80,
      author: " Samuel Veksler"
  },
  {
      id: 7,
      title: "Isolement au milieu de la foule",
      img: "/7.jpeg",
      description: "Ce tableau illustre un individu se tenant au centre d&apos;une scène sombre, entouré de silhouettes indistinctes, toutes absorbées par leurs téléphones. Le personnage principal, vêtu d&apos;une veste rouge éclatante, représente l&apos;isolement et la solitude dans un monde de connectivité. Les ombres des figures en arrière-plan suggèrent une communauté déconnectée, soulignant le thème de l&apos;aliénation à l&apos;ère numérique. L&apos;utilisation des couleurs et des contrastes renforce l&apos;impression d&apos;un environnement à la fois contemporain et mélancolique. ",
      price: 800,
      author: "Mohamed Jaber"
  },
  {
      id: 8,
      title: "La belle bleue",
      img: "/8.jpeg",
      description: "Paysage méditerranéen avec pins parasols et cyprès. Technique : Peinture au couteau et à l&apos;huile sur toile en lin. La peinture est protégée par un vernis brillant. Les bords de la toile sont peint en noir et ne nécessite pas d&apos;encadrement. Peintre des ciels, interprète de la nature, Bruni Eric réussit dans ses toiles à en capter toute sa douceur. Les couleurs sont souvent amplifiées, la gamme est parfois restreinte, parfois élargie suivant l&apos; inspiration de l&apos;artiste, l&apos;accent est mis sur la couleur et le mouvement de l&apos;air qui donne à la toile toute sa vigueur et sa respiration. En quête d&apos;une expression artistique authentique intégrant la poésie du paysage, l&apos;artiste dote ses tableaux d&apos;une vie propre. Le rythme, élément essentiel dans la peinture de Bruni Eric, est également obtenu par des contrastes de composition - la lumière et l&apos;ombre, l&apos;opposition des formes. Tout concourt à rendre l&apos;atmosphère du paysage dans ses moindres subtilités.",
      price: 2250,
      author: "Mohamed Jaber"
  },
  {
      id: 9,
      title: "L&apos;Art et la Mort",
      img: "/9.jpeg",
      description: "Ce tableau captivant met en scène un artiste au premier plan, dont le regard intense est dirigé vers le spectateur, tandis qu&apos;une figure squelettique se tient derrière lui, tenant un violon. Cette juxtaposition entre l&apos;homme vivant et la mort suggère une réflexion profonde sur la fragilité de la vie et l&apos;inévitabilité de la mortalité. Les détails du visage de l&apos;artiste et l&apos;expression énigmatique du squelette créent une atmosphère à la fois intrigante et troublante, invitant le spectateur à contempler le lien entre la créativité, l&apos;art et le passage du temps.",
      price: 500,
      author: "Parfait Ndongui"
  },
  {
      id: 10,
      title: "L&apos;Équilibre entre Ciel et Cosmos",
      img: "/10.jpeg",
      description: "Ce portrait saisissant représente un homme nu se tenant à l&apos;interface entre un ciel lumineux et un cosmos obscur. L&apos;artiste joue sur le contraste entre la lumière et l&apos;obscurité, symbolisant le voyage entre deux mondes. L&apos;homme, avec sa musculature bien définie, incarne la force et la détermination, tandis que les nuages et les étoiles évoquent les aspirations et les mystères de l&apos;univers. Cette œuvre invite à réfléchir sur l&apos;équilibre fragile entre la vie terrestre et les vastes inconnues du cosmos.",
      price: 287,
      author: "Moussa Sacko"
  },
  {
      id: 11,
      title: "L&apos;Ombre de l&apos;Identité",
      img: "/11.jpeg",
      description: "Ce tableau puissant présente une silhouette humaine, presque entièrement obscurcie par des coups de pinceau noirs qui évoquent une explosion de formes abstraites. La figure, habillée d&apos;une veste et d&apos;une cravate, représente une présence à la fois formelle et dépouillée, symbolisant la lutte interne pour l&apos;identité dans un monde moderne souvent chaotique. Les éclaboussures et les drippings de peinture suggèrent la désintégration de l&apos;individualité, invitant le spectateur à réfléchir sur les thèmes de l&apos;aliénation et de la perception de soi.",
      price: 999,
      author: "Suhkmanjit Singh"
  },
  {
      id: 12,
      title: "Dualité de la Vie",
      img: "/12.jpeg",
      description: "Cette œuvre saisissante juxtapose une main squelettique à gauche, représentant la mortalité, et une main humaine vivante à droite, entourée de fleurs et de verdure, symbole de la vie et de la vitalité. Cette composition visuelle évoque le contraste entre la vie et la mort, mettant en lumière la beauté éphémère de l&apos;existence. Les détails minutieux des deux mains soulignent la fragilité de la vie humaine tout en célébrant la richesse de la nature. L&apos;œuvre invite le spectateur à méditer sur le cycle de la vie et la coexistence de ces deux réalités. ",
      price: 7350,
      author: "Georgel Moise"
  },
  {
      id: 13,
      title: "En attendant un miracle” de Natalia Kuruch",
      img: "/13.webp",
      description: "Dans cette œuvre, j&apos;ai cherché à capturer l&apos;union mystique d&apos;une femme enceinte et d&apos;un cheval prêt à l&apos;accompagner, symbolisée par la communion intime entre eux, entourés de tournesols éclatants. En utilisant de l&apos;acrylique et du spray, enrichis par des objets récupérés, ce tableau oscille entre le figuratif et le semi-abstrait. Les couleurs vives et les motifs audacieux invitent à un dialogue continu entre rêve et réalité, apportant à chaque espace  une atmosphère de réflexion et d&apos;inspiration.",
      price: 3000,
      author: "Moussa Sacko"
  },
  {
      id: 14,
      title: "Faire connaissance",
      img: "/14.webp",
      description: " Premiers pas d&apos;un cavalier et sa monture dans la mer Jean-Claude Pallier est aussi un cavalier; il sait l&apos;importance de laisser le cheval apprivoiser l&apos;élément liquide en début de promenade. La plage de Saint-Brévin, sur l&apos;océan atlantique, est un magnifique lieu de ballade, et même de bain des chevaux. La lumière du matin crée cette ambiance si particulière, où le miroir de la mer se fond avec l&apos;horizon. Ce qui nous permet de partager avec le cavalier  ce moment de sérénité et de contemplation. ",
      price: 3150,
      author: "Jean-Claude Pallier "
  },
  {
      id: 15,
      title: "Winter im Wald",
      img: "/15.webp",
      description: "Le “Winter im Wald&apos;, ou hiver dans la forêt, domine cette peinture à l&apos;huile de style expressionniste avec son arbre gracieux peint en brun pâteux. L&apos;artiste Sony Lim laisse du givre aux tons gris couler doucement sur sa peinture grand format et crée ainsi une image de paysage idyllique pris dans la saison froide.",
      price: 2150,
      author: "Faouzi Boufares"
  },
  {
      id: 16,
      title: "Sur le chemin de la Montagne Sainte Victoire en Provence",
      img: "/16.jpeg",
      description: "Dans cette toile, j&apos;ai voulu capturer l&apos;essence vibrante et éphémère de la Provence. À travers la technique de l&apos;impressionnisme, chaque coup de pinceau incarne une émotion, une sensation. Ce chemin qui serpente vers la petite maison évoque un voyage, une quête de paix et de beauté naturelle. Les couleurs vives des fleurs et la texture riche de la végétation invitent le spectateur à s&apos;immerger dans un monde où la nature est reine. Cette œuvre, baignée de lumière et de joie, apportera une énergie positive et inspirante à tout espace de vie.",
      price: 3150,
      author: "Faouzi Boufares"
  },
]

interface cardProps {
  id: number,
  title: string,
  img: string,
  description: string
  price: number,
  author: string
}

const page = async  ({params}: {params: Promise<{ slug: string }>}) => {
  const { slug } = await params
  const art = arts.find((x: cardProps) => x.id == parseInt(slug))
  return (
    <div className='h-screen'>
      <div className="w-full sticky top-0 left-0 px-6">
        <Header/>
      </div>
      <div className='flex gap-4 m-10 mb-10'>
          <div className='flex-1'>
            {art && <Image className='h-full w-full rounded-lg' src={art?.img} alt="" /> }
          </div>
          <div className='flex-1 flex flex-col justify-between'>
            <h1 className='text-5xl text-cyan-700'>{art?.title} </h1>
            <p className='text-black/80'><span className='text-cyan-700'>À propos de l&apos;oeuvre</span>: <br />{art?.description}</p>
            <h3 className='text-2xl text-cyan-700'>{art?.price}€</h3>
            <div className='h-3/5'>
              <Payment/>
            </div>
          </div>
      </div>
      <div className='mt-20'>
        <Footer/>
      </div>
    </div>
  )
}

export default page
