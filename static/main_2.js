// Função para exibir um versículo aleatório
function exibirVersiculoAleatorio() {
    // Seleciona um índice aleatório do array
    var indice = Math.floor(Math.random() * versiculos.length);
    // Obtém o versículo e a localização correspondentes ao índice selecionado
    var versiculoAleatorio = versiculos[indice].versiculo;
    var localizacaoAleatoria = versiculos[indice].localizacao;
    // Exibe o versículo e a localização na página HTML
    document.getElementById("versiculo").innerHTML = "<p>" + versiculoAleatorio + "</p>";
    document.getElementById("localizacao").innerHTML = "<p>" + localizacaoAleatoria + "</p>";
}

// Chama a função para exibir um versículo aleatório quando a página carrega
window.onload = exibirVersiculoAleatorio;


var versiculos = 
[
    {
      "versiculo": "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
      "localizacao": "2 Coríntios 9:7"
    },
    {
      "versiculo": "Pode um homem roubar de Deus? Contudo vocês estão me roubando. E ainda perguntam: 'Como é que te roubamos?' Nos dízimos e nas ofertas.",
      "localizacao": "Malaquias 3:8"
    },
    {
      "versiculo": "Há quem dê generosamente, e vê aumentar suas riquezas; outros retêm o que deveriam dar, e caem na pobreza.",
      "localizacao": "Provérbios 11:24"
    },
    {
      "versiculo": "Então, uma viúva pobre chegou-se e colocou duas pequeninas moedas de cobre, de muito pouco valor. Chamando a si os seus discípulos, Jesus declarou: \"Afirmo que esta viúva pobre colocou na caixa de ofertas mais do que todos os outros. Todos deram do que lhes sobrava; mas ela, da sua pobreza, deu tudo o que possuía para viver.\"",
      "localizacao": "Marcos 12:42-44"
    },
    {
      "versiculo": "Todos os dízimos da terra - seja dos cereais, seja das frutas - pertencem ao Senhor; são consagrados ao Senhor.",
      "localizacao": "Levítico 27:30"
    },
    {
      "versiculo": "Lembrem-se: aquele que semeia pouco também colherá pouco, e aquele que semeia com fartura também colherá fartamente. Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
      "localizacao": "2 Coríntios 9:6-7"
    },
    {
      "versiculo": "Deem e será dado a vocês: uma boa medida, calcada, sacudida e transbordante será dada a vocês. Pois a medida que usarem também será usada para medir vocês.",
      "localizacao": "Lucas 6:38"
    },
    {
      "versiculo": "Honre o Senhor com todos os seus recursos e com os primeiros frutos de todas as suas plantações; os seus celeiros ficarão plenamente cheios, e os seus barris transbordarão de vinho.",
      "localizacao": "Provérbios 3:9-10"
    },
    {
      "versiculo": "Em tudo o que fiz, mostrei a vocês que mediante trabalho árduo devemos ajudar os fracos, lembrando as palavras do próprio Senhor Jesus, que disse: 'Há maior felicidade em dar do que em receber'.",
      "localizacao": "Atos dos Apóstolos 20:35"
    },
    {
      "versiculo": "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
      "localizacao": "Mateus 6:33"
    },
    {
      "versiculo": "Separem o dízimo de tudo o que a terra produzir anualmente.",
      "localizacao": "Deuteronômio 14:22"
    },
    {
      "versiculo": "Pois onde estiver o seu tesouro, aí também estará o seu coração.",
      "localizacao": "Mateus 6:21"
    },
    {
      "versiculo": "Rendam graças ao Senhor, pois ele é bom; o seu amor dura para sempre.",
      "localizacao": "1 Crônicas 16:34"
    },
    {
      "versiculo": "Damos-te graças, ó Deus, damos-te graças, pois perto está o teu nome;todos falam dos teus feitos maravilhosos.",
      "localizacao": "Salmos 75:1"
    },
    {
      "versiculo": "Darei graças ao Senhor por sua justiça; ao nome do Senhor Altíssimo cantarei louvores.",
      "localizacao": "Salmos 7:17"
    },
    {
      "versiculo": "Tudo isso é para o bem de vocês, para que a graça, que está alcançando um número cada vez maior de pessoas, faça que transbordem as ações de graças para a glória de Deus.",
      "localizacao": "2 Coríntios 4:15"
    },
    {
      "versiculo": "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
      "localizacao": "1 Tessalonicenses 5:18"
    },
    {
      "versiculo": "Ofereça a Deus em sacrifício a sua gratidão, cumpra os seus votos para com o Altíssimo,",
      "localizacao": "Salmos 50:14"
    },
    {
      "versiculo": "Ofereça a Deus em sacrifício a sua gratidão, cumpra os seus votos para com o Altíssimo",
      "localizacao": "Efésios 5:20"
    },
    {
      "versiculo": "Antes de tudo, recomendo que se façam súplicas, orações, intercessões e ações de graças por todos os homens;",
      "localizacao": "1 Timóteo 2:1"
    },
    {
      "versiculo": "Vocês serão enriquecidos de todas as formas, para que possam ser generosos em qualquer ocasião e, por nosso intermédio, a sua generosidade resulte em ação de graças a Deus.",
      "localizacao": "2 Coríntios 9:11"
    },
    {
      "versiculo": "Dou graças a Cristo Jesus, nosso Senhor, que me deu forças e me considerou fiel, designando-me para o ministério,",
      "localizacao": "1 Timóteo 1:12"
    },
    {
      "versiculo": "enraizados e edificados nele, firmados na fé, como foram ensinados, transbordando de gratidão.",
      "localizacao": "Colossenses 2:7"
    },
    {
      "versiculo": "dando graças ao Pai, que nos tornou dignos de participar da herança dos santos no reino da luz.",
      "localizacao": "Colossenses 1:12"
    },
    {
      "versiculo": "Deem graças ao Senhor, clamem pelo seu nome, divulguem entre as nações o que ele tem feito.",
      "localizacao": "1 Crônicas 16:8"
    },
    {
      "versiculo": "Não haja obscenidade, nem conversas tolas, nem gracejos imorais, que são inconvenientes, mas, ao invés disso, ações de graças.",
      "localizacao": "Efésios 5:4"
    },
    {
      "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
      "localizacao": "Filipenses 4:6"
    },
    {
      "versiculo": "Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças,",
      "localizacao": "1 Timóteo 4:4"
    },
    {
      "versiculo": "Então nós, o teu povo, as ovelhas das tuas pastagens, para sempre te louvaremos; de geração em geração cantaremos os teus louvores.",
      "localizacao": "Salmos 79:13"
    },
    {
      "versiculo": "dizendo: \"Graças te damos, Senhor Deus todo-poderoso, que és e que eras, porque assumiste o teu grande poder e começaste a reinar.",
      "localizacao": "Apocalipse 11:17"
    },
    {
      "versiculo": "Mudaste o meu pranto em dança, a minha veste de lamento em veste de alegria, para que o meu coração cante louvores a ti e não se cale. Senhor, meu Deus, eu te darei graças para sempre.",
      "localizacao": "Salmos 30:11-12"
    },
    {
      "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
      "localizacao": "Salmos 100:4"
    },
    {
      "versiculo": "Mas regozijem-se e alegrem-se em ti todos os que te buscam; digam sempre os que amam a tua salvação: \"Como Deus é grande!\"",
      "localizacao": "Salmos 70:4"
    },
    {
      "versiculo": "Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos.",
      "localizacao": "Colossenses 3:15"
    },
    {
      "versiculo": "Mas eu, com um cântico de gratidão, oferecerei sacrifício a ti. O que eu prometi cumprirei totalmente. A salvação vem do Senhor\".",
      "localizacao": "Jonas 2:9"
    },
    {
      "versiculo": "Pois tudo o que Deus criou é bom, e nada deve ser rejeitado, se for recebido com ação de graças, pois é santificado pela palavra de Deus e pela oração.",
      "localizacao": "1 Timóteo 4:4-5"
    },
    {
      "versiculo": "Louvarei o nome de Deus com cânticos e proclamarei sua grandeza com ações de graças;",
      "localizacao": "Salmos 69:30"
    },
    {
      "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
      "localizacao": "Deuteronômio 31:6"
    },
    {
      "versiculo": "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar\".",
      "localizacao": "Josué 1:9"
    },
    {
      "versiculo": "Espere no Senhor. Seja forte! Coragem! Espere no Senhor.",
      "localizacao": "Salmos 27:14"
    },
    {
      "versiculo": "Não tenha medo, pois eu estou com você, do oriente trarei seus filhos e do ocidente ajuntarei você.",
      "localizacao": "Isaías 43:5"
    },
    {
      "versiculo": "E acrescentou: \"Seja forte e corajoso! Mãos ao trabalho! Não tenha medo nem desanime, pois Deus, o Senhor, o meu Deus, está com você. Ele não o deixará nem o abandonará até que se termine toda a construção do templo do Senhor.",
      "localizacao": "1 Crônicas 28:20"
    },
    {
      "versiculo": "O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?",
      "localizacao": "Salmos 27:1"
    },
    {
      "versiculo": "Mas eu, quando estiver com medo, confiarei em ti. Em Deus, cuja palavra eu louvo, em Deus eu confio e não temerei. Que poderá fazer-me o simples mortal?",
      "localizacao": "Salmos 56:3-4"
    },
    {
      "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      "localizacao": "Isaías 41:10"
    },
    {
      "versiculo": "Não tenha medo; você não sofrerá vergonha. Não tema o constrangimento; você não será humilhada. Você esquecerá a vergonha de sua juventude e não se lembrará mais da humilhação de sua viuvez.",
      "localizacao": "Isaías 54:4"
    },
    {
      "versiculo": "Não tenham medo dos que matam o corpo, mas não podem matar a alma. Antes, tenham medo daquele que pode destruir tanto a alma como o corpo no inferno.",
      "localizacao": "Mateus 10:28"
    },
    {
      "versiculo": "Pois vocês não receberam um espírito que os escravize para novamente temerem, mas receberam o Espírito que os torna filhos por adoção, por meio do qual clamamos: \"Aba, Pai\".",
      "localizacao": "Romanos 8:15"
    },
    {
      "versiculo": "Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes.",
      "localizacao": "1 Coríntios 16:13"
    },
    {
      "versiculo": "Mas temos esse tesouro em vasos de barro, para mostrar que o poder que a tudo excede provém de Deus, e não de nós. De todos os lados somos pressionados, mas não desanimados; ficamos perplexos, mas não desesperados; somos perseguidos, mas não abandonados; abatidos, mas não destruídos. Trazemos sempre em nosso corpo o morrer de Jesus, para que a vida de Jesus também seja revelada em nosso corpo. Pois nós, que estamos vivos, somos sempre entregues à morte por amor a Jesus, para que a sua vida também se manifeste em nosso corpo mortal.",
      "localizacao": "2 Coríntios 4:7-11"
    },
    {
      "versiculo": "Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.",
      "localizacao": "2 Timóteo 1:7"
    },
    {
      "versiculo": "Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: \"Nunca o deixarei, nunca o abandonarei\". Podemos, pois, dizer com confiança: \"O Senhor é o meu ajudador, não temerei. O que me podem fazer os homens?\"",
      "localizacao": "Hebreus 13:5-6"
    },
    {
      "versiculo": "Quem há de maltratá-los, se vocês forem zelosos na prática do bem? Todavia, mesmo que venham a sofrer porque praticam a justiça, vocês serão felizes. \"Não temam aquilo que eles temem, não fiquem amedrontados.\"",
      "localizacao": "1 Pedro 3:13-14"
    },
    {
      "versiculo": "No amor não há medo; ao contrário o perfeito amor expulsa o medo, porque o medo supõe castigo. Aquele que tem medo não está aperfeiçoado no amor.",
      "localizacao": "1 João 4:18"
    },
    {
      "versiculo": "Consequentemente, a fé vem por se ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.",
      "localizacao": "Romanos 10:17"
    },
    {
      "versiculo": "Porque vivemos por fé, e não pelo que vemos.",
      "localizacao": "2 Coríntios 5:7"
    },
    {
      "versiculo": "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus; não por obras, para que ninguém se glorie.",
      "localizacao": "Efésios 2:8-9"
    },
    {
      "versiculo": "Todavia, àquele que não trabalha, mas confia em Deus, que justifica o ímpio, sua fé lhe é creditada como justiça.",
      "localizacao": "Romanos 4:5"
    },
    {
      "versiculo": "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
      "localizacao": "Hebreus 11:1"
    },
    {
      "versiculo": "Ele respondeu: \"Porque a fé que vocês têm é pequena. Eu asseguro que, se vocês tiverem fé do tamanho de um grão de mostarda, poderão dizer a este monte: 'Vá daqui para lá', e ele irá. Nada será impossível para vocês.",
      "localizacao": "Mateus 17:20"
    },
    {
      "versiculo": "Jesus respondeu: \"Eu asseguro que, se vocês tiverem fé e não duvidarem, poderão fazer não somente o que foi feito à figueira, mas também dizer a este monte: 'Levante-se e atire-se no mar', e assim será feito.",
      "localizacao": "Mateus 21:21"
    },
    {
      "versiculo": "Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam.",
      "localizacao": "Hebreus 11:6"
    },
    {
      "versiculo": "Jesus respondeu: \"Mulher, grande é a sua fé! Seja conforme você deseja\". E, naquele mesmo instante, a sua filha foi curada.",
      "localizacao": "Mateus 15:28"
    },
    {
      "versiculo": "Alguns homens trouxeram-lhe um paralítico, deitado em sua maca. Vendo a fé que eles tinham, Jesus disse ao paralítico: \"Tenha bom ânimo, filho; os seus pecados estão perdoados\".",
      "localizacao": "Mateus 9:2"
    },
    {
      "versiculo": "fé e conhecimento que se fundamentam na esperança da vida eterna, a qual o Deus que não mente prometeu antes dos tempos eternos.",
      "localizacao": "Tito 1:2"
    },
    {
      "versiculo": "pois vocês estão alcançando o alvo da sua fé, a salvação das suas almas.",
      "localizacao": "1 Pedro 1:9"
    },
    {
      "versiculo": "O que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo: a nossa fé.",
      "localizacao": "1 João 5:4"
    },
    {
      "versiculo": "Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes.",
      "localizacao": "1 Coríntios 16:13"
    },
    {
      "versiculo": "Você, porém, homem de Deus, fuja de tudo isso e busque a justiça, a piedade, a fé, o amor, a perseverança e a mansidão.",
      "localizacao": "1 Timóteo 6:11"
    },
    {
      "versiculo": "Resistam-lhe, permanecendo firmes na fé, sabendo que os irmãos que vocês têm em todo o mundo estão passando pelos mesmos sofrimentos.",
      "localizacao": "1 Pedro 5:9"
    },
    {
      "versiculo": "Lembramos continuamente, diante de nosso Deus e Pai, o que vocês têm demonstrado: o trabalho que resulta da fé, o esforço motivado pelo amor e a perseverança proveniente da esperança em nosso Senhor Jesus Cristo.",
      "localizacao": "1 Tessalonicenses 1:3"
    },
    {
      "versiculo": "para que a fé que vocês têm não se baseasse na sabedoria humana, mas no poder de Deus.",
      "localizacao": "1 Coríntios 2:5"
    },
    {
      "versiculo": "Por isso, irmãos, em toda a nossa necessidade e tribulação ficamos animados quando soubemos da sua fé;",
      "localizacao": "1 Tessalonicenses 3:7"
    },
    {
      "versiculo": "Combati o bom combate, terminei a corrida, guardei a fé.",
      "localizacao": "2 Timóteo 4:7"
    },
    {
      "versiculo": "Além disso, usem o escudo da fé, com o qual vocês poderão apagar todas as setas inflamadas do Maligno.",
      "localizacao": "Efésios 6:16"
    },
    {
      "versiculo": "Pois é mediante o Espírito que nós aguardamos pela fé a justiça, que é a nossa esperança.",
      "localizacao": "Gálatas 5:5"
    },
    {
      "versiculo": "pois vocês sabem que a prova da sua fé produz perseverança.",
      "localizacao": "Tiago 1:3"
    },
    {
      "versiculo": "Fui crucificado com Cristo. Assim, já não sou eu quem vive, mas Cristo vive em mim. A vida que agora vivo no corpo, vivo-a pela fé no filho de Deus, que me amou e se entregou por mim.",
      "localizacao": "Gálatas 2:20"
    },
    {
      "versiculo": "Quem crê no Filho tem a vida eterna; já quem rejeita o Filho não verá a vida, mas a ira de Deus permanece sobre ele\".",
      "localizacao": "João 3:36"
    },
    {
      "versiculo": "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas.",
      "localizacao": "Mateus 11:28-29"
    },
    {
      "versiculo": "O Espírito do Soberano, o Senhor, está sobre mim, porque o Senhor ungiu-me para levar boas notícias aos pobres. Enviou-me para cuidar dos que estão com o coração quebrantado, anunciar liberdade aos cativos e libertação das trevas aos prisioneiros, ",
      "localizacao": "Isaías 61:1"
    },
    {
      "versiculo": "O próprio Senhor irá à sua frente e estará com você; ele nunca o deixará, nunca o abandonará. Não tenha medo! Não desanime!\"",
      "localizacao": "Deuteronômio 31:8"
    },
    {
      "versiculo": "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, Pai das misericórdias e Deus de toda consolação, que nos consola em todas as nossas tribulações, para que, com a consolação que recebemos de Deus, possamos consolar os que estão passando por tribulações.",
      "localizacao": "2 Coríntios 1:3-4"
    },
    {
      "versiculo": "Pois assim como os sofrimentos de Cristo transbordam sobre nós, também por meio de Cristo transborda a nossa consolação. Se somos atribulados, é para consolação e salvação de vocês; se somos consolados, é para consolação de vocês, a qual dá paciência para suportarem os mesmos sofrimentos que nós estamos padecendo.",
      "localizacao": "2 Coríntios 1:5-6"
    },
    {
      "versiculo": "Pois a sua ira só dura um instante, mas o seu favor dura a vida toda; o choro pode persistir uma noite, mas de manhã irrompe a alegria.",
      "localizacao": "Salmos 30:5"
    },
    {
      "versiculo": "Deixo a paz a vocês; a minha paz dou a vocês. Não a dou como o mundo a dá. Não se perturbe o seu coração, nem tenham medo.",
      "localizacao": "João 14:27"
    },
    {
      "versiculo": "Entregue suas preocupações ao Senhor, e ele o susterá; jamais permitirá que o justo venha a cair.",
      "localizacao": "Salmos 55:22"
    },
    {
      "versiculo": "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.",
      "localizacao": "Salmos 34:18"
    },
    {
      "versiculo": "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo\".",
      "localizacao": "João 16:33"
    },
    {
      "versiculo": "E eu pedirei ao Pai, e ele dará a vocês outro Conselheiro para estar com vocês para sempre, o Espírito da verdade. O mundo não pode recebê-lo, porque não o vê nem o conhece. Mas vocês o conhecem, pois ele vive com vocês e estará em vocês. Não os deixarei órfãos; voltarei para vocês.",
      "localizacao": "João 14:16-18"
    },
    {
      "versiculo": "Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo; a tua vara e o teu cajado me protegem.",
      "localizacao": "Salmos 23:4"
    },
    {
      "versiculo": "O Senhor é refúgio para os oprimidos, uma torre segura na hora da adversidade.",
      "localizacao": "Salmos 9:9"
    },
    {
      "versiculo": "E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",
      "localizacao": "Filipenses 4:7"
    },
    {
      "versiculo": "O Senhor, o seu Deus, está em seu meio, poderoso para salvar. Ele se regozijará em você; com o seu amor a renovará, ele se regozijará em você com brados de alegria\".",
      "localizacao": "Sofonias 3:17"
    },
    {
      "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      "localizacao": "Isaías 41:10"
    },
    {
      "versiculo": "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.",
      "localizacao": "Romanos 15:13"
    },
    {
      "versiculo": "Uma coisa pedi ao Senhor e a procuro: que eu possa viver na casa do Senhor todos os dias da minha vida, para contemplar a bondade do Senhor e buscar sua orientação no seu templo. Pois no dia da adversidade ele me guardará protegido em sua habitação; no seu tabernáculo me esconderá e me porá em segurança sobre um rochedo.",
      "localizacao": "Salmos 27:4-5"
    },
    {
      "versiculo": "Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.",
      "localizacao": "Salmos 46:1"
    },
    {
      "versiculo": "Portanto, humilhem-se debaixo da poderosa mão de Deus, para que ele os exalte no tempo devido. Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
      "localizacao": "1 Pedro 5:6-7"
    },
    {
      "versiculo": "Pois não menosprezou nem repudiou o sofrimento do aflito; não escondeu dele o rosto, mas ouviu o seu grito de socorro.",
      "localizacao": "Salmos 22:24"
    },
    {
      "versiculo": "Registra, tu mesmo, o meu lamento; recolhe as minhas lágrimas em teu odre; acaso não estão anotadas em teu livro?",
      "localizacao": "Salmos 56:8"
    },
    {
      "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
      "localizacao": "Jeremias 29:11"
    },
    {
      "versiculo": "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam,",
      "localizacao": "Naum 1:7"
    },
    {
      "versiculo": "Assim acontece com vocês: agora é hora de tristeza para vocês, mas eu os verei outra vez, e vocês se alegrarão, e ninguém tirará essa alegria de vocês.",
      "localizacao": "João 16:22"
    },
    {
      "versiculo": "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!",
      "localizacao": "2 Coríntios 5:17"
    },
    {
      "versiculo": "Aquele que estava assentado no trono disse: \"Estou fazendo novas todas as coisas!\" E acrescentou: \"Escreva isto, pois estas palavras são verdadeiras e dignas de confiança\".",
      "localizacao": "Apocalipse 21:5"
    },
    {
      "versiculo": "Assim como uma mãe consola seu filho, também eu os consolarei; em Jerusalém vocês serão consolados\".",
      "localizacao": "Isaías 66:13"
    },
    {
      "versiculo": "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. Ele é o meu escudo e o poder que me salva, a minha torre alta.",
      "localizacao": "Salmos 18:2"
    },
    {
      "versiculo": "Senhor, tem misericórdia de nós; pois em ti esperamos! Sê tu a nossa força cada manhã, nossa salvação na hora do perigo.",
      "localizacao": "Isaías 33:2"
    },
    {
      "versiculo": "Satisfaze-nos pela manhã com o teu amor leal, e todos os nossos dias cantaremos felizes.",
      "localizacao": "Salmos 90:14"
    },
    {
      "versiculo": "Quanto a mim, feita a justiça, verei a tua face; quando despertar, ficarei satisfeito ao ver a tua semelhança.",
      "localizacao": "Salmos 17:15"
    },
    {
      "versiculo": "Graças ao grande amor do Senhor é que não somos consumidos, pois as suas misericórdias são inesgotáveis. Renovam-se cada manhã; grande é a sua fidelidade! Digo a mim mesmo: A minha porção é o Senhor; portanto, nele porei a minha esperança.",
      "localizacao": "Lamentações 3:22-24"
    },
    {
      "versiculo": "Deus viu que a luz era boa, e separou a luz das trevas. Deus chamou à luz dia, e às trevas chamou noite. Passaram-se a tarde e a manhã; esse foi o primeiro dia.",
      "localizacao": "Gênesis 1:4-5"
    },
    {
      "versiculo": "Acorde, minha alma! Acordem, harpa e lira! Vou despertar a alvorada!",
      "localizacao": "Salmos 57:8"
    },
    {
      "versiculo": "Como é bom render graças ao Senhor e cantar louvores ao teu nome, ó Altíssimo; anunciar de manhã o teu amor leal e de noite a tua fidelidade,",
      "localizacao": "Salmos 92:1-2"
    },
    {
      "versiculo": "Faze-me ouvir do teu amor leal pela manhã, pois em ti confio. Mostra-me o caminho que devo seguir, pois a ti elevo a minha alma.",
      "localizacao": "Salmos 143:8"
    },
    {
      "versiculo": "De manhã ouves, Senhor, o meu clamor; de manhã te apresento a minha oração e aguardo com esperança.",
      "localizacao": "Salmos 5:3"
    },
    {
      "versiculo": "Plante de manhã a sua semente, e mesmo ao entardecer não deixe as suas mãos ficarem à toa, pois você não sabe o que acontecerá, se esta ou aquela produzirá, ou se as duas serão igualmente boas.",
      "localizacao": "Eclesiastes 11:6"
    },
    {
      "versiculo": "Mas eu cantarei louvores à tua força; de manhã louvarei a tua fidelidade, pois tu és o meu alto refúgio, abrigo seguro nos tempos difíceis.",
      "localizacao": "Salmos 59:16"
    },
    {
      "versiculo": "Pois a sua ira só dura um instante, mas o seu favor dura a vida toda; o choro pode persistir uma noite, mas de manhã irrompe a alegria.",
      "localizacao": "Salmos 30:5"
    },
    {
      "versiculo": "O Soberano, o Senhor, deu-me uma língua instruída, para conhecer a palavra que sustém o exausto. Ele me acorda manhã após manhã, desperta meu ouvido para escutar como alguém que está sendo ensinado.",
      "localizacao": "Isaías 50:4"
    },
    {
      "versiculo": "Mas eu, Senhor, a ti clamo por socorro; já de manhã a minha oração chega à tua presença.",
      "localizacao": "Salmos 88:13"
    },
    {
      "versiculo": "Não ame o sono, senão você acabará ficando pobre; fique desperto, e terá alimento de sobra.",
      "localizacao": "Provérbios 20:13"
    },
    {
      "versiculo": "Ele morreu por nós para que, quer estejamos acordados quer dormindo, vivamos unidos a ele.",
      "localizacao": "1 Tessalonicenses 5:10"
    },
    {
      "versiculo": "Antes de clarear o dia ela se levanta, prepara comida para todos os de casa e dá tarefas às suas servas.",
      "localizacao": "Provérbios 31:15"
    },
    {
      "versiculo": "Tremem os habitantes das terras distantes diante das tuas maravilhas; do nascente ao poente despertas canções de alegria.",
      "localizacao": "Salmos 65:8"
    },
    {
      "versiculo": "Assim, temos ainda mais firme a palavra dos profetas, e vocês farão bem se a ela prestarem atenção, como a uma candeia que brilha em lugar escuro, até que o dia clareie e a estrela da alva nasça no coração de vocês.",
      "localizacao": "2 Pedro 1:19"
    },
    {
      "versiculo": "Com a costela que havia tirado do homem, o Senhor Deus fez uma mulher e a levou até ele. Disse então o homem: \"Esta, sim, é osso dos meus ossos e carne da minha carne! Ela será chamada mulher, porque do homem foi tirada\". Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne.",
      "localizacao": "Gênesis 2:22-24"
    },
    {
      "versiculo": "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe\".",
      "localizacao": "Mateus 19:6"
    },
    {
      "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
      "localizacao": "1 Coríntios 13:4-7"
    },
    {
      "versiculo": "Da mesma forma, os maridos devem amar cada um a sua mulher como a seu próprio corpo. Quem ama sua mulher, ama a si mesmo. Além do mais, ninguém jamais odiou o seu próprio corpo, antes o alimenta e dele cuida, como também Cristo faz com a igreja,",
      "localizacao": "Efésios 5:28-29"
    },
    {
      "versiculo": "Portanto, cada um de vocês também ame a sua mulher como a você mesmo, e a mulher trate o marido com todo o respeito.",
      "localizacao": "Efésios 5:33"
    },
    {
      "versiculo": "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.",
      "localizacao": "Colossenses 3:14"
    },
    {
      "versiculo": "Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.",
      "localizacao": "Provérbios 18:22"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se! E, se dois dormirem juntos, vão manter-se aquecidos. Como, porém, manter-se aquecido sozinho? Um homem sozinho pode ser vencido, mas dois conseguem defender-se. Um cordão de três dobras não se rompe com facilidade.",
      "localizacao": "Eclesiastes 4:9-12"
    },
    {
      "versiculo": "Se um homem tiver se casado recentemente, não será enviado à guerra, nem assumirá nenhum compromisso público. Durante um ano estará livre para ficar em casa e fazer feliz a mulher com quem se casou.",
      "localizacao": "Deuteronômio 24:5"
    },
    {
      "versiculo": "Ah, se ele me beijasse, se a sua boca me cobrisse de beijos... Sim, as suas carícias são mais agradáveis que o vinho. A fragrância dos seus perfumes é suave; o seu nome é como perfume derramado. Não é à toa que as jovens o amam!",
      "localizacao": "Cânticos 1:2-3"
    },
    {
      "versiculo": "Como você é linda, minha querida! Ah, como é linda! Seus olhos são pombas. Como você é belo, meu amado! Ah, como é encantador! Verdejante é o nosso leito.",
      "localizacao": "Cânticos 1:15-16"
    },
    {
      "versiculo": "Seja bendita a sua fonte! Alegre-se com a esposa da sua juventude. Gazela amorosa, corça graciosa; que os seios de sua esposa sempre o fartem de prazer, e sempre o embriaguem os carinhos dela. Por que, meu filho, ser desencaminhado pela mulher imoral? Por que abraçar o seio de uma leviana?",
      "localizacao": "Provérbios 5:18-20"
    },
    {
      "versiculo": "Não foi o Senhor que os fez um só? Em corpo e em espírito eles lhe pertencem. E por que um só? Porque ele desejava uma descendência consagrada. Portanto, tenham cuidado: Ninguém seja infiel à mulher da sua mocidade.",
      "localizacao": "Malaquias 2:15"
    },
    {
      "versiculo": "Você fez disparar o meu coração, minha irmã, minha noiva; fez disparar o meu coração com um simples olhar, com uma simples joia dos seus colares.",
      "localizacao": "Cânticos 4:9"
    },
    {
      "versiculo": "Ponha-me como um selo sobre o seu coração; como um selo sobre o seu braço; pois o amor é tão forte quanto a morte e o ciúme é tão inflexível quanto a sepultura. Suas brasas são fogo ardente, são labaredas do Senhor. Nem muitas águas conseguem apagar o amor; os rios não conseguem levá-lo na correnteza. Se alguém oferecesse todas as riquezas da sua casa para adquirir o amor, seria totalmente desprezado.",
      "localizacao": "Cânticos 8:6-7"
    },
    {
      "versiculo": "O amigo ama em todos os momentos; é um irmão na adversidade.",
      "localizacao": "Provérbios 17:17"
    },
    {
      "versiculo": "Aquele que anda com os sábios será cada vez mais sábio, mas o companheiro dos tolos acabará mal.",
      "localizacao": "Provérbios 13:20"
    },
    {
      "versiculo": "Melhor é a repreensão feita abertamente do que o amor oculto. Quem fere por amor mostra lealdade, mas o inimigo multiplica beijos.",
      "localizacao": "Provérbios 27:5-6"
    },
    {
      "versiculo": "Já não os chamo servos, porque o servo não sabe o que o seu senhor faz. Em vez disso, eu os tenho chamado amigos, porque tudo o que ouvi de meu Pai eu tornei conhecido a vocês.",
      "localizacao": "João 15:15"
    },
    {
      "versiculo": "Perfume e incenso trazem alegria ao coração; do conselho sincero do homem nasce uma bela amizade. Não abandone o seu amigo nem o amigo de seu pai; quando for atingido pela adversidade não vá para a casa de seu irmão; melhor é o vizinho próximo do que o irmão distante.",
      "localizacao": "Provérbios 27:9-10"
    },
    {
      "versiculo": "Quem tem muitos amigos pode chegar à ruína, mas existe amigo mais apegado que um irmão.",
      "localizacao": "Provérbios 18:24"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se!",
      "localizacao": "Eclesiastes 4:9-10"
    },
    {
      "versiculo": "Não se deixem enganar: \"As más companhias corrompem os bons costumes\".",
      "localizacao": "1 Coríntios 15:33"
    },
    {
      "versiculo": "Dediquem-se uns aos outros com amor fraternal. Prefiram dar honra aos outros mais do que a vocês.",
      "localizacao": "Romanos 12:10"
    },
    {
      "versiculo": "Depois dessa conversa de Davi com Saul, surgiu tão grande amizade entre Jônatas e Davi que Jônatas tornou-se o seu melhor amigo. Daquele dia em diante, Saul manteve Davi consigo e não o deixou voltar à casa de seu pai. E Jônatas fez um acordo de amizade com Davi, pois se tornara o seu melhor amigo.",
      "localizacao": "1 Samuel 18:1-3"
    },
    {
      "versiculo": "Não se associe com quem vive de mau humor, nem ande em companhia de quem facilmente se ira; do contrário você acabará imitando essa conduta e cairá em armadilha mortal.",
      "localizacao": "Provérbios 22:24-25"
    },
    {
      "versiculo": "Rute, porém, respondeu: \"Não insistas comigo que te deixe e que não mais te acompanhe. Aonde fores irei, onde ficares ficarei! O teu povo será o meu povo e o teu Deus será o meu Deus!",
      "localizacao": "Rute 1:16"
    },
    {
      "versiculo": "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe\".",
      "localizacao": "Mateus 19:6"
    },
    {
      "versiculo": "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne. O homem e sua mulher viviam nus, e não sentiam vergonha.",
      "localizacao": "Gênesis 2:24-25"
    },
    {
      "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
      "localizacao": "1 Coríntios 13:4-7"
    },
    {
      "versiculo": "Deus os abençoou e lhes disse: \"Sejam férteis e multipliquem-se! Encham e subjuguem a terra! Dominem sobre os peixes do mar, sobre as aves do céu e sobre todos os animais que se movem pela terra\".",
      "localizacao": "Gênesis 1:28"
    },
    {
      "versiculo": "Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.",
      "localizacao": "Provérbios 18:22"
    },
    {
      "versiculo": "O casamento deve ser honrado por todos; o leito conjugal, conservado puro; pois Deus julgará os imorais e os adúlteros.",
      "localizacao": "Hebreus 13:4"
    },
    {
      "versiculo": "Não foi o Senhor que os fez um só? Em corpo e em espírito eles lhe pertencem. E por que um só? Porque ele desejava uma descendência consagrada. Portanto, tenham cuidado: Ninguém seja infiel à mulher da sua mocidade. \"Eu odeio o divórcio\", diz o Senhor, o Deus de Israel, \"e também odeio homem que se cobre de violência como se cobre de roupas\", diz o Senhor dos Exércitos. Por isso, tenham bom senso; não sejam infiéis.",
      "localizacao": "Malaquias 2:15-16"
    },
    {
      "versiculo": "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito. Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos.",
      "localizacao": "Colossenses 3:14-15"
    },
    {
      "versiculo": "Tenham cuidado para que ninguém retribua o mal com o mal, mas sejam sempre bondosos uns para com os outros e para com todos.",
      "localizacao": "1 Tessalonicenses 5:15"
    },
    {
      "versiculo": "Não se ponham em jugo desigual com descrentes. Pois o que têm em comum a justiça e a maldade? Ou que comunhão pode ter a luz com as trevas?",
      "localizacao": "2 Coríntios 6:14"
    },
    {
      "versiculo": "A mulher exemplar é a coroa do seu marido, mas a de comportamento vergonhoso é como câncer em seus ossos.",
      "localizacao": "Provérbios 12:4"
    },
    {
      "versiculo": "Mulheres, sujeite-se cada uma a seu marido, como ao Senhor, pois o marido é o cabeça da mulher, como também Cristo é o cabeça da igreja, que é o seu corpo, do qual ele é o Salvador. Assim como a igreja está sujeita a Cristo, também as mulheres estejam em tudo sujeitas a seus maridos.",
      "localizacao": "Efésios 5:22-24"
    },
    {
      "versiculo": "Maridos, ame cada um a sua mulher, assim como Cristo amou a igreja e entregou-se por ela; Da mesma forma, os maridos devem amar cada um a sua mulher como a seu próprio corpo. Quem ama sua mulher, ama a si mesmo.",
      "localizacao": "Efésios 5:25;28"
    },
    {
      "versiculo": "Portanto, cada um de vocês também ame a sua mulher como a você mesmo, e a mulher trate o marido com todo o respeito.",
      "localizacao": "Efésios 5:33"
    },
    {
      "versiculo": "O marido deve cumprir os seus deveres conjugais para com a sua mulher, e da mesma forma a mulher para com o seu marido. A mulher não tem autoridade sobre o seu próprio corpo, mas sim o marido. Da mesma forma, o marido não tem autoridade sobre o seu próprio corpo, mas sim a mulher.",
      "localizacao": "1 Coríntios 7:3-4"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se!",
      "localizacao": "Eclesiastes 4:9-10"
    },
    {
      "versiculo": "Ponha-me como um selo sobre o seu coração; como um selo sobre o seu braço; pois o amor é tão forte quanto a morte e o ciúme é tão inflexível quanto a sepultura. Suas brasas são fogo ardente, são labaredas do Senhor.",
      "localizacao": "Cânticos 8:6"
    },
    {
      "versiculo": "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar\".",
      "localizacao": "Josué 1:9"
    },
    {
      "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      "localizacao": "Isaías 41:10"
    },
    {
      "versiculo": "ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos\".",
      "localizacao": "Mateus 28:20"
    },
    {
      "versiculo": "Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: \"Nunca o deixarei, nunca o abandonarei\".",
      "localizacao": "Hebreus 13:5"
    },
    {
      "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
      "localizacao": "Deuteronômio 31:6"
    },
    {
      "versiculo": "Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
      "localizacao": "Romanos 8:38-39"
    },
    {
      "versiculo": "Vocês não sabem que são santuário de Deus e que o Espírito de Deus habita em vocês?",
      "localizacao": "1 Coríntios 3:16"
    },
    {
      "versiculo": "Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei e cearei com ele, e ele comigo.",
      "localizacao": "Apocalipse 3:20"
    },
    {
      "versiculo": "Eu farei de você uma muralha de bronze fortificada diante deste povo; lutarão contra você, mas não o vencerão, pois estou com você para resgatá-lo e salvá-lo\", declara o Senhor.",
      "localizacao": "Jeremias 15:20"
    },
    {
      "versiculo": "para que Cristo habite no coração de vocês mediante a fé; e oro para que, estando arraigados e alicerçados em amor,",
      "localizacao": "Efésios 3:17"
    },
    {
      "versiculo": "Ninguém conseguirá resistir a você todos os dias da sua vida. Assim como estive com Moisés, estarei com você; nunca o deixarei, nunca o abandonarei. \"Seja forte e corajoso, porque você conduzirá este povo para herdar a terra que prometi sob juramento aos seus antepassados.",
      "localizacao": "Josué 1:5-6"
    },
    {
      "versiculo": "Então o Anjo do Senhor apareceu a Gideão e lhe disse: \"O Senhor está com você, poderoso guerreiro\".",
      "localizacao": "Juízes 6:12"
    },
    {
      "versiculo": "Tal é a confiança que temos diante de Deus, por meio de Cristo. Não que possamos reivindicar qualquer coisa com base em nossos próprios méritos, mas a nossa capacidade vem de Deus. Ele nos capacitou para sermos ministros de uma nova aliança, não da letra, mas do Espírito; pois a letra mata, mas o Espírito vivifica.",
      "localizacao": "2 Coríntios 3:4-6"
    },
    {
      "versiculo": "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. Ele é o meu escudo e o poder que me salva, a minha torre alta.",
      "localizacao": "Salmos 18:2"
    },
    {
      "versiculo": "pode dizer ao Senhor: \"Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio\".",
      "localizacao": "Salmos 91:2"
    },
    {
      "versiculo": "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam,",
      "localizacao": "Naum 1:7"
    },
    {
      "versiculo": "Ó Senhor dos Exércitos, como é feliz aquele que em ti confia!",
      "localizacao": "Salmos 84:12"
    },
    {
      "versiculo": "Este é o Deus cujo caminho é perfeito; a palavra do Senhor é comprovadamente genuína. Ele é escudo para todos os que nele se refugiam.",
      "localizacao": "2 Samuel 22:31"
    },
    {
      "versiculo": "Deus é a minha salvação; terei confiança e não temerei. O Senhor, sim, o Senhor é a minha força e o meu cântico; ele é a minha salvação!",
      "localizacao": "Isaías 12:2"
    },
    {
      "versiculo": "Embora ele me mate, ainda assim esperarei nele; certo é que defenderei os meus caminhos diante dele.",
      "localizacao": "Jó 13:15"
    },
    {
      "versiculo": "Senhor, meu Deus, em ti me refugio; salva-me e livra-me de todos os que me perseguem,",
      "localizacao": "Salmos 7:1"
    },
    {
      "versiculo": "Cada palavra de Deus é comprovadamente pura; ele é um escudo para quem nele se refugia.",
      "localizacao": "Provérbios 30:5"
    },
    {
      "versiculo": "Os que conhecem o teu nome confiam em ti, pois tu, Senhor, jamais abandonas os que te buscam.",
      "localizacao": "Salmos 9:10"
    },
    {
      "versiculo": "Em ti os nossos antepassados puseram a sua confiança; confiaram, e os livraste.",
      "localizacao": "Salmos 22:4"
    },
    {
      "versiculo": "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento;",
      "localizacao": "Provérbios 3:5"
    },
    {
      "versiculo": "Entregue o seu caminho ao Senhor; confie nele, e ele agirá:",
      "localizacao": "Salmos 37:5"
    },
    {
      "versiculo": "Mas eu, quando estiver com medo, confiarei em ti.",
      "localizacao": "Salmos 56:3"
    },
    {
      "versiculo": "Pois tu és a minha esperança, ó Soberano Senhor, em ti está a minha confiança desde a juventude.",
      "localizacao": "Salmos 71:5"
    },
    {
      "versiculo": "Tu, Senhor, guardarás em perfeita paz aquele cujo propósito está firme, porque em ti confia.",
      "localizacao": "Isaías 26:3"
    },
    {
      "versiculo": "Se trabalhamos e lutamos é porque temos depositado a nossa esperança no Deus vivo, o Salvador de todos os homens, especialmente dos que creem.",
      "localizacao": "1 Timóteo 4:10"
    },
    {
      "versiculo": "Alguns confiam em carros e outros em cavalos, mas nós confiamos no nome do Senhor, o nosso Deus.",
      "localizacao": "Salmos 20:7"
    },
    {
      "versiculo": "Muitas são as dores dos ímpios, mas a bondade do Senhor protege quem nele confia.",
      "localizacao": "Salmos 32:10"
    },
    {
      "versiculo": "É melhor buscar refúgio no Senhor do que confiar nos homens.",
      "localizacao": "Salmos 118:8"
    },
    {
      "versiculo": "A mulher exemplar é a coroa do seu marido, mas a de comportamento vergonhoso é como câncer em seus ossos.",
      "localizacao": "Provérbios 12:4"
    },
    {
      "versiculo": "A mulher bondosa conquista o respeito, mas os homens cruéis só conquistam riquezas.",
      "localizacao": "Provérbios 11:16"
    },
    {
      "versiculo": "As mulheres igualmente sejam dignas, não caluniadoras, mas sóbrias e confiáveis em tudo.",
      "localizacao": "1 Timóteo 3:11"
    },
    {
      "versiculo": "Casas e riquezas herdam-se dos pais, mas a esposa prudente vem do Senhor.",
      "localizacao": "Provérbios 19:14"
    },
    {
      "versiculo": "A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua.",
      "localizacao": "Provérbios 14:1"
    },
    {
      "versiculo": "Semelhantemente, ensine as mulheres mais velhas a serem reverentes na sua maneira de viver, a não serem caluniadoras nem escravizadas a muito vinho, mas a serem capazes de ensinar o que é bom. Assim, poderão orientar as mulheres mais jovens a amarem seus maridos e seus filhos,",
      "localizacao": "Tito 2:3-4"
    },
    {
      "versiculo": "Agora, minha filha, não tenha medo; farei por você tudo o que me pedir. Todos os meus concidadãos sabem que você é mulher virtuosa.",
      "localizacao": "Rute 3:11"
    },
    {
      "versiculo": "Melhor é viver no deserto do que com uma mulher briguenta e amargurada.",
      "localizacao": "Provérbios 21:19"
    },
    {
      "versiculo": "A beleza é enganosa, e a formosura é passageira; mas a mulher que teme o Senhor será elogiada.",
      "localizacao": "Provérbios 31:30"
    },
    {
      "versiculo": "Com a costela que havia tirado do homem, o Senhor Deus fez uma mulher e a levou até ele. Disse então o homem: \"Esta, sim, é osso dos meus ossos e carne da minha carne! Ela será chamada mulher, porque do homem foi tirada\".",
      "localizacao": "Gênesis 2:22-23"
    },
    {
      "versiculo": "Do mesmo modo, mulheres, sujeite-se cada uma a seu marido, a fim de que, se ele não obedece à palavra, seja ganho sem palavras, pelo procedimento de sua mulher,",
      "localizacao": "1 Pedro 3:1"
    },
    {
      "versiculo": "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens,",
      "localizacao": "Colossenses 3:23"
    },
    {
      "versiculo": "O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria.",
      "localizacao": "Eclesiastes 9:10"
    },
    {
      "versiculo": "Tudo posso naquele que me fortalece.",
      "localizacao": "Filipenses 4:13"
    },
    {
      "versiculo": "Portanto, também nós, uma vez que estamos rodeados por tão grande nuvem de testemunhas, livremo-nos de tudo o que nos atrapalha e do pecado que nos envolve e corramos com perseverança a corrida que nos é proposta, tendo os olhos fitos em Jesus, autor e consumador da nossa fé. Ele, pela alegria que lhe fora proposta, suportou a cruz, desprezando a vergonha, e assentou-se à direita do trono de Deus. Pensem bem naquele que suportou tal oposição dos pecadores contra si mesmo, para que vocês não se cansem nem desanimem.",
      "localizacao": "Hebreus 12:1-3"
    },
    {
      "versiculo": "Irmãos, não penso que eu mesmo já o tenha alcançado, mas uma coisa faço: esquecendo-me das coisas que ficaram para trás e avançando para as que estão adiante, prossigo para o alvo, a fim de ganhar o prêmio do chamado celestial de Deus em Cristo Jesus.",
      "localizacao": "Filipenses 3:13-14"
    },
    {
      "versiculo": "pois é Deus quem efetua em vocês tanto o querer quanto o realizar, de acordo com a boa vontade dele.",
      "localizacao": "Filipenses 2:13"
    },
    {
      "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
      "localizacao": "Jeremias 29:11"
    },
    {
      "versiculo": "Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá.",
      "localizacao": "Salmos 91:7"
    },
    {
      "versiculo": "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos\".",
      "localizacao": "Mateus 28:19-20"
    },
    {
      "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
      "localizacao": "Deuteronômio 31:6"
    },
    {
      "versiculo": "Ele fortalece o cansado e dá grande vigor ao que está sem forças. Até os jovens se cansam e ficam exaustos, e os moços tropeçam e caem; mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
      "localizacao": "Isaías 40:29-31"
    },
    {
      "versiculo": "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei.",
      "localizacao": "João 14:13-14"
    },
    {
      "versiculo": "Vocês não sabem que, de todos os que correm no estádio, apenas um ganha o prêmio? Corram de tal modo que alcancem o prêmio. Todos os que competem nos jogos se submetem a um treinamento rigoroso, para obter uma coroa que logo perece; mas nós o fazemos para ganhar uma coroa que dura para sempre.",
      "localizacao": "1 Coríntios 9:24-25"
    },
    {
      "versiculo": "Não busquem ansiosamente o que comer ou beber; não se preocupem com isso. Pois o mundo pagão é que corre atrás dessas coisas; mas o Pai sabe que vocês precisam delas.",
      "localizacao": "Lucas 12:29-30"
    },
    {
      "versiculo": "Quando ainda estávamos com vocês, nós ordenamos isto: Se alguém não quiser trabalhar, também não coma. Pois ouvimos que alguns de vocês estão ociosos; não trabalham, mas andam se intrometendo na vida alheia. A tais pessoas ordenamos e exortamos no Senhor Jesus Cristo que trabalhem tranquilamente e comam o seu próprio pão. Quanto a vocês, irmãos, nunca se cansem de fazer o bem.",
      "localizacao": "2 Tessalonicenses 3:10-13"
    },
    {
      "versiculo": "É grande o meu prazer no Senhor! Regozija-se a minha alma em meu Deus! Pois ele me vestiu com as vestes da salvação e sobre mim pôs o manto da justiça, qual noivo que adorna a cabeça como um sacerdote, qual noiva que se enfeita com joias.",
      "localizacao": "Isaías 61:10"
    },
    {
      "versiculo": "Tu és bondoso e perdoador, Senhor, rico em graça para com todos os que te invocam.",
      "localizacao": "Salmos 86:5"
    },
    {
      "versiculo": "Então Pedro aproximou-se de Jesus e perguntou: \"Senhor, quantas vezes deverei perdoar a meu irmão quando ele pecar contra mim? Até sete vezes?\" Jesus respondeu: \"Eu digo a você: Não até sete, mas até setenta vezes sete.",
      "localizacao": "Mateus 18:21-22"
    },
    {
      "versiculo": "E, quando estiverem orando, se tiverem alguma coisa contra alguém, perdoem-no, para que também o Pai celestial perdoe os seus pecados. Mas, se vocês não perdoarem, também o seu Pai que está nos céus não perdoará os seus pecados\".",
      "localizacao": "Marcos 11:25-26"
    },
    {
      "versiculo": "Tomem cuidado. Se o seu irmão pecar, repreenda-o e, se ele se arrepender, perdoe-lhe. Se pecar contra você sete vezes no dia, e sete vezes voltar a você e disser: 'Estou arrependido', perdoe-lhe\".",
      "localizacao": "Lucas 17:3-4"
    },
    {
      "versiculo": "Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou.",
      "localizacao": "Colossenses 3:13"
    },
    {
      "versiculo": "Se confessarmos os nossos pecados, ele é fiel e justo para perdoar os nossos pecados e nos purificar de toda injustiça.",
      "localizacao": "1 João 1:9"
    },
    {
      "versiculo": "Pois, se perdoarem as ofensas uns dos outros, o Pai celestial também perdoará vocês. Mas, se não perdoarem uns aos outros, o Pai celestial não perdoará as ofensas de vocês.",
      "localizacao": "Mateus 6:14-15"
    },
    {
      "versiculo": "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.",
      "localizacao": "Efésios 4:32"
    },
    {
      "versiculo": "Se um de vocês tem causado tristeza, não a tem causado apenas a mim, mas também, em parte, para eu não ser demasiadamente severo com todos vocês. A punição que foi imposta pela maioria é suficiente. Agora, ao contrário, vocês devem perdoar-lhe e consolá-lo, para que ele não seja dominado por excessiva tristeza. Portanto, eu recomendo que reafirmem o amor que têm por ele.",
      "localizacao": "2 Coríntios 2:5-8"
    },
    {
      "versiculo": "Não julguem e vocês não serão julgados. Não condenem e não serão condenados. Perdoem e serão perdoados.",
      "localizacao": "Lucas 6:37"
    },
    {
      "versiculo": "Sou eu, eu mesmo, aquele que apaga suas transgressões, por amor de mim, e que não se lembra mais de seus pecados.",
      "localizacao": "Isaías 43:25"
    },
    {
      "versiculo": "Nele temos a redenção por meio de seu sangue, o perdão dos pecados, de acordo com as riquezas da graça de Deus,",
      "localizacao": "Efésios 1:7"
    },
    {
      "versiculo": "Pois ele nos resgatou do domínio das trevas e nos transportou para o Reino do seu Filho amado, em quem temos a redenção, a saber, o perdão dos pecados.",
      "localizacao": "Colossenses 1:13-14"
    },
    {
      "versiculo": "Que o ímpio abandone o seu caminho; e o homem mau, os seus pensamentos. Volte-se ele para o Senhor, que terá misericórdia dele; volte-se para o nosso Deus, pois ele dá de bom grado o seu perdão.",
      "localizacao": "Isaías 55:7"
    },
    {
      "versiculo": "Saibam que o Senhor escolheu o piedoso; o Senhor ouvirá quando eu o invocar.",
      "localizacao": "Salmos 4:3"
    },
    {
      "versiculo": "Descanse no Senhor e aguarde por ele com paciência; não se aborreça com o sucesso dos outros nem com aqueles que maquinam o mal.",
      "localizacao": "Salmos 37:7"
    },
    {
      "versiculo": "Ó tu que ouves a oração, a ti virão todos os homens.",
      "localizacao": "Salmos 65:2"
    },
    {
      "versiculo": "Portanto, confessem os seus pecados uns aos outros e orem uns pelos outros para serem curados. A oração de um justo é poderosa e eficaz.",
      "localizacao": "Tiago 5:16"
    },
    {
      "versiculo": "Se eu acalentasse o pecado no coração, o Senhor não me ouviria;",
      "localizacao": "Salmos 66:18"
    },
    {
      "versiculo": "Se alguém se recusa a ouvir a lei, até suas orações serão detestáveis.",
      "localizacao": "Provérbios 28:9"
    },
    {
      "versiculo": "Antes de clamarem, eu responderei; ainda não estarão falando, e eu os ouvirei.",
      "localizacao": "Isaías 65:24"
    },
    {
      "versiculo": "E, quando orarem, não fiquem sempre repetindo a mesma coisa, como fazem os pagãos. Eles pensam que por muito falarem serão ouvidos. Não sejam iguais a eles, porque o seu Pai sabe do que vocês precisam, antes mesmo de o pedirem.",
      "localizacao": "Mateus 6:7-8"
    },
    {
      "versiculo": "Vocês, orem assim: \"Pai nosso, que estás nos céus! Santificado seja o teu nome. Venha o teu Reino; seja feita a tua vontade, assim na terra como no céu.",
      "localizacao": "Mateus 6:9-10"
    },
    {
      "versiculo": "Se vocês, apesar de serem maus, sabem dar boas coisas aos seus filhos, quanto mais o Pai de vocês, que está nos céus, dará coisas boas aos que lhe pedirem!",
      "localizacao": "Mateus 7:11"
    },
    {
      "versiculo": "Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. Pois todo o que pede recebe; o que busca encontra; e àquele que bate, a porta será aberta.",
      "localizacao": "Mateus 7:7-8"
    },
    {
      "versiculo": "E tudo o que pedirem em oração, se crerem, vocês receberão\".",
      "localizacao": "Mateus 21:22"
    },
    {
      "versiculo": "Ele disse: \"Em certa cidade havia um juiz que não temia a Deus nem se importava com os homens; E havia naquela cidade uma viúva que se dirigia continuamente a ele, suplicando-lhe: 'Faze-me justiça contra o meu adversário'.  esta viúva está me aborrecendo; vou fazer-lhe justiça para que ela não venha mais me importunar'. Acaso Deus não fará justiça aos seus escolhidos, que clamam a ele dia e noite? Continuará fazendo-os esperar?",
      "localizacao": "Lucas 18:2-3,5,7"
    },
    {
      "versiculo": "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei.",
      "localizacao": "João 14:13-14"
    },
    {
      "versiculo": "Portanto, eu digo: Tudo o que vocês pedirem em oração, creiam que já o receberam, e assim sucederá.",
      "localizacao": "Marcos 11:24"
    },
    {
      "versiculo": "Da mesma forma o Espírito nos ajuda em nossa fraqueza, pois não sabemos como orar, mas o próprio Espírito intercede por nós com gemidos inexprimíveis. E aquele que sonda os corações conhece a intenção do Espírito, porque o Espírito intercede pelos santos de acordo com a vontade de Deus.",
      "localizacao": "Romanos 8:26-27"
    },
    {
      "versiculo": "Três vezes roguei ao Senhor que o tirasse de mim. Mas ele me disse: \"Minha graça é suficiente a você, pois o meu poder se aperfeiçoa na fraqueza\". Portanto, eu me gloriarei ainda mais alegremente em minhas fraquezas, para que o poder de Cristo repouse em mim.",
      "localizacao": "2 Coríntios 12:8-9"
    },
    {
      "versiculo": "Àquele que é capaz de fazer infinitamente mais do que tudo o que pedimos ou pensamos, de acordo com o seu poder que atua em nós,",
      "localizacao": "Efésios 3:20"
    },
    {
      "versiculo": "Orem no Espírito em todas as ocasiões, com toda oração e súplica; tendo isso em mente, estejam atentos e perseverem na oração por todos os santos.",
      "localizacao": "Efésios 6:18"
    },
    {
      "versiculo": "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.",
      "localizacao": "Filipenses 4:19"
    },
    {
      "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
      "localizacao": "Filipenses 4:6"
    },
    {
      "versiculo": "Orem continuamente.",
      "localizacao": "1 Tessalonicenses 5:17"
    },
    {
      "versiculo": "Quero, pois, que os homens orem em todo lugar, levantando mãos santas, sem ira e sem discussões.",
      "localizacao": "1 Timóteo 2:8"
    },
    {
      "versiculo": "Assim, aproximemo-nos do trono da graça com toda a confiança, a fim de recebermos misericórdia e encontrarmos graça que nos ajude no momento da necessidade.",
      "localizacao": "Hebreus 4:16"
    },
    {
      "versiculo": "Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente, de boa vontade; e lhe será concedida. Peça-a, porém, com fé, sem duvidar, pois aquele que duvida é semelhante à onda do mar, levada e agitada pelo vento. Não pense tal pessoa que receberá coisa alguma do Senhor, pois tem mente dividida e é instável em tudo o que faz.",
      "localizacao": "Tiago 1:5-8"
    },
    {
      "versiculo": "Certamente ele tomou sobre si as nossas enfermidades e sobre si levou as nossas doenças; contudo nós o consideramos castigado por Deus, por Deus atingido e afligido. Mas ele foi traspassado por causa das nossas transgressões, foi esmagado por causa de nossas iniquidades; o castigo que nos trouxe paz estava sobre ele, e pelas suas feridas fomos curados.",
      "localizacao": "Isaías 53:4-5"
    },
    {
      "versiculo": "Cura-me, Senhor, e serei curado; salva-me, e serei salvo, pois tu és aquele a quem eu louvo.",
      "localizacao": "Jeremias 17:14"
    },
    {
      "versiculo": "Ele enviou a sua palavra e os curou, e os livrou da morte.",
      "localizacao": "Salmos 107:20"
    },
    {
      "versiculo": "Curem os enfermos, ressuscitem os mortos, purifiquem os leprosos, expulsem os demônios. Vocês receberam de graça; deem também de graça.",
      "localizacao": "Mateus 10:8"
    },
    {
      "versiculo": "Ele mesmo levou em seu corpo os nossos pecados sobre o madeiro, a fim de que morrêssemos para os pecados e vivêssemos para a justiça; por suas feridas vocês foram curados.",
      "localizacao": "1 Pedro 2:24"
    },
    {
      "versiculo": "dizendo-lhes: \"Se vocês derem atenção ao Senhor, o seu Deus, e fizerem o que ele aprova, se derem ouvidos aos seus mandamentos e obedecerem a todos os seus decretos, não trarei sobre vocês nenhuma das doenças que eu trouxe sobre os egípcios, pois eu sou o Senhor que os cura\".",
      "localizacao": "Êxodo 15:26"
    },
    {
      "versiculo": "Senhor meu Deus, a ti clamei por socorro, e tu me curaste.",
      "localizacao": "Salmos 30:2"
    },
    {
      "versiculo": "Todavia, trarei restauração e cura para ela; curarei o meu povo e lhe darei muita prosperidade e segurança.",
      "localizacao": "Jeremias 33:6"
    },
    {
      "versiculo": "Entre vocês há alguém que está doente? Que ele mande chamar os presbíteros da igreja, para que estes orem sobre ele e o unjam com óleo, em nome do Senhor. A oração feita com fé curará o doente; o Senhor o levantará. E, se houver cometido pecados, ele será perdoado.",
      "localizacao": "Tiago 5:14-15"
    },
    {
      "versiculo": "Só ele cura os de coração quebrantado e cuida das suas feridas.",
      "localizacao": "Salmos 147:3"
    },
    {
      "versiculo": "É ele que perdoa todos os seus pecados e cura todas as suas doenças,",
      "localizacao": "Salmos 103:3"
    },
    {
      "versiculo": "Jesus ia passando por todas as cidades e povoados, ensinando nas sinagogas, pregando as boas-novas do Reino e curando todas as enfermidades e doenças.",
      "localizacao": "Mateus 9:35"
    },
    {
      "versiculo": "Jesus foi por toda a Galileia, ensinando nas sinagogas deles, pregando as boas-novas do Reino e curando todas as enfermidades e doenças entre o povo.",
      "localizacao": "Mateus 4:23"
    },
    {
      "versiculo": "Prestem culto ao Senhor, o Deus de vocês, e ele os abençoará, dando a vocês alimento e água. Tirarei a doença do meio de vocês.",
      "localizacao": "Êxodo 23:25"
    },
    {
      "versiculo": "Então ele lhe disse: \"Filha, a sua fé a curou! Vá em paz e fique livre do seu sofrimento\".",
      "localizacao": "Marcos 5:34"
    },
    {
      "versiculo": "O Senhor o susterá em seu leito de enfermidade, e da doença o restaurará.",
      "localizacao": "Salmos 41:3"
    },
    {
      "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja apto e plenamente preparado para toda boa obra.",
      "localizacao": "2 Timóteo 3:16-17"
    },
    {
      "versiculo": "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
      "localizacao": "Salmos 119:105"
    },
    {
      "versiculo": "Pois a palavra de Deus é viva e eficaz, e mais afiada que qualquer espada de dois gumes; ela penetra até o ponto de dividir alma e espírito, juntas e medulas, e julga os pensamentos e as intenções do coração.",
      "localizacao": "Hebreus 4:12"
    },
    {
      "versiculo": "Jesus respondeu: \"Está escrito: 'Nem só de pão viverá o homem, mas de toda palavra que procede da boca de Deus'\".",
      "localizacao": "Mateus 4:4"
    },
    {
      "versiculo": "Guardei no coração a tua palavra para não pecar contra ti.",
      "localizacao": "Salmos 119:11"
    },
    {
      "versiculo": "Santifica-os na verdade; a tua palavra é a verdade.",
      "localizacao": "João 17:17"
    },
    {
      "versiculo": "A tua palavra, Senhor, para sempre está firmada nos céus.",
      "localizacao": "Salmos 119:89"
    },
    {
      "versiculo": "Cada palavra de Deus é comprovadamente pura; ele é um escudo para quem nele se refugia.",
      "localizacao": "Provérbios 30:5"
    },
    {
      "versiculo": "Jesus respondeu: \"Está escrito: 'Nem só de pão viverá o homem'\".",
      "localizacao": "Lucas 4:4"
    },
    {
      "versiculo": "\"Não é a minha palavra como o fogo\", pergunta o Senhor, \"e como um martelo que despedaça a rocha?",
      "localizacao": "Jeremias 23:29"
    },
    {
      "versiculo": "Santifica-os na verdade; a tua palavra é a verdade.",
      "localizacao": "João 17:17"
    },
    {
      "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça,",
      "localizacao": "2 Timóteo 3:16"
    },
    {
      "versiculo": "Sejam praticantes da palavra, e não apenas ouvintes, enganando vocês mesmos.",
      "localizacao": "Tiago 1:22"
    },
    {
      "versiculo": "Não deixe de falar as palavras deste Livro da Lei e de meditar nelas de dia e de noite, para que você cumpra fielmente tudo o que nele está escrito. Só então os seus caminhos prosperarão e você será bem-sucedido.",
      "localizacao": "Josué 1:8"
    },
    {
      "versiculo": "Pois a palavra do Senhor é verdadeira; ele é fiel em tudo o que faz.",
      "localizacao": "Salmos 33:4"
    },
    {
      "versiculo": "Quando as tuas palavras foram encontradas, eu as comi; elas são a minha alegria e o meu júbilo, pois pertenço a ti, Senhor Deus dos Exércitos.",
      "localizacao": "Jeremias 15:16"
    },
    {
      "versiculo": "Usem o capacete da salvação e a espada do Espírito, que é a palavra de Deus.",
      "localizacao": "Efésios 6:17"
    },
    {
      "versiculo": "Uma esposa exemplar; feliz quem a encontrar! É muito mais valiosa que os rubis. Seu marido tem plena confiança nela e nunca lhe falta coisa alguma.",
      "localizacao": "Provérbios 31:10-11"
    },
    {
      "versiculo": "Agora, minha filha, não tenha medo; farei por você tudo o que me pedir. Todos os meus concidadãos sabem que você é mulher virtuosa.",
      "localizacao": "Rute 3:11"
    },
    {
      "versiculo": "A beleza é enganosa, e a formosura é passageira; mas a mulher que teme o Senhor será elogiada.",
      "localizacao": "Provérbios 31:30"
    },
    {
      "versiculo": "A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua.",
      "localizacao": "Provérbios 14:1"
    },
    {
      "versiculo": "A mulher exemplar é a coroa do seu marido, mas a de comportamento vergonhoso é como câncer em seus ossos.",
      "localizacao": "Provérbios 12:4"
    },
    {
      "versiculo": "Casas e riquezas herdam-se dos pais, mas a esposa prudente vem do Senhor.",
      "localizacao": "Provérbios 19:14"
    },
    {
      "versiculo": "Da mesma forma, quero que as mulheres se vistam modestamente, com decência e discrição, não se adornando com tranças e com ouro, nem com pérolas ou com roupas caras, mas com boas obras, como convém a mulheres que declaram adorar a Deus.",
      "localizacao": "1 Timóteo 2:9-10"
    },
    {
      "versiculo": "Semelhantemente, ensine as mulheres mais velhas a serem reverentes na sua maneira de viver, a não serem caluniadoras nem escravizadas a muito vinho, mas a serem capazes de ensinar o que é bom. Assim, poderão orientar as mulheres mais jovens a amarem seus maridos e seus filhos,",
      "localizacao": "Tito 2:3-4"
    },
    {
      "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
      "localizacao": "Salmos 100:4"
    },
    {
      "versiculo": "Deem ao Senhor a glória devida ao seu nome e entrem nos seus átrios trazendo ofertas. Adorem o Senhor no esplendor da sua santidade; tremam diante dele todos os habitantes da terra. Digam entre as nações: \"O Senhor reina!\" Por isso firme está o mundo e não se abalará, e ele julgará os povos com justiça.",
      "localizacao": "Salmos 96:8-10"
    },
    {
      "versiculo": "mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
      "localizacao": "Isaías 40:31"
    },
    {
      "versiculo": "Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
      "localizacao": "Hebreus 13:15"
    },
    {
      "versiculo": "No entanto, está chegando a hora, e de fato já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. São estes os adoradores que o Pai procura. Deus é espírito, e é necessário que os seus adoradores o adorem em espírito e em verdade\".",
      "localizacao": "João 4:23-24"
    },
    {
      "versiculo": "Aleluia! Louvem a Deus no seu santuário, louvem-no em seu magnífico firmamento. Louvem-no pelos seus feitos poderosos, louvem-no segundo a imensidão de sua grandeza! Tudo o que tem vida louve o Senhor! Aleluia!",
      "localizacao": "Salmos 150:1-2, 6"
    },
    {
      "versiculo": "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas. Pois o meu jugo é suave e o meu fardo é leve\".",
      "localizacao": "Mateus 11:28-30"
    },
    {
      "versiculo": "Venham! Cantemos ao Senhor com alegria! Aclamemos a Rocha da nossa salvação. Vamos à presença dele com ações de graças; vamos aclamá-lo com cânticos de louvor.",
      "localizacao": "Salmos 95:1-2"
    },
    {
      "versiculo": "Aleluia! Louvem o nome do Senhor; louvem-no, servos do Senhor, vocês, que servem na casa do Senhor, nos pátios da casa de nosso Deus. Louvem o Senhor, pois o Senhor é bom; cantem louvores ao seu nome, pois é nome amável.",
      "localizacao": "Salmos 135:1-3"
    },
    {
      "versiculo": "Venham! Adoremos prostrados e ajoelhemos diante do Senhor, o nosso Criador; pois ele é o nosso Deus, e nós somos o povo do seu pastoreio, o rebanho que ele conduz. Hoje, se vocês ouvirem a sua voz,",
      "localizacao": "Salmos 95:6-7"
    },
    {
      "versiculo": "Não deixemos de reunir-nos como igreja, segundo o costume de alguns, mas procuremos encorajar-nos uns aos outros, ainda mais quando vocês veem que se aproxima o Dia.",
      "localizacao": "Hebreus 10:25"
    },
    {
      "versiculo": "Todos os dias, continuavam a reunir-se no pátio do templo. Partiam o pão em casa e juntos participavam das refeições, com alegria e sinceridade de coração, louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava diariamente os que iam sendo salvos.",
      "localizacao": "Atos dos Apóstolos 2:46-47"
    },
    {
      "versiculo": "\"Venham, todos vocês que estão com sede, venham às águas; e vocês que não possuem dinheiro algum, venham, comprem e comam! Venham, comprem vinho e leite sem dinheiro e sem custo.",
      "localizacao": "Isaías 55:1"
    },
    {
      "versiculo": "Aleluia! Cantem ao Senhor uma nova canção, louvem-no na assembleia dos fiéis.",
      "localizacao": "Salmos 149:1"
    },
    {
      "versiculo": "Uma coisa pedi ao Senhor e a procuro: que eu possa viver na casa do Senhor todos os dias da minha vida, para contemplar a bondade do Senhor e buscar sua orientação no seu templo.",
      "localizacao": "Salmos 27:4"
    },
    {
      "versiculo": "Como são felizes aqueles que escolhes e trazes a ti para que vivam nos teus átrios! Transbordamos de bênçãos da tua casa, do teu santo templo!",
      "localizacao": "Salmos 65:4"
    },
    {
      "versiculo": "As tuas mãos me fizeram e me formaram; dá-me entendimento para aprender os teus mandamentos.",
      "localizacao": "Salmos 119:73"
    },
    {
      "versiculo": "Melhor é um dia nos teus átrios do que mil noutro lugar; prefiro ficar à porta da casa do meu Deus a habitar nas tendas dos ímpios.",
      "localizacao": "Salmos 84:10"
    },
    {
      "versiculo": "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
      "localizacao": "Salmos 119:105"
    },
    {
      "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja apto e plenamente preparado para toda boa obra.",
      "localizacao": "2 Timóteo 3:16-17"
    },
    {
      "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
      "localizacao": "Jeremias 29:11"
    },
    {
      "versiculo": "Por que você está assim tão triste, ó minha alma? Por que está assim tão perturbada dentro de mim?Ponha a sua esperança em Deus!  Pois ainda o louvarei; ele é o meu Salvador e o meu Deus.",
      "localizacao": "Salmos 42:11"
    },
    {
      "versiculo": "Como é feliz aquele cujo auxílio é o Deus de Jacó, cuja esperança está no Senhor, no seu Deus,",
      "localizacao": "Salmos 146:5"
    },
    {
      "versiculo": "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo.",
      "localizacao": "Romanos 15:13"
    },
    {
      "versiculo": "Oro também para que os olhos do coração de vocês sejam iluminados, a fim de que vocês conheçam a esperança para a qual ele os chamou, as riquezas da gloriosa herança dele nos santos",
      "localizacao": "Efésios 1:18"
    },
    {
      "versiculo": "Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo, por meio de quem obtivemos acesso pela fé a esta graça na qual agora estamos firmes; e nos gloriamos na esperança da glória de Deus.",
      "localizacao": "Romanos 5:1-2"
    },
    {
      "versiculo": "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo! Conforme a sua grande misericórdia, ele nos regenerou para uma esperança viva, por meio da ressurreição de Jesus Cristo dentre os mortos,",
      "localizacao": "1 Pedro 1:3"
    },
    {
      "versiculo": "Ele o fez a fim de que, justificados por sua graça, nos tornemos seus herdeiros, tendo a esperança da vida eterna.",
      "localizacao": "Tito 3:7"
    },
    {
      "versiculo": "Irmãos, não queremos que vocês sejam ignorantes quanto aos que dormem, para que não se entristeçam como os outros que não têm esperança. Se cremos que Jesus morreu e ressurgiu, cremos também que Deus trará, mediante Jesus e com ele, aqueles que nele dormiram.",
      "localizacao": "1 Tessalonicenses 4:13-14"
    },
    {
      "versiculo": "Pois nessa esperança fomos salvos. Mas esperança que se vê não é esperança. Quem espera por aquilo que está vendo? Mas, se esperamos o que ainda não vemos, aguardamo-lo pacientemente.",
      "localizacao": "Romanos 8:24-25"
    },
    {
      "versiculo": "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.",
      "localizacao": "Romanos 12:12"
    },
    {
      "versiculo": "E a esperança não nos decepciona, porque Deus derramou seu amor em nossos corações, por meio do Espírito Santo que ele nos concedeu.",
      "localizacao": "Romanos 5:5"
    },
    {
      "versiculo": "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
      "localizacao": "Hebreus 11:1"
    },
    {
      "versiculo": "pois temos ouvido falar da fé que vocês têm em Cristo Jesus e do amor que têm por todos os santos, por causa da esperança que está reservada a vocês nos céus, a respeito da qual ouviram por meio da palavra da verdade, o evangelho",
      "localizacao": "Colossenses 1:4-5"
    },
    {
      "versiculo": "Portanto, visto que temos tal esperança, mostramos muita confiança.",
      "localizacao": "2 Coríntios 3:12"
    },
    {
      "versiculo": "De manhã ouves, Senhor, o meu clamor; de manhã te apresento a minha oração e aguardo com esperança.",
      "localizacao": "Salmos 5:3"
    },
    {
      "versiculo": "Mas os pobres nunca serão esquecidos, nem se frustrará a esperança dos necessitados.",
      "localizacao": "Salmos 9:18"
    },
    {
      "versiculo": "O cavalo é vã esperança de vitória; apesar da sua grande força, é incapaz de salvar. Mas o Senhor protege aqueles que o temem, aqueles que firmam a esperança no seu amor, para livrá-los da morte e garantir-lhes vida, mesmo em tempos de fome.",
      "localizacao": "Salmos 33:17-19"
    },
    {
      "versiculo": "Mas agora, Senhor, que hei de esperar? Minha esperança está em ti.",
      "localizacao": "Salmos 39:7"
    },
    {
      "versiculo": "Estou quase desfalecido, aguardando a tua salvação, mas na tua palavra depositei a minha esperança.",
      "localizacao": "Salmos 119:81"
    },
    {
      "versiculo": "A esperança que se retarda deixa o coração doente, mas o anseio satisfeito é árvore de vida.",
      "localizacao": "Provérbios 13:12"
    },
    {
      "versiculo": "Se trabalhamos e lutamos é porque temos depositado a nossa esperança no Deus vivo, o Salvador de todos os homens, especialmente dos que creem.",
      "localizacao": "1 Timóteo 4:10"
    },
    {
      "versiculo": "Ordene aos que são ricos no presente mundo que não sejam arrogantes, nem ponham sua esperança na incerteza da riqueza, mas em Deus, que de tudo nos provê ricamente, para a nossa satisfação.",
      "localizacao": "1 Timóteo 6:17"
    },
    {
      "versiculo": "Apeguemo-nos com firmeza à esperança que professamos, pois aquele que prometeu é fiel.",
      "localizacao": "Hebreus 10:23"
    },
    {
      "versiculo": "Antes, santifiquem Cristo como Senhor em seu coração. Estejam sempre preparados para responder a qualquer pessoa que pedir a razão da esperança que há em vocês.",
      "localizacao": "1 Pedro 3:15"
    },
    {
      "versiculo": "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
      "localizacao": "2 Coríntios 9:7"
    },
    {
      "versiculo": "Honre o Senhor com todos os seus recursos e com os primeiros frutos de todas as suas plantações; os seus celeiros ficarão plenamente cheios, e os seus barris transbordarão de vinho.",
      "localizacao": "Provérbios 3:9-10"
    },
    {
      "versiculo": "Por meio de Jesus, portanto, ofereçamos continuamente a Deus um sacrifício de louvor, que é fruto de lábios que confessam o seu nome.",
      "localizacao": "Hebreus 13:15"
    },
    {
      "versiculo": "Portanto, irmãos, rogo pelas misericórdias de Deus que se ofereçam em sacrifício vivo, santo e agradável a Deus; este é o culto racional de vocês.",
      "localizacao": "Romanos 12:1"
    },
    {
      "versiculo": "Jesus olhou e viu os ricos colocando suas contribuições nas caixas de ofertas. Viu também uma viúva pobre colocar duas pequeninas moedas de cobre. E disse: \"Afirmo que esta viúva pobre colocou mais do que todos os outros. Todos esses deram do que lhes sobrava; mas ela, da sua pobreza, deu tudo o que possuía para viver\".",
      "localizacao": "Lucas 21:1-4"
    },
    {
      "versiculo": "Em tudo o que fiz, mostrei a vocês que mediante trabalho árduo devemos ajudar os fracos, lembrando as palavras do próprio Senhor Jesus, que disse: 'Há maior felicidade em dar do que em receber' \".",
      "localizacao": "Atos dos Apóstolos 20:35"
    },
    {
      "versiculo": "Ao entrarem na casa, viram o menino com Maria, sua mãe, e, prostrando-se, o adoraram. Então abriram os seus tesouros e lhe deram presentes: ouro, incenso e mirra.",
      "localizacao": "Mateus 2:11"
    },
    {
      "versiculo": "\"Diga aos israelitas que me tragam uma oferta. Receba-a de todo aquele cujo coração o compelir a dar.",
      "localizacao": "Êxodo 25:2"
    },
    {
      "versiculo": "Aceita, Senhor, a oferta de louvor dos meus lábios, e ensina-me as tuas ordenanças.",
      "localizacao": "Salmos 119:108"
    },
    {
      "versiculo": "Há quem dê generosamente, e vê aumentar suas riquezas; outros retêm o que deveriam dar, e caem na pobreza.",
      "localizacao": "Provérbios 11:24"
    },
    {
      "versiculo": "Recebi tudo, e o que tenho é mais que suficiente. Estou amplamente suprido, agora que recebi de Epafrodito os donativos que vocês enviaram. São uma oferta de aroma suave, um sacrifício aceitável e agradável a Deus.",
      "localizacao": "Filipenses 4:18"
    },
    {
      "versiculo": "Os discípulos, cada um segundo as suas possibilidades, decidiram providenciar ajuda para os irmãos que viviam na Judeia. E o fizeram, enviando suas ofertas aos presbíteros pelas mãos de Barnabé e Saulo.",
      "localizacao": "Atos dos Apóstolos 11:29-30"
    },
    {
      "versiculo": "Da multidão dos que creram, uma era a mente e um o coração. Ninguém considerava unicamente sua coisa alguma que possuísse, mas compartilhavam tudo o que tinham. Com grande poder os apóstolos continuavam a testemunhar da ressurreição do Senhor Jesus, e grandiosa graça estava sobre todos eles.",
      "localizacao": "Atos dos Apóstolos 4:32-33"
    },
    {
      "versiculo": "Outro anjo, que trazia um incensário de ouro, aproximou-se e ficou em pé junto ao altar. A ele foi dado muito incenso para oferecer com as orações de todos os santos sobre o altar de ouro diante do trono. E da mão do anjo subiu diante de Deus a fumaça do incenso com as orações dos santos.",
      "localizacao": "Apocalipse 8:3-4"
    },
    {
      "versiculo": "E bendito seja o Deus Altíssimo, que entregou seus inimigos em suas mãos\". E Abrão lhe deu o dízimo de tudo.",
      "localizacao": "Gênesis 14:20"
    },
    {
      "versiculo": "\"Todos os dízimos da terra - seja dos cereais, seja das frutas - pertencem ao Senhor; são consagrados ao Senhor. Se um homem desejar resgatar parte do seu dízimo, terá que acrescentar um quinto ao seu valor. O dízimo dos seus rebanhos, um de cada dez animais que passem debaixo da vara do pastor, será consagrado ao Senhor.",
      "localizacao": "Levítico 27:30-32"
    },
    {
      "versiculo": "\"Dou aos levitas todos os dízimos em Israel como retribuição pelo trabalho que fazem ao servirem na Tenda do Encontro.",
      "localizacao": "Números 18:21"
    },
    {
      "versiculo": "\"Separem o dízimo de tudo o que a terra produzir anualmente.",
      "localizacao": "Deuteronômio 14:22"
    },
    {
      "versiculo": "Deem e será dado a vocês: uma boa medida, calcada, sacudida e transbordante será dada a vocês. Pois a medida que usarem também será usada para medir vocês\".",
      "localizacao": "Lucas 6:38"
    },
    {
      "versiculo": "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.c",
      "localizacao": "2 Coríntios 9:7"
    },
    {
      "versiculo": "Vocês não sabem que aqueles que trabalham no templo alimentam-se das coisas do templo, e que os que servem diante do altar participam do que é oferecido no altar? Da mesma forma, o Senhor ordenou àqueles que pregam o evangelho que vivam do evangelho.",
      "localizacao": "1 Coríntios 9:13-14"
    },
    {
      "versiculo": "Tragam o dízimo todo ao depósito do templo, para que haja alimento em minha casa. Ponham-me à prova\", diz o Senhor dos Exércitos, \"e vejam se não vou abrir as comportas dos céus e derramar sobre vocês tantas bênçãos que nem terão onde guardá-las.",
      "localizacao": "Malaquias 3:10"
    },
    {
      "versiculo": "\"Pode um homem roubar de Deus? Contudo vocês estão me roubando. E ainda perguntam: 'Como é que te roubamos?' Nos dízimos e nas ofertas.",
      "localizacao": "Malaquias 3:8"
    },
    {
      "versiculo": "\"Ai de vocês, mestres da lei e fariseus, hipócritas! Vocês dão o dízimo da hortelã, do endro e do cominho, mas têm negligenciado os preceitos mais importantes da lei: a justiça, a misericórdia e a fidelidade. Vocês devem praticar estas coisas, sem omitir aquelas.",
      "localizacao": "Mateus 23:23"
    },
    {
      "versiculo": "Honre o Senhor com todos os seus recursos e com os primeiros frutos de todas as suas plantações;",
      "localizacao": "Provérbios 3:9"
    },
    {
      "versiculo": "Do Senhor é a terra e tudo o que nela existe, o mundo e os que nele vivem;",
      "localizacao": "Salmos 24:1"
    },
    {
      "versiculo": "Deem ao Senhor a glória devida ao seu nome e entrem nos seus átrios trazendo ofertas.",
      "localizacao": "Salmos 96:8"
    },
    {
      "versiculo": "Tudo posso naquele que me fortalece.",
      "localizacao": "Filipenses 4:13"
    },
    {
      "versiculo": "O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?",
      "localizacao": "Salmos 27:1"
    },
    {
      "versiculo": "Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes.",
      "localizacao": "1 Coríntios 16:13"
    },
    {
      "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
      "localizacao": "Deuteronômio 31:6"
    },
    {
      "versiculo": "pois o Senhor, o seu Deus, os acompanhará e lutará por vocês contra os seus inimigos, para dar a vitória a vocês'.",
      "localizacao": "Deuteronômio 20:4"
    },
    {
      "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      "localizacao": "Isaías 41:10"
    },
    {
      "versiculo": "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
      "localizacao": "Mateus 11:28"
    },
    {
      "versiculo": "Mas ele me disse: \"Minha graça é suficiente a você, pois o meu poder se aperfeiçoa na fraqueza\". Portanto, eu me gloriarei ainda mais alegremente em minhas fraquezas, para que o poder de Cristo repouse em mim. Por isso, por amor de Cristo, regozijo-me nas fraquezas, nos insultos, nas necessidades, nas perseguições, nas angústias. Pois, quando sou fraco, é que sou forte.",
      "localizacao": "2 Coríntios 12:9-10"
    },
    {
      "versiculo": "mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
      "localizacao": "Isaías 40:31"
    },
    {
      "versiculo": "Sejam fortes e corajosos, todos vocês que esperam no Senhor!",
      "localizacao": "Salmos 31:24"
    },
    {
      "versiculo": "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar\".",
      "localizacao": "Josué 1:9c"
    },
    {
      "versiculo": "Mas, sejam fortes e não desanimem, pois o trabalho de vocês será recompensado\".",
      "localizacao": "2 Crônicas 15:7"
    },
    {
      "versiculo": "Davi ficou profundamente angustiado, pois os homens falavam em apedrejá-lo; todos estavam amargurados por causa de seus filhos e de suas filhas. Davi, porém, fortaleceu-se no Senhor, o seu Deus.",
      "localizacao": "1 Samuel 30:6"
    },
    {
      "versiculo": "Espere no Senhor. Seja forte! Coragem! Espere no Senhor.",
      "localizacao": "Salmos 27:14"
    },
    {
      "versiculo": "O Senhor é a minha força e o meu escudo; nele o meu coração confia, e dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças.",
      "localizacao": "Salmos 28:7"
    },
    {
      "versiculo": "O meu corpo e o meu coração poderão fraquejar, mas Deus é a força do meu coração e a minha herança para sempre.",
      "localizacao": "Salmos 73:26"
    },
    {
      "versiculo": "Ó minha força, canto louvores a ti; tu és, ó Deus, o meu alto refúgio, o Deus que me ama.",
      "localizacao": "Salmos 59:17"
    },
    {
      "versiculo": "Finalmente, fortaleçam-se no Senhor e no seu forte poder.",
      "localizacao": "Efésios 6:10"
    },
    {
      "versiculo": "Ele fortalece o cansado e dá grande vigor ao que está sem forças.",
      "localizacao": "Isaías 40:29"
    },
    {
      "versiculo": "Vocês, orem assim:\"Pai nosso, que estás nos céus! Santificado seja o teu nome. Venha o teu Reino; seja feita a tua vontade, assim na terra como no céu.",
      "localizacao": "Mateus 6:9-10"
    },
    {
      "versiculo": "Ele lhes disse: \"Quando vocês orarem, digam: \"Pai! Santificado seja o teu nome. Venha o teu Reino. Dá-nos cada dia o nosso pão cotidiano. Perdoa-nos os nossos pecados, pois também perdoamos a todos os que nos devem. E não nos deixes cair em tentação\".",
      "localizacao": "Lucas 11:2-4"
    },
    {
      "versiculo": "Como podemos ser suficientemente gratos a Deus por vocês, por toda a alegria que temos diante dele por causa de vocês?",
      "localizacao": "1 Tessalonicenses 3:9"
    },
    {
      "versiculo": "Deem ao Senhor, ó famílias das nações, deem ao Senhor glória e força!",
      "localizacao": "1 Crônicas 16:28"
    },
    {
      "versiculo": "Todos recebemos da sua plenitude, graça sobre graça.",
      "localizacao": "João 1:16"
    },
    {
      "versiculo": "Os filhos são herança do Senhor, uma recompensa que ele dá. Como flechas nas mãos do guerreiro são os filhos nascidos na juventude. Como é feliz o homem que tem a sua aljava cheia deles! Não será humilhado quando enfrentar seus inimigos no tribunal.",
      "localizacao": "Salmos 127:3-5"
    },
    {
      "versiculo": "Era este menino que eu pedia, e o Senhor concedeu-me o pedido.",
      "localizacao": "1 Samuel 1:27"
    },
    {
      "versiculo": "As mulheres disseram a Noemi: \"Louvado seja o Senhor, que hoje não a deixou sem resgatador! Que o seu nome seja celebrado em Israel! O menino dará a você nova vida e a sustentará na velhice, pois é filho da sua nora, que a ama e que é melhor do que sete filhos para você!\"",
      "localizacao": "Rute 4:14-15"
    },
    {
      "versiculo": "Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes, que não muda como sombras inconstantes.",
      "localizacao": "Tiago 1:17"
    },
    {
      "versiculo": "Agradeço a meu Deus toda vez que me lembro de vocês.",
      "localizacao": "Filipenses 1:3"
    },
    {
      "versiculo": "Bendiga o Senhor a minha alma! Bendiga o Senhor todo o meu ser! Bendiga o Senhor a minha alma! Não esqueça nenhuma de suas bênçãos!",
      "localizacao": "Salmos 103:1-2"
    },
    {
      "versiculo": "Os filhos dos filhos são uma coroa para os idosos, e os pais são o orgulho dos seus filhos.",
      "localizacao": "Provérbios 17:6"
    },
    {
      "versiculo": "Os vivos, somente os vivos, te louvam, como hoje estou fazendo; os pais contam a tua fidelidade a seus filhos.",
      "localizacao": "Isaías 38:19"
    },
    {
      "versiculo": "Não os esconderemos dos nossos filhos; contaremos à próxima geração os louváveis feitos do Senhor, o seu poder e as maravilhas que fez.",
      "localizacao": "Salmos 78:4"
    },
    {
      "versiculo": "Agora, nosso Deus, damos-te graças, e louvamos o teu glorioso nome.",
      "localizacao": "1 Crônicas 29:13"
    },
    {
      "versiculo": "O Senhor é a minha força e o meu escudo; nele o meu coração confia, e dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças.",
      "localizacao": "Salmos 28:7"
    },
    {
      "versiculo": "Vamos à presença dele com ações de graças; vamos aclamá-lo com cânticos de louvor.",
      "localizacao": "Salmos 95:2"
    },
    {
      "versiculo": "Louvarei o nome de Deus com cânticos e proclamarei sua grandeza com ações de graças;",
      "localizacao": "Salmos 69:30"
    },
    {
      "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
      "localizacao": "Salmos 100:4"
    },
    {
      "versiculo": "Aleluia! Deem graças ao Senhor porque ele é bom; o seu amor dura para sempre.",
      "localizacao": "Salmos 106:1"
    },
    {
      "versiculo": "Tu és o meu Deus; graças te darei! Ó meu Deus, eu te exaltarei!",
      "localizacao": "Salmos 118:28"
    },
    {
      "versiculo": "Cantem ao Senhor com ações de graças; ao som da harpa façam música para o nosso Deus.",
      "localizacao": "Salmos 147:7"
    },
    {
      "versiculo": "Tomando os cinco pães e os dois peixes e, olhando para o céu, deu graças e partiu os pães. Em seguida, entregou-os aos seus discípulos para que os servissem ao povo. E também dividiu os dois peixes entre todos eles. Todos comeram e ficaram satisfeitos, e os discípulos recolheram doze cestos cheios de pedaços de pão e de peixe.",
      "localizacao": "Marcos 6:41-43"
    },
    {
      "versiculo": "Sempre dou graças a meu Deus por vocês, por causa da graça que dele receberam em Cristo Jesus.",
      "localizacao": "1 Coríntios 1:4"
    },
    {
      "versiculo": "Mas graças a Deus, que nos dá a vitória por meio de nosso Senhor Jesus Cristo.",
      "localizacao": "1 Coríntios 15:57"
    },
    {
      "versiculo": "Mas graças a Deus, que sempre nos conduz vitoriosamente em Cristo e por nosso intermédio exala em todo lugar a fragrância do seu conhecimento;",
      "localizacao": "2 Coríntios 2:14"
    },
    {
      "versiculo": "Aquele que supre a semente ao que semeia e o pão ao que come também lhes suprirá e multiplicará a semente e fará crescer os frutos da sua justiça. Vocês serão enriquecidos de todas as formas, para que possam ser generosos em qualquer ocasião e, por nosso intermédio, a sua generosidade resulte em ação de graças a Deus.",
      "localizacao": "2 Coríntios 9:10-11"
    },
    {
      "versiculo": "falando entre vocês com salmos, hinos e cânticos espirituais, cantando e louvando de coração ao Senhor, dando graças constantemente a Deus Pai por todas as coisas, em nome de nosso Senhor Jesus Cristo. Sujeitem-se uns aos outros, por temor a Cristo.",
      "localizacao": "Efésios 5:19-21"
    },
    {
      "versiculo": "Agradeço a meu Deus toda vez que me lembro de vocês.",
      "localizacao": "Filipenses 1:3"
    },
    {
      "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
      "localizacao": "Filipenses 4:6"
    },
    {
      "versiculo": "Tudo o que fizerem, seja em palavra seja em ação, façam-no em nome do Senhor Jesus, dando por meio dele graças a Deus Pai.",
      "localizacao": "Colossenses 3:17"
    },
    {
      "versiculo": "Sempre damos graças a Deus por todos vocês, mencionando-os em nossas orações. Lembramos continuamente, diante de nosso Deus e Pai, o que vocês têm demonstrado: o trabalho que resulta da fé, o esforço motivado pelo amor e a perseverança proveniente da esperança em nosso Senhor Jesus Cristo.",
      "localizacao": "1 Tessalonicenses 1:2-3"
    },
    {
      "versiculo": "Filhinhos, eu escrevi a vocês porque conhecem o Pai. Pais, eu escrevi a vocês porque conhecem aquele que é desde o princípio. Jovens, eu escrevi a vocês, porque são fortes, e em vocês a Palavra de Deus permanece, e vocês venceram o Maligno.",
      "localizacao": "1 João 2:14"
    },
    {
      "versiculo": "Como pode o jovem manter pura a sua conduta? Vivendo de acordo com a tua palavra.",
      "localizacao": "Salmos 119:9"
    },
    {
      "versiculo": "moços e moças, velhos e crianças. Louvem todos o nome do Senhor, pois somente o seu nome é exaltado; a sua majestade está acima da terra e dos céus.",
      "localizacao": "Salmos 148:12-13"
    },
    {
      "versiculo": "É bom que o homem suporte o jugo enquanto é jovem.",
      "localizacao": "Lamentações 3:27"
    },
    {
      "versiculo": "Guardei no coração a tua palavra para não pecar contra ti.",
      "localizacao": "Salmos 119:11"
    },
    {
      "versiculo": "Alegre-se, jovem, na sua mocidade! Seja feliz o seu coração nos dias da sua juventude! Siga por onde seu coração mandar, até onde a sua vista alcançar; mas saiba que por todas essas coisas Deus o trará a julgamento.",
      "localizacao": "Eclesiastes 11:9"
    },
    {
      "versiculo": "Da mesma forma, jovens, sujeitem-se aos mais velhos. Sejam todos humildes uns para com os outros, porque \"Deus se opõe aos orgulhosos, mas concede graça aos humildes\". Portanto, humilhem-se debaixo da poderosa mão de Deus, para que ele os exalte no tempo devido.",
      "localizacao": "1 Pedro 5:5-6"
    },
    {
      "versiculo": "Filhos, obedeçam a seus pais no Senhor, pois isso é justo. \"Honra teu pai e tua mãe\" - este é o primeiro mandamento com promessa -",
      "localizacao": "Efésios 6:1-2"
    },
    {
      "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. Então vocês clamarão a mim, virão orar a mim, e eu os ouvirei. Vocês me procurarão e me acharão quando me procurarem de todo o coração. Eu me deixarei ser encontrado por vocês', declara o Senhor, 'e os trarei de volta do cativeiro. Eu os reunirei de todas as nações e de todos os lugares para onde eu os dispersei e os trarei de volta para o lugar de onde os deportei', diz o Senhor.",
      "localizacao": "Jeremias 29:11-14"
    },
    {
      "versiculo": "Até a criança mostra o que é por suas ações; o seu procedimento revelará se ela é pura e justa.",
      "localizacao": "Provérbios 20:11"
    },
    {
      "versiculo": "Lembre-se do seu Criador nos dias da sua juventude, antes que venham os dias difíceis e se aproximem os anos em que você dirá: \"Não tenho satisfação neles\"",
      "localizacao": "Eclesiastes 12:1"
    },
    {
      "versiculo": "Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza.",
      "localizacao": "1 Timóteo 4:12"
    },
    {
      "versiculo": "Ouça, meu filho, e seja sábio; guie o seu coração pelo bom caminho. Não ande com os que se encharcam de vinho, nem com os que se empanturram de carne. Pois os bêbados e os glutões se empobrecerão, e a sonolência os vestirá de trapos. Ouça o seu pai, que o gerou; não despreze sua mãe quando ela envelhecer.",
      "localizacao": "Provérbios 23:19-22"
    },
    {
      "versiculo": "Pois tu és a minha esperança, ó Soberano Senhor, em ti está a minha confiança desde a juventude.",
      "localizacao": "Salmos 71:5"
    },
    {
      "versiculo": "Não deixe de falar as palavras deste Livro da Lei e de meditar nelas de dia e de noite, para que você cumpra fielmente tudo o que nele está escrito. Só então os seus caminhos prosperarão e você será bem-sucedido. Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar\".",
      "localizacao": "Josué 1:7-9"
    },
    {
      "versiculo": "Comportemo-nos com decência, como quem age à luz do dia, não em orgias e bebedeiras, não em imoralidade sexual e depravação, não em desavença e inveja.",
      "localizacao": "Romanos 13:13"
    },
    {
      "versiculo": "Então Jesus veio da Galileia ao Jordão para ser batizado por João.",
      "localizacao": "Mateus 3:13"
    },
    {
      "versiculo": "Então, Jesus aproximou-se deles e disse: \"Foi-me dada toda a autoridade nos céus e na terra. Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos\".",
      "localizacao": "Mateus 28:18-20"
    },
    {
      "versiculo": "No entanto, quando Filipe lhes pregou as boas-novas do Reino de Deus e do nome de Jesus Cristo, creram nele e foram batizados, tanto homens como mulheres. O próprio Simão também creu e foi batizado, e seguia Filipe por toda parte, observando maravilhado os grandes sinais e milagres que eram realizados.",
      "localizacao": "Atos dos Apóstolos 8:12-13"
    },
    {
      "versiculo": "Pedro respondeu: \"Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo para perdão dos seus pecados, e receberão o dom do Espírito Santo.",
      "localizacao": "Atos dos Apóstolos 2:38"
    },
    {
      "versiculo": "E disse-lhes: \"Vão pelo mundo todo e preguem o evangelho a todas as pessoas. Quem crer e for batizado será salvo, mas quem não crer será condenado.",
      "localizacao": "Marcos 16:15-16"
    },
    {
      "versiculo": "Respondeu Jesus: \"Digo a verdade: Ninguém pode entrar no Reino de Deus se não nascer da água e do Espírito.",
      "localizacao": "João 3:5"
    },
    {
      "versiculo": "Pois em um só corpo todos nós fomos batizados em um único Espírito: quer judeus, quer gregos, quer escravos, quer livres. E a todos nós foi dado beber de um único Espírito.",
      "localizacao": "1 Coríntios 12:13"
    },
    {
      "versiculo": "Pois Cristo não me enviou para batizar, mas para pregar o evangelho, não porém com palavras de sabedoria humana, para que a cruz de Cristo não seja esvaziada.",
      "localizacao": "1 Coríntios 1:17"
    },
    {
      "versiculo": "Ouvindo isso, eles foram batizados no nome do Senhor Jesus.",
      "localizacao": "Atos dos Apóstolos 19:5"
    },
    {
      "versiculo": "Portanto, fomos sepultados com ele na morte por meio do batismo, a fim de que, assim como Cristo foi ressuscitado dos mortos mediante a glória do Pai, também nós vivamos uma vida nova. Se dessa forma fomos unidos a ele na semelhança da sua morte, certamente o seremos também na semelhança da sua ressurreição.",
      "localizacao": "Romanos 6:4-5"
    },
    {
      "versiculo": "Eu não o teria reconhecido se aquele que me enviou para batizar com água não me tivesse dito: 'Aquele sobre quem você vir o Espírito descer e permanecer, esse é o que batiza com o Espírito Santo'.",
      "localizacao": "João 1:33"
    },
    {
      "versiculo": "Pois João batizou com água, mas dentro de poucos dias vocês serão batizados com o Espírito Santo\".",
      "localizacao": "Atos dos Apóstolos 1:5"
    },
    {
      "versiculo": "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
      "localizacao": "1 Tessalonicenses 5:18"
    },
    {
      "versiculo": "Vamos à presença dele com ações de graças; vamos aclamá-lo com cânticos de louvor. Pois o Senhor é o grande Deus, o grande Rei acima de todos os deuses.",
      "localizacao": "Salmos 95:2-3"
    },
    {
      "versiculo": "Graças a Deus por seu dom indescritível!",
      "localizacao": "2 Coríntios 9:15"
    },
    {
      "versiculo": "Quem me oferece sua gratidão como sacrifício honra-me, e eu mostrarei a salvação de Deus ao que anda nos meus caminhos\".",
      "localizacao": "Salmos 50:23"
    },
    {
      "versiculo": "Dou graças a Deus, a quem sirvo com a consciência limpa, como o serviram os meus antepassados, ao lembrar-me constantemente de você, noite e dia, em minhas orações.",
      "localizacao": "2 Timóteo 1:3"
    },
    {
      "versiculo": "Sempre dou graças a meu Deus por vocês, por causa da graça que dele receberam em Cristo Jesus.",
      "localizacao": "1 Coríntios 1:4"
    },
    {
      "versiculo": "Antes de tudo, sou grato a meu Deus, mediante Jesus Cristo, por todos vocês, porque em todo o mundo está sendo anunciada a fé que vocês têm.",
      "localizacao": "Romanos 1:8"
    },
    {
      "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
      "localizacao": "Filipenses 4:6"
    },
    {
      "versiculo": "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz.",
      "localizacao": "Números 6:24-26"
    },
    {
      "versiculo": "dando graças constantemente a Deus Pai por todas as coisas, em nome de nosso Senhor Jesus Cristo.",
      "localizacao": "Efésios 5:20"
    },
    {
      "versiculo": "Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos. Habite ricamente em vocês a palavra de Cristo; ensinem e aconselhem-se uns aos outros com toda a sabedoria e cantem salmos, hinos e cânticos espirituais com gratidão a Deus em seu coração. Tudo o que fizerem, seja em palavra seja em ação, façam-no em nome do Senhor Jesus, dando por meio dele graças a Deus Pai.",
      "localizacao": "Colossenses 3:15-17"
    },
    {
      "versiculo": "Deem graças ao Senhor porque ele é bom; o seu amor dura para sempre.",
      "localizacao": "Salmos 107:1"
    },
    {
      "versiculo": "Jesus perguntou: \"Não foram purificados todos os dez? Onde estão os outros nove? Não se achou nenhum que voltasse e desse louvor a Deus, a não ser este estrangeiro?\" Então ele lhe disse: \"Levante-se e vá; a sua fé o salvou\".",
      "localizacao": "Lucas 17:17-19"
    },
    {
      "versiculo": "Mas eu, com um cântico de gratidão, oferecerei sacrifício a ti. O que eu prometi cumprirei totalmente. A salvação vem do Senhor\".",
      "localizacao": "Jonas 2:9"
    },
    {
      "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
      "localizacao": "Salmos 100:4"
    },
    {
      "versiculo": "porque, tendo conhecido a Deus, não o glorificaram como Deus, nem lhe renderam graças, mas os seus pensamentos tornaram-se fúteis e o coração insensato deles obscureceu-se.",
      "localizacao": "Romanos 1:21"
    },
    {
      "versiculo": "Portanto, já que estamos recebendo um Reino inabalável, sejamos agradecidos e, assim, adoremos a Deus de modo aceitável, com reverência e temor,",
      "localizacao": "Hebreus 12:28"
    },
    {
      "versiculo": "Agora, nosso Deus, damos-te graças, e louvamos o teu glorioso nome.",
      "localizacao": "1 Crônicas 29:13"
    },
    {
      "versiculo": "Tu és o meu Deus; graças te darei! Ó meu Deus, eu te exaltarei! Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre.",
      "localizacao": "Salmos 118:28-29"
    },
    {
      "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
      "localizacao": "Jeremias 29:11"
    },
    {
      "versiculo": "Por isso não desanimamos. Embora exteriormente estejamos a desgastar-nos, interiormente estamos sendo renovados dia após dia,",
      "localizacao": "2 Coríntios 4:16"
    },
    {
      "versiculo": "Estou convencido de que aquele que começou boa obra em vocês, vai completá-la até o dia de Cristo Jesus.",
      "localizacao": "Filipenses 1:6"
    },
    {
      "versiculo": "Quando clamei, tu me respondeste; deste-me força e coragem.",
      "localizacao": "Salmos 138:3"
    },
    {
      "versiculo": "Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.",
      "localizacao": "2 Timóteo 1:7"
    },
    {
      "versiculo": "O Senhor é a minha luz e a minha salvação; de quem terei temor? O Senhor é o meu forte refúgio; de quem terei medo?",
      "localizacao": "Salmos 27:1"
    },
    {
      "versiculo": "Tudo posso naquele que me fortalece.",
      "localizacao": "Filipenses 4:13"
    },
    {
      "versiculo": "Nisso vocês exultam, ainda que agora, por um pouco de tempo, devam ser entristecidos por todo tipo de provação.",
      "localizacao": "1 Pedro 1:6"
    },
    {
      "versiculo": "Por isso, irmãos, em toda a nossa necessidade e tribulação ficamos animados quando soubemos da sua fé;",
      "localizacao": "1 Tessalonicenses 3:7"
    },
    {
      "versiculo": "Do Senhor vem a salvação dos justos; ele é a sua fortaleza na hora da adversidade.",
      "localizacao": "Salmos 37:39"
    },
    {
      "versiculo": "Por isso, exortem-se e edifiquem-se uns aos outros, como de fato vocês estão fazendo.",
      "localizacao": "1 Tessalonicenses 5:11"
    },
    {
      "versiculo": "Então o povo respondeu: \"Longe de nós abandonar o Senhor para servir outros deuses! Foi o próprio Senhor, o nosso Deus, que nos tirou, a nós e a nossos pais, do Egito, daquela terra de escravidão, e realizou aquelas grandes maravilhas diante dos nossos olhos. Ele nos protegeu no caminho e entre as nações pelas quais passamos.",
      "localizacao": "Josué 24:16-17"
    },
    {
      "versiculo": "Anseio vê-los, a fim de compartilhar com vocês algum dom espiritual, para fortalecê-los, isto é, para que eu e vocês sejamos mutuamente encorajados pela fé.",
      "localizacao": "Romanos 1:11-12"
    },
    {
      "versiculo": "Na sua aflição, clamaram ao Senhor, e ele os tirou da tribulação em que se encontravam. Reduziu a tempestade a uma brisa e serenou as ondas. As ondas sossegaram, eles se alegraram, e Deus os guiou ao porto almejado.",
      "localizacao": "Salmos 107:28-30"
    },
    {
      "versiculo": "Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta.",
      "localizacao": "Mateus 7:7"
    },
    {
      "versiculo": "E tudo o que pedirem em oração, se crerem, vocês receberão\".",
      "localizacao": "Mateus 21:22"
    },
    {
      "versiculo": "Portanto, eu digo: Tudo o que vocês pedirem em oração, creiam que já o receberam, e assim sucederá.",
      "localizacao": "Marcos 11:24"
    },
    {
      "versiculo": "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei.",
      "localizacao": "João 14:13-14"
    },
    {
      "versiculo": "Ele respondeu: \"Essa espécie só sai pela oração e pelo jejum\".",
      "localizacao": "Marcos 9:29"
    },
    {
      "versiculo": "Pedro mandou que todos saíssem do quarto; depois, ajoelhou-se e orou. Voltando-se para a mulher morta, disse: \"Tabita, levante-se\". Ela abriu os olhos e, vendo Pedro, sentou-se.",
      "localizacao": "Atos dos Apóstolos 9:40"
    },
    {
      "versiculo": "Entre vocês há alguém que está doente? Que ele mande chamar os presbíteros da igreja, para que estes orem sobre ele e o unjam com óleo, em nome do Senhor. A oração feita com fé curará o doente; o Senhor o levantará. E, se houver cometido pecados, ele será perdoado. Portanto, confessem os seus pecados uns aos outros e orem uns pelos outros para serem curados. A oração de um justo é poderosa e eficaz.",
      "localizacao": "Tiago 5:14-16"
    },
    {
      "versiculo": "Orem no Espírito em todas as ocasiões, com toda oração e súplica; tendo isso em mente, estejam atentos e perseverem na oração por todos os santos.",
      "localizacao": "Efésios 6:18"
    },
    {
      "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.",
      "localizacao": "Filipenses 4:6-7"
    },
    {
      "versiculo": "Deus os abençoou e lhes disse: \"Sejam férteis e multipliquem-se! Encham e subjuguem a terra! Dominem sobre os peixes do mar, sobre as aves do céu e sobre todos os animais que se movem pela terra\".",
      "localizacao": "Gênesis 1:28"
    },
    {
      "versiculo": "Criou Deus o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou.",
      "localizacao": "Gênesis 1:27"
    },
    {
      "versiculo": "Então disse Deus: \"Façamos o homem à nossa imagem, conforme a nossa semelhança. Domine ele sobre os peixes do mar, sobre as aves do céu, sobre os grandes animais de toda a terra e sobre todos os pequenos animais que se movem rente ao chão\".",
      "localizacao": "Gênesis 1:26"
    },
    {
      "versiculo": "Então o Senhor Deus declarou: \"Não é bom que o homem esteja só; farei para ele alguém que o auxilie e lhe corresponda\".",
      "localizacao": "Gênesis 2:18"
    },
    {
      "versiculo": "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne.",
      "localizacao": "Gênesis 2:24"
    },
    {
      "versiculo": "Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.",
      "localizacao": "Provérbios 18:22"
    },
    {
      "versiculo": "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe\".",
      "localizacao": "Mateus 19:6"
    },
    {
      "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
      "localizacao": "1 Coríntios 13:4-7"
    },
    {
      "versiculo": "Não se ponham em jugo desigual com descrentes. Pois o que têm em comum a justiça e a maldade? Ou que comunhão pode ter a luz com as trevas?",
      "localizacao": "2 Coríntios 6:14"
    },
    {
      "versiculo": "Maridos, ame cada um a sua mulher, assim como Cristo amou a igreja e entregou-se por ela",
      "localizacao": "Efésios 5:25"
    },
    {
      "versiculo": "Da mesma forma, os maridos devem amar cada um a sua mulher como a seu próprio corpo. Quem ama sua mulher, ama a si mesmo. Além do mais, ninguém jamais odiou o seu próprio corpo, antes o alimenta e dele cuida, como também Cristo faz com a igreja,",
      "localizacao": "Efésios 5:28-29"
    },
    {
      "versiculo": "Nada façam por ambição egoísta ou por vaidade, mas humildemente considerem os outros superiores a vocês mesmos. Cada um cuide, não somente dos seus interesses, mas também dos interesses dos outros.",
      "localizacao": "Filipenses 2:3-4"
    },
    {
      "versiculo": "Livrem-se de toda amargura, indignação e ira, gritaria e calúnia, bem como de toda maldade. Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.",
      "localizacao": "Efésios 4:31-32"
    },
    {
      "versiculo": "No Senhor, todavia, a mulher não é independente do homem nem o homem independente da mulher.",
      "localizacao": "1 Coríntios 11:11"
    },
    {
      "versiculo": "O casamento deve ser honrado por todos; o leito conjugal, conservado puro; pois Deus julgará os imorais e os adúlteros.",
      "localizacao": "Hebreus 13:4"
    },
    {
      "versiculo": "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.",
      "localizacao": "Colossenses 3:14"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas.",
      "localizacao": "Eclesiastes 4:9"
    },
    {
      "versiculo": "Não foi o Senhor que os fez um só? Em corpo e em espírito eles lhe pertencem. E por que um só? Porque ele desejava uma descendência consagrada. Portanto, tenham cuidado: Ninguém seja infiel à mulher da sua mocidade.",
      "localizacao": "Malaquias 2:15"
    },
    {
      "versiculo": "Se vocês de fato obedecerem à lei do Reino encontrada na Escritura que diz: \"Ame o seu próximo como a si mesmo\", estarão agindo corretamente.",
      "localizacao": "Tiago 2:8"
    },
    {
      "versiculo": "O meu mandamento é este: Amem-se uns aos outros como eu os amei.",
      "localizacao": "João 15:12"
    },
    {
      "versiculo": "Vocês ouviram o que foi dito: 'Ame o seu próximo e odeie o seu inimigo'. Mas eu digo: Amem os seus inimigos e orem por aqueles que os perseguem,",
      "localizacao": "Mateus 5:43-44"
    },
    {
      "versiculo": "Amados, amemos uns aos outros, pois o amor procede de Deus. Aquele que ama é nascido de Deus e conhece a Deus. Quem não ama não conhece a Deus, porque Deus é amor.",
      "localizacao": "1 João 4:7-8"
    },
    {
      "versiculo": "Sobretudo, amem-se sinceramente uns aos outros, porque o amor perdoa muitíssimos pecados.",
      "localizacao": "1 Pedro 4:8"
    },
    {
      "versiculo": "Quem odeia seu irmão é assassino, e vocês sabem que nenhum assassino tem a vida eterna em si mesmo. Nisto conhecemos o que é o amor: Jesus Cristo deu a sua vida por nós, e devemos dar a nossa vida por nossos irmãos.",
      "localizacao": "1 João 3:15-16"
    },
    {
      "versiculo": "Nisto conhecemos o que é o amor: Jesus Cristo deu a sua vida por nós, e devemos dar a nossa vida por nossos irmãos.",
      "localizacao": "1 João 3:16"
    },
    {
      "versiculo": "Não devam nada a ninguém, a não ser o amor de uns pelos outros, pois aquele que ama seu próximo tem cumprido a Lei.",
      "localizacao": "Romanos 13:8"
    },
    {
      "versiculo": "Cada um de nós deve agradar ao seu próximo para o bem dele, a fim de edificá-lo.",
      "localizacao": "Romanos 15:2"
    },
    {
      "versiculo": "Seja constante o amor fraternal. Não se esqueçam da hospitalidade; foi praticando-a que, sem o saber, alguns acolheram anjos. Lembrem-se dos que estão na prisão, como se aprisionados com eles; dos que estão sendo maltratados, como se vocês mesmos estivessem sendo maltratados.",
      "localizacao": "Hebreus 13:1-3"
    },
    {
      "versiculo": "Portanto, como povo escolhido de Deus, santo e amado, revistam-se de profunda compaixão, bondade, humildade, mansidão e paciência. Suportem-se uns aos outros e perdoem as queixas que tiverem uns contra os outros. Perdoem como o Senhor lhes perdoou. Acima de tudo, porém, revistam-se do amor, que é o elo perfeito. Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos.",
      "localizacao": "Colossenses 3:12-15"
    },
    {
      "versiculo": "Que o Senhor faça crescer e transbordar o amor que vocês têm uns para com os outros e para com todos, a exemplo do nosso amor por vocês.",
      "localizacao": "1 Tessalonicenses 3:12"
    },
    {
      "versiculo": "Façam tudo com amor.",
      "localizacao": "1 Coríntios 16:14"
    },
    {
      "versiculo": "Esta é a mensagem que vocês ouviram desde o princípio: que nos amemos uns aos outros.",
      "localizacao": "1 João 3:11"
    },
    {
      "versiculo": "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz.",
      "localizacao": "Números 6:24-26"
    },
    {
      "versiculo": "Então, na juventude, os nossos filhos serão como plantas viçosas; as nossas filhas, como colunas esculpidas para ornar um palácio.",
      "localizacao": "Salmos 144:12"
    },
    {
      "versiculo": "Pois derramarei água na terra sedenta, e torrentes na terra seca; derramarei meu Espírito sobre sua prole e minha bênção sobre seus descendentes. Eles brotarão como relva nova, como salgueiros junto a regatos.",
      "localizacao": "Isaías 44:3-4"
    },
    {
      "versiculo": "Seus descendentes serão poderosos na terra, serão uma geração abençoada, de homens íntegros.",
      "localizacao": "Salmos 112:2"
    },
    {
      "versiculo": "Os filhos são herança do Senhor, uma recompensa que ele dá. Como flechas nas mãos do guerreiro são os filhos nascidos na juventude. Como é feliz o homem que tem a sua aljava cheia deles! Não será humilhado quando enfrentar seus inimigos no tribunal.",
      "localizacao": "Salmos 127:3-5"
    },
    {
      "versiculo": "Que Deus lhe conceda do céu o orvalho e da terra a riqueza, com muito cereal e muito vinho. Que as nações o sirvam e os povos se curvem diante de você. Seja senhor dos seus irmãos, e curvem-se diante de você os filhos de sua mãe. Malditos sejam os que o amaldiçoarem e benditos sejam os que o abençoarem\".",
      "localizacao": "Gênesis 27:28-29"
    },
    {
      "versiculo": "Todos os seus filhos serão ensinados pelo Senhor, e grande será a paz de suas crianças.",
      "localizacao": "Isaías 54:13"
    },
    {
      "versiculo": "Eles serão o meu povo, e eu serei o seu Deus. Darei a eles um só pensamento e uma só conduta, para que me temam durante toda a sua vida, para o seu próprio bem e o de seus filhos e descendentes.",
      "localizacao": "Jeremias 32:38-39"
    },
    {
      "versiculo": "Como é feliz quem teme o Senhor, quem anda em seus caminhos! Você comerá do fruto do seu trabalho e será feliz e próspero. Sua mulher será como videira frutífera em sua casa; seus filhos serão como brotos de oliveira ao redor da sua mesa. Assim será abençoado o homem que teme o Senhor!",
      "localizacao": "Salmos 128:1-4"
    },
    {
      "versiculo": "A mulher que está dando à luz sente dores, porque chegou a sua hora; mas, quando o bebê nasce, ela esquece a angústia, por causa da alegria de ter vindo ao mundo.",
      "localizacao": "João 16:21"
    },
    {
      "versiculo": "Provérbios de Salomão: O filho sábio dá alegria ao pai; o filho tolo dá tristeza à mãe.",
      "localizacao": "Provérbios 10:1"
    },
    {
      "versiculo": "Tu criaste o íntimo do meu ser e me teceste no ventre de minha mãe. Eu te louvo porque me fizeste de modo especial e admirável. Tuas obras são maravilhosas!Digo isso com convicção.",
      "localizacao": "Salmos 139:13-14"
    },
    {
      "versiculo": "Meus ossos não estavam escondidos de ti quando em secreto fui formado e entretecido como nas profundezas da terra. Os teus olhos viram o meu embrião; todos os dias determinados para mim foram escritos no teu livro antes de qualquer deles existir.",
      "localizacao": "Salmos 139:15-16"
    },
    {
      "versiculo": "\"Antes de formá-lo no ventre eu o escolhi; antes de você nascer, eu o separei e o designei profeta às nações\".",
      "localizacao": "Jeremias 1:5"
    },
    {
      "versiculo": "Desde que nasci fui entregue a ti; desde o ventre materno és o meu Deus.",
      "localizacao": "Salmos 22:10"
    },
    {
      "versiculo": "Vocês serão mais abençoados do que qualquer outro povo! Nenhum dos seus homens ou mulheres será estéril, nem mesmo os animais do seu rebanho.",
      "localizacao": "Deuteronômio 7:14"
    },
    {
      "versiculo": "O homem justo leva uma vida íntegra; como são felizes os seus filhos!",
      "localizacao": "Provérbios 20:7"
    },
    {
      "versiculo": "porque, se o fizerem e eles clamarem a mim, eu certamente atenderei ao seu clamor.",
      "localizacao": "Êxodo 22:23"
    },
    {
      "versiculo": "se o meu povo, que se chama pelo meu nome, se humilhar e orar, buscar a minha face e se afastar dos seus maus caminhos, dos céus o ouvirei, perdoarei o seu pecado e curarei a sua terra.",
      "localizacao": "2 Crônicas 7:14"
    },
    {
      "versiculo": "Ele ora a Deus e recebe o seu favor; vê o rosto de Deus e dá gritos de alegria, e Deus lhe restitui a condição de justo.",
      "localizacao": "Jó 33:26"
    },
    {
      "versiculo": "Os justos clamam, o Senhor os ouve e os livra de todas as suas tribulações.",
      "localizacao": "Salmos 34:17"
    },
    {
      "versiculo": "Portanto, que todos os que são fiéis orem a ti enquanto podes ser encontrado; quando as muitas águas se levantarem, elas não os atingirão.",
      "localizacao": "Salmos 32:6"
    },
    {
      "versiculo": "Ele clamará a mim, e eu lhe darei resposta, e na adversidade estarei com ele; vou livrá-lo e cobri-lo de honra.",
      "localizacao": "Salmos 91:15"
    },
    {
      "versiculo": "Se vocês, apesar de serem maus, sabem dar boas coisas aos seus filhos, quanto mais o Pai de vocês, que está nos céus, dará coisas boas aos que lhe pedirem!",
      "localizacao": "Mateus 7:11"
    },
    {
      "versiculo": "Sabemos que Deus não ouve pecadores, mas ouve o homem que o teme e pratica a sua vontade.",
      "localizacao": "João 9:31"
    },
    {
      "versiculo": "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei. \"Se vocês me amam, obedecerão aos meus mandamentos. E eu pedirei ao Pai, e ele dará a vocês outro Conselheiro para estar com vocês para sempre,",
      "localizacao": "João 14:13-16"
    },
    {
      "versiculo": "Aproximem-se de Deus, e ele se aproximará de vocês! Pecadores, limpem as mãos, e vocês, que têm a mente dividida, purifiquem o coração.",
      "localizacao": "Tiago 4:8"
    },
    {
      "versiculo": "E, agora, que está esperando? Levante-se, seja batizado e lave os seus pecados, invocando o nome dele'.",
      "localizacao": "Atos dos Apóstolos 22:16"
    },
    {
      "versiculo": "porque \"todo aquele que invocar o nome do Senhor será salvo\".",
      "localizacao": "Romanos 10:13"
    },
    {
      "versiculo": "O nosso Deus é um Deus que salva; ele é o Soberano, ele é o Senhor que nos livra da morte.",
      "localizacao": "Salmos 68:20"
    },
    {
      "versiculo": "Livrem os fracos e os pobres; libertem-nos das mãos dos ímpios.",
      "localizacao": "Salmos 82:4"
    },
    {
      "versiculo": "\"Desde os dias mais antigos eu o sou. Não há quem possa livrar alguém de minha mão. Agindo eu, quem o pode desfazer?\"",
      "localizacao": "Isaías 43:13"
    },
    {
      "versiculo": "Se formos atirados na fornalha em chamas, o Deus a quem prestamos culto pode livrar-nos, e ele nos livrará das tuas mãos, ó rei. Mas, se ele não nos livrar, saiba, ó rei, que não prestaremos culto aos teus deuses nem adoraremos a imagem de ouro que mandaste erguer\".",
      "localizacao": "Daniel 3:17-18"
    },
    {
      "versiculo": "e esperar dos céus seu Filho, a quem ressuscitou dos mortos: Jesus, que nos livra da ira que há de vir.",
      "localizacao": "1 Tessalonicenses 1:10"
    },
    {
      "versiculo": "Pois me livraste da morte e aos meus pés de tropeçar, para que eu ande diante de Deus na luz que ilumina os vivos.",
      "localizacao": "Salmos 56:13"
    },
    {
      "versiculo": "pode dizer ao Senhor: \"Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio\". Ele o livrará do laço do caçador e do veneno mortal.",
      "localizacao": "Salmos 91:2-3"
    },
    {
      "versiculo": "mas eles mantiveram sua posição no meio da plantação. Eles a defenderam e feriram os filisteus, e o Senhor lhes deu uma grande vitória.",
      "localizacao": "1 Crônicas 11:14"
    },
    {
      "versiculo": "Agrada-te, Senhor, em libertar-me; apressa-te, Senhor, a ajudar-me.",
      "localizacao": "Salmos 40:13"
    },
    {
      "versiculo": "Livrou-me do meu inimigo poderoso, dos meus adversários, que eram fortes demais para mim.",
      "localizacao": "2 Samuel 22:18"
    },
    {
      "versiculo": "O amigo ama em todos os momentos; é um irmão na adversidade.",
      "localizacao": "Provérbios 17:17"
    },
    {
      "versiculo": "Não abandone o seu amigo nem o amigo de seu pai; quando for atingido pela adversidade não vá para a casa de seu irmão; melhor é o vizinho próximo do que o irmão distante.",
      "localizacao": "Provérbios 27:10"
    },
    {
      "versiculo": "Melhor é a repreensão feita abertamente do que o amor oculto. Quem fere por amor mostra lealdade, mas o inimigo multiplica beijos.",
      "localizacao": "Provérbios 27:5-6"
    },
    {
      "versiculo": "Ninguém tem maior amor do que aquele que dá a sua vida pelos seus amigos. Vocês serão meus amigos, se fizerem o que eu ordeno. Já não os chamo servos, porque o servo não sabe o que o seu senhor faz. Em vez disso, eu os tenho chamado amigos, porque tudo o que ouvi de meu Pai eu tornei conhecido a vocês.",
      "localizacao": "João 15:13-15"
    },
    {
      "versiculo": "Cumpriu-se assim a Escritura que diz: \"Abraão creu em Deus, e isso lhe foi creditado como justiça\", e ele foi chamado amigo de Deus.",
      "localizacao": "Tiago 2:23"
    },
    {
      "versiculo": "Assim como o ferro afia o ferro, o homem afia o seu companheiro.",
      "localizacao": "Provérbios 27:17"
    },
    {
      "versiculo": "Quem tem muitos amigos pode chegar à ruína, mas existe amigo mais apegado que um irmão.",
      "localizacao": "Provérbios 18:24"
    },
    {
      "versiculo": "Muitos se dizem amigos leais; mas um homem fiel, quem poderá achar?",
      "localizacao": "Provérbios 20:6"
    },
    {
      "versiculo": "A riqueza traz muitos amigos, mas até o amigo do pobre o abandona.",
      "localizacao": "Provérbios 19:4"
    },
    {
      "versiculo": "Sou amigo de todos os que te temem e obedecem aos teus preceitos.",
      "localizacao": "Salmos 119:63"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se!",
      "localizacao": "Eclesiastes 4:9-10"
    },
    {
      "versiculo": "E Jônatas fez um acordo de amizade com Davi, pois se tornara o seu melhor amigo.",
      "localizacao": "1 Samuel 18:3"
    },
    {
      "versiculo": "Aquele que anda com os sábios será cada vez mais sábio, mas o companheiro dos tolos acabará mal.",
      "localizacao": "Provérbios 13:20"
    },
    {
      "versiculo": "Perfume e incenso trazem alegria ao coração; do conselho sincero do homem nasce uma bela amizade.",
      "localizacao": "Provérbios 27:9"
    },
    {
      "versiculo": "Não se associe com quem vive de mau humor, nem ande em companhia de quem facilmente se ira; do contrário você acabará imitando essa conduta e cairá em armadilha mortal.",
      "localizacao": "Provérbios 22:24-25"
    },
    {
      "versiculo": "Não se deixem enganar: \"As más companhias corrompem os bons costumes\".",
      "localizacao": "1 Coríntios 15:33"
    },
    {
      "versiculo": "Dediquem-se uns aos outros com amor fraternal. Prefiram dar honra aos outros mais do que a vocês.",
      "localizacao": "Romanos 12:10"
    },
    {
      "versiculo": "O que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo: a nossa fé.",
      "localizacao": "1 João 5:4"
    },
    {
      "versiculo": "Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou. Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
      "localizacao": "Romanos 8:37-39"
    },
    {
      "versiculo": "\"Onde está, ó morte, a sua vitória? Onde está, ó morte, o seu aguilhão?\" O aguilhão da morte é o pecado, e a força do pecado é a Lei. Mas graças a Deus, que nos dá a vitória por meio de nosso Senhor Jesus Cristo.",
      "localizacao": "1 Coríntios 15:55-57"
    },
    {
      "versiculo": "pois o Senhor, o seu Deus, os acompanhará e lutará por vocês contra os seus inimigos, para dar a vitória a vocês'.",
      "localizacao": "Deuteronômio 20:4"
    },
    {
      "versiculo": "Não foi pela espada que conquistaram a terra nem pela força do seu braço que alcançaram a vitória; foi pela tua mão direita, pelo teu braço e pela luz do teu rosto, por causa do teu amor para com eles. És tu, meu Rei e meu Deus! És tu que decretas vitórias para Jacó!",
      "localizacao": "Salmos 44:3-4"
    },
    {
      "versiculo": "Por isso, vistam toda a armadura de Deus, para que possam resistir no dia mau e permanecer inabaláveis, depois de terem feito tudo.",
      "localizacao": "Efésios 6:13"
    },
    {
      "versiculo": "Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?",
      "localizacao": "Romanos 8:31"
    },
    {
      "versiculo": "E disse o Senhor a Josué: \"Não tenha medo desses reis; eu os entreguei nas suas mãos. Nenhum deles conseguirá resistir a você\".",
      "localizacao": "Josué 10:8"
    },
    {
      "versiculo": "Prepara-se o cavalo para o dia da batalha, mas o Senhor é que dá a vitória.",
      "localizacao": "Provérbios 21:31"
    },
    {
      "versiculo": "Tudo posso naquele que me fortalece.",
      "localizacao": "Filipenses 4:13"
    },
    {
      "versiculo": "Com Deus conquistaremos a vitória, e ele pisará os nossos adversários.",
      "localizacao": "Salmos 108:13"
    },
    {
      "versiculo": "pois ainda que o justo caia sete vezes, tornará a erguer-se, mas os ímpios são arrastados pela calamidade.",
      "localizacao": "Provérbios 24:16"
    },
    {
      "versiculo": "Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá.",
      "localizacao": "Salmos 91:7"
    },
    {
      "versiculo": "Nossa esperança está no Senhor; ele é o nosso auxílio e a nossa proteção.",
      "localizacao": "Salmos 33:20"
    },
    {
      "versiculo": "Protege-me, ó Deus, pois em ti me refugio.",
      "localizacao": "Salmos 16:1"
    },
    {
      "versiculo": "Todos odiarão vocês por causa do meu nome. Contudo, nenhum fio de cabelo da cabeça de vocês se perderá. É perseverando que vocês obterão a vida.",
      "localizacao": "Lucas 21:17-19"
    },
    {
      "versiculo": "Não se vendem dois pardais por uma moedinha? Contudo, nenhum deles cai no chão sem o consentimento do Pai de vocês. Até os cabelos da cabeça de vocês estão todos contados. Portanto, não tenham medo; vocês valem mais do que muitos pardais!",
      "localizacao": "Mateus 10:29-31"
    },
    {
      "versiculo": "Enquanto estava com eles, eu os protegi e os guardei no nome que me deste. Nenhum deles se perdeu, a não ser aquele que estava destinado à perdição, para que se cumprisse a Escritura.",
      "localizacao": "João 17:12"
    },
    {
      "versiculo": "Sabemos que todo aquele que é nascido de Deus não está no pecado; aquele que nasceu de Deus o protege, e o Maligno não o atinge.",
      "localizacao": "1 João 5:18"
    },
    {
      "versiculo": "Levanto os meus olhos para os montes e pergunto: De onde me vem o socorro? O meu socorro vem do Senhor, que fez os céus e a terra. Ele não permitirá que você tropece; o seu protetor se manterá alerta, sim, o protetor de Israel não dormirá; ele está sempre alerta!",
      "localizacao": "Salmos 121:1-4"
    },
    {
      "versiculo": "Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá.",
      "localizacao": "Salmos 91:7"
    },
    {
      "versiculo": "Alegrem-se, porém, todos os que se refugiam em ti; cantem sempre de alegria! Estende sobre eles a tua proteção. Em ti exultem os que amam o teu nome. Pois tu, Senhor, abençoas o justo; o teu favor o protege como um escudo.",
      "localizacao": "Salmos 5:11-12"
    },
    {
      "versiculo": "Eu clamo a ti, ó Deus, pois tu me respondes; inclina para mim os teus ouvidos e ouve a minha oração. Mostra a maravilha do teu amor, tu, que com a tua mão direita salvas os que em ti buscam proteção contra aqueles que os ameaçam.",
      "localizacao": "Salmos 17:6-7"
    },
    {
      "versiculo": "Protege-me como à menina dos teus olhos; esconde-me à sombra das tuas asas, dos ímpios que me atacam com violência, dos inimigos mortais que me cercam.",
      "localizacao": "Salmos 17:8-9"
    },
    {
      "versiculo": "O cavalo é vã esperança de vitória; apesar da sua grande força, é incapaz de salvar. Mas o Senhor protege aqueles que o temem, aqueles que firmam a esperança no seu amor, para livrá-los da morte e garantir-lhes vida, mesmo em tempos de fome.",
      "localizacao": "Salmos 33:17-19"
    },
    {
      "versiculo": "Bendito seja o Senhor, a minha Rocha, que treina as minhas mãos para a guerra e os meus dedos para a batalha. Ele é o meu aliado fiel, a minha fortaleza, a minha torre de proteção e o meu libertador; é o meu escudo, aquele em quem me refugio. Ele subjuga a mim os povos.",
      "localizacao": "Salmos 144:1-2"
    },
    {
      "versiculo": "Como as aves dão proteção aos filhotes com suas asas, o Senhor dos Exércitos protegerá Jerusalém; ele a protegerá e a livrará; ele a poupará e a salvará\".",
      "localizacao": "Isaías 31:5"
    },
    {
      "versiculo": "Não me negues a tua misericórdia, Senhor; que o teu amor e a tua verdade sempre me protejam.",
      "localizacao": "Salmos 40:11"
    },
    {
      "versiculo": "Guarda a minha vida e livra-me! Não me deixes decepcionado, pois eu me refugio em ti. Que a integridade e a retidão me protejam, porque a minha esperança está em ti.",
      "localizacao": "Salmos 25:20-21"
    },
    {
      "versiculo": "Que o Senhor te responda no tempo da angústia; o nome do Deus de Jacó te proteja! Do santuário te envie auxílio e de Sião te dê apoio.",
      "localizacao": "Salmos 20:1-2"
    },
    {
      "versiculo": "Mas tu, Senhor, és o escudo que me protege; és a minha glória e me fazes andar de cabeça erguida. Ao Senhor clamo em alta voz, e do seu santo monte ele me responde. Eu me deito e durmo, e torno a acordar, porque é o Senhor que me sustém.",
      "localizacao": "Salmos 3:3-5"
    },
    {
      "versiculo": "Odeiem o mal, vocês que amam o Senhor, pois ele protege a vida dos seus fiéis e os livra das mãos dos ímpios.",
      "localizacao": "Salmos 97:10"
    },
    {
      "versiculo": "O Senhor protege os simples; quando eu já estava sem forças, ele me salvou. Retorne ao seu descanso, ó minha alma, porque o Senhor tem sido bom para você! Pois tu me livraste da morte, livraste os meus olhos das lágrimas e os meus pés de tropeçar, para que eu pudesse andar diante do Senhor na terra dos viventes.",
      "localizacao": "Salmos 116:6-9"
    },
    {
      "versiculo": "Ele defende a causa dos oprimidos e dá alimento aos famintos. O Senhor liberta os presos, o Senhor dá vista aos cegos, o Senhor levanta os abatidos, o Senhor ama os justos. O Senhor protege o estrangeiro e sustém o órfão e a viúva, mas frustra o propósito dos ímpios.",
      "localizacao": "Salmos 146:7-9"
    },
    {
      "versiculo": "Pois o Senhor é quem dá sabedoria; de sua boca procedem o conhecimento e o discernimento. Ele reserva a sensatez para o justo; como um escudo protege quem anda com integridade, pois guarda a vereda do justo e protege o caminho de seus fiéis.",
      "localizacao": "Provérbios 2:6-8"
    },
    {
      "versiculo": "A sabedoria oferece proteção, como o faz o dinheiro, mas a vantagem do conhecimento é esta: a sabedoria preserva a vida de quem a possui.",
      "localizacao": "Eclesiastes 7:12"
    },
    {
      "versiculo": "A retidão protege o homem íntegro, mas a impiedade derruba o pecador.",
      "localizacao": "Provérbios 13:6"
    },
    {
      "versiculo": "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens,",
      "localizacao": "Colossenses 3:23"
    },
    {
      "versiculo": "Sirvam aos seus senhores de boa vontade, como servindo ao Senhor, e não aos homens, porque vocês sabem que o Senhor recompensará cada um pelo bem que praticar, seja escravo, seja livre.",
      "localizacao": "Efésios 6:7-8"
    },
    {
      "versiculo": "Façam tudo sem queixas nem discussões, para que venham a tornar-se puros e irrepreensíveis, filhos de Deus inculpáveis no meio de uma geração corrompida e depravada, na qual vocês brilham como estrelas no universo,",
      "localizacao": "Filipenses 2:14-15"
    },
    {
      "versiculo": "O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria.",
      "localizacao": "Eclesiastes 9:10"
    },
    {
      "versiculo": "Procure apresentar-se a Deus aprovado, como obreiro que não tem do que se envergonhar e que maneja corretamente a palavra da verdade.",
      "localizacao": "2 Timóteo 2:15"
    },
    {
      "versiculo": "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
      "localizacao": "Provérbios 16:3"
    },
    {
      "versiculo": "Quando ainda estávamos com vocês, nós ordenamos isto: Se alguém não quiser trabalhar, também não coma. Pois ouvimos que alguns de vocês estão ociosos; não trabalham, mas andam se intrometendo na vida alheia. A tais pessoas ordenamos e exortamos no Senhor Jesus Cristo que trabalhem tranquilamente e comam o seu próprio pão.",
      "localizacao": "2 Tessalonicenses 3:10-12"
    },
    {
      "versiculo": "Esforcem-se para ter uma vida tranquila, cuidar dos seus próprios negócios e trabalhar com as próprias mãos, como nós os instruímos; a fim de que andem decentemente aos olhos dos que são de fora e não dependam de ninguém.",
      "localizacao": "1 Tessalonicenses 4:11-12"
    },
    {
      "versiculo": "Observe a formiga, preguiçoso, reflita nos caminhos dela e seja sábio! Até quando você vai ficar deitado, preguiçoso? Quando se levantará de seu sono? a sua pobreza o surpreenderá como um assaltante, e a sua necessidade sobrevirá como um homem armado sobre você.",
      "localizacao": "Provérbios 6:6,9,11"
    },
    {
      "versiculo": "Todo trabalho árduo traz proveito, mas o só falar leva à pobreza.",
      "localizacao": "Provérbios 14:23"
    },
    {
      "versiculo": "As mãos diligentes governarão, mas os preguiçosos acabarão escravos.",
      "localizacao": "Provérbios 12:24"
    },
    {
      "versiculo": "Quem relaxa em seu trabalho é irmão do que o destrói.",
      "localizacao": "Provérbios 18:9"
    },
    {
      "versiculo": "O que furtava não furte mais; antes trabalhe, fazendo algo de útil com as mãos, para que tenha o que repartir com quem estiver em necessidade.",
      "localizacao": "Efésios 4:28"
    },
    {
      "versiculo": "Assim, quer vocês comam, quer bebam, quer façam qualquer outra coisa, façam tudo para a glória de Deus.",
      "localizacao": "1 Coríntios 10:31"
    },
    {
      "versiculo": "Havia um homem totalmente solitário; não tinha filho nem irmão. Trabalhava sem parar! Contudo, os seus olhos não se satisfaziam com a sua riqueza. Ele sequer perguntava: \"Para quem estou trabalhando tanto, e por que razão deixo de me divertir?\" Isso também é absurdo; é um trabalho por demais ingrato!",
      "localizacao": "Eclesiastes 4:8"
    },
    {
      "versiculo": "As mãos preguiçosas empobrecem o homem, porém as mãos diligentes lhe trazem riqueza.",
      "localizacao": "Provérbios 10:4"
    },
    {
      "versiculo": "Não ame o sono, senão você acabará ficando pobre; fique desperto, e terá alimento de sobra.",
      "localizacao": "Provérbios 20:13"
    },
    {
      "versiculo": "Os filhos são herança do Senhor, uma recompensa que ele dá. Como flechas nas mãos do guerreiro são os filhos nascidos na juventude. Como é feliz o homem que tem a sua aljava cheia deles! Não será humilhado quando enfrentar seus inimigos no tribunal.",
      "localizacao": "Salmos 127:3-5"
    },
    {
      "versiculo": "Os filhos dos filhos são uma coroa para os idosos, e os pais são o orgulho dos seus filhos.",
      "localizacao": "Provérbios 17:6"
    },
    {
      "versiculo": "Já fui jovem e agora sou velho, mas nunca vi o justo desamparado nem seus filhos mendigando o pão. Ele é sempre generoso e empresta com boa vontade; seus filhos serão abençoados.",
      "localizacao": "Salmos 37:25-26"
    },
    {
      "versiculo": "Os filhos do seu ventre serão abençoados, como também as colheitas da sua terra e os bezerros e os cordeiros dos seus rebanhos.",
      "localizacao": "Deuteronômio 28:4"
    },
    {
      "versiculo": "Como é feliz quem teme o Senhor, quem anda em seus caminhos! Você comerá do fruto do seu trabalho e será feliz e próspero. Sua mulher será como videira frutífera em sua casa; seus filhos serão como brotos de oliveira ao redor da sua mesa.",
      "localizacao": "Salmos 128:1-3"
    },
    {
      "versiculo": "Que todas estas palavras que hoje lhe ordeno estejam em seu coração. Ensine-as com persistência a seus filhos. Converse sobre elas quando estiver sentado em casa, quando estiver andando pelo caminho, quando se deitar e quando se levantar.",
      "localizacao": "Deuteronômio 6:6-7"
    },
    {
      "versiculo": "Todos os seus filhos serão ensinados pelo Senhor, e grande será a paz de suas crianças.",
      "localizacao": "Isaías 54:13"
    },
    {
      "versiculo": "\"Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor,o teu Deus, te dá.",
      "localizacao": "Êxodo 20:12"
    },
    {
      "versiculo": "Filhos, obedeçam a seus pais no Senhor, pois isso é justo. \"Honra teu pai e tua mãe\" - este é o primeiro mandamento com promessa - \"para que tudo te corra bem e tenhas longa vida sobre a terra\".",
      "localizacao": "Efésios 6:1-3"
    },
    {
      "versiculo": "Pais, não irritem seus filhos; antes criem-nos segundo a instrução e o conselho do Senhor.",
      "localizacao": "Efésios 6:4"
    },
    {
      "versiculo": "Filhos, obedeçam a seus pais em tudo, pois isso agrada ao Senhor.",
      "localizacao": "Colossenses 3:20"
    },
    {
      "versiculo": "Pais, não irritem seus filhos, para que eles não desanimem.",
      "localizacao": "Colossenses 3:21"
    },
    {
      "versiculo": "Ouçam, meus filhos, a instrução de um pai; estejam atentos e obterão discernimento.",
      "localizacao": "Provérbios 4:1"
    },
    {
      "versiculo": "Instrua a criança segundo os objetivos que você tem para ela, e mesmo com o passar dos anos não se desviará deles.",
      "localizacao": "Provérbios 22:6"
    },
    {
      "versiculo": "A insensatez está ligada ao coração da criança, mas a vara da disciplina a livrará dela.",
      "localizacao": "Provérbios 22:15"
    },
    {
      "versiculo": "Não evite disciplinar a criança; se você a castigar com a vara, ela não morrerá.",
      "localizacao": "Provérbios 23:13"
    },
    {
      "versiculo": "A vara da correção dá sabedoria, mas a criança entregue a si mesma envergonha a sua mãe.",
      "localizacao": "Provérbios 29:15"
    },
    {
      "versiculo": "Quem se nega a castigar seu filho não o ama; quem o ama não hesita em discipliná-lo.",
      "localizacao": "Provérbios 13:24"
    },
    {
      "versiculo": "Não os esconderemos dos nossos filhos; contaremos à próxima geração os louváveis feitos do Senhor, o seu poder e as maravilhas que fez.",
      "localizacao": "Salmos 78:4"
    },
    {
      "versiculo": "Mas, se uma viúva tem filhos ou netos, que estes aprendam primeiramente a pôr a sua religião em prática, cuidando de sua própria família e retribuindo o bem recebido de seus pais e avós, pois isso agrada a Deus.",
      "localizacao": "1 Timóteo 5:4"
    },
    {
      "versiculo": "Como um pai tem compaixão de seus filhos, assim o Senhor tem compaixão dos que o temem;",
      "localizacao": "Salmos 103:13"
    },
    {
      "versiculo": "Se vocês, apesar de serem maus, sabem dar boas coisas aos seus filhos, quanto mais o Pai de vocês, que está nos céus, dará coisas boas aos que lhe pedirem!",
      "localizacao": "Mateus 7:11"
    },
    {
      "versiculo": "Vejam como é grande o amor que o Pai nos concedeu: sermos chamados filhos de Deus, o que de fato somos! Por isso o mundo não nos conhece, porque não o conheceu.",
      "localizacao": "1 João 3:1"
    },
    {
      "versiculo": "Suportem as dificuldades, recebendo-as como disciplina; Deus os trata como filhos. Ora, qual o filho que não é disciplinado por seu pai? Se vocês não são disciplinados, e a disciplina é para todos os filhos, então vocês não são filhos legítimos, mas sim ilegítimos.",
      "localizacao": "Hebreus 12:7-8"
    },
    {
      "versiculo": "Isso aconteceu quando vocês foram sepultados com ele no batismo e com ele foram ressuscitados mediante a fé no poder de Deus que o ressuscitou dentre os mortos.",
      "localizacao": "Colossenses 2:12"
    },
    {
      "versiculo": "Naquela ocasião, Jesus veio de Nazaré da Galileia e foi batizado por João no Jordão. Assim que saiu da água, Jesus viu o céu se abrindo e o Espírito descendo como pomba sobre ele.",
      "localizacao": "Marcos 1:9-10"
    },
    {
      "versiculo": "Pedro respondeu: \"Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo para perdão dos seus pecados, e receberão o dom do Espírito Santo.",
      "localizacao": "Atos dos Apóstolos 2:38"
    },
    {
      "versiculo": "Prosseguindo pela estrada, chegaram a um lugar onde havia água. O eunuco disse: \"Olhe, aqui há água. Que me impede de ser batizado?\" Disse Filipe: \"Você pode, se crê de todo o coração\". O eunuco respondeu: \"Creio que Jesus Cristo é o Filho de Deus\".",
      "localizacao": "Atos dos Apóstolos 8:36-37"
    },
    {
      "versiculo": "Então, Jesus aproximou-se deles e disse: \"Foi-me dada toda a autoridade nos céus e na terra. Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu ordenei a vocês. E eu estarei sempre com vocês, até o fim dos tempos\".",
      "localizacao": "Mateus 28:18-20"
    },
    {
      "versiculo": "Ou vocês não sabem que todos nós, que fomos batizados em Cristo Jesus, fomos batizados em sua morte? Portanto, fomos sepultados com ele na morte por meio do batismo, a fim de que, assim como Cristo foi ressuscitado dos mortos mediante a glória do Pai, também nós vivamos uma vida nova.",
      "localizacao": "Romanos 6:3-4"
    },
    {
      "versiculo": "Pois em um só corpo todos nós fomos batizados em um único Espírito: quer judeus, quer gregos, quer escravos, quer livres. E a todos nós foi dado beber de um único Espírito.",
      "localizacao": "1 Coríntios 12:13"
    },
    {
      "versiculo": "Tendo dito isso, foi elevado às alturas enquanto eles olhavam, e uma nuvem o encobriu da vista deles. E eles ficaram com os olhos fixos no céu enquanto ele subia. De repente surgiram diante deles dois homens vestidos de branco, que lhes disseram: \"Galileus, por que vocês estão olhando para o céu? Este mesmo Jesus, que dentre vocês foi elevado aos céus, voltará da mesma forma como o viram subir\".",
      "localizacao": "Atos dos Apóstolos 1:9-11"
    },
    {
      "versiculo": "Pois, dada a ordem, com a voz do arcanjo e o ressoar da trombeta de Deus, o próprio Senhor descerá dos céus, e os mortos em Cristo ressuscitarão primeiro. Depois nós, os que estivermos vivos, seremos arrebatados com eles nas nuvens, para o encontro com o Senhor nos ares. E assim estaremos com o Senhor para sempre.",
      "localizacao": "1 Tessalonicenses 4:16-17"
    },
    {
      "versiculo": "Da mesma forma, como o homem está destinado a morrer uma só vez e depois disso enfrentar o juízo, assim também Cristo foi oferecido em sacrifício uma única vez, para tirar os pecados de muitos; e aparecerá segunda vez, não para tirar o pecado, mas para trazer salvação aos que o aguardam.",
      "localizacao": "Hebreus 9:27-28"
    },
    {
      "versiculo": "\"Quanto ao dia e à hora ninguém sabe, nem os anjos dos céus, nem o Filho, senão somente o Pai. Como foi nos dias de Noé, assim também será na vinda do Filho do homem. Pois nos dias anteriores ao Dilúvio, o povo vivia comendo e bebendo, casando-se e dando-se em casamento, até o dia em que Noé entrou na arca; e eles nada perceberam, até que veio o Dilúvio e os levou a todos. Assim acontecerá na vinda do Filho do homem.",
      "localizacao": "Mateus 24:36-39"
    },
    {
      "versiculo": "\"Quanto ao dia e à hora ninguém sabe, nem os anjos no céu, nem o Filho, senão somente o Pai.",
      "localizacao": "Marcos 13:32"
    },
    {
      "versiculo": "\"Portanto, vigiem, porque vocês não sabem em que dia virá o seu Senhor. Mas entendam isto: se o dono da casa soubesse a que hora da noite o ladrão viria, ele ficaria de guarda e não deixaria que a sua casa fosse arrombada. Assim, vocês também precisam estar preparados, porque o Filho do homem virá numa hora em que vocês menos esperam.",
      "localizacao": "Mateus 24:42-44"
    },
    {
      "versiculo": "Não deixem que ninguém os engane de modo algum. Antes daquele dia virá a apostasia e, então, será revelado o homem do pecado, o filho da perdição. Este se opõe e se exalta acima de tudo o que se chama Deus ou é objeto de adoração, chegando até a assentar-se no santuário de Deus, proclamando que ele mesmo é Deus.",
      "localizacao": "2 Tessalonicenses 2:3-4"
    },
    {
      "versiculo": "Irmãos, quanto aos tempos e épocas, não precisamos escrever pois vocês mesmos sabem perfeitamente que o dia do Senhor virá como ladrão à noite. Quando disserem: \"Paz e segurança\", a destruição virá sobre eles de repente, como as dores de parto à mulher grávida; e de modo nenhum escaparão.",
      "localizacao": "1 Tessalonicenses 5:1-3"
    },
    {
      "versiculo": "\"Mas, naqueles dias, após aquela tribulação, 'o sol escurecerá e a lua não dará a sua luz; as estrelas cairão do céu e os poderes celestes serão abalados'. \"Então verão o Filho do homem vindo nas nuvens com grande poder e glória. E ele enviará os seus anjos e reunirá os seus eleitos dos quatro ventos, dos confins da terra até os confins do céu.",
      "localizacao": "Marcos 13:24-27"
    },
    {
      "versiculo": "Vi os céus abertos e diante de mim um cavalo branco, cujo cavaleiro se chama Fiel e Verdadeiro. Ele julga e guerreia com justiça. Seus olhos são como chamas de fogo, e em sua cabeça há muitas coroas e um nome que só ele conhece, e ninguém mais.",
      "localizacao": "Apocalipse 19:11-12"
    },
    {
      "versiculo": "\"Quando o Filho do homem vier em sua glória, com todos os anjos, ele se assentará em seu trono na glória celestial. Todas as nações serão reunidas diante dele, e ele separará umas das outras como o pastor separa as ovelhas dos bodes. E colocará as ovelhas à sua direita e os bodes à sua esquerda.",
      "localizacao": "Mateus 25:31-33"
    },
    {
      "versiculo": "Se alguém se envergonhar de mim e das minhas palavras, o Filho do homem se envergonhará dele quando vier em sua glória e na glória do Pai e dos santos anjos.",
      "localizacao": "Lucas 9:26"
    },
    {
      "versiculo": "O Senhor não demora em cumprir a sua promessa, como julgam alguns. Ao contrário, ele é paciente com vocês, não querendo que ninguém pereça, mas que todos cheguem ao arrependimento. O dia do Senhor, porém, virá como ladrão. Os céus desaparecerão com um grande estrondo, os elementos serão desfeitos pelo calor, e a terra, e tudo o que nela há, será desnudada.",
      "localizacao": "2 Pedro 3:9-10"
    },
    {
      "versiculo": "Visto que tudo será assim desfeito, que tipo de pessoas é necessário que vocês sejam? Vivam de maneira santa e piedosa, esperando o dia de Deus e apressando a sua vinda. Naquele dia os céus serão desfeitos pelo fogo, e os elementos se derreterão pelo calor. Todavia, de acordo com a sua promessa, esperamos novos céus e nova terra, onde habita a justiça.",
      "localizacao": "2 Pedro 3:11-13"
    },
    {
      "versiculo": "\"Eis que venho em breve! A minha recompensa está comigo, e eu retribuirei a cada um de acordo com o que fez.",
      "localizacao": "Apocalipse 22:12"
    },
    {
      "versiculo": "Na casa de meu Pai há muitos aposentos; se não fosse assim, eu teria dito a vocês. Vou preparar lugar para vocês. E, quando eu for e preparar lugar, voltarei e os levarei para mim, para que vocês estejam onde eu estiver.",
      "localizacao": "João 14:2-3"
    },
    {
      "versiculo": "Aquele que dá testemunho destas coisas diz: \"Sim, venho em breve!\" Amém. Vem, Senhor Jesus!",
      "localizacao": "Apocalipse 22:20"
    },
    {
      "versiculo": "Pois a palavra de Deus é viva e eficaz, e mais afiada que qualquer espada de dois gumes; ela penetra até o ponto de dividir alma e espírito, juntas e medulas, e julga os pensamentos e as intenções do coração.",
      "localizacao": "Hebreus 4:12"
    },
    {
      "versiculo": "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.",
      "localizacao": "Salmos 119:105"
    },
    {
      "versiculo": "O Senhor está perto de todos os que o invocam, de todos os que o invocam com sinceridade. Ele realiza os desejos daqueles que o temem; ouve-os gritar por socorro e os salva.",
      "localizacao": "Salmos 145:18-19"
    },
    {
      "versiculo": "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja apto e plenamente preparado para toda boa obra.",
      "localizacao": "2 Timóteo 3:16-17"
    },
    {
      "versiculo": "\"Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. Pois todo o que pede recebe; o que busca encontra; e àquele que bate, a porta será aberta.",
      "localizacao": "Mateus 7:7-8"
    },
    {
      "versiculo": "Ó povo de Sião, que mora em Jerusalém, você não vai chorar mais. Como ele será bondoso quando você clamar por socorro! Assim que ele ouvir, responderá a você.",
      "localizacao": "Isaías 30:19"
    },
    {
      "versiculo": "Esta é a confiança que temos ao nos aproximarmos de Deus: se pedirmos alguma coisa de acordo com a vontade de Deus, ele nos ouvirá. E, se sabemos que ele nos ouve em tudo o que pedimos, sabemos que temos o que dele pedimos.",
      "localizacao": "1 João 5:14-15"
    },
    {
      "versiculo": "Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.",
      "localizacao": "Salmos 46:1"
    },
    {
      "versiculo": "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam,",
      "localizacao": "Naum 1:7"
    },
    {
      "versiculo": "Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam.",
      "localizacao": "Hebreus 11:6"
    },
    {
      "versiculo": "Consequentemente, a fé vem por se ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.",
      "localizacao": "Romanos 10:17"
    },
    {
      "versiculo": "Se confessarmos os nossos pecados, ele é fiel e justo para perdoar os nossos pecados e nos purificar de toda injustiça.",
      "localizacao": "1 João 1:9"
    },
    {
      "versiculo": "Entregue suas preocupações ao Senhor, e ele o susterá; jamais permitirá que o justo venha a cair.",
      "localizacao": "Salmos 55:22"
    },
    {
      "versiculo": "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. Tomem sobre vocês o meu jugo e aprendam de mim, pois sou manso e humilde de coração, e vocês encontrarão descanso para as suas almas. Pois o meu jugo é suave e o meu fardo é leve\".",
      "localizacao": "Mateus 11:28-30"
    },
    {
      "versiculo": "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!",
      "localizacao": "2 Coríntios 5:17"
    },
    {
      "versiculo": "Ele fortalece o cansado e dá grande vigor ao que está sem forças. Até os jovens se cansam e ficam exaustos, e os moços tropeçam e caem; mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
      "localizacao": "Isaías 40:29-31"
    },
    {
      "versiculo": "Aqueles que semeiam com lágrimas, com cantos de alegria colherão. Aquele que sai chorando enquanto lança a semente, voltará com cantos de alegria, trazendo os seus feixes.",
      "localizacao": "Salmos 126:5-6"
    },
    {
      "versiculo": "Mas agora assim diz o Senhor, aquele que o criou, ó Jacó, aquele que o formou, ó Israel: \"Não tema, pois eu o resgatei; eu o chamei pelo nome; você é meu. Pois eu sou o Senhor, o seu Deus, o Santo de Israel, o seu Salvador; dou o Egito como resgate para livrá-lo, a Etiópia e Sebá em troca de você.",
      "localizacao": "Isaías 43:1,3"
    },
    {
      "versiculo": "\"Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo\".",
      "localizacao": "João 16:33"
    },
    {
      "versiculo": "Aqui está a perseverança dos santos que obedecem aos mandamentos de Deus e permanecem fiéis a Jesus.",
      "localizacao": "Apocalipse 14:12c"
    },
    {
      "versiculo": "Não os deixarei órfãos; voltarei para vocês.",
      "localizacao": "João 14:18"
    },
    {
      "versiculo": "O Senhor é refúgio para os oprimidos, uma torre segura na hora da adversidade. Os que conhecem o teu nome confiam em ti, pois tu, Senhor, jamais abandonas os que te buscam.",
      "localizacao": "Salmos 9:9-10"
    },
    {
      "versiculo": "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
      "localizacao": "Romanos 8:28"
    },
    {
      "versiculo": "Então vi novos céus e nova terra, pois o primeiro céu e a primeira terra tinham passado; e o mar já não existia. Vi a Cidade Santa, a nova Jerusalém, que descia dos céus, da parte de Deus, preparada como uma noiva adornada para o seu marido.",
      "localizacao": "Apocalipse 21:1-2"
    },
    {
      "versiculo": "Ouvi uma forte voz que vinha do trono e dizia: \"Agora o tabernáculo de Deus está com os homens, com os quais ele viverá. Eles serão os seus povos; o próprio Deus estará com eles e será o seu Deus. Ele enxugará dos seus olhos toda lágrima. Não haverá mais morte, nem tristeza, nem choro, nem dor, pois a antiga ordem já passou\".",
      "localizacao": "Apocalipse 21:3-4"
    },
    {
      "versiculo": "E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.",
      "localizacao": "Gálatas 6:9"
    },
    {
      "versiculo": "Nem muitas águas conseguem apagar o amor; os rios não conseguem levá-lo na correnteza. Se alguém oferecesse todas as riquezas da sua casa para adquirir o amor, seria totalmente desprezado.",
      "localizacao": "Cânticos 8:7"
    },
    {
      "versiculo": "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne.",
      "localizacao": "Gênesis 2:24"
    },
    {
      "versiculo": "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe\".",
      "localizacao": "Mateus 19:6"
    },
    {
      "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.",
      "localizacao": "1 Coríntios 13:4-7"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se!",
      "localizacao": "Eclesiastes 4:9-10"
    },
    {
      "versiculo": "Quem encontra uma esposa encontra algo excelente; recebeu uma bênção do Senhor.",
      "localizacao": "Provérbios 18:22"
    },
    {
      "versiculo": "Desfrute a vida com a mulher a quem você ama, todos os dias desta vida sem sentido que Deus dá a você debaixo do sol; todos os seus dias sem sentido! Pois essa é a sua recompensa na vida pelo seu árduo trabalho debaixo do sol.",
      "localizacao": "Eclesiastes 9:9"
    },
    {
      "versiculo": "Mulheres, sujeite-se cada uma a seu marido, como ao Senhor, pois o marido é o cabeça da mulher, como também Cristo é o cabeça da igreja, que é o seu corpo, do qual ele é o Salvador. Assim como a igreja está sujeita a Cristo, também as mulheres estejam em tudo sujeitas a seus maridos.",
      "localizacao": "Efésios 5:22-24"
    },
    {
      "versiculo": "Maridos, ame cada um a sua mulher, assim como Cristo amou a igreja e entregou-se por ela para santificá-la, tendo-a purificado pelo lavar da água mediante a palavra, e para apresentá-la a si mesmo como igreja gloriosa, sem mancha nem ruga ou coisa semelhante, mas santa e inculpável.",
      "localizacao": "Efésios 5:25-27"
    },
    {
      "versiculo": "Da mesma forma, os maridos devem amar cada um a sua mulher como a seu próprio corpo. Quem ama sua mulher, ama a si mesmo. Além do mais, ninguém jamais odiou o seu próprio corpo, antes o alimenta e dele cuida, como também Cristo faz com a igreja, pois somos membros do seu corpo.",
      "localizacao": "Efésios 5:28-30"
    },
    {
      "versiculo": "Portanto, cada um de vocês também ame a sua mulher como a você mesmo, e a mulher trate o marido com todo o respeito.",
      "localizacao": "Efésios 5:33"
    },
    {
      "versiculo": "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.",
      "localizacao": "Colossenses 3:14"
    },
    {
      "versiculo": "Assim brilhe a luz de vocês diante dos homens, para que vejam as suas boas obras e glorifiquem ao Pai de vocês, que está nos céus.",
      "localizacao": "Mateus 5:16"
    },
    {
      "versiculo": "Sempre haverá pobres na terra. Portanto, eu ordeno a você que abra o coração para o seu irmão israelita, tanto para o pobre como para o necessitado de sua terra.",
      "localizacao": "Deuteronômio 15:11"
    },
    {
      "versiculo": "Deem e será dado a vocês: uma boa medida, calcada, sacudida e transbordante será dada a vocês. Pois a medida que usarem também será usada para medir vocês\".",
      "localizacao": "Lucas 6:38"
    },
    {
      "versiculo": "Dê a quem pede, e não volte as costas àquele que deseja pedir algo emprestado.",
      "localizacao": "Mateus 5:42"
    },
    {
      "versiculo": "\"Então os justos lhe responderão: 'Senhor, quando te vimos com fome e te demos de comer, ou com sede e te demos de beber? Quando te vimos como estrangeiro e te acolhemos, ou necessitado de roupas e te vestimos? \"O Rei responderá: 'Digo a verdade: O que vocês fizeram a algum dos meus menores irmãos, a mim o fizeram'.",
      "localizacao": "Mateus 25:37-38,40"
    },
    {
      "versiculo": "\"O que devemos fazer então?\", perguntavam as multidões. João respondia: \"Quem tem duas túnicas dê uma a quem não tem nenhuma; e quem tem comida faça o mesmo\".",
      "localizacao": "Lucas 3:10-11"
    },
    {
      "versiculo": "Levem os fardos pesados uns dos outros e, assim, cumpram a lei de Cristo.",
      "localizacao": "Gálatas 6:2"
    },
    {
      "versiculo": "Vendam o que têm e deem esmolas. Façam para vocês bolsas que não se gastem com o tempo, um tesouro nos céus que não se acabe, onde ladrão algum chega perto e nenhuma traça destrói. Pois, onde estiver o seu tesouro, ali também estará o seu coração.",
      "localizacao": "Lucas 12:33-34"
    },
    {
      "versiculo": "O meu mandamento é este: Amem-se uns aos outros como eu os amei.",
      "localizacao": "João 15:12"
    },
    {
      "versiculo": "O que furtava não furte mais; antes trabalhe, fazendo algo de útil com as mãos, para que tenha o que repartir com quem estiver em necessidade.",
      "localizacao": "Efésios 4:28"
    },
    {
      "versiculo": "De que adianta, meus irmãos, alguém dizer que tem fé, se não tem obras? Acaso a fé pode salvá-lo? Se um irmão ou irmã estiver necessitando de roupas e do alimento de cada dia e um de vocês lhe disser: \"Vá em paz, aqueça-se e alimente-se até satisfazer-se\", sem porém lhe dar nada, de que adianta isso? Assim também a fé, por si só, se não for acompanhada de obras, está morta.",
      "localizacao": "Tiago 2:14-17"
    },
    {
      "versiculo": "Compartilhem o que vocês têm com os santos em suas necessidades. Pratiquem a hospitalidade.",
      "localizacao": "Romanos 12:13"
    },
    {
      "versiculo": "Cada um cuide, não somente dos seus interesses, mas também dos interesses dos outros.",
      "localizacao": "Filipenses 2:4"
    },
    {
      "versiculo": "Nós, que somos fortes, devemos suportar as fraquezas dos fracos, e não agradar a nós mesmos.",
      "localizacao": "Romanos 15:1"
    },
    {
      "versiculo": "Ninguém tem maior amor do que aquele que dá a sua vida pelos seus amigos.",
      "localizacao": "João 15:13"
    },
    {
      "versiculo": "Se alguém tiver recursos materiais e, vendo seu irmão em necessidade, não se compadecer dele, como pode permanecer nele o amor de Deus?",
      "localizacao": "1 João 3:17"
    },
    {
      "versiculo": "Em tudo o que fiz, mostrei a vocês que mediante trabalho árduo devemos ajudar os fracos, lembrando as palavras do próprio Senhor Jesus, que disse: 'Há maior felicidade em dar do que em receber' \".",
      "localizacao": "Atos dos Apóstolos 20:35"
    },
    {
      "versiculo": "Quem trata bem os pobres empresta ao Senhor, e ele o recompensará.",
      "localizacao": "Provérbios 19:17"
    },
    {
      "versiculo": "E ele designou alguns para apóstolos, outros para profetas, outros para evangelistas, e outros para pastores e mestres, com o fim de preparar os santos para a obra do ministério, para que o corpo de Cristo seja edificado,",
      "localizacao": "Efésios 4:11-12"
    },
    {
      "versiculo": "Pregue a palavra, esteja preparado a tempo e fora de tempo, repreenda, corrija, exorte com toda a paciência e doutrina.",
      "localizacao": "2 Timóteo 4:2"
    },
    {
      "versiculo": "Cuidem de vocês mesmos e de todo o rebanho sobre o qual o Espírito Santo os designou como bispos, para pastorearem a igreja de Deus, que ele comprou com o seu próprio sangue.",
      "localizacao": "Atos dos Apóstolos 20:28"
    },
    {
      "versiculo": "Esforce-se para saber bem como suas ovelhas estão, dê cuidadosa atenção aos seus rebanhos,",
      "localizacao": "Provérbios 27:23"
    },
    {
      "versiculo": "Cada um cuide, não somente dos seus interesses, mas também dos interesses dos outros.",
      "localizacao": "Filipenses 2:4"
    },
    {
      "versiculo": "Meus irmãos, não sejam muitos de vocês mestres, pois vocês sabem que nós, os que ensinamos, seremos julgados com maior rigor.",
      "localizacao": "Tiago 3:1"
    },
    {
      "versiculo": "Procure apresentar-se a Deus aprovado, como obreiro que não tem do que se envergonhar e que maneja corretamente a palavra da verdade.",
      "localizacao": "2 Timóteo 2:15"
    },
    {
      "versiculo": "Ao servo do Senhor não convém brigar mas, sim, ser amável para com todos, apto para ensinar, paciente. Deve corrigir com mansidão os que se lhe opõem, na esperança de que Deus lhes conceda o arrependimento, levando-os ao conhecimento da verdade, para que assim voltem à sobriedade e escapem da armadilha do Diabo, que os aprisionou para fazerem a sua vontade.",
      "localizacao": "2 Timóteo 2:24-26"
    },
    {
      "versiculo": "Os presbíteros que lideram bem a igreja são dignos de dupla honra, especialmente aqueles cujo trabalho é a pregação e o ensino, pois a Escritura diz: \"Não amordace o boi enquanto está debulhando o cereal\", e \"o trabalhador merece o seu salário\".",
      "localizacao": "1 Timóteo 5:17-18"
    },
    {
      "versiculo": "pastoreiem o rebanho de Deus que está aos seus cuidados. Olhem por ele, não por obrigação, mas de livre vontade, como Deus quer. Não façam isso por ganância, mas com o desejo de servir. Não ajam como dominadores dos que foram confiados a vocês, mas como exemplos para o rebanho. Quando se manifestar o Supremo Pastor, vocês receberão a imperecível coroa da glória.",
      "localizacao": "1 Pedro 5:2-4"
    },
    {
      "versiculo": "\"Ai dos pastores que destroem e dispersam as ovelhas do meu pasto!\", diz o Senhor. Portanto, assim diz o Senhor, Deus de Israel, aos pastores que tomam conta do meu povo: \"Foram vocês que dispersaram e expulsaram o meu rebanho e não cuidaram dele. Mas eu vou castigar vocês pelos seus maus procedimentos\", declara o Senhor.",
      "localizacao": "Jeremias 23:1-2"
    },
    {
      "versiculo": "\"Eu mesmo reunirei os remanescentes do meu rebanho de todas as terras para onde os expulsei e os trarei de volta à sua pastagem, a fim de que cresçam e se multipliquem. Estabelecerei sobre eles pastores que cuidarão deles. E eles não mais terão medo ou pavor, e nenhum deles faltará\", declara o Senhor.",
      "localizacao": "Jeremias 23:3-4"
    },
    {
      "versiculo": "O Senhor é o meu pastor; de nada terei falta.",
      "localizacao": "Salmos 23:1"
    },
    {
      "versiculo": "O Soberano, o Senhor, vem com poder! Com seu braço forte ele governa. A sua recompensa com ele está, e seu galardão o acompanha. Como pastor ele cuida de seu rebanho, com o braço ajunta os cordeiros e os carrega no colo; conduz com cuidado as ovelhas que amamentam suas crias.",
      "localizacao": "Isaías 40:10-11"
    },
    {
      "versiculo": "'Mas tu, Belém, da terra de Judá, de forma alguma és a menor em meio às principais cidades de Judá; pois de ti virá o líder que, como pastor, conduzirá Israel, o meu povo'\".",
      "localizacao": "Mateus 2:6"
    },
    {
      "versiculo": "\"Eu sou o bom pastor. O bom pastor dá a sua vida pelas ovelhas.",
      "localizacao": "João 10:11"
    },
    {
      "versiculo": "\"Eu sou o bom pastor; conheço as minhas ovelhas, e elas me conhecem, assim como o Pai me conhece e eu conheço o Pai; e dou a minha vida pelas ovelhas. Tenho outras ovelhas que não são deste aprisco. É necessário que eu as conduza também. Elas ouvirão a minha voz, e haverá um só rebanho e um só pastor.",
      "localizacao": "João 10:14-16"
    },
    {
      "versiculo": "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria. E Deus é poderoso para fazer que toda a graça lhes seja acrescentada, para que em todas as coisas, em todo o tempo, tendo tudo o que é necessário, vocês transbordem em toda boa obra.",
      "localizacao": "2 Coríntios 9:7-8"
    },
    {
      "versiculo": "Tragam o dízimo todo ao depósito do templo, para que haja alimento em minha casa. Ponham-me à prova\", diz o Senhor dos Exércitos, \"e vejam se não vou abrir as comportas dos céus e derramar sobre vocês tantas bênçãos que nem terão onde guardá-las.",
      "localizacao": "Malaquias 3:10"
    },
    {
      "versiculo": "Honre o Senhor com todos os seus recursos e com os primeiros frutos de todas as suas plantações; os seus celeiros ficarão plenamente cheios, e os seus barris transbordarão de vinho.",
      "localizacao": "Provérbios 3:9-10"
    },
    {
      "versiculo": "\"Portanto, se você estiver apresentando sua oferta diante do altar e ali se lembrar de que seu irmão tem algo contra você, deixe sua oferta ali, diante do altar, e vá primeiro reconciliar-se com seu irmão; depois volte e apresente sua oferta.",
      "localizacao": "Mateus 5:23-24"
    },
    {
      "versiculo": "\"Não acumulem para vocês tesouros na terra, onde a traça e a ferrugem destroem e onde os ladrões arrombam e furtam. Mas acumulem para vocês tesouros nos céus, onde a traça e a ferrugem não destroem e onde os ladrões não arrombam nem furtam. Pois onde estiver o seu tesouro, aí também estará o seu coração.",
      "localizacao": "Mateus 6:19-21"
    },
    {
      "versiculo": "\"Quem é fiel no pouco, também é fiel no muito, e quem é desonesto no pouco, também é desonesto no muito. Assim, se vocês não forem dignos de confiança em lidar com as riquezas deste mundo ímpio, quem confiará as verdadeiras riquezas a vocês?",
      "localizacao": "Lucas 16:10-11"
    },
    {
      "versiculo": "\"Ninguém pode servir a dois senhores; pois odiará um e amará o outro, ou se dedicará a um e desprezará o outro. Vocês não podem servir a Deus e ao Dinheiro.",
      "localizacao": "Mateus 6:24"
    },
    {
      "versiculo": "Do Senhor é a terra e tudo o que nela existe, o mundo e os que nele vivem;",
      "localizacao": "Salmos 24:1"
    },
    {
      "versiculo": "\"Ai de vocês, fariseus, porque dão a Deus o dízimo da hortelã, da arruda e de toda a sorte de hortaliças, mas desprezam a justiça e o amor de Deus! Vocês deviam praticar estas coisas, sem deixar de fazer aquelas.",
      "localizacao": "Lucas 11:42"
    },
    {
      "versiculo": "Jesus respondeu: \"Está escrito: 'Adore o Senhor, o seu Deus, e só a ele preste culto'\".",
      "localizacao": "Lucas 4:8"
    },
    {
      "versiculo": "Nunca adore nenhum outro deus, porque o Senhor, cujo nome é Zeloso, é de fato Deus zeloso.",
      "localizacao": "Êxodo 34:14"
    },
    {
      "versiculo": "Deus é espírito, e é necessário que os seus adoradores o adorem em espírito e em verdade\".",
      "localizacao": "João 4:24"
    },
    {
      "versiculo": "Aproximem-se de Deus, e ele se aproximará de vocês! Pecadores, limpem as mãos, e vocês, que têm a mente dividida, purifiquem o coração.",
      "localizacao": "Tiago 4:8"
    },
    {
      "versiculo": "Por isso Deus o exaltou à mais alta posição e lhe deu o nome que está acima de todo nome, para que ao nome de Jesus se dobre todo joelho, nos céus, na terra e debaixo da terra, e toda língua confesse que Jesus Cristo é o Senhor, para a glória de Deus Pai.",
      "localizacao": "Filipenses 2:9-11"
    },
    {
      "versiculo": "\"Tu, Senhor e Deus nosso, és digno de receber a glória, a honra e o poder, porque criaste todas as coisas, e por tua vontade elas existem e foram criadas\".",
      "localizacao": "Apocalipse 4:11"
    },
    {
      "versiculo": "No entanto, está chegando a hora, e de fato já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. São estes os adoradores que o Pai procura.",
      "localizacao": "João 4:23"
    },
    {
      "versiculo": "Portanto, irmãos, rogo pelas misericórdias de Deus que se ofereçam em sacrifício vivo, santo e agradável a Deus; este é o culto racional de vocês. Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.",
      "localizacao": "Romanos 12:1-2"
    },
    {
      "versiculo": "Atribuam ao Senhor a glória que o seu nome merece; adorem o Senhor no esplendor do seu santuário.",
      "localizacao": "Salmos 29:2"
    },
    {
      "versiculo": "Venham! Adoremos prostrados e ajoelhemos diante do Senhor, o nosso Criador;",
      "localizacao": "Salmos 95:6"
    },
    {
      "versiculo": "Exaltem o Senhor, o nosso Deus, prostrem-se diante do estrado dos seus pés. Ele é santo!",
      "localizacao": "Salmos 99:5"
    },
    {
      "versiculo": "Entrem por suas portas com ações de graças e em seus átrios com louvor; deem-lhe graças e bendigam o seu nome.",
      "localizacao": "Salmos 100:4"
    },
    {
      "versiculo": "O teu amor é melhor do que a vida! Por isso os meus lábios te exaltarão. Enquanto eu viver te bendirei, e em teu nome levantarei as minhas mãos.",
      "localizacao": "Salmos 63:3-4"
    },
    {
      "versiculo": "Portanto, já que estamos recebendo um Reino inabalável, sejamos agradecidos e, assim, adoremos a Deus de modo aceitável, com reverência e temor, pois o nosso \"Deus é fogo consumidor!\"",
      "localizacao": "Hebreus 12:28-29"
    },
    {
      "versiculo": "Aclamem a Deus, povos de toda terra! Cantem louvores ao seu glorioso nome; louvem-no gloriosamente! Digam a Deus: \"Quão temíveis são os teus feitos! Tão grande é o teu poder que os teus inimigos rastejam diante de ti! Toda a terra te adora e canta louvores a ti, canta louvores ao teu nome\".",
      "localizacao": "Salmos 66:1-4"
    },
    {
      "versiculo": "Todas as nações que tu formaste virão e te adorarão, Senhor, e glorificarão o teu nome. Pois tu és grande e realizas feitos maravilhosos; só tu és Deus!",
      "localizacao": "Salmos 86:9-10"
    },
    {
      "versiculo": "Quem não te temerá, ó Senhor? Quem não glorificará o teu nome? Pois tu somente és santo. Todas as nações virão à tua presença e te adorarão, pois os teus atos de justiça se tornaram manifestos\".",
      "localizacao": "Apocalipse 15:4"
    },
    {
      "versiculo": "Então o homem disse: \"Senhor, eu creio\". E o adorou.",
      "localizacao": "João 9:38"
    },
    {
      "versiculo": "Assim que Moisés entrava, a coluna de nuvem descia e ficava à entrada da tenda, enquanto o Senhor falava com Moisés. Quando o povo via a coluna de nuvem parada à entrada da tenda, todos prestavam adoração em pé, cada qual na entrada de sua própria tenda.",
      "localizacao": "Êxodo 33:9-10"
    },
    {
      "versiculo": "Ali, na presença do Senhor, o seu Deus, vocês e suas famílias comerão e se alegrarão com tudo o que tiverem feito, pois o Senhor, o seu Deus, os terá abençoado.",
      "localizacao": "Deuteronômio 12:7"
    },
    {
      "versiculo": "Ao ouvir isso, Jó levantou-se, rasgou o manto e rapou a cabeça. Então prostrou-se com o rosto em terra, em adoração, e disse: \"Saí nu do ventre da minha mãe, e nu partirei. O Senhor o deu, o Senhor o levou; louvado seja o nome do Senhor \".",
      "localizacao": "Jó 1:20-21"
    },
    {
      "versiculo": "Eu, João, sou aquele que ouviu e viu estas coisas. Tendo-as ouvido e visto, caí aos pés do anjo que me mostrou tudo aquilo, para adorá-lo. Mas ele me disse: \"Não faça isso! Sou servo como você e seus irmãos, os profetas, e como os que guardam as palavras deste livro. Adore a Deus!\"",
      "localizacao": "Apocalipse 22:8-9"
    },
    {
      "versiculo": "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará\".",
      "localizacao": "Deuteronômio 31:6"
    },
    {
      "versiculo": "Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?",
      "localizacao": "Romanos 8:31"
    },
    {
      "versiculo": "Por isso não desanimamos. Embora exteriormente estejamos a desgastar-nos, interiormente estamos sendo renovados dia após dia, pois os nossos sofrimentos leves e momentâneos estão produzindo para nós uma glória eterna que pesa mais do que todos eles. Assim, fixamos os olhos, não naquilo que se vê, mas no que não se vê, pois o que se vê é transitório, mas o que não se vê é eterno.",
      "localizacao": "2 Coríntios 4:16-18"
    },
    {
      "versiculo": "Por isso, não abram mão da confiança que vocês têm; ela será ricamente recompensada.",
      "localizacao": "Hebreus 10:35"
    },
    {
      "versiculo": "mas Samá tomou posição no meio da plantação, defendeu-a e derrotou os filisteus. O Senhor concedeu-lhe uma grande vitória.",
      "localizacao": "2 Samuel 23:12"
    },
    {
      "versiculo": "Não me assustam os milhares que me cercam.",
      "localizacao": "Salmos 3:6"
    },
    {
      "versiculo": "O Senhor firma os passos de um homem, quando a conduta deste o agrada; ainda que tropece, não cairá, pois o Senhor o toma pela mão.",
      "localizacao": "Salmos 37:23-24"
    },
    {
      "versiculo": "mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
      "localizacao": "Isaías 40:31"
    },
    {
      "versiculo": "Entregue o seu caminho ao Senhor; confie nele, e ele agirá:",
      "localizacao": "Salmos 37:5"
    },
    {
      "versiculo": "Jesus olhou para eles e respondeu: \"Para o homem é impossível, mas para Deus todas as coisas são possíveis\".",
      "localizacao": "Mateus 19:26"
    },
    {
      "versiculo": "\"Se podes?\", disse Jesus. \"Tudo é possível àquele que crê.\"",
      "localizacao": "Marcos 9:23"
    },
    {
      "versiculo": "Tudo posso naquele que me fortalece.",
      "localizacao": "Filipenses 4:13"
    },
    {
      "versiculo": "Não só isso, mas também nos gloriamos nas tribulações, porque sabemos que a tribulação produz perseverança; a perseverança, um caráter aprovado; e o caráter aprovado, esperança. E a esperança não nos decepciona, porque Deus derramou seu amor em nossos corações, por meio do Espírito Santo que ele nos concedeu.",
      "localizacao": "Romanos 5:3-5"
    },
    {
      "versiculo": "Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.",
      "localizacao": "2 Timóteo 1:7"
    },
    {
      "versiculo": "\"Não tenha medo do que você está prestes a sofrer. O Diabo lançará alguns de vocês na prisão para prová-los, e vocês sofrerão perseguição durante dez dias. Seja fiel até a morte, e eu lhe darei a coroa da vida.",
      "localizacao": "Apocalipse 2:10"
    },
    {
      "versiculo": "Vejam, o Senhor, o seu Deus, põe diante de vocês esta terra. Entrem na terra e tomem posse dela, conforme o Senhor, o Deus dos seus antepassados, disse a vocês. Não tenham medo nem desanimem.",
      "localizacao": "Deuteronômio 1:21"
    },
    {
      "versiculo": "pois o Senhor, o seu Deus, os acompanhará e lutará por vocês contra os seus inimigos, para dar a vitória a vocês'.",
      "localizacao": "Deuteronômio 20:4"
    },
    {
      "versiculo": "Não confio em meu arco, minha espada não me concede a vitória; mas tu nos concedes a vitória sobre os nossos adversários e humilhas os que nos odeiam. Em Deus nos gloriamos o tempo todo, e louvaremos o teu nome para sempre.",
      "localizacao": "Salmos 44:6-8"
    },
    {
      "versiculo": "Eu dei a vocês autoridade para pisarem sobre cobras e escorpiões, e sobre todo o poder do inimigo; nada lhes fará dano.",
      "localizacao": "Lucas 10:19"
    },
    {
      "versiculo": "Tu, Senhor, guardarás em perfeita paz aquele cujo propósito está firme, porque em ti confia.",
      "localizacao": "Isaías 26:3"
    },
    {
      "versiculo": "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
      "localizacao": "Mateus 11:28"
    },
    {
      "versiculo": "Vigiem e orem para que não caiam em tentação. O espírito está pronto, mas a carne é fraca.\"",
      "localizacao": "Marcos 14:38"
    },
    {
      "versiculo": "Chegando ao lugar, ele lhes disse: \"Orem para que vocês não caiam em tentação\".",
      "localizacao": "Lucas 22:40"
    },
    {
      "versiculo": "\"Por que estão dormindo?\", perguntou-lhes. \"Levantem-se e orem para que vocês não caiam em tentação!\"",
      "localizacao": "Lucas 22:46"
    },
    {
      "versiculo": "\"Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo\".",
      "localizacao": "João 16:33"
    },
    {
      "versiculo": "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
      "localizacao": "Romanos 8:28"
    },
    {
      "versiculo": "Quem nos separará do amor de Cristo? Será tribulação, ou angústia, ou perseguição, ou fome, ou nudez, ou perigo, ou espada?",
      "localizacao": "Romanos 8:35"
    },
    {
      "versiculo": "Não se deixem vencer pelo mal, mas vençam o mal com o bem.",
      "localizacao": "Romanos 12:21"
    },
    {
      "versiculo": "Fujam da imoralidade sexual. Todos os outros pecados que alguém comete, fora do corpo os comete; mas quem peca sexualmente, peca contra o seu próprio corpo. Acaso não sabem que o corpo de vocês é santuário do Espírito Santo que habita em vocês, que lhes foi dado por Deus, e que vocês não são de vocês mesmos? Vocês foram comprados por alto preço. Portanto, glorifiquem a Deus com o seu próprio corpo.",
      "localizacao": "1 Coríntios 6:18-20"
    },
    {
      "versiculo": "Não sobreveio a vocês tentação que não fosse comum aos homens. E Deus é fiel; ele não permitirá que vocês sejam tentados além do que podem suportar. Mas, quando forem tentados, ele mesmo providenciará um escape, para que o possam suportar.",
      "localizacao": "1 Coríntios 10:13"
    },
    {
      "versiculo": "Mas graças a Deus, que nos dá a vitória por meio de nosso Senhor Jesus Cristo.",
      "localizacao": "1 Coríntios 15:57"
    },
    {
      "versiculo": "Se vocês perdoam a alguém, eu também perdoo; e aquilo que perdoei, se é que havia alguma coisa para perdoar, perdoei na presença de Cristo, por amor a vocês, a fim de que Satanás não tivesse vantagem sobre nós; pois não ignoramos as suas intenções.",
      "localizacao": "2 Coríntios 2:10-11"
    },
    {
      "versiculo": "Mas graças a Deus, que sempre nos conduz vitoriosamente em Cristo e por nosso intermédio exala em todo lugar a fragrância do seu conhecimento;",
      "localizacao": "2 Coríntios 2:14"
    },
    {
      "versiculo": "Quanto à antiga maneira de viver, vocês foram ensinados a despir-se do velho homem, que se corrompe por desejos enganosos, a serem renovados no modo de pensar e a revestir-se do novo homem, criado para ser semelhante a Deus em justiça e em santidade provenientes da verdade.",
      "localizacao": "Efésios 4:22-24"
    },
    {
      "versiculo": "\"Quando vocês ficarem irados, não pequem\". Apazigúem a sua ira antes que o sol se ponha e não deem lugar ao Diabo.",
      "localizacao": "Efésios 4:26-27"
    },
    {
      "versiculo": "Tudo posso naquele que me fortalece.",
      "localizacao": "Filipenses 4:13"
    },
    {
      "versiculo": "Finalmente, fortaleçam-se no Senhor e no seu forte poder. Vistam toda a armadura de Deus, para poderem ficar firmes contra as ciladas do Diabo, pois a nossa luta não é contra seres humanos, mas contra os poderes e autoridades, contra os dominadores deste mundo de trevas, contra as forças espirituais do mal nas regiões celestiais. Por isso, vistam toda a armadura de Deus, para que possam resistir no dia mau e permanecer inabaláveis, depois de terem feito tudo.",
      "localizacao": "Efésios 6:10-13"
    },
    {
      "versiculo": "Mas o Senhor é fiel; ele os fortalecerá e os guardará do Maligno.",
      "localizacao": "2 Tessalonicenses 3:3"
    },
    {
      "versiculo": "Os que querem ficar ricos caem em tentação, em armadilhas e em muitos desejos descontrolados e nocivos, que levam os homens a mergulharem na ruína e na destruição,",
      "localizacao": "1 Timóteo 6:9"
    },
    {
      "versiculo": "O Senhor me livrará de toda obra maligna e me levará a salvo para o seu Reino celestial. A ele seja a glória para todo o sempre. Amém.",
      "localizacao": "2 Timóteo 4:18"
    },
    {
      "versiculo": "Porque, tendo em vista o que ele mesmo sofreu quando tentado, ele é capaz de socorrer aqueles que também estão sendo tentados.",
      "localizacao": "Hebreus 2:18"
    },
    {
      "versiculo": "Pensem bem naquele que suportou tal oposição dos pecadores contra si mesmo, para que vocês não se cansem nem desanimem.",
      "localizacao": "Hebreus 12:3"
    },
    {
      "versiculo": "Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: \"Nunca o deixarei, nunca o abandonarei\".",
      "localizacao": "Hebreus 13:5"
    },
    {
      "versiculo": "Feliz é o homem que persevera na provação, porque depois de aprovado receberá a coroa da vida, que Deus prometeu aos que o amam. Quando alguém for tentado, jamais deverá dizer: \"Estou sendo tentado por Deus\". Pois Deus não pode ser tentado pelo mal e a ninguém tenta. Cada um, porém, é tentado pelo próprio mau desejo, sendo por este arrastado e seduzido. Então esse desejo, tendo concebido, dá à luz o pecado, e o pecado, após ser consumado, gera a morte.",
      "localizacao": "Tiago 1:12-15"
    },
    {
      "versiculo": "Portanto, submetam-se a Deus. Resistam ao Diabo, e ele fugirá de vocês. Aproximem-se de Deus, e ele se aproximará de vocês! Pecadores, limpem as mãos, e vocês, que têm a mente dividida, purifiquem o coração.",
      "localizacao": "Tiago 4:7-8"
    },
    {
      "versiculo": "Humilhem-se diante do Senhor, e ele os exaltará.",
      "localizacao": "Tiago 4:10"
    },
    {
      "versiculo": "Estejam alertas e vigiem. O Diabo, o inimigo de vocês, anda ao redor como leão, rugindo e procurando a quem possa devorar. Resistam-lhe, permanecendo firmes na fé, sabendo que os irmãos que vocês têm em todo o mundo estão passando pelos mesmos sofrimentos. O Deus de toda a graça, que os chamou para a sua glória eterna em Cristo Jesus, depois de terem sofrido por pouco tempo, os restaurará, os confirmará, os fortalecerá e os porá sobre firmes alicerces.",
      "localizacao": "1 Pedro 5:8-10"
    },
    {
      "versiculo": "Filhinhos, eu escrevo a vocês porque os seus pecados foram perdoados, graças ao nome de Jesus. Pais, eu escrevo a vocês porque conhecem aquele que é desde o princípio. Jovens, eu escrevo a vocês porque venceram o Maligno.",
      "localizacao": "1 João 2:12-13"
    },
    {
      "versiculo": "Filhinhos, eu escrevi a vocês porque conhecem o Pai. Pais, eu escrevi a vocês porque conhecem aquele que é desde o princípio. Jovens, eu escrevi a vocês, porque são fortes, e em vocês a Palavra de Deus permanece, e vocês venceram o Maligno. Não amem o mundo nem o que nele há. Se alguém ama o mundo, o amor do Pai não está nele.",
      "localizacao": "1 João 2:14-15"
    },
    {
      "versiculo": "Aquele que pratica o pecado é do Diabo, porque o Diabo vem pecando desde o princípio. Para isso o Filho de Deus se manifestou: para destruir as obras do Diabo.",
      "localizacao": "1 João 3:8"
    },
    {
      "versiculo": "Filhinhos, vocês são de Deus e os venceram, porque aquele que está em vocês é maior do que aquele que está no mundo.",
      "localizacao": "1 João 4:4"
    },
    {
      "versiculo": "Porque nisto consiste o amor a Deus: em obedecer aos seus mandamentos. E os seus mandamentos não são pesados. O que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo: a nossa fé. Quem é que vence o mundo? Somente aquele que crê que Jesus é o Filho de Deus.",
      "localizacao": "1 João 5:3-5"
    },
    {
      "versiculo": "\"Ao vencedor darei o direito de sentar-se comigo em meu trono, assim como eu também venci e sentei-me com meu Pai em seu trono.",
      "localizacao": "Apocalipse 3:21"
    },
    {
      "versiculo": "Eles o venceram pelo sangue do Cordeiro e pela palavra do testemunho que deram; diante da morte, não amaram a própria vida.",
      "localizacao": "Apocalipse 12:11"
    },
    {
      "versiculo": "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz.",
      "localizacao": "Números 6:24-26"
    },
    {
      "versiculo": "\"Mas bendito é o homem cuja confiança está no Senhor, cuja confiança nele está. Ele será como uma árvore plantada junto às águas e que estende as suas raízes para o ribeiro. Ela não temerá quando chegar o calor, porque as suas folhas estão sempre verdes; não ficará ansiosa no ano da seca nem deixará de dar fruto\".",
      "localizacao": "Jeremias 17:7-8"
    },
    {
      "versiculo": "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
      "localizacao": "Jeremias 29:11"
    },
    {
      "versiculo": "Prestem culto ao Senhor, o Deus de vocês, e ele os abençoará, dando a vocês alimento e água. Tirarei a doença do meio de vocês.",
      "localizacao": "Êxodo 23:25"
    },
    {
      "versiculo": "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
      "localizacao": "Provérbios 16:3"
    },
    {
      "versiculo": "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus.",
      "localizacao": "Filipenses 4:19"
    },
    {
      "versiculo": "Pois hoje ordeno a vocês que amem o Senhor, o seu Deus, andem nos seus caminhos e guardem os seus mandamentos, decretos e ordenanças; então vocês terão vida e aumentarão em número, e o Senhor, o seu Deus, os abençoará na terra em que vocês estão entrando para dela tomar posse.",
      "localizacao": "Deuteronômio 30:16"
    },
    {
      "versiculo": "Provem e vejam como o Senhor é bom. Como é feliz o homem que nele se refugia!",
      "localizacao": "Salmos 34:8"
    },
    {
      "versiculo": "Como é grande a tua bondade, que reservaste para aqueles que te temem, e que, à vista dos homens, concedes àqueles que se refugiam em ti!",
      "localizacao": "Salmos 31:19"
    },
    {
      "versiculo": "\"Mas eu digo a vocês que estão me ouvindo: Amem os seus inimigos, façam o bem aos que os odeiam, abençoem os que os amaldiçoam, orem por aqueles que os maltratam.",
      "localizacao": "Lucas 6:27-28"
    },
    {
      "versiculo": "Não retribuam mal com mal, nem insulto com insulto; ao contrário, bendigam; pois para isso vocês foram chamados, para receberem bênção por herança.",
      "localizacao": "1 Pedro 3:9"
    },
    {
      "versiculo": "O Senhor é o meu pastor; de nada terei falta. Em verdes pastagens me faz repousar e me conduz a águas tranquilas;",
      "localizacao": "Salmos 23:1-2"
    },
    {
      "versiculo": "Tragam o dízimo todo ao depósito do templo, para que haja alimento em minha casa. Ponham-me à prova\", diz o Senhor dos Exércitos, \"e vejam se não vou abrir as comportas dos céus e derramar sobre vocês tantas bênçãos que nem terão onde guardá-las.",
      "localizacao": "Malaquias 3:10"
    },
    {
      "versiculo": "Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio. Contra essas coisas não há lei.",
      "localizacao": "Gálatas 5:22-23"
    },
    {
      "versiculo": "Por isso jejuamos e suplicamos essa bênção ao nosso Deus, e ele nos atendeu.",
      "localizacao": "Esdras 8:23"
    },
    {
      "versiculo": "Que o Senhor te responda no tempo da angústia; o nome do Deus de Jacó te proteja! Do santuário te envie auxílio e de Sião te dê apoio. Lembre-se de todas as tuas ofertas e aceite os teus holocaustos. Conceda-te o desejo do teu coração e leve a efeito todos os teus planos.",
      "localizacao": "Salmos 20:1-4"
    },
    {
      "versiculo": "Do Senhor vem o livramento. A tua bênção está sobre o teu povo.",
      "localizacao": "Salmos 3:8"
    },
    {
      "versiculo": "O Senhor dá força ao seu povo; o Senhor dá a seu povo a bênção da paz.",
      "localizacao": "Salmos 29:11"
    },
    {
      "versiculo": "A bênção do Senhor traz riqueza e não inclui dor alguma.",
      "localizacao": "Provérbios 10:22"
    },
    {
      "versiculo": "O Senhor é refúgio para os oprimidos, uma torre segura na hora da adversidade.",
      "localizacao": "Salmos 9:9"
    },
    {
      "versiculo": "Tu, Senhor, ouves a súplica dos necessitados; tu os reanimas e atendes ao seu clamor.",
      "localizacao": "Salmos 10:17"
    },
    {
      "versiculo": "Tu, Senhor, manténs acesa a minha lâmpada; o meu Deus transforma em luz as minhas trevas.",
      "localizacao": "Salmos 18:28"
    },
    {
      "versiculo": "Mesmo quando eu andar por um vale de trevas e morte, não temerei perigo algum, pois tu estás comigo; a tua vara e o teu cajado me protegem.",
      "localizacao": "Salmos 23:4"
    },
    {
      "versiculo": "O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.",
      "localizacao": "Salmos 34:18"
    },
    {
      "versiculo": "Ele enxugará dos seus olhos toda lágrima. Não haverá mais morte, nem tristeza, nem choro, nem dor, pois a antiga ordem já passou\".",
      "localizacao": "Apocalipse 21:4"
    },
    {
      "versiculo": "Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.",
      "localizacao": "Salmos 46:1"
    },
    {
      "versiculo": "Pois a sua ira só dura um instante, mas o seu favor dura a vida toda; o choro pode persistir uma noite, mas de manhã irrompe a alegria.",
      "localizacao": "Salmos 30:5"
    },
    {
      "versiculo": "que este Deus é o nosso Deus para todo o sempre; ele será o nosso guia até o fim.",
      "localizacao": "Salmos 48:14"
    },
    {
      "versiculo": "Desde os confins da terra eu clamo a ti com o coração abatido; põe-me a salvo na rocha mais alta do que eu.",
      "localizacao": "Salmos 61:2"
    },
    {
      "versiculo": "Quando a ansiedade já me dominava no íntimo, o teu consolo trouxe alívio à minha alma.",
      "localizacao": "Salmos 94:19"
    },
    {
      "versiculo": "Este é o meu consolo no meu sofrimento: A tua promessa dá-me vida.",
      "localizacao": "Salmos 119:50"
    },
    {
      "versiculo": "Para tudo há uma ocasião certa; há um tempo certo para cada propósito debaixo do céu: Tempo de nascer e tempo de morrer, tempo de plantar e tempo de arrancar o que se plantou, tempo de matar e tempo de curar, tempo de derrubar e tempo de construir, tempo de chorar e tempo de rir, tempo de prantear e tempo de dançar,",
      "localizacao": "Eclesiastes 3:1-4"
    },
    {
      "versiculo": "Bem-aventurados os que choram, pois serão consolados.",
      "localizacao": "Mateus 5:4"
    },
    {
      "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      "localizacao": "Isaías 41:10"
    },
    {
      "versiculo": "Quando você atravessar as águas, eu estarei com você; quando você atravessar os rios, eles não o encobrirão. Quando você andar através do fogo, não se queimará; as chamas não o deixarão em brasas.",
      "localizacao": "Isaías 43:2"
    },
    {
      "versiculo": "Gritem de alegria, ó céus, regozije-se, ó terra; irrompam em canção, ó montes! Pois o Senhor consola o seu povo e terá compaixão de seus afligidos.",
      "localizacao": "Isaías 49:13"
    },
    {
      "versiculo": "O justo perece, e ninguém pondera isso em seu coração; homens piedosos são tirados, e ninguém entende que os justos são tirados para serem poupados do mal. Aqueles que andam retamente entrarão na paz; acharão descanso na morte.",
      "localizacao": "Isaías 57:1-2"
    },
    {
      "versiculo": "Graças ao grande amor do Senhor é que não somos consumidos, pois as suas misericórdias são inesgotáveis. Renovam-se cada manhã; grande é a sua fidelidade! Digo a mim mesmo: A minha porção é o Senhor; portanto, nele porei a minha esperança. O Senhor é bom para com aqueles cuja esperança está nele, para com aqueles que o buscam; é bom esperar tranquilo pela salvação do Senhor.",
      "localizacao": "Lamentações 3:22-26"
    },
    {
      "versiculo": "Porque o Senhor não o desprezará para sempre. Embora ele traga tristeza, mostrará compaixão, tão grande é o seu amor infalível.",
      "localizacao": "Lamentações 3:31-32"
    },
    {
      "versiculo": "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
      "localizacao": "Mateus 11:28"
    },
    {
      "versiculo": "Alegrem-se com os que se alegram; chorem com os que choram.",
      "localizacao": "Romanos 12:15"
    },
    {
      "versiculo": "\"Onde está, ó morte, a sua vitória? Onde está, ó morte, o seu aguilhão?\" O aguilhão da morte é o pecado, e a força do pecado é a Lei. Mas graças a Deus, que nos dá a vitória por meio de nosso Senhor Jesus Cristo.",
      "localizacao": "1 Coríntios 15:55-57"
    },
    {
      "versiculo": "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, Pai das misericórdias e Deus de toda consolação, que nos consola em todas as nossas tribulações, para que, com a consolação que recebemos de Deus, possamos consolar os que estão passando por tribulações.",
      "localizacao": "2 Coríntios 1:3-4"
    },
    {
      "versiculo": "Mas ele me disse: \"Minha graça é suficiente a você, pois o meu poder se aperfeiçoa na fraqueza\". Portanto, eu me gloriarei ainda mais alegremente em minhas fraquezas, para que o poder de Cristo repouse em mim.",
      "localizacao": "2 Coríntios 12:9"
    },
    {
      "versiculo": "Levem os fardos pesados uns dos outros e, assim, cumpram a lei de Cristo.",
      "localizacao": "Gálatas 6:2"
    },
    {
      "versiculo": "Irmãos, não queremos que vocês sejam ignorantes quanto aos que dormem, para que não se entristeçam como os outros que não têm esperança. Se cremos que Jesus morreu e ressurgiu, cremos também que Deus trará, mediante Jesus e com ele, aqueles que nele dormiram.",
      "localizacao": "1 Tessalonicenses 4:13-14"
    },
    {
      "versiculo": "Que o próprio Senhor Jesus Cristo e Deus nosso Pai, que nos amou e nos deu eterna consolação e boa esperança pela graça, deem ânimo ao coração de vocês e os fortaleçam para fazerem sempre o bem, tanto em atos como em palavras.",
      "localizacao": "2 Tessalonicenses 2:16-17"
    },
    {
      "versiculo": "Assim, aproximemo-nos do trono da graça com toda a confiança, a fim de recebermos misericórdia e encontrarmos graça que nos ajude no momento da necessidade.",
      "localizacao": "Hebreus 4:16"
    },
    {
      "versiculo": "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
      "localizacao": "1 Pedro 5:7"
    },
    {
      "versiculo": "Como pode o jovem manter pura a sua conduta? Vivendo de acordo com a tua palavra.",
      "localizacao": "Salmos 119:9"
    },
    {
      "versiculo": "Lembre-se do seu Criador nos dias da sua juventude, antes que venham os dias difíceis e se aproximem os anos em que você dirá: \"Não tenho satisfação neles\";",
      "localizacao": "Eclesiastes 12:1"
    },
    {
      "versiculo": "Filhinhos, eu escrevi a vocês porque conhecem o Pai. Pais, eu escrevi a vocês porque conhecem aquele que é desde o princípio. Jovens, eu escrevi a vocês, porque são fortes, e em vocês a Palavra de Deus permanece, e vocês venceram o Maligno.",
      "localizacao": "1 João 2:14"
    },
    {
      "versiculo": "Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza.",
      "localizacao": "1 Timóteo 4:12"
    },
    {
      "versiculo": "Alegre-se, jovem, na sua mocidade! Seja feliz o seu coração nos dias da sua juventude! Siga por onde seu coração mandar, até onde a sua vista alcançar; mas saiba que por todas essas coisas Deus o trará a julgamento.",
      "localizacao": "Eclesiastes 11:9"
    },
    {
      "versiculo": "Afaste do coração a ansiedade e acabe com o sofrimento do seu corpo, pois a juventude e o vigor são passageiros.",
      "localizacao": "Eclesiastes 11:10"
    },
    {
      "versiculo": "A beleza dos jovens está na sua força; a glória dos idosos, nos seus cabelos brancos.",
      "localizacao": "Provérbios 20:29"
    },
    {
      "versiculo": "Filhos, obedeçam a seus pais no Senhor, pois isso é justo. \"Honra teu pai e tua mãe\" - este é o primeiro mandamento com promessa - \"para que tudo te corra bem e tenhas longa vida sobre a terra\".",
      "localizacao": "Efésios 6:1-3"
    },
    {
      "versiculo": "Da mesma maneira, encoraje os jovens a serem prudentes.",
      "localizacao": "Tito 2:6"
    },
    {
      "versiculo": "Da mesma forma, jovens, sujeitem-se aos mais velhos. Sejam todos humildes uns para com os outros, porque \"Deus se opõe aos orgulhosos, mas concede graça aos humildes\". Portanto, humilhem-se debaixo da poderosa mão de Deus, para que ele os exalte no tempo devido.",
      "localizacao": "1 Pedro 5:5-6"
    },
    {
      "versiculo": "Ouça, meu filho, e seja sábio; guie o seu coração pelo bom caminho. Não ande com os que se encharcam de vinho, nem com os que se empanturram de carne. Pois os bêbados e os glutões se empobrecerão, e a sonolência os vestirá de trapos. Ouça o seu pai, que o gerou; não despreze sua mãe quando ela envelhecer.",
      "localizacao": "Provérbios 23:19-22"
    },
    {
      "versiculo": "Melhor é um jovem pobre e sábio, do que um rei idoso e tolo, que já não aceita repreensão.",
      "localizacao": "Eclesiastes 4:13"
    },
    {
      "versiculo": "Estes são os provérbios de Salomão, filho de Davi, rei de Israel. Eles ajudarão a experimentar a sabedoria e a disciplina; a compreender as palavras que dão entendimento; a viver com disciplina e sensatez, fazendo o que é justo, direito e correto; ajudarão a dar prudência aos inexperientes e conhecimento e bom senso aos jovens.",
      "localizacao": "Provérbios 1:1-4"
    },
    {
      "versiculo": "Até os jovens se cansam e ficam exaustos, e os moços tropeçam e caem; mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.",
      "localizacao": "Isaías 40:30-31"
    },
    {
      "versiculo": "A esses quatro jovens Deus deu sabedoria e inteligência para conhecerem todos os aspectos da cultura e da ciência. E Daniel, além disso, sabia interpretar todo tipo de visões e sonhos.",
      "localizacao": "Daniel 1:17-18"
    },
    {
      "versiculo": "Mas eu disse: Ah, Soberano Senhor! Eu não sei falar, pois ainda sou muito jovem. O Senhor, porém, me disse: \"Não diga que é muito jovem. A todos a quem eu o enviar, você irá e dirá tudo o que eu ordenar a você. Não tenha medo deles, pois eu estou com você para protegê-lo\", diz o Senhor.",
      "localizacao": "Jeremias 1:6-8"
    },
    {
      "versiculo": "\"E, depois disso, derramarei do meu Espírito sobre todos os povos. Os seus filhos e as suas filhas profetizarão, os velhos terão sonhos, os jovens terão visões. Até sobre os servos e as servas derramarei do meu Espírito naqueles dias.",
      "localizacao": "Joel 2:28-29"
    },
    {
      "versiculo": "Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
      "localizacao": "Romanos 8:38-39"
    },
    {
      "versiculo": "\"Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
      "localizacao": "João 3:16"
    },
    {
      "versiculo": "Deem graças ao Senhor, porque ele é bom. O seu amor dura para sempre!",
      "localizacao": "Salmos 136:1"
    },
    {
      "versiculo": "Amados, não escrevo a vocês um mandamento novo, mas um mandamento antigo, que vocês têm desde o princípio: a mensagem que ouviram. No entanto, o que escrevo é um mandamento novo, o qual é verdadeiro nele e em vocês, pois as trevas estão se dissipando e já brilha a verdadeira luz.",
      "localizacao": "1 João 2:7-8"
    },
    {
      "versiculo": "Todavia, Deus, que é rico em misericórdia, pelo grande amor com que nos amou, deu-nos vida com Cristo quando ainda estávamos mortos em transgressões - pela graça vocês são salvos.",
      "localizacao": "Efésios 2:4-5"
    },
    {
      "versiculo": "Porque nisto consiste o amor a Deus: em obedecer aos seus mandamentos. E os seus mandamentos não são pesados.",
      "localizacao": "1 João 5:3"
    },
    {
      "versiculo": "Mas Deus demonstra seu amor por nós: Cristo morreu em nosso favor quando ainda éramos pecadores.",
      "localizacao": "Romanos 5:8"
    },
    {
      "versiculo": "Fui crucificado com Cristo. Assim, já não sou eu quem vive, mas Cristo vive em mim. A vida que agora vivo no corpo, vivo-a pela fé no filho de Deus, que me amou e se entregou por mim.",
      "localizacao": "Gálatas 2:20"
    },
    {
      "versiculo": "Foi assim que Deus manifestou o seu amor entre nós: enviou o seu Filho Unigênito ao mundo, para que pudéssemos viver por meio dele. Nisto consiste o amor: não em que nós tenhamos amado a Deus, mas em que ele nos amou e enviou seu Filho como propiciação pelos nossos pecados. Amados, visto que Deus assim nos amou, nós também devemos amar uns aos outros.",
      "localizacao": "1 João 4:9-11"
    },
    {
      "versiculo": "O Senhor, o seu Deus, está em seu meio, poderoso para salvar. Ele se regozijará em você; com o seu amor a renovará, ele se regozijará em você com brados de alegria\".",
      "localizacao": "Sofonias 3:17"
    },
    {
      "versiculo": "Mas tu, Senhor, és Deus compassivo e misericordioso, muito paciente, rico em amor e em fidelidade.",
      "localizacao": "Salmos 86:15"
    },
    {
      "versiculo": "Vejam como é grande o amor que o Pai nos concedeu: sermos chamados filhos de Deus, o que de fato somos! Por isso o mundo não nos conhece, porque não o conheceu.",
      "localizacao": "1 João 3:1"
    },
    {
      "versiculo": "Amo os que me amam, e quem me procura me encontra.",
      "localizacao": "Provérbios 8:17"
    },
    {
      "versiculo": "O Senhor é compassivo e misericordioso, mui paciente e cheio de amor.",
      "localizacao": "Salmos 103:8"
    },
    {
      "versiculo": "o Senhor lhe apareceu no passado, dizendo: \"Eu a amei com amor eterno; com amor leal a atraí.",
      "localizacao": "Jeremias 31:3"
    },
    {
      "versiculo": "Visto que você é precioso e honrado à minha vista, e porque eu o amo, darei homens em seu lugar, e nações em troca de sua vida.",
      "localizacao": "Isaías 43:4"
    },
    {
      "versiculo": "Nós amamos porque ele nos amou primeiro.",
      "localizacao": "1 João 4:19"
    },
    {
      "versiculo": "O teu amor é melhor do que a vida! Por isso os meus lábios te exaltarão.",
      "localizacao": "Salmos 63:3"
    },
    {
      "versiculo": "Estende o teu amor aos que te conhecem; a tua justiça, aos que são retos de coração.",
      "localizacao": "Salmos 36:10"
    },
    {
      "versiculo": "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.",
      "localizacao": "1 Coríntios 13:4"
    },
    {
      "versiculo": "Amados, amemos uns aos outros, pois o amor procede de Deus. Aquele que ama é nascido de Deus e conhece a Deus. Quem não ama não conhece a Deus, porque Deus é amor.",
      "localizacao": "1 João 4:7-8"
    },
    {
      "versiculo": "Assim conhecemos o amor que Deus tem por nós e confiamos nesse amor. Deus é amor. Todo aquele que permanece no amor permanece em Deus, e Deus nele.",
      "localizacao": "1 João 4:16"
    },
    {
      "versiculo": "No teu templo, ó Deus, meditamos em teu amor leal.",
      "localizacao": "Salmos 48:9"
    },
    {
      "versiculo": "O Senhor conduza o coração de vocês ao amor de Deus e à perseverança de Cristo.",
      "localizacao": "2 Tessalonicenses 3:5"
    },
    {
      "versiculo": "A graça do Senhor Jesus Cristo, o amor de Deus e a comunhão do Espírito Santo sejam com todos vocês.",
      "localizacao": "2 Coríntios 13:14"
    },
    {
      "versiculo": "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, Pai das misericórdias e Deus de toda consolação, que nos consola em todas as nossas tribulações, para que, com a consolação que recebemos de Deus, possamos consolar os que estão passando por tribulações.",
      "localizacao": "2 Coríntios 1:3-4"
    },
    {
      "versiculo": "\"Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo\".",
      "localizacao": "João 16:33"
    },
    {
      "versiculo": "Respondeu Jesus: \"Digo a verdade: Ninguém que tenha deixado casa, irmãos, irmãs, mãe, pai, filhos, ou campos, por causa de mim e do evangelho, deixará de receber cem vezes mais, já no tempo presente, casas, irmãos, irmãs, mães, filhos e campos, e com eles perseguição; e, na era futura, a vida eterna.",
      "localizacao": "Marcos 10:29-30"
    },
    {
      "versiculo": "Bem-aventurados os que choram, pois serão consolados.",
      "localizacao": "Mateus 5:4"
    },
    {
      "versiculo": "Pois assim como os sofrimentos de Cristo transbordam sobre nós, também por meio de Cristo transborda a nossa consolação.",
      "localizacao": "2 Coríntios 1:5"
    },
    {
      "versiculo": "\"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
      "localizacao": "Mateus 11:28"
    },
    {
      "versiculo": "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
      "localizacao": "Filipenses 4:6"
    },
    {
      "versiculo": "Conservem-se livres do amor ao dinheiro e contentem-se com o que vocês têm, porque Deus mesmo disse: \"Nunca o deixarei, nunca o abandonarei\".",
      "localizacao": "Hebreus 13:5"
    },
    {
      "versiculo": "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.",
      "localizacao": "Romanos 12:2"
    },
    {
      "versiculo": "Por isso mesmo, aqueles que sofrem de acordo com a vontade de Deus devem confiar sua vida ao seu fiel Criador e praticar o bem.",
      "localizacao": "1 Pedro 4:19"
    },
    {
      "versiculo": "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      "localizacao": "Isaías 41:10"
    },
    {
      "versiculo": "Este é o meu consolo no meu sofrimento: A tua promessa dá-me vida.",
      "localizacao": "Salmos 119:50"
    },
    {
      "versiculo": "Os humildes, ele exalta e traz os que pranteiam a um lugar de segurança.",
      "localizacao": "Jó 5:11"
    },
    {
      "versiculo": "Só ele cura os de coração quebrantado e cuida das suas feridas.",
      "localizacao": "Salmos 147:3"
    },
    {
      "versiculo": "Ouvi uma forte voz que vinha do trono e dizia: \"Agora o tabernáculo de Deus está com os homens, com os quais ele viverá. Eles serão os seus povos; o próprio Deus estará com eles e será o seu Deus. Ele enxugará dos seus olhos toda lágrima. Não haverá mais morte, nem tristeza, nem choro, nem dor, pois a antiga ordem já passou\".",
      "localizacao": "Apocalipse 21:3-4"
    },
    {
      "versiculo": "E consideremos uns aos outros para nos incentivarmos ao amor e às boas obras. Não deixemos de reunir-nos como igreja, segundo o costume de alguns, mas procuremos encorajar-nos uns aos outros, ainda mais quando vocês veem que se aproxima o Dia.",
      "localizacao": "Hebreus 10:24-25"
    },
    {
      "versiculo": "Como é bom e agradável quando os irmãos convivem em união! É como óleo precioso derramado sobre a cabeça, que desce pela barba, a barba de Arão, até a gola das suas vestes. É como o orvalho do Hermom quando desce sobre os montes de Sião. Ali o Senhor concede a bênção da vida para sempre.",
      "localizacao": "Salmos 133:1-3"
    },
    {
      "versiculo": "Sejam mutuamente hospitaleiros, sem reclamação.",
      "localizacao": "1 Pedro 4:9"
    },
    {
      "versiculo": "Os que aceitaram a mensagem foram batizados, e naquele dia houve um acréscimo de cerca de três mil pessoas. Eles se dedicavam ao ensino dos apóstolos e à comunhão, ao partir do pão e às orações. Todos estavam cheios de temor, e muitas maravilhas e sinais eram feitos pelos apóstolos. Os que criam mantinham-se unidos e tinham tudo em comum.",
      "localizacao": "Atos dos Apóstolos 2:41-44"
    },
    {
      "versiculo": "Vendendo suas propriedades e bens, distribuíam a cada um conforme a sua necessidade. Todos os dias, continuavam a reunir-se no pátio do templo. Partiam o pão em casa e juntos participavam das refeições, com alegria e sinceridade de coração, louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava diariamente os que iam sendo salvos.",
      "localizacao": "Atos dos Apóstolos 2:45-47"
    },
    {
      "versiculo": "Irmãos, vocês foram chamados para a liberdade. Mas não usem a liberdade para dar ocasião à vontade da carne; ao contrário, sirvam uns aos outros mediante o amor.",
      "localizacao": "Gálatas 5:13"
    },
    {
      "versiculo": "Se por estarmos em Cristo nós temos alguma motivação, alguma exortação de amor, alguma comunhão no Espírito, alguma profunda afeição e compaixão, completem a minha alegria, tendo o mesmo modo de pensar, o mesmo amor, um só espírito e uma só atitude.",
      "localizacao": "Filipenses 2:1-2"
    },
    {
      "versiculo": "você, com quem eu partilhava agradável comunhão enquanto íamos com a multidão festiva para a casa de Deus!",
      "localizacao": "Salmos 55:14"
    },
    {
      "versiculo": "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.",
      "localizacao": "Efésios 4:32"
    },
    {
      "versiculo": "Habite ricamente em vocês a palavra de Cristo; ensinem e aconselhem-se uns aos outros com toda a sabedoria e cantem salmos, hinos e cânticos espirituais com gratidão a Deus em seu coração.",
      "localizacao": "Colossenses 3:16"
    },
    {
      "versiculo": "Se afirmarmos que temos comunhão com ele, mas andamos nas trevas, mentimos e não praticamos a verdade. Se, porém, andarmos na luz, como ele está na luz, temos comunhão uns com os outros, e o sangue de Jesus, seu Filho, nos purifica de todo pecado.",
      "localizacao": "1 João 1:6-7"
    },
    {
      "versiculo": "Dediquem-se uns aos outros com amor fraternal. Prefiram dar honra aos outros mais do que a vocês.",
      "localizacao": "Romanos 12:10"
    },
    {
      "versiculo": "Agora que vocês purificaram a sua vida pela obediência à verdade, visando ao amor fraternal e sincero, amem sinceramente uns aos outros e de todo o coração.",
      "localizacao": "1 Pedro 1:22"
    },
    {
      "versiculo": "Por isso, exortem-se e edifiquem-se uns aos outros, como de fato vocês estão fazendo.",
      "localizacao": "1 Tessalonicenses 5:11"
    },
    {
      "versiculo": "É melhor ter companhia do que estar sozinho, porque maior é a recompensa do trabalho de duas pessoas. Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se! E, se dois dormirem juntos, vão manter-se aquecidos. Como, porém, manter-se aquecido sozinho? Um homem sozinho pode ser vencido, mas dois conseguem defender-se. Um cordão de três dobras não se rompe com facilidade.",
      "localizacao": "Eclesiastes 4:9-10"
    },
    {
      "versiculo": "E, se dois dormirem juntos, vão manter-se aquecidos. Como, porém, manter-se aquecido sozinho? Um homem sozinho pode ser vencido, mas dois conseguem defender-se. Um cordão de três dobras não se rompe com facilidade.",
      "localizacao": "Eclesiastes 4:11-12"
    },
    {
      "versiculo": "Sem mais, irmãos, despeço-me de vocês! Procurem aperfeiçoar-se, exortem-se mutuamente, tenham um só pensamento, vivam em paz. E o Deus de amor e paz estará com vocês.",
      "localizacao": "2 Coríntios 13:11"
    },
    {
      "versiculo": "\"Um novo mandamento dou a vocês: Amem-se uns aos outros. Como eu os amei, vocês devem amar-se uns aos outros.",
      "localizacao": "João 13:34"
    },
    {
      "versiculo": "Jesus olhou para eles e respondeu: \"Para o homem é impossível, mas para Deus todas as coisas são possíveis\".",
      "localizacao": "Mateus 19:26"
    },
    {
      "versiculo": "\"Ah! Soberano Senhor, tu fizeste os céus e a terra pelo teu grande poder e por teu braço estendido. Nada é difícil demais para ti.",
      "localizacao": "Jeremias 32:17"
    },
    {
      "versiculo": "\"Sei que podes fazer todas as coisas; nenhum dos teus planos pode ser frustrado.",
      "localizacao": "Jó 42:2"
    },
    {
      "versiculo": "\"Mesmo que isso pareça impossível para o remanescente deste povo naquela época, será impossível para mim?\", declara o Senhor dos Exércitos.",
      "localizacao": "Zacarias 8:6"
    },
    {
      "versiculo": "Perguntou Maria ao anjo: \"Como acontecerá isso se sou virgem?\" O anjo respondeu: \"O Espírito Santo virá sobre você, e o poder do Altíssimo a cobrirá com a sua sombra. Assim, aquele que há de nascer será chamado Santo, Filho de Deus.",
      "localizacao": "Lucas 1:34-35"
    },
    {
      "versiculo": "Também Isabel, sua parenta, terá um filho na velhice; aquela que diziam ser estéril já está em seu sexto mês de gestação. Pois nada é impossível para Deus\". Respondeu Maria: \"Sou serva do Senhor; que aconteça comigo conforme a tua palavra\". Então o anjo a deixou.",
      "localizacao": "Lucas 1:36-38"
    },
    {
      "versiculo": "\"Se podes?\", disse Jesus. \"Tudo é possível àquele que crê.\"",
      "localizacao": "Marcos 9:23"
    },
    {
      "versiculo": "Jesus olhou para eles e respondeu: \"Para o homem é impossível, mas para Deus não; todas as coisas são possíveis para Deus\".",
      "localizacao": "Marcos 10:27"
    },
    {
      "versiculo": "Jesus respondeu: \"O que é impossível para os homens é possível para Deus\".",
      "localizacao": "Lucas 18:27"
    },
    {
      "versiculo": "Ele respondeu: \"Porque a fé que vocês têm é pequena. Eu asseguro que, se vocês tiverem fé do tamanho de um grão de mostarda, poderão dizer a este monte: 'Vá daqui para lá', e ele irá. Nada será impossível para vocês.",
      "localizacao": "Mateus 17:20"
    },
    {
      "versiculo": "Portanto, eu digo: Tudo o que vocês pedirem em oração, creiam que já o receberam, e assim sucederá.",
      "localizacao": "Marcos 11:24"
    },
    {
      "versiculo": "Mas o Senhor disse a Abraão: \"Por que Sara riu e disse: 'Poderei realmente dar à luz, agora que sou idosa?' Existe alguma coisa impossível para o Senhor? Na primavera voltarei a você, e Sara terá um filho\".",
      "localizacao": "Gênesis 18:13-14"
    },
    {
      "versiculo": "Este homem foi entregue por propósito determinado e pré-conhecimento de Deus; e vocês, com a ajuda de homens perversos, o mataram, pregando-o na cruz. Mas Deus o ressuscitou dos mortos, rompendo os laços da morte, porque era impossível que a morte o retivesse.",
      "localizacao": "Atos dos Apóstolos 2:23-24"
    },
    {
      "versiculo": "Grande é o nosso Soberano e tremendo é o seu poder; é impossível medir o seu entendimento.",
      "localizacao": "Salmos 147:5"
    },
    {
      "versiculo": "Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade,",
      "localizacao": "Gálatas 5:22"
    },
    {
      "versiculo": "Não se embriaguem com vinho, que leva à libertinagem, mas deixem-se encher pelo Espírito,",
      "localizacao": "Efésios 5:18"
    },
    {
      "versiculo": "Pois o Reino de Deus não é comida nem bebida, mas justiça, paz e alegria no Espírito Santo;",
      "localizacao": "Romanos 14:17"
    },
    {
      "versiculo": "Pedro respondeu: \"Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo para perdão dos seus pecados, e receberão o dom do Espírito Santo.",
      "localizacao": "Atos dos Apóstolos 2:38"
    },
    {
      "versiculo": "\"O Espírito do Senhor está sobre mim, porque ele me ungiu para pregar boas-novas aos pobres. Ele me enviou para proclamar liberdade aos presos e recuperação da vista aos cegos, para libertar os oprimidos",
      "localizacao": "Lucas 4:18"
    },
    {
      "versiculo": "E eu pedirei ao Pai, e ele dará a vocês outro Conselheiro para estar com vocês para sempre, o Espírito da verdade. O mundo não pode recebê-lo, porque não o vê nem o conhece. Mas vocês o conhecem, pois ele vive com vocês e estará em vocês.",
      "localizacao": "João 14:16-17"
    },
    {
      "versiculo": "Não os deixarei órfãos; voltarei para vocês. ",
      "localizacao": "João 14:18"
    },
    {
      "versiculo": "Dentro de pouco tempo o mundo não me verá mais; vocês, porém, me verão. Porque eu vivo, vocês também viverão. Naquele dia, compreenderão que estou em meu Pai, vocês em mim, e eu em vocês.",
      "localizacao": "João 14:19-20"
    },
    {
      "versiculo": "Quem tem os meus mandamentos e lhes obedece, esse é o que me ama. Aquele que me ama será amado por meu Pai, e eu também o amarei e me revelarei a ele\".",
      "localizacao": "João 14:21"
    },
    {
      "versiculo": "Disse então Judas (não o Iscariotes): \"Senhor, mas por que te revelarás a nós e não ao mundo?\" Respondeu Jesus: \"Se alguém me ama, obedecerá à minha palavra. Meu Pai o amará, nós viremos a ele e faremos morada nele. Aquele que não me ama não obedece às minhas palavras. Estas palavras que vocês estão ouvindo não são minhas; são de meu Pai que me enviou.",
      "localizacao": "João 14:22-24"
    },
    {
      "versiculo": "\"Tudo isso tenho dito enquanto ainda estou com vocês. Mas o Conselheiro, o Espírito Santo, que o Pai enviará em meu nome, ensinará a vocês todas as coisas e fará vocês lembrarem tudo o que eu disse.",
      "localizacao": "João 14:25-26"
    },
    {
      "versiculo": "Não entristeçam o Espírito Santo de Deus, com o qual vocês foram selados para o dia da redenção.",
      "localizacao": "Efésios 4:30"
    },
    {
      "versiculo": "nos selou como sua propriedade e pôs o seu Espírito em nossos corações como garantia do que está por vir.",
      "localizacao": "2 Coríntios 1:22"
    },
    {
      "versiculo": "quanto mais o sangue de Cristo, que pelo Espírito eterno se ofereceu de forma imaculada a Deus, purificará a nossa consciência de atos que levam à morte, para que sirvamos ao Deus vivo!",
      "localizacao": "Hebreus 9:14"
    },
    {
      "versiculo": "Respondeu Jesus: \"Digo a verdade: Ninguém pode entrar no Reino de Deus se não nascer da água e do Espírito. O que nasce da carne é carne, mas o que nasce do Espírito é espírito. Não se surpreenda pelo fato de eu ter dito: É necessário que vocês nasçam de novo.",
      "localizacao": "João 3:5-7"
    },
    {
      "versiculo": "Não me expulses da tua presença nem tires de mim o teu Santo Espírito.",
      "localizacao": "Salmos 51:11"
    },
    {
      "versiculo": "Mas, quando os prenderem, não se preocupem quanto ao que dizer, ou como dizê-lo. Naquela hora, será dado o que dizer, pois não serão vocês que estarão falando, mas o Espírito do Pai de vocês falará por intermédio de vocês.",
      "localizacao": "Mateus 10:19-20"
    },
    {
      "versiculo": "\"Também digo que, se dois de vocês concordarem na terra em qualquer assunto sobre o qual pedirem, isso será feito a vocês por meu Pai que está nos céus. Pois onde se reunirem dois ou três em meu nome, ali eu estou no meio deles\".",
      "localizacao": "Mateus 18:19-20"
    },
    {
      "versiculo": "E viram o que parecia línguas de fogo, que se separaram e pousaram sobre cada um deles. Todos ficaram cheios do Espírito Santo e começaram a falar noutras línguas, conforme o Espírito os capacitava. Havia em Jerusalém judeus, devotos a Deus, vindos de todas as nações do mundo.",
      "localizacao": "Atos dos Apóstolos 2:3-5"
    },
    {
      "versiculo": "Chegando o dia de Pentecoste, estavam todos reunidos num só lugar. De repente veio do céu um som, como de um vento muito forte, e encheu toda a casa na qual estavam assentados.",
      "localizacao": "Atos dos Apóstolos 2:1-2"
    },
    {
      "versiculo": "Filhos, obedeçam a seus pais no Senhor, pois isso é justo. \"Honra teu pai e tua mãe\" - este é o primeiro mandamento com promessa - \"para que tudo te corra bem e tenhas longa vida sobre a terra\".",
      "localizacao": "Efésios 6:1-3"
    },
    {
      "versiculo": "Pais, não irritem seus filhos; antes criem-nos segundo a instrução e o conselho do Senhor.",
      "localizacao": "Efésios 6:4"
    },
    {
      "versiculo": "\"Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor,o teu Deus, te dá.",
      "localizacao": "Êxodo 20:12"
    },
    {
      "versiculo": "Filhos, obedeçam a seus pais em tudo, pois isso agrada ao Senhor.",
      "localizacao": "Colossenses 3:20"
    },
    {
      "versiculo": "Pais, não irritem seus filhos, para que eles não desanimem.",
      "localizacao": "Colossenses 3:21"
    },
    {
      "versiculo": "Os filhos dos filhos são uma coroa para os idosos, e os pais são o orgulho dos seus filhos.",
      "localizacao": "Provérbios 17:6"
    },
    {
      "versiculo": "Os filhos são herança do Senhor, uma recompensa que ele dá. Como flechas nas mãos do guerreiro são os filhos nascidos na juventude. Como é feliz o homem que tem a sua aljava cheia deles! Não será humilhado quando enfrentar seus inimigos no tribunal.",
      "localizacao": "Salmos 127:3-5"
    },
    {
      "versiculo": "Que todas estas palavras que hoje lhe ordeno estejam em seu coração. Ensine-as com persistência a seus filhos. Converse sobre elas quando estiver sentado em casa, quando estiver andando pelo caminho, quando se deitar e quando se levantar.",
      "localizacao": "Deuteronômio 6:6-7"
    },
    {
      "versiculo": "Instrua a criança segundo os objetivos que você tem para ela, e mesmo com o passar dos anos não se desviará deles.",
      "localizacao": "Provérbios 22:6"
    },
    {
      "versiculo": "A vara da correção dá sabedoria, mas a criança entregue a si mesma envergonha a sua mãe.",
      "localizacao": "Provérbios 29:15"
    },
    {
      "versiculo": "Quem se nega a castigar seu filho não o ama; quem o ama não hesita em discipliná-lo.",
      "localizacao": "Provérbios 13:24"
    },
    {
      "versiculo": "Suportem as dificuldades, recebendo-as como disciplina; Deus os trata como filhos. Ora, qual o filho que não é disciplinado por seu pai?",
      "localizacao": "Hebreus 12:7"
    },
    {
      "versiculo": "Ouça, meu filho, a instrução de seu pai e não despreze o ensino de sua mãe. Eles serão um enfeite para a sua cabeça, um adorno para o seu pescoço.",
      "localizacao": "Provérbios 1:8-9"
    },
    {
      "versiculo": "Ouça o seu pai, que o gerou; não despreze sua mãe quando ela envelhecer.",
      "localizacao": "Provérbios 23:22"
    },
    {
      "versiculo": "Provérbios de Salomão: O filho sábio dá alegria ao pai; o filho tolo dá tristeza à mãe.",
      "localizacao": "Provérbios 10:1"
    },
    {
      "versiculo": "O filho que rouba o pai e expulsa a mãe é causador de vergonha e desonra.",
      "localizacao": "Provérbios 19:26"
    },
    {
      "versiculo": "Se alguém amaldiçoar seu pai ou sua mãe, a luz de sua vida se extinguirá na mais profunda escuridão.",
      "localizacao": "Provérbios 20:20"
    },
    {
      "versiculo": "O pai do justo exultará de júbilo; quem tem filho sábio nele se alegra.",
      "localizacao": "Provérbios 23:24"
    },
    {
      "versiculo": "\"Os pais não serão mortos em lugar dos filhos, nem os filhos em lugar dos pais; cada um morrerá pelo seu próprio pecado.",
      "localizacao": "Deuteronômio 24:16"
    },
    {
      "versiculo": "Mas, se uma viúva tem filhos ou netos, que estes aprendam primeiramente a pôr a sua religião em prática, cuidando de sua própria família e retribuindo o bem recebido de seus pais e avós, pois isso agrada a Deus.",
      "localizacao": "1 Timóteo 5:4"
    },
    {
      "versiculo": "Se alguém não cuida de seus parentes, e especialmente dos de sua própria família, negou a fé e é pior que um descrente.",
      "localizacao": "1 Timóteo 5:8"
    },
    {
      "versiculo": "Se, porém, não agrada a vocês servir ao Senhor, escolham hoje a quem irão servir, se aos deuses que os seus antepassados serviram além do Eufrates, ou aos deuses dos amorreus, em cuja terra vocês estão vivendo. Mas eu e a minha família serviremos ao Senhor\".",
      "localizacao": "Josué 24:15"
    },
    {
      "versiculo": "Por essa razão, o homem deixará pai e mãe e se unirá à sua mulher, e eles se tornarão uma só carne.",
      "localizacao": "Gênesis 2:24"
    },
    {
      "versiculo": "\"Qual pai, do meio de vocês, se o filho pedir um peixe, em lugar disso lhe dará uma cobra? Ou, se pedir um ovo, lhe dará um escorpião? Se vocês, apesar de serem maus, sabem dar boas coisas aos seus filhos, quanto mais o Pai que está nos céus dará o Espírito Santo a quem o pedir!\"",
      "localizacao": "Lucas 11:11-13"
    }
  ]