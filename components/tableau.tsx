import React from 'react'
import Card from './card'
import { describe } from 'node:test'

const Tableau = () => {
    const arts = [
        {
            id: 1,
            title: "Beautiful Girl",
            img: "/1.png",
            description: "À travers Beautiful Girl, Mr. Brainwash célèbre la beauté et la diversité, tout en invitant le spectateur à réfléchir sur les standards de beauté imposés par la société. Cette œuvre incarne l'esprit optimiste et engagé de l'artiste, qui cherche à inspirer et à émouvoir par ses créations.",
            price: 150,
            author: "Mr Brainwash"
        },
        {
            id: 2,
            title: "Marchand d'art moderne",
            img: "/2.png",
            description: "Paul Guillaume, marchand d'art emblématique du début du XXe siècle, s'est distingué par sa collaboration avec le poète et critique Guillaume Apollinaire. Ensemble, ils ont soutenu des artistes émergents tels que Chirico et Soutine, créant une dynamique où le critique promeut les talents et le marchand prend des risques financiers. Guillaume organise des événements marquants et des vernissages spectaculaires, attirant l'attention du Tout-Paris sur l'art vivant. Sa revue Les Arts à Paris, fondée en 1918, sert de plateforme pour l'avant-garde tout en renforçant son rôle d'agitateur culturel. Son héritage perdure, témoignant de son engagement à transformer le paysage artistique de son époque.",
            price: 120,
            author: " Philippe SAUNIER"
        },
        {
            id: 3,
            title: "L'esprit Déchaîné",
            img: "/3.png",
            description: "Fusion saisissante d'art moderne et d'échos historiques, L'Esprit Déchaîné apparaît comme un témoignage de la pensée débridée et de l'esprit libre. Créée dans un style audacieux au pochoir, cette œuvre peinte à la main se déploie sur une toile richement texturée, entrelacée de fragments de , un journal connu pour son esprit vif et sa critique intrépide. L'interaction de l'encre et du mot imprimé forme un récit à plusieurs niveaux, qui défie, provoque et libère.",
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
            description: "L'œuvre Claudy couchée de dos avec un pull bleu est une peinture qui exprime une fascination pour l'humain et la beauté du corps. L'artiste y capture une scène intime et paisible : une femme allongée, vue de dos, vêtue d’un pull bleu qui contraste avec la douceur de sa posture et la sensualité de la composition. Avec une approche délicate, cette peinture explore le lien entre le corps et l’émotion, jouant sur la lumière et les textures pour transmettre une atmosphère à la fois mélancolique et apaisante. À travers cette œuvre, l'artiste témoigne de son intérêt profond pour l'humain, ses postures et ses instants de vulnérabilité.",
            price: 90,
            author: "Silas"
        },
        {
            id: 6,
            title: "L'amour du printemps",
            img: "/6.png",
            description: "Ce tableau de Samuel Veksler est une superbe œuvre de cubisme figuratif moderne, réalisée avec une grande maîtrise de la technique à l'huile sur toile. Ses dimensions de 81x65x2 cm permettent d’apprécier pleinement la richesse des formes et l’intensité des couleurs Signé en bas à droite et contresigné au dos, ce tableau reflète la fusion entre le lyrisme et l’énergie expressive, caractéristiques du style de l’artiste. Inspirée par les traditions picturales européennes, l’œuvre dégage une harmonie visuelle captivante, où chaque coup de pinceau contribue à une composition dynamique et équilibrée. Samuel Veksler, artiste répertorié dans les guides officiels d'art, voit ses œuvres estimées à 1 800 € pour un format de 50x61 cm aux enchères. Cette pièce originale et unique est accompagnée d’un certificat d’authenticité signé par l’artiste ",
            price: 80,
            author: " Samuel Veksler"
        },
        {
            id: 7,
            title: "Isolement au milieu de la foule",
            img: "/7.jpeg",
            description: "Ce tableau illustre un individu se tenant au centre d'une scène sombre, entouré de silhouettes indistinctes, toutes absorbées par leurs téléphones. Le personnage principal, vêtu d'une veste rouge éclatante, représente l'isolement et la solitude dans un monde de connectivité. Les ombres des figures en arrière-plan suggèrent une communauté déconnectée, soulignant le thème de l'aliénation à l'ère numérique. L'utilisation des couleurs et des contrastes renforce l'impression d'un environnement à la fois contemporain et mélancolique. ",
            price: 800,
            author: "Mohamed Jaber"
        },
        {
            id: 8,
            title: "La belle bleue",
            img: "/8.jpeg",
            description: "Paysage méditerranéen avec pins parasols et cyprès. Technique : Peinture au couteau et à l'huile sur toile en lin. La peinture est protégée par un vernis brillant. Les bords de la toile sont peint en noir et ne nécessite pas d'encadrement. Peintre des ciels, interprète de la nature, Bruni Eric réussit dans ses toiles à en capter toute sa douceur. Les couleurs sont souvent amplifiées, la gamme est parfois restreinte, parfois élargie suivant l' inspiration de l'artiste, l'accent est mis sur la couleur et le mouvement de l'air qui donne à la toile toute sa vigueur et sa respiration. En quête d'une expression artistique authentique intégrant la poésie du paysage, l'artiste dote ses tableaux d'une vie propre. Le rythme, élément essentiel dans la peinture de Bruni Eric, est également obtenu par des contrastes de composition - la lumière et l'ombre, l'opposition des formes. Tout concourt à rendre l'atmosphère du paysage dans ses moindres subtilités.",
            price: 2250,
            author: "Mohamed Jaber"
        },
        {
            id: 9,
            title: "L'Art et la Mort",
            img: "/9.jpeg",
            description: "Ce tableau captivant met en scène un artiste au premier plan, dont le regard intense est dirigé vers le spectateur, tandis qu'une figure squelettique se tient derrière lui, tenant un violon. Cette juxtaposition entre l'homme vivant et la mort suggère une réflexion profonde sur la fragilité de la vie et l'inévitabilité de la mortalité. Les détails du visage de l'artiste et l'expression énigmatique du squelette créent une atmosphère à la fois intrigante et troublante, invitant le spectateur à contempler le lien entre la créativité, l'art et le passage du temps.",
            price: 500,
            author: "Parfait Ndongui"
        },
        {
            id: 10,
            title: "L'Équilibre entre Ciel et Cosmos",
            img: "/10.jpeg",
            description: "Ce portrait saisissant représente un homme nu se tenant à l'interface entre un ciel lumineux et un cosmos obscur. L'artiste joue sur le contraste entre la lumière et l'obscurité, symbolisant le voyage entre deux mondes. L'homme, avec sa musculature bien définie, incarne la force et la détermination, tandis que les nuages et les étoiles évoquent les aspirations et les mystères de l'univers. Cette œuvre invite à réfléchir sur l'équilibre fragile entre la vie terrestre et les vastes inconnues du cosmos.",
            price: 287,
            author: "Moussa Sacko"
        },
        {
            id: 11,
            title: "L'Ombre de l'Identité",
            img: "/11.jpeg",
            description: "Ce tableau puissant présente une silhouette humaine, presque entièrement obscurcie par des coups de pinceau noirs qui évoquent une explosion de formes abstraites. La figure, habillée d'une veste et d'une cravate, représente une présence à la fois formelle et dépouillée, symbolisant la lutte interne pour l'identité dans un monde moderne souvent chaotique. Les éclaboussures et les drippings de peinture suggèrent la désintégration de l'individualité, invitant le spectateur à réfléchir sur les thèmes de l'aliénation et de la perception de soi.",
            price: 999,
            author: "Suhkmanjit Singh"
        },
        {
            id: 12,
            title: "Dualité de la Vie",
            img: "/12.jpeg",
            description: "Cette œuvre saisissante juxtapose une main squelettique à gauche, représentant la mortalité, et une main humaine vivante à droite, entourée de fleurs et de verdure, symbole de la vie et de la vitalité. Cette composition visuelle évoque le contraste entre la vie et la mort, mettant en lumière la beauté éphémère de l'existence. Les détails minutieux des deux mains soulignent la fragilité de la vie humaine tout en célébrant la richesse de la nature. L'œuvre invite le spectateur à méditer sur le cycle de la vie et la coexistence de ces deux réalités. ",
            price: 7350,
            author: "Georgel Moise"
        },
        {
            id: 13,
            title: "En attendant un miracle” de Natalia Kuruch",
            img: "/13.webp",
            description: "Dans cette œuvre, j'ai cherché à capturer l'union mystique d'une femme enceinte et d'un cheval prêt à l'accompagner, symbolisée par la communion intime entre eux, entourés de tournesols éclatants. En utilisant de l'acrylique et du spray, enrichis par des objets récupérés, ce tableau oscille entre le figuratif et le semi-abstrait. Les couleurs vives et les motifs audacieux invitent à un dialogue continu entre rêve et réalité, apportant à chaque espace  une atmosphère de réflexion et d'inspiration.",
            price: 3000,
            author: "Moussa Sacko"
        },
        {
            id: 14,
            title: "Faire connaissance",
            img: "/14.webp",
            description: " Premiers pas d'un cavalier et sa monture dans la mer Jean-Claude Pallier est aussi un cavalier; il sait l'importance de laisser le cheval apprivoiser l'élément liquide en début de promenade. La plage de Saint-Brévin, sur l'océan atlantique, est un magnifique lieu de ballade, et même de bain des chevaux. La lumière du matin crée cette ambiance si particulière, où le miroir de la mer se fond avec l'horizon. Ce qui nous permet de partager avec le cavalier  ce moment de sérénité et de contemplation. ",
            price: 3150,
            author: "Jean-Claude Pallier "
        },
        {
            id: 15,
            title: "Winter im Wald",
            img: "/15.webp",
            description: "Le “Winter im Wald', ou hiver dans la forêt, domine cette peinture à l'huile de style expressionniste avec son arbre gracieux peint en brun pâteux. L'artiste Sony Lim laisse du givre aux tons gris couler doucement sur sa peinture grand format et crée ainsi une image de paysage idyllique pris dans la saison froide.",
            price: 2150,
            author: "Faouzi Boufares"
        },
        {
            id: 16,
            title: "Sur le chemin de la Montagne Sainte Victoire en Provence",
            img: "/16.jpeg",
            description: "Dans cette toile, j'ai voulu capturer l'essence vibrante et éphémère de la Provence. À travers la technique de l'impressionnisme, chaque coup de pinceau incarne une émotion, une sensation. Ce chemin qui serpente vers la petite maison évoque un voyage, une quête de paix et de beauté naturelle. Les couleurs vives des fleurs et la texture riche de la végétation invitent le spectateur à s'immerger dans un monde où la nature est reine. Cette œuvre, baignée de lumière et de joie, apportera une énergie positive et inspirante à tout espace de vie.",
            price: 3150,
            author: "Faouzi Boufares"
        },
    ]
  return (
    <div>
        <h1 className='text-center text-5xl'>Nos Oeuvres d'art</h1>
        <div className='m-10 flex justify-between gap-3 flex-wrap'>
            {arts.map((art) => (
                <Card key={art.id} art={art} />
            ))}
        </div>
    </div>
    
  )
}

export default Tableau
