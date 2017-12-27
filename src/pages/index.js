import React from 'react'

import styles from './index.module.css';

const tags = ["AWS",
  "Angular.js",
  "Apache",
  "Big Data",
  "Blogi",
  "CRM",
  "CSS",
  "Digitalisaatio",
  "Docker",
  "ERP",
  "Ecommerce",
  "Elasticsearch",
  "Facebook-mainonta",
  "Google Cloud",
  "G Suite",
  "HTML",
  "Instagram",
  "JavaScript",
  "Kibana",
  "Laravel",
  "Lumen",
  "MariaDB",
  "MySQL",
  "NGINX",
  "Nettisivut",
  "Node.js",
  "Ostaminen verkossa",
  "PHP",
  "PaaS",
  "PostgreSQL",
  "Pilvi-infrastruktuuri",
  "Pilviarkkitehtuuri",
  "Pilvipalvelut",
  "React.js",
  "REST API",
  "SaaS",
  "Toiminnanohjausjärjestelmä",
  "Twitter",
  "Verkkokauppa",
  "Verkkolehti",
  "Verkkopalvelu",
  "Verkkosivut",
  "Vue.js",
  "Woocommerce",
  "WordPress",
  "WordPress-lisäosat"
];

const IndexPage = () => (
  <div className={styles.index}>
    <h2>Hei,</h2>
    <p>Olen A-P, pidemmin Ari-Pekka Koponen. Autan erikokoisia yrityksiä, yhdistyksiä ja yhteisöjä hyödyntämään
      digitaalisen kehityksen mukanaan tuomia mahdollisuuksia — usean vuoden kokemuksella.</p>

    <div className={styles.columns}>
      <div className={styles.half}>
        <h2>Toteutan.</h2>
        <ul>
          <li>Verkkosivuja</li>
          <li>Verkkokauppoja</li>
          <li>Verkkopalveluita</li>
          <li>Verkkolehtiä ja blogeja</li>
          <li>Web-sovelluksia</li>
          <li>Verkkorajapintoja</li>
          <li>Integraatioita</li>
          <li>Taustajärjestelmiä</li>
        </ul>
      </div>
      <div className={styles.half}>
        <h2>Koulutan.</h2>
        <ul>
          <li>Sosiaalisen median vastaavia</li>
          <li>Sisällöntuottajia</li>
          <li>Ohjelmistokehittäjiä</li>
          <li>Johto- ja vastuuhenkilöitä</li>
        </ul>
      </div>
    </div>

    <h2>Ota yhteyttä.</h2>

    <p>Soita <a href="tel:+358400715743">0400 715 743</a> tai laita sähköpostia <a
      href='mai&#108;to&#58;a&#112;&#46;k&#111;pon&#37;&#54;&#53;&#110;&#64;&#103;%6D&#37;61i&#108;&#46;com'>ap&#46;
      kop&#111;nen&#64;&#103;m&#97;il&#46;co&#109;</a>,
      niin katsotaan miten voisin parhaiten auttaa teitä.</p>

    <h2>Osaamisalueeni?</h2>
    <p>Alla lista avainsanoista, jotka voivat auttaa sinua löytämään tarpeitasi vastaavan osaamisalueeni.</p>
    <div>
      {tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
    </div>
  </div>
);

export default IndexPage
