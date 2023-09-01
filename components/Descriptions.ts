interface IJury {
  id: string;
  name: string;
  country: string;
  photo: string | undefined;
  description: string;
}

export const jury: IJury[] = [
  {
    id: "none1",
    name: "",
    country: "",
    photo: "/comming.png",
    description: "Comming Soon!"
  },
  {
    id: "none2",
    name: "",
    country: "",
    photo: "/comming.png",
    description: "Comming Soon!"
  },
  {
    id: "none3",
    name: "",
    country: "",
    photo: "/comming.png",
    description: "Comming Soon!"
  },
  {
    id: "none4",
    name: "",
    country: "",
    photo: "/comming.png",
    description: "Comming Soon!"
  },
  {
    id: "pietro",
    name: "Pietro Borgonovo",
    country: "Italy",
    photo: "/pietro.jpeg",
    description:
      "Born in Milan, Pietro Borgonovo distinguishes himself in conducting symphonic and operatic productions for prestigious festivals and theatres. Noteworthy is his presence at Salzburger Festpiele in the Progetto Pollini as the conductor of Klangforum Wien and the Arnold Schoenberg Chor as well as his work in the conducting the Orchestra del Maggio Musicale Fiorentinoat Maggio Musicale Fiorentino, at Ravenna Festival with the Teatro dell’Opera di Roma, at Venice Biennale. Moreover he has conducted the Orchestra del Teatro San Carlo di Napoli, the Orchestra dell’Arena di Verona, the Orchestra del Teatro La Fenice in Venice, the Orchestra del Teatro Lirico in Cagliari,the Orchestra del Teatro Verdi in Trieste, the Orchestra del Teatro Carlo Felice in Genova, the Semperoper in Dresden, theOrchestra della Toscana, the Haydn Orchestra in Bolzano, the Orchestra Sinfonica Siciliana in Palermo, the OrchestraCherubini, the Orchestra Verdi in Milano, the Nordwestdeutsche Philharmonie. and more importants Orchestras of Italy, Europe and USA. In October 2003 he conducted the world première of “Medea” by Adriano Guarnieri at Teatro La Fenice in Venice. The opera was very successful with both audience and critics, some newspapers saying it was a “triumph”. The Italian Critics Association awarded the “Abbiati 2003” prize for the “refined music and stage performance which rendered the original preciosity of the composing and multimedia concept.” A versatile musician, he is the Musical and Artistic Director of one of the oldest and most prestigious Italian concert societies, GOG (Giovine Orchestra Genovese) and the Artistic Director of the International Competition G.B. Viotti in Vercelli. From a very early age he has excelled in the international scene as one of the best known oboe soloists. A pupil of Heinz Holliger, he plays at the major festivals and for international institutions: Salzburger Festpiele, Maggio Musicale Fiorentino, Venice Biennale, Musica Bayreuth, Festival d’Automne in Paris, Montreux Festival, Donaueschinger Musiktage, New York, Berlin, London, Vienna, Amsterdam, Monte Carlo, Prague, Bonn, Luxembourg, Moscow, Saint Peterbourg, Madrid, Lisbone. Profoundly interested in contemporary music he also cooperates with many contemporary composers such as George Benjamin, Luciano Berio, Bruno Maderna, Azio Corghi, Franco Donatoni, Ivan Fedele, Adriano Guarnieri, Salvatore Sciarrino, Fabio Vacchi, Carlo Galante, Iannis Xenakis … He has played and conducted their works, also premières, which have often been dedicated to him. Both as an oboe soloist and as a conductor he has many recordings produced by important international labels such as Denon, Erato, Ricordi, RCA, Col legno, BMG to his credit. He received the Grand Prix du Disque and a classification among the five most appreciated records of symphonic music from Italian critics.",
  },
  {
    id: "simon",
    name: "Sunghoon Simon Hwang",
    country: "South Korea",
    photo: "/simon.jpeg",
    description:
      "The concert pianist Sunghoon Simon Hwang is one of the most prominent pianists of his generation. He has appeared internationally with major orchestras such as the Prague Radio Symphony Orchestra, the Orchestre de Montbeliard, the Janáček Philharmonic, the San Remo Symphony Orchestra, the Duisburg Symphony, the Orquestra Granada, the Orquestra Nacional do Porto, the Filarmonica Marchigiana, the Filarmonica Banatul, the Orchestra Sinfonica Sicilliana, the Vina del Mar Orchestra, the Bacau Symphony, the Taiwan National Symphony Orchestra, the Orquestra Sinfonica Perfecto Garcia Chornet, the Seoul Academy Symphony Orchestra and the Busan Metropolitan Orchestra. His performances as soloist with orchestra, as a chamber musician and piano recitals received worldwide recognition from the audience and the music press, specially after his Debut at the Carnegie Hall in New York (USA) Mr. Hwang received a great critic at the New York Concert Review Inc. Sunghoon Simon won more than 40 international awards and 9 special interpretation prizes at prestigious piano competitions like Epinal, Jaen, Porto, Senigallia, Maria Canals, Luis Sigall, Glenn Gould, Serge Prokofiev, Sergei Rachmaninoff, Anton Rubinstein, Johannes Brahms and Bellini. He got numerous concert invitations from European and Asian music festivals like the Ferrucio Busoni festival, the Alfredo Speranza Festival, the Grosseto international piano festival, the “Klassik in der Altstadt” festival, the Chateau de Lourmarin festival, Niestetal international piano festival, Busan Maru International Music Festival(BMIMF), the Wennigsen music festival and many others. Sunghoon Simon Hwang studied at the Korean National University of Arts in Seoul with Prof. J.P. Lim, at the Santa Cecilia Academia in Roma with Prof. Sergio Perticaroli, at the École Normal de Musique in Paris with Prof. Youngshin An, at the Hannover Musikhoschule in the classes of Prof. Einar Steen-Nökleberg and Prof. Mi-Kyung Kim. Sunghoon Simon Hwang has taught worldwide master classes for piano and got many invitations from universities, conservatories and music summer schools, as for example at the Otto-von-Guericke University in Magdeburg, at the Kloster Michaelstein in Blankenburg with an invitation of the “Landesmusikakademie Sachsen-Anhalt” in Germany. In 2010, he was invited as a Professor by the 'Tenerife international concert academy festival' in Spain. From 2009 to 2013 he taught piano at the Hildesheim University in Germany. Mr. Hwang is currently the Artistic Director of the Sviatoslav Richter international piano online competition, the Classic On international piano competition and the Glenn Gould in Memoriam piano competition in South Korea. Furthermore, he was invited as a member of Jury by numerous piano competitions such as the Maria Canals in Barcelona, the Claude Bonneton in Sete, the Rina Sala Gallo in Monza, the Tokyo international music competition, the Roma international music competition, the G.Raciti international music competition, the Terra degli Imperiali international music competition, the Euterpe international music competition.",
  },
  {
    id: "scott",
    photo: "/scott.jpeg",
    name: "Graham Scott",
    country: "United Kingdom",
    description:
      "Hailed by the Gramophone magazine as ‘an exceptional talent,’ Graham Scott has performed extensively throughout the world notably in London (Wigmore Hall, Royal Festival Hall, Queen Elizabeth Hall and Barbican Centre,) New York (92nd St. Y), Washington DC (Kennedy Center), Los Angeles (Ambassador Auditorium), Beijing (Beijing Concert Hall and Forbidden City Concert Hall), Paris (Bagatelle) and Tokyo (Suntory Hall), He has performed as soloist with many of the world’s leading orchestras, notably the London Philharmonic, Royal Liverpool Philharmonic, Royal Scottish National, Monte Carlo Philharmonic, Belgium National Symphony, Staatsphilharmonie Rheinlandpfalz (standing in for Martha Argerich), South African National Symphony Orchestra, Cape Town Symphony, Singapore Symphony, St Louis Symphony and the New York Chamber Symphony under such conductors as Sir Charles Groves, Marin Alsop, Paul Daniel, Bernhard Klee, Barry Wordsworth and Alexander Lazarev. His numerous chamber music appearances include performances with members of the Australian Chamber Orchestra in the Huntingdon Festival in New South Wales, Australia. He has also collaborated with the Chillingirian, Heath and Vertavo quartets. Graham’s discography includes CDs of works by Scriabin, Gershwin, Chisholm, Macmillan (with French cellist Henri Demarquette) and a live recital CD from Los Angeles. He has broadcast extensively on BBC Radio and National Public Radio in the USA. He has previously collaborated with actor Sir Ian McKellen in a masterclass situation play for BBC Drama. Graham studied with Professor Ryszard Bakst at both Chetham’s School of Music and the RNCM.  He became the first artist to win both the YCA Inc. auditions in New York and the YCAT auditions in London. He also won the Dudley National Piano Competition and the Jaen International Piano Competition in Spain. Since 2007 he has held the position of Head of Keyboard Studies at the RNCM and is Artistic Director of the RNCM James Mottram International Piano Competition. He was previously Chair of the Keyboard department at the Chicago College of Performing Arts from 2003-2007.  As a committed teacher many of his students have gone on to win top prizes in celebrated competitions including the ‘Top of the World’ competition in Norway, Rina Salo Gallo Competition in Monza, Hastings International Concerto Competition and the Harbin International Piano Competition in China to name a few. As an artistic director he has directed 12 piano festivals at the RNCM including the complete works of Frederic Chopin in his anniversary year with 153 pianists taking part. Graham has previously been a member of the jury of the Horowitz Competition in Kiev, the Gilels Competition in Odessa, the Alessandro Casagrande Competition in Terni Italy, the Rina Salo Gallo Competition in Monza Italy, the Jaen International Piano Competition in Spain and the YCAT auditions in London. Graham has performed and taught at many summer schools most notably Musicfest Perugia in Italy, the Colburn Festival Academy in Los Angeles, Alion Baltic International Festival in Riga, Kei Arts (Taiwan), Chetham’s International Piano Summer School in Manchester and the Beijing International Music Festival and Academy.",
  },
  {
    id: "oliver",
    name: "Olivier Moulin",
    country: "France",
    photo: "/oliver.jpeg",
    description:
      "Hailed by the Washington Post as a « young artist displaying maturity and elegance », French pianist Olivier Moulin studied under Eric Heidsieck and Gery Moutier at the Conservatoire National Supérieur de Musique of Lyon, where he was unanimously awarded first prize with honors. After advanced studies in the same institution, he continued his training in Austria at the Salzburg Mozarteum University in the classes of Karl-Heinz Kämmerling and Clemens Hagen, where he obtained a Master of Arts with highest honors. Throughout his studies, he has also benefited from the advices of masters such as Aldo Ciccolini, Yvonne LoriodMessiaen, Jacques Rouvier, Jean-François Heisser, Sergio Perticaroli… Prizewinner of several competitions, Olivier Moulin has been invited to participate in major international festivals : la Roque d’Anthéron, Montpellier and Radio-France, Lille Clef de Soleil, Pianos Folies in Le Touquet, Journées Lyriques in Chartres, Divonne, Sully-sur-Loire, La Vézère, Croisements Festival in China, Virtuosi Festival in Brazil, Festival Internacional de Piano En Blanco y Negro in Mexico, Istanbul’s Lisztomanias, Motley Tulip International Arts Festival in Belarus… He has performed in prestigious venues in France (Grand Auditorium of Radio-France, Salle Gaveau, Salle Cortot, the Louvre Auditorium, Lyon and Avignon Operas, Cloître des Jacobins in Toulouse, Théâtre des Variétés in Monaco, Arsenal de Metz…), in Europe (Germany, Austria, Belgium, Belarus, Hungary, Spain, Norway, Portugal, Slovakia, Switzerland, Turkey…), Asia (Japan, China, South Korea, India, Indonesia…), and the Americas (USA, Brazil, Mexico). His concerts are regularly broadcasted by radio and television in France and abroad. Olivier made in 2014 U.S. debut at the French Embassy in Washington DC, where he played a recital devoted to Rameau, Debussy, Ravel. He has also collaborated with several orchestras : Orchestre National de Metz, Ensemble Orchestral de Montbéliard, the Philharmonic Orchestra of Wuhan (China), the Camerata de Coahuila (Mexico)… His passion for chamber music has allowed him to share the stage with many artists such as David Guerrier, the Fine Arts Quartet, soloists of the Philharmonic of Radio-France, Bertrand Chamayou, Jérôme Dorival… His first solo CD, devoted to Franz Liszt, was released in october 2011 for the french label AmeSon/Outhere. Passionate about pedagogy and transmission, Olivier Moulin gives regularly masterclasses in Europe, USA, Mexico, Japan, China, Indonesia, Belarus… He is also President of the Epinal International Piano Competition, and has served as a jury member for many international piano competitions including the Istanbul International Piano Competition and the Porto Santa Cecilia International Piano Competition.",
  },
];