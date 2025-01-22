<script>
  import { ChevronDown } from "lucide-svelte";
  import Phone from "./Phone.svelte";
  let AmmountINvest = $state(20000);
</script>

<main>
  <po>Comment ça fonctionne</po>
  <h1>
    Notre IA et nos experts conçoivent votre maison idéale à partir de vos idées
  </h1>
  <show>
    <picture>
      <Phone img="/assets/images/HomeImages/02-Green_Blue_LM-4K.png" />
    </picture>
    <div style="width: 50%;">
      <h1 style="padding: 0;text-align:start;font-size:4em">
        Lancez-vous en<br /> 3 Simple etapes
      </h1>
      <tickline class="animatable" style="animation-delay: 1s;"></tickline>
      <h2 class="animatable" style="animation-delay: 0.2s;margin-bottom: 40px;">
        <tickd class="animatable" style="animation-delay: 0.3s;">1</tickd>
        Créez votre profil en 30 seconde
      </h2>
      <h2 class="animatable" style="animation-delay: 0.4s;margin-bottom: 40px;">
        <tickd class="animatable" style="animation-delay: 0.5s;">2</tickd>
        Imaginez votre maison de rêve et faites-en une réalité
      </h2>
      <h2 class="animatable" style="animation-delay: 0.6s;margin-bottom: 40px;">
        <tickd class="animatable" style="animation-delay: 0.7s;">3</tickd>
        Découvrez nos experts et bénéficiez de leur savoir-faire
      </h2>
      <button class="animatable" style="margin-top: 20px;">Lancez-vous !</button
      >
    </div>
  </show>
  <simulator>
    <content>
      <h1>Évaluez votre rendement potentiel</h1>
      <p>
        Que ce soit en construisant un revenu passif grâce à des biens locatifs
        ou en tirant parti de l'appréciation des propriétés
      </p>
    </content>
    <sim>
      <div>
        <h2>Capital à Inverstir</h2>
        <p style="font-family: Figtree;font-size:20px">$ {AmmountINvest}</p>
      </div>
      <input type="range" bind:value={AmmountINvest} min="500" max="100000" />
      <div>
        <h2>Acompte</h2>
        <p style="font-family: Milk;font-size:35px">
          $ {Math.floor(AmmountINvest * 0.2)}
        </p>
      </div>
      <div>
        <h2>Paiement Mensuel</h2>
        <p style="font-family: Figtree;font-size:18px">
          $ {Math.floor(AmmountINvest * 0.01194)}
        </p>
      </div>
    </sim>
  </simulator>
  <po>AVANTAGES</po>
  <h1>
    Trouvez la maison de vos rêves en toute sécurité avec notre marketplace
  </h1>
  <show>
    <div>
      <h1 style="padding: 0;text-align:start;font-size:4em">
        Bienvenue sur<br /> Tipstalk Marketplace
      </h1>
      <tickline class="animatable" style="animation-delay: 1s;"></tickline>
      <h2 class="animatable" style="animation-delay: 0.2s;margin-bottom: 40px;">
        <tickd class="animatable" style="animation-delay: 0.3s;">1</tickd>
        Créez votre compte en quelques secondes
      </h2>
      <h2 class="animatable" style="animation-delay: 0.4s;margin-bottom: 40px;">
        <tickd class="animatable" style="animation-delay: 0.5s;">2</tickd>
        Explorez notre vaste sélection de biens immobiliers
      </h2>
      <h2 class="animatable" style="animation-delay: 0.6s;margin-bottom: 40px;">
        <tickd class="animatable" style="animation-delay: 0.7s;">3</tickd>
        Contactez nos experts pour des conseils personnalisés
      </h2>
      <button onclick={()=>(window.location = "/")} class="animatable" style="margin-top: 20px;">Decouvrir !</button
      >
    </div>
    <picture>
      <Phone img="/assets/images/HomeImages/screenshot-1737544480810.png" />
    </picture>
  </show>
  <cards>
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/house-01-twotone-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          d="M13 2L2 7"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
        </path>
        <path
          d="M12 3V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18V7"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 7L22 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
        </path>
        <path
          d="M10 21.9997H17C18.8856 21.9997 19.8284 21.9997 20.4142 21.4139C21 20.8281 21 19.8853 21 17.9997V11.5"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M18 10L18 7"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M7 11H8M7 15H8"
          stroke="#00000050"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M16 14H17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M16.5 22V18"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <h1>Impact</h1>
      <p>
        Nous voulons permettre à chacun de construire et de créer la maison de
        ses rêves
      </p>
    </card>
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/dashed-line-02-twotone-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          d="M6.30053 2.75195C5.26129 2.94523 4.49644 3.2871 3.89177 3.89177C3.2871 4.49644 2.94523 5.26129 2.75195 6.30053M17.7005 2.75195C18.7398 2.94523 19.5046 3.2871 20.1093 3.89177C20.714 4.49644 21.0558 5.26129 21.2491 6.30053M2.75195 17.7005C2.94523 18.7398 3.2871 19.5046 3.89177 20.1093C4.49644 20.714 5.26129 21.0558 6.30053 21.2491M21.2491 17.7005C21.0558 18.7398 20.714 19.5046 20.1093 20.1093C19.5046 20.714 18.7398 21.0558 17.7005 21.2491"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          opacity="0.4"
          d="M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3162 21.5 10.6845 21.5 10.1002 21.495"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <h1>Transparence</h1>
      <p>
        Nous travaillons en toute transparence avec nos experts. Aucune
        surprise.
      </p>
    </card>
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/geometric-shapes-02-duotone-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          opacity="0"
          d="M9.75184 19.8304L19.8304 9.75184C21.4271 8.1551 22.2255 7.35672 21.9445 6.67836C21.6635 6 20.5344 6 18.2763 6H11C11 6 11.3724 7.86184 9.62987 9.66684C8.07367 11.2788 6 11 6 11V18.2763C6 20.5344 6 21.6635 6.67836 21.9445C7.35672 22.2255 8.15509 21.4271 9.75184 19.8304Z"
          fill="#000000"
        ></path>
        <path
          d="M17.5 12H18C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16V17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17V16.5"
          stroke="#000000"
          stroke-width="2"
        ></path>
        <path
          d="M11 6H18.2763C20.5344 6 21.6635 6 21.9445 6.67836C22.2255 7.35672 21.4271 8.1551 19.8304 9.75184L9.75184 19.8304C8.15509 21.4271 7.35672 22.2255 6.67836 21.9445C6 21.6635 6 20.5344 6 18.2763V11"
          stroke="#000000"
          stroke-width="2"
        ></path>
        <circle cx="6.5" cy="6.5" r="4.5" stroke="#000000" stroke-width="2"
        ></circle>
      </svg>
      <h1>sumilatorplicité</h1>
      <p>
        Nous concentrons nos efforts sur la simplification des processus
        complexes
      </p>
    </card>
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/safe-twotone-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          opacity="0.4"
          d="M16 17L16.2099 17.2099C16.5786 17.5786 16.763 17.763 16.9862 17.7506C17.2094 17.7383 17.3722 17.5346 17.6979 17.1274L18.9996 15.5M13 15.4543V15.8403C13 17.0422 13 17.6431 13.1484 18.1931C13.3316 18.8723 13.6791 19.4986 14.1616 20.0197C14.5522 20.4416 15.0678 20.7701 16.0988 21.4271C16.5604 21.7212 16.7912 21.8683 17.0365 21.9367C17.3395 22.0211 17.6605 22.0211 17.9635 21.9367C18.2088 21.8683 18.4396 21.7212 18.9012 21.4271C19.9322 20.7701 20.4478 20.4416 20.8384 20.0197C21.3209 19.4986 21.6684 18.8723 21.8516 18.1931C22 17.6431 22 17.0422 22 15.8403V15.4543C22 14.7059 22 14.3317 21.8582 14.0157C21.7707 13.8208 21.6454 13.6443 21.4892 13.496C21.2359 13.2555 20.877 13.1241 20.159 12.8613L18.685 12.3218C18.099 12.1073 17.806 12 17.5 12C17.194 12 16.901 12.1073 16.315 12.3218L14.841 12.8613C14.123 13.1241 13.7641 13.2555 13.5108 13.496C13.3546 13.6443 13.2293 13.8208 13.1418 14.0157C13 14.3317 13 14.7059 13 15.4543Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M16.1712 7.9091V9.5M16.1712 7.9091C16.1712 7.15599 16.8045 6.54546 17.5856 6.54546C18.3668 6.54546 19 7.15599 19 7.9091V9.5M16.1712 7.9091V5.18183C16.1712 4.42871 15.538 3.81819 14.7568 3.81819C13.9757 3.81819 13.3424 4.42871 13.3424 5.18183M13.3424 5.18183V9.5M13.3424 5.18183V3.36364C13.3424 2.61052 12.7092 2 11.928 2C11.1469 2 10.5136 2.61052 10.5136 3.36364V6.09092M10.5136 6.09092C10.5136 5.3378 9.8804 4.72728 9.09925 4.72728C8.3181 4.72728 7.68485 5.3378 7.68485 6.09092V12.638C7.68485 13.054 7.15233 13.2514 6.8624 12.9429L4.57112 10.5043C4.18153 10.0442 3.52308 9.88846 2.95688 10.1224C1.94855 10.539 1.71198 12.0103 2.36735 12.8584C3.48877 14.3098 4.63778 16.2915 5.56538 18.0388C6.82424 20.4102 9.30884 22 12.0719 22M10.5136 6.09092V9.5"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <h1>Fiabilité</h1>
      <p>
        Nous travaillons pour offrir l’expérience d’investissement la plus sûre.
      </p>
    </card>
  </cards>
  <dashed>
    <div style="display: flex;gap: 80px;padding-top: 15px;align-items: center;">
      <div style="width: 150%;">
        <po>Votre partenaire pour réussir</po>
        <h1
          style="width: 100%;text-align: start;margin: 0;padding:0;margin-top: 20px;"
        >
          Des solutions sur-mesure <br /> des résultats concrets
        </h1>
      </div>
      <p style="width: 120%;height: 100%;text-align: start;">
        Nous proposons des solutions sur-mesure, adaptées aux besoins uniques de
        chaque client. Avec une expertise reconnue, nous livrons des résultats
        prouvés et durables. que ce soit en architecture, soins à domicile ou
        gestion immobilière, notre approche personnalisée assure la réussite de
        chaque projet
      </p>
    </div>
    <sep
      style="margin: 30px 0;margin-bottom: 40px;width: 100%;height: 1px;background: linear-gradient(90deg,rgba(0, 0, 0, 0.253) 50%,white 50%);display: block;background-size: 5px;"
    >
    </sep>
    <div style="display: flex;gap: 40px;">
      <nbr>
        <h1>11.7x</h1>
        <p>
          L'engagement des utilisateurs a fortement augmenté par rapport au mois
          dernier
        </p>
      </nbr>
      <nbr>
        <h1>82.6%</h1>
        <p>
          Les visiteurs interagissent activement avec nos services de soins à
          domicile et d'architecture
        </p>
      </nbr>
      <nbr>
        <h1>0.45%</h1>
        <p>
          Seulement 0.45% des utilisateurs quittent notre site après avoir
          essayé nos simulateurs
        </p>
      </nbr>
    </div>
  </dashed>
  <po>fonctionnalités</po>
  <h1>
    Des Fonctionnalités Avancées pour Vous Accompagner dans Votre Parcours vers
    la Réussite
  </h1>
  <cards style="margin-top: 50px;">
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/user-multiple-02-bulk-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          opacity="0.4"
          d="M4.25 7C4.25 4.37665 6.37665 2.25 9 2.25C11.6234 2.25 13.75 4.37665 13.75 7C13.75 9.62335 11.6234 11.75 9 11.75C6.37665 11.75 4.25 9.62335 4.25 7Z"
          fill="#000000"
        ></path>
        <path
          opacity="0.4"
          d="M1.25 19C1.25 15.8244 3.82436 13.25 7 13.25H11C14.1756 13.25 16.75 15.8244 16.75 19C16.75 20.5188 15.5188 21.75 14 21.75H4C2.48122 21.75 1.25 20.5188 1.25 19Z"
          fill="#000000"
        ></path>
        <path
          d="M13.374 11.4644C13.8812 11.6492 14.4288 11.75 15 11.75C17.6233 11.75 19.75 9.62335 19.75 7C19.75 4.37665 17.6233 2.25 15 2.25C14.4288 2.25 13.8812 2.35081 13.374 2.5356C14.5317 3.67 15.25 5.25111 15.25 7C15.25 8.74889 14.5317 10.33 13.374 11.4644Z"
          fill="#000000"
        ></path>
        <path
          d="M17.24 21.75H19.9995C21.5183 21.75 22.7495 20.5188 22.7495 19C22.7495 15.8244 20.1752 13.25 16.9995 13.25H15.416C17.1391 14.5754 18.2495 16.658 18.2495 19C18.2495 20.0488 17.8697 21.0088 17.24 21.75Z"
          fill="#000000"
        ></path>
      </svg>
      <h1>Experts</h1>
      <p>Professionnels compétents prêts à répondre à vos besoins</p>
    </card>
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/album-01-bulk-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          opacity="0.4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.1129 7.78312C19.6979 7.36808 19.0964 7.11438 17.8757 6.9943L18.0715 5.00391C19.4675 5.14123 20.6275 5.46925 21.5272 6.36891C22.3335 7.1752 22.6805 8.19058 22.8428 9.39768C22.9992 10.5606 22.9991 12.0394 22.9991 13.8748V14.0212C22.9991 15.8567 22.9992 17.3355 22.8428 18.4984C22.6805 19.7055 22.3335 20.7209 21.5272 21.5272C20.7209 22.3335 19.7055 22.6805 18.4984 22.8428C17.3355 22.9992 15.8567 22.9991 14.0212 22.9991H13.8748C12.0394 22.9991 10.5606 22.9992 9.39768 22.8428C8.19058 22.6805 7.1752 22.3335 6.36891 21.5272C5.46925 20.6275 5.14123 19.4675 5.00391 18.0715L6.9943 17.8757C7.11438 19.0964 7.36808 19.6979 7.78312 20.1129C8.15588 20.4857 8.67885 20.7282 9.66417 20.8606C10.6783 20.997 12.0221 20.9991 13.948 20.9991C15.874 20.9991 17.2178 20.997 18.2319 20.8606C19.2172 20.7282 19.7402 20.4857 20.1129 20.1129C20.4857 19.7402 20.7282 19.2172 20.8606 18.2319C20.997 17.2178 20.9991 15.874 20.9991 13.948C20.9991 12.0221 20.997 10.6783 20.8606 9.66417C20.7282 8.67885 20.4857 8.15588 20.1129 7.78312Z"
          fill="#000000"
        ></path>
        <path
          opacity="0.4"
          d="M18.4763 11.0957C16.9498 9.8379 15.4766 9.23918 14.0438 9.21191C12.6137 9.18469 11.3327 9.72898 10.1932 10.5492C8.18996 11.991 6.45291 14.4242 4.90945 16.5863C4.73406 16.832 4.56116 17.0742 4.39066 17.311L3.73438 18.2226L4.8279 18.4793C6.00098 18.7548 7.47329 18.7533 9.47458 18.7514C9.64549 18.7513 9.82056 18.7511 9.99934 18.7511H10.0557C11.8935 18.7511 13.3491 18.7511 14.4884 18.5979C15.6608 18.4403 16.6097 18.1082 17.3581 17.3598C17.9845 16.7335 18.3235 15.9715 18.5101 15.0439C18.6921 14.1389 18.7372 13.032 18.7493 11.6813L18.7525 11.3233L18.4763 11.0957Z"
          fill="#000000"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.92684 1H10.0732C11.8966 0.999973 13.3664 0.999951 14.5223 1.15537C15.7225 1.31672 16.733 1.66191 17.5355 2.46447C18.3381 3.26702 18.6833 4.27752 18.8446 5.47767C19.0001 6.63362 19 8.10336 19 9.9268V10.0732C19 11.8966 19.0001 13.3664 18.8446 14.5223C18.6833 15.7225 18.3381 16.733 17.5355 17.5355C16.733 18.3381 15.7225 18.6833 14.5223 18.8446C13.3664 19.0001 11.8966 19 10.0732 19H9.9268C8.10336 19 6.63362 19.0001 5.47767 18.8446C4.27752 18.6833 3.26702 18.3381 2.46447 17.5355C1.66191 16.733 1.31672 15.7225 1.15537 14.5223C0.999951 13.3664 0.999973 11.8966 1 10.0732V9.92684C0.999973 8.10338 0.999951 6.63362 1.15537 5.47767C1.31672 4.27752 1.66191 3.26702 2.46447 2.46447C3.26702 1.66191 4.27752 1.31672 5.47767 1.15537C6.63362 0.999951 8.10338 0.999973 9.92684 1ZM5.74416 3.13753C4.76579 3.26907 4.2477 3.50966 3.87868 3.87868C3.50966 4.2477 3.26907 4.76579 3.13753 5.74416C3.00213 6.7513 3 8.08611 3 10C3 11.9139 3.00213 13.2487 3.13753 14.2558C3.26907 15.2342 3.50966 15.7523 3.87868 16.1213C4.2477 16.4903 4.76579 16.7309 5.74416 16.8625C6.7513 16.9979 8.08611 17 10 17C11.9139 17 13.2487 16.9979 14.2558 16.8625C15.2342 16.7309 15.7523 16.4903 16.1213 16.1213C16.4903 15.7523 16.7309 15.2342 16.8625 14.2558C16.9979 13.2487 17 11.9139 17 10C17 8.08611 16.9979 6.7513 16.8625 5.74416C16.7309 4.76579 16.4903 4.2477 16.1213 3.87868C15.7523 3.50966 15.2342 3.26907 14.2558 3.13753C13.2487 3.00213 11.9139 3 10 3C8.08611 3 6.7513 3.00213 5.74416 3.13753Z"
          fill="#000000"
        ></path>
      </svg>
      <h1>sumilatorulateur</h1>
      <p>Outil interactif pour modéliser et analyser des scénarios réalistes</p>
    </card>
    <card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        class="injected-svg"
        data-src="https://cdn.hugeicons.com/icons/search-list-01-bulk-rounded.svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        color="#000000"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 14.4C9 10.8654 11.8654 8 15.4 8C18.9346 8 21.8 10.8654 21.8 14.4C21.8 15.8065 21.3463 17.1069 20.5773 18.1631L22.7071 20.2929C23.0976 20.6834 23.0976 21.3166 22.7071 21.7071C22.3166 22.0976 21.6834 22.0976 21.2929 21.7071L19.1631 19.5773C18.1069 20.3463 16.8065 20.8 15.4 20.8C11.8654 20.8 9 17.9346 9 14.4ZM15.4 10C12.9699 10 11 11.9699 11 14.4C11 16.8301 12.9699 18.8 15.4 18.8C17.8301 18.8 19.8 16.8301 19.8 14.4C19.8 11.9699 17.8301 10 15.4 10Z"
          fill="#000000"
        ></path>
        <path
          opacity="0.4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.00001 9.99999C1.00001 9.44771 1.44773 9 2.00002 9L7.00002 9.00004C7.5523 9.00004 8.00001 9.44776 8.00001 10C8 10.5523 7.55229 11 7 11L2 11C1.44772 11 1 10.5523 1.00001 9.99999Z"
          fill="#000000"
        ></path>
        <path
          opacity="0.4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 17C1 16.4477 1.44772 16 2 16H7C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H2C1.44772 18 1 17.5523 1 17Z"
          fill="#000000"
        ></path>
        <path
          opacity="0.4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 3C1 2.44772 1.44772 2 2 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4H2C1.44772 4 1 3.55228 1 3Z"
          fill="#000000"
        ></path>
      </svg>
      <h1>Recommendation</h1>
      <p>Suggestions personnalisées adaptées à vos préférences et objectifs</p>
    </card>
  </cards>
  <h1>FAQ</h1>
  <h2
    style="text-align: center;width: 60%;font-family: Figtree;margin: 0;opacity: .6;"
  >
    Tous les détails sur l'article et sa fonction peuvent être trouvés ici. Vous
    <!-- svelte-ignore a11y_invalid_attribute -->
    ne trouvez pas la solution que vous désirez ?
    <a style="text-decoration: none;color: rgb(0, 166, 255);" href="#"
      >Contactez</a
    > notre équipe !
  </h2>
  <faq>
    <div
      style="display: flex;height: 100%;width: 100%;align-items: center;box-sizing: border-box;gap: 10px;"
    >
      <flex>
        <qu style="animation-delay: 0.2s;">
          <p>
            <ChevronDown /> Ai-je besoin de connaissances techniques pour utiliser
            le simulateur ?
          </p>
          <an
            >Non, vous n'avez pas besoin de connaissances techniques
            spécialisées pour utiliser le simulateur. Il a été conçu pour être
            simple, ce qui le rend accessible à tous les utilisateurs, quel que
            soit leur niveau ou expertise. La plateforme offre une navigation
            intuitive et des étapes faciles à suivre pour une expérience fluide.
            De plus, des guides utiles et des infobulles sont disponibles tout
            au long du simulateur pour vous assister si besoin.</an
          >
        </qu>
        <qu open style="animation-delay: 0.4s;">
          <p>
            <ChevronDown /> Comment se passe le processus de paiement et combien
            cela coûte-t-il ?
          </p>
          <an
            >Les paiements sont traités de manière sécurisée par carte de crédit
            ou via des services de paiement en ligne comme PayPal. Tipstalks.com
            propose plusieurs options tarifaires adaptées à différents besoins.
            Le compte de base est gratuit, vous permettant d'explorer les
            fonctionnalités essentielles. Cependant, des plans premium sont
            disponibles pour les utilisateurs souhaitant accéder à des outils
            avancés et des options de personnalisation.</an
          >
        </qu>
      </flex>
      <flex>
        <qu open style="animation-delay: 0.6s;">
          <p>
            <ChevronDown /> Dois-je payer pour créer un compte ?
          </p>
          <an
            >Non, l'inscription sur Tipstalks.com est entièrement gratuite. Cela
            vous donne accès aux fonctionnalités et services de base offerts par
            la plateforme sans aucun coût initial. Si vous souhaitez des
            fonctionnalités améliorées, vous pouvez passer à l'un des plans
            payants à tout moment. Le plan gratuit est conçu pour vous offrir
            une bonne base et vous permettre d'explorer la plateforme avant de
            vous engager dans des fonctionnalités supplémentaires.</an
          >
        </qu>
        <qu style="animation-delay: 0.8s;">
          <p>
            <ChevronDown /> J'ai des problèmes, où puis-je trouver de l'aide ?
          </p>
          <an
            >Si vous rencontrez des problèmes lors de l'utilisation de la
            plateforme, plusieurs moyens d'assistance sont disponibles. Vous
            pouvez visiter le Centre d'aide, où vous trouverez de nombreux
            articles, guides et FAQ pour résoudre les problèmes courants. Si
            vous avez besoin d'un support plus personnalisé, notre service
            client est disponible par email et chat en direct.</an
          >
        </qu>
      </flex>
    </div>
  </faq>
  <simulator
    style="height: auto;display: flex;flex-direction: column;margin-top: 20px;"
  >
    <div
      style="display: flex;justify-content: space-between;width: 100%;flex-direction: row;align-items: center;"
    >
      <h1
        style="margin: 0;width: 100%;text-align: start;margin: 0;margin-bottom:10px"
      >
        Vous avez encore des questions ?
      </h1>
      <button
        style="width: fit-content;
            height: fit-content;
            text-wrap: nowrap;
            border: none;
            background: black;
            border-radius: 50px;
            color: white;
            padding: 10px 20px;
            font-size: 18px;
            font-family: Figtree;">Contacter nous !</button
      >
    </div>
    <p style="margin: 0;font-family: Figtree;margin-top: -15px;width:100%">
      Si vous avez encore des questions, des doutes, ou si vous avez besoin de
      plus d'informations, n'hésitez surtout pas à nous contacter. Notre équipe
      est à votre disposition pour vous fournir toutes les réponses et vous
      accompagner dans votre démarche
    </p>
  </simulator>
</main>

<style>
  faq {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 100px 0;

    h1 {
      font-family: Milk;
      font-size: 50px;
      margin: 0;
    }

    p {
      display: flex;
      align-items: center;
      gap: 10px;
      transform: translate(0);
      margin: 0;
      color: rgb(0, 0, 0);
      opacity: 1;
      margin-bottom: 30px;
      font-family: Versel;
      font-size: 16px;
    }

    flex {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      gap: 10px;

      Qu {
        box-sizing: border-box;
        display: block;
        background: #ffffff;
        outline: 1px solid #0000002f;
        font-size: 16px;
        height: 55px;
        font-family: Figtree;
        width: 100%;
        padding: 17px 25px;
        border-radius: 10px;
        transition: 0.3s ease all;
        overflow: hidden;

        An {
          display: inline;
        }

        svg {
          width: 15px;
          height: 15px;
          margin-left: -7px;
          transition: 0.2s ease all;
        }
      }

      Qu[open] {
        height: 220px;
        /* background: radial-gradient(circle, rgb(66, 66, 66) 5%, black 0%); */
        background-size: 30px 30px;

        svg {
          rotate: 180deg;
          /* fill: white; */
        }
      }
    }
  }
  dashed {
    display: block;
    width: 100%;
    height: 500px;
    margin: 10px 0;
    margin-bottom: 100px;
    border-radius: 20px;
    outline: 1px dashed rgba(0, 0, 0, 0.153);
    padding: 55px;
    box-sizing: border-box;

    p {
      text-align: center;
      margin: 0;
      font-family: Versel;
      opacity: 0.5;
    }

    nbr {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      h1 {
        font-size: 65px;
        font-family: Figtree;
        margin: 0;
      }
    }
  }
  cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 100px;

    card {
      width: 100%;
      padding: 25px;
      border-radius: 20px;
      background: #f9f7f2;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 10px;
      height: 250px;

      svg {
        width: 48px;
        height: 48px;
        margin-bottom: auto;
      }
      h1 {
        padding: 0;
        font-size: 2em;
        text-align: start;
        margin: 0;
      }
    }
  }
  simulator {
    width: 100%;
    height: fit-content;
    display: flex;
    border-radius: 40px;
    background: #f9f7f2;
    padding: 40px;
    gap: 20px;
    box-sizing: border-box;
    margin-bottom: 40px;

    > * {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    h1 {
      padding: 0;
      margin: 0;
      margin-bottom: 20px;
      text-align: start;
      font-size: 4em;
    }

    sim {
      padding: 25px 30px;
      box-sizing: border-box;
      width: 50%;
      height: fit-content;
      background: white;
      outline: 1px solid #00000020;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 7px;

      div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        /* margin-bottom: 20px; */

        h2 {
          font-family: figtree;
          font-size: 18px;
          margin: 0;
        }
      }
      input[type="range"] {
        appearance: none;
        width: 100%;
        height: 24px;
        background: #e8eff0;
        outline: none;
        border-radius: 50px;
        margin-top: 24px;
        margin-bottom: 24px;
        position: relative;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 48px;
        height: 48px;
        background: rgb(0, 0, 0);
        cursor: pointer;
        border-radius: 50%;
        transform: translateY(-12px);
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
        border-width: 24px;
        border-style: solid;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        height: 24px;
        border-radius: 16px;
      }
    }
  }
  show {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    height: 600px;
    width: 100%;
    gap: 50px;

    picture {
      width: 50%;
      height: 100%;
      overflow: hidden;
      display: block;
      border-radius: 30px;
      background: url(/assets/images/HomeImages/02-Green_Blue_LM-4K.png);
      background-size: 400%;
      background-position: 50% 50%;
      filter: saturate(1.5) hue-rotate(-20deg);
      position: relative;
    }
    div {
      position: relative;
    }
    h2 {
      margin-bottom: 30px;
      font-size: 20px;
      font-family: Figtree;
      font-weight: 700;
      color: rgb(0, 0, 0);
      transform: translateY(200%);
      display: flex;
    }
    tick {
      width: 35px;
      height: 35px;
      font-size: 20px;
      scale: 1;
    }

    tickd {
      outline: 2px solid rgb(0, 0, 0);
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: white;
      width: 30px;
      height: 30px;
      font-size: 18px;
      margin-right: 20px;
      scale: 1;
    }

    tickline {
      position: absolute;
      width: 3px;
      height: 30%;
      left: 13px;
      top: 50%;
      display: block;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.222) 50%, white 50%);
      background-size: 5px 10px;
    }

    button {
      width: fit-content;
      border: none;
      background: black;
      border-radius: 50px;
      color: white;
      padding: 10px 20px;
      font-size: 18px;
      font-family: Figtree;
      margin-top: 80px !important;
    }
  }
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }
  po {
    background: rgb(247, 255, 233);
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 15px;
    font-family: Rubik;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
  }
  h1 {
    margin: 20px 0;
    font-size: 2.5em;
    padding: 0 20%;
    text-align: center;
    font-family: Figtree;
    font-weight: 1000;
  }
  @media (max-width: 450px) {
    main {
      background: red;
    }
  }
</style>
