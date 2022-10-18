'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "454117bd5c59e63df30a61041452d886",
"index.html": "e1e927f2070c374e202cc384a1894dcf",
"/": "bf8ff025fc713c456c76c4fcfd5ec5b8",
"main.dart.js": "b7f0338bafc01a10626cf19f79930f3d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.min.js": "e929a416ec1a28fcd34b3f6bf0da248a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"public/index.html": "71fbac1758de13c2435705ceea84e84b",
"package-lock.json": "ea719cd860155c54cfe1c5d3d30339b5",
"package.json": "8ae7c5379656ddae74ea48e70d768e47",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "33dce2f8dcd82ad2f2bc0f7a5baa917e",
"build/index.html": "bf8ff025fc713c456c76c4fcfd5ec5b8",
"build/asset-manifest.json": "7ba3ecbe7ce33cdde9aaa261560140e3",
"build/static/css/main.dbd27bd5.css": "45e45c9b555d457c2aed3983bfa3062a",
"build/static/css/main.dbd27bd5.css.map": "f2d921f9c6e2e8c27d9dccd1346b7b90",
"build/static/js/main.30492099.js": "e0c7d731e09de2382f32eae872efcb3b",
"build/static/js/main.30492099.js.map": "8a99238d1249ed3040a3e1cce1e566e8",
"build/static/js/787.d1d4a2c2.chunk.js.map": "7d6936308f92eb5d27f5d4f942ed314f",
"build/static/js/787.d1d4a2c2.chunk.js": "3dd59e5d6bf7b317e6d8075f4a36f378",
"build/static/js/main.30492099.js.LICENSE.txt": "718b5dadaed1668dfc839cf3d4d05f14",
"build/static/media/close.d2b7e54e56afbd0ae4f679aac0e42fb2.svg": "39bbf7cdf21ffe590b72b1ac9e845679",
"build/static/media/calendar.7bc81c75aaffce5d228d898b6e32481b.svg": "bc5479d2badf0b8c5ff44369bfa0a4cf",
"build/static/media/point.cf73cd815f4c93d013c564017e1df8ab.svg": "bd6e731cc7a088b59440cfd86ac7a6ae",
"build/static/media/person.326b44c10d5fda4f5edb3da1f60401d6.svg": "79328cfb9f70fff6d4aa0030a8af54ef",
"build/static/media/logo.71f0f7031b819da6df851fbedef618e9.svg": "bad4150a17c8d66b144130e745b8892e",
"build/static/media/swap.8dbdf386e51a1383e49a32fa6d37c477.svg": "97d8f9eb8b3fc69c5790f81c7cfdaf7f",
"build/static/media/plane.67b62852e8574b96821cf5a24749f010.svg": "65d481fe963f7dcb29d302ee0dd81718",
"build/static/media/arrow-forward.5be310ce76e51d1c57d9fdbd43dabfca.svg": "f976721a7741d13686c513b9cdc5eb17",
"assets/AssetManifest.json": "42c2f784988f6b03f74fa0afbf1a2a01",
"assets/NOTICES": "96eb8d31d019fa1f389a9d68b5130338",
"assets/FontManifest.json": "5deab632c0c56545bcf73972787be54c",
"assets/packages/flag/res/flag/hn.svg": "81ab9078acf460af828739861f250713",
"assets/packages/flag/res/flag/dm.svg": "815a2329fc6db449afed64d280c0ccea",
"assets/packages/flag/res/flag/fr.svg": "2f9befe94ef9076d58b0a2ae38e1a025",
"assets/packages/flag/res/flag/dz.svg": "daeb5108dcabc9e00e731ee40e546b40",
"assets/packages/flag/res/flag/ga.svg": "4544cd0bb3faf33f633ddb36b134b8f8",
"assets/packages/flag/res/flag/ph.svg": "21edfa6742a6843aacaff53b937e5c15",
"assets/packages/flag/res/flag/ss.svg": "de6a14955a3a56cdfb032bd70c0c8a0d",
"assets/packages/flag/res/flag/rw.svg": "559f166d947d2e7b4e0d4bb426d6632b",
"assets/packages/flag/res/flag/sd.svg": "a53d817395b239599901627a36a6a335",
"assets/packages/flag/res/flag/se.svg": "97ce2d679f8d8ede50153b91124cd264",
"assets/packages/flag/res/flag/sr.svg": "6905244b5370ff2cc10d5420affa03f6",
"assets/packages/flag/res/flag/eh.svg": "450b4000426c7799a5648da3e7a0cc96",
"assets/packages/flag/res/flag/gw.svg": "6c1ff733c39d9e4e76f0eb9a0f269c7c",
"assets/packages/flag/res/flag/jp.svg": "a1e1ea513a3fcd801e85db4373ce8cd6",
"assets/packages/flag/res/flag/gb.svg": "68b4d8305c4f90577e6357bb0c247d29",
"assets/packages/flag/res/flag/pk.svg": "52975d36167e1ad68ecd379b6854530e",
"assets/packages/flag/res/flag/sg.svg": "2d6223aec3513bb057ed8540b2dae40a",
"assets/packages/flag/res/flag/ru.svg": "7a8b3a7d8204983d246e6edbcbe21413",
"assets/packages/flag/res/flag/do.svg": "68cc45c8b6a1d9f2d900782c017aca56",
"assets/packages/flag/res/flag/gt.svg": "c79e10d99aee6f0f66c9d2907075a7bd",
"assets/packages/flag/res/flag/kw.svg": "0887d9941c4f694048087ec864fcc7ef",
"assets/packages/flag/res/flag/il.svg": "71dbb46044e8f441aad32fb9a91f8436",
"assets/packages/flag/res/flag/dk.svg": "07be12773c9bacc7883f41cf806ad7e5",
"assets/packages/flag/res/flag/sb.svg": "79392615aa0527d6d741de6742d0a811",
"assets/packages/flag/res/flag/py.svg": "8156f5f7586b7d92c0fb46aeda70ce68",
"assets/packages/flag/res/flag/st.svg": "f48819e95d956ddbcb37a7be63f56faa",
"assets/packages/flag/res/flag/sc.svg": "90c9327b714637cdf6c46586068d1f45",
"assets/packages/flag/res/flag/dj.svg": "3c879837e330f212b02669fd5cb1485f",
"assets/packages/flag/res/flag/gq.svg": "8be10c943b439a856aad59ab88fdab64",
"assets/packages/flag/res/flag/kr.svg": "b62df313096b2d0205e937926db159a5",
"assets/packages/flag/res/flag/ke.svg": "aa572e0e7ad47c23e37633f1b370da8d",
"assets/packages/flag/res/flag/kg.svg": "c08e9251ab996b005655d6b5c56f4115",
"assets/packages/flag/res/flag/hk.svg": "bcd1bda531d3d568826424f779dab941",
"assets/packages/flag/res/flag/kp.svg": "a9f988e5c3b8644f1555b6830600581c",
"assets/packages/flag/res/flag/gd.svg": "84b1ac78a6e909f7244d56c7a7b5f17d",
"assets/packages/flag/res/flag/sa.svg": "c9373219b085ed5791458bf23a7aa361",
"assets/packages/flag/res/flag/sv.svg": "1b29ca9e5a0b70bc2be8c55423c891c7",
"assets/packages/flag/res/flag/rs.svg": "74b32a84deba1c68326d0aad4173f7ec",
"assets/packages/flag/res/flag/pl.svg": "aa3ad8a9daa8ec9d6018955708fe5737",
"assets/packages/flag/res/flag/gr.svg": "b41b5f52dd7dbffc35801da4400b0cd5",
"assets/packages/flag/res/flag/ge.svg": "c9a85b6eea715acb3d71c35aa913b6ec",
"assets/packages/flag/res/flag/in.svg": "7a482fd38133dd2ac91dbb7a0cfc51c6",
"assets/packages/flag/res/flag/mv.svg": "dd23d9966716c14519286a72ca9308ca",
"assets/packages/flag/res/flag/lr.svg": "177182a8e32845d6535283ebae12b9ea",
"assets/packages/flag/res/flag/ma.svg": "7e55bd5403440cc1d3e17652420571e3",
"assets/packages/flag/res/flag/nz.svg": "7d1ea3d5c1fee2c14d81152169da672b",
"assets/packages/flag/res/flag/au.svg": "ac7ddacad338b6d1074f8b0d2e6fd2ac",
"assets/packages/flag/res/flag/bn.svg": "82577bde2a2f18a74bece06113782219",
"assets/packages/flag/res/flag/by.svg": "46f88d7e094f95ce28a74b570bb5e395",
"assets/packages/flag/res/flag/tt.svg": "30180834dc0602f19f8dd332b3e027f9",
"assets/packages/flag/res/flag/ug.svg": "a3dccd48c0aa42614749ff9dcca8be6c",
"assets/packages/flag/res/flag/ye.svg": "209af6bf0b2f47057aab72bd0392d6f4",
"assets/packages/flag/res/flag/bo.svg": "1bc18cd73405b56c1f6ee39d059b3961",
"assets/packages/flag/res/flag/at.svg": "0d38e4d825bb3176af4507d2bdf60eba",
"assets/packages/flag/res/flag/ls.svg": "f9ff2c953a4d9fb2b68876ae6c684152",
"assets/packages/flag/res/flag/mw.svg": "6ae05cd68db4fdec0c31f4eeaca3d7d7",
"assets/packages/flag/res/flag/nl.svg": "e53fc83f569b904b5b883c87a37b5607",
"assets/packages/flag/res/flag/mu.svg": "139f91a3aebd9bb7f8d15aa0a996a5ff",
"assets/packages/flag/res/flag/ci.svg": "9996d349c36e0856832977d6b70ae09c",
"assets/packages/flag/res/flag/bz.svg": "6f7fb09570637e205ebd010e6b0a70c4",
"assets/packages/flag/res/flag/tw.svg": "45ef6b6922fc468e4d1bd12153b0e050",
"assets/packages/flag/res/flag/us.svg": "ad5dff63fcfd4539295434c0013c3afa",
"assets/packages/flag/res/flag/tv.svg": "7dbc961e1a282d5760cc7d3cd321b30f",
"assets/packages/flag/res/flag/ch.svg": "69547e25f5fe58a8b78777dc82725e04",
"assets/packages/flag/res/flag/mc.svg": "3d1d95bfa7445052d8173a5722f8de6e",
"assets/packages/flag/res/flag/mt.svg": "dcb55d4236b9977a909882974a12e924",
"assets/packages/flag/res/flag/no.svg": "4b57a28e497b81a0fb3063015dfbe800",
"assets/packages/flag/res/flag/lc.svg": "e094620d44bd68ca32fd104d474028fb",
"assets/packages/flag/res/flag/mg.svg": "65482ca562875ff1337f0cccbdaa46ce",
"assets/packages/flag/res/flag/lt.svg": "f81172011b0b0fd8f95db12e196458f6",
"assets/packages/flag/res/flag/ad.svg": "6a14dcd1af407b41e8921b9bc6c90e32",
"assets/packages/flag/res/flag/cl.svg": "11f7f79f090e3ee5fd8763722af3a99c",
"assets/packages/flag/res/flag/bh.svg": "30728ffe1993377df3a9fc5f6fc42713",
"assets/packages/flag/res/flag/ua.svg": "1aeecd60c245f84d7db8bd634f0e870b",
"assets/packages/flag/res/flag/tr.svg": "2254e9c06c40bfac15d3fb9ddf2421e5",
"assets/packages/flag/res/flag/td.svg": "8812ba91dbffba55946efdba3b2569d7",
"assets/packages/flag/res/flag/bi.svg": "1a2bcfb909091ebc0c6d3fea31eef993",
"assets/packages/flag/res/flag/ar.svg": "2236d9b396c4475234b1f050758631b9",
"assets/packages/flag/res/flag/cm.svg": "e48da92d4f4f63eb91152ca126cedc8b",
"assets/packages/flag/res/flag/ae.svg": "8ae6708cbab0fe2eeddb8152d87e302c",
"assets/packages/flag/res/flag/cz.svg": "9c5898c620005bd48fed5f3ea9210894",
"assets/packages/flag/res/flag/lu.svg": "4e06269e2a86d334d7185881d21a298f",
"assets/packages/flag/res/flag/lb.svg": "db1d8d6564dba6e1babeb04983a2b4d5",
"assets/packages/flag/res/flag/md.svg": "7e4c0d86dcf33627148f9cd67bee6b51",
"assets/packages/flag/res/flag/ag.svg": "0538fa90e8ba12bad017f05975aa0841",
"assets/packages/flag/res/flag/co.svg": "230d6931448dc893671ff6a59e6fb753",
"assets/packages/flag/res/flag/vn.svg": "cc2e55f0f5f8b70997ac88191a8561e6",
"assets/packages/flag/res/flag/zm.svg": "4bd901a04f4821e61fc158e3c28d09a6",
"assets/packages/flag/res/flag/tg.svg": "5e565ac50245c96dfd9f9753e11a64e5",
"assets/packages/flag/res/flag/cn.svg": "9caece66507768334f68bc3ec25e5ceb",
"assets/packages/flag/res/flag/bj.svg": "203c8d481e7303757026d65cf6a1e43f",
"assets/packages/flag/res/flag/cy.svg": "135c77a66ab99f0e5b41be14b4f8d4c1",
"assets/packages/flag/res/flag/af.svg": "056c4dbcaf56932bee246bb751309c9f",
"assets/packages/flag/res/flag/lv.svg": "9fa6c690c05867c2240c179909de5f85",
"assets/packages/flag/res/flag/om.svg": "c7dcd8ebb9ad2dbdf06fe5bd0d9b0f41",
"assets/packages/flag/res/flag/mr.svg": "e12cbc42ed04c6a1ae1bbe8cfa185029",
"assets/packages/flag/res/flag/ni.svg": "90df73abfa958b37c5f1a041938826c3",
"assets/packages/flag/res/flag/la.svg": "b76f93a9d626679c2aed426bc3fcd758",
"assets/packages/flag/res/flag/me.svg": "d8e4f69a717279564d11c383372db23c",
"assets/packages/flag/res/flag/mh.svg": "15e740f7d94caa54c706b3da4a14545e",
"assets/packages/flag/res/flag/bg.svg": "e3e193057e741aaeb9486d0af77f8f8b",
"assets/packages/flag/res/flag/tj.svg": "c8b3c4946503ec9a6e6d9a251ced60d4",
"assets/packages/flag/res/flag/vu.svg": "f0b65910f246ae5cbecedc933029f482",
"assets/packages/flag/res/flag/uy.svg": "f639e12989ff9aa7bbfb4ed47fa8ae8a",
"assets/packages/flag/res/flag/za.svg": "8f50c35985eab084114711cad6776eb6",
"assets/packages/flag/res/flag/zw.svg": "227d02aa1aa0f29e691ad7566b7c9521",
"assets/packages/flag/res/flag/vc.svg": "2cc0562abbb0a32483c12d29fa0ad79f",
"assets/packages/flag/res/flag/bf.svg": "8c9b84ac3c7851f2e34ab4935f33397e",
"assets/packages/flag/res/flag/cu.svg": "3e5f9c8b3f8b7173d008e5cfd1682418",
"assets/packages/flag/res/flag/ne.svg": "0c4322271e2aecc54aec87a8935228f0",
"assets/packages/flag/res/flag/nr.svg": "2526a443e0f48c0a8ee7c3314bf15f85",
"assets/packages/flag/res/flag/mk.svg": "93c15186533262b4a99e531c484d4459",
"assets/packages/flag/res/flag/np.svg": "0e7b6b2545dc384690c597aa1db4d1c8",
"assets/packages/flag/res/flag/ng.svg": "6fea46bec5cbabaf3502436889e93ca0",
"assets/packages/flag/res/flag/bs.svg": "5d04b31e6259544bb975cdc259c32551",
"assets/packages/flag/res/flag/bd.svg": "73c177e4545c26b844551aa8038970b0",
"assets/packages/flag/res/flag/va.svg": "e9c2506a920cce4e36ee5aeb5573a7f9",
"assets/packages/flag/res/flag/uz.svg": "f0eb4284776fa1378666495d136303b3",
"assets/packages/flag/res/flag/a.txt": "b5a3499a576030c8f27bb27b77efe113",
"assets/packages/flag/res/flag/xk.svg": "af02b9e4d3da01c09359aa23c7ceef74",
"assets/packages/flag/res/flag/ws.svg": "69b52e9a76c73fc5ea231fb5a1499b1e",
"assets/packages/flag/res/flag/th.svg": "e7f18a5477d4f250f136c54ce56f7081",
"assets/packages/flag/res/flag/ca.svg": "6cafa17d9715922ebb496b6384cc1541",
"assets/packages/flag/res/flag/be.svg": "df57b33ad7b80d3b04a92c263130d26e",
"assets/packages/flag/res/flag/cv.svg": "66a51943bb7c8560ccaa06b955ea3ce6",
"assets/packages/flag/res/flag/br.svg": "248da95ef49cb528b8ef16e4b2dc36d9",
"assets/packages/flag/res/flag/ly.svg": "592a5116d907a28ce6a435bf71899c20",
"assets/packages/flag/res/flag/my.svg": "417cba3cc8c4121cf0d2250fd5c9697b",
"assets/packages/flag/res/flag/mn.svg": "39bcb3ef04696298430ca84b7ff2d6fa",
"assets/packages/flag/res/flag/az.svg": "d1c6ff3d2c6137ed6dc59deff9ca1795",
"assets/packages/flag/res/flag/ba.svg": "38a248a0da355ec7d6591e67489ed08b",
"assets/packages/flag/res/flag/am.svg": "69727bec1f2a92340d3a6822131ffc23",
"assets/packages/flag/res/flag/cr.svg": "b6d92c95d7229492a298cf3631f8f368",
"assets/packages/flag/res/flag/tl.svg": "f34c9a0193bb410985e04f4ba8e8d415",
"assets/packages/flag/res/flag/tm.svg": "c7bf7db7254400133131a7b4b2552828",
"assets/packages/flag/res/flag/tz.svg": "5ec3b115b6f327284a2414d7ec3f5a9b",
"assets/packages/flag/res/flag/ve.svg": "d6be56f106bf5454a6555518aaf3c1e0",
"assets/packages/flag/res/flag/al.svg": "9ca1e7c55a76c6f0c5b34c29ed911c8f",
"assets/packages/flag/res/flag/bw.svg": "f9750ef2e25bda43bdd29b454b9e32ca",
"assets/packages/flag/res/flag/cd.svg": "ed47822b634dfe5707d57321a76f13ab",
"assets/packages/flag/res/flag/lk.svg": "faa1949523b46e9f67c4cbac775a0cbc",
"assets/packages/flag/res/flag/mo.svg": "79d90d7e3778c5c2c7d4d5f887d53bb1",
"assets/packages/flag/res/flag/mx.svg": "b4d928c17dfc94c56858c3da56e94188",
"assets/packages/flag/res/flag/na.svg": "a830d0864b6aa393b629c1baa5246d2a",
"assets/packages/flag/res/flag/mz.svg": "bc33186e77bd479f472c214c1e5de5d5",
"assets/packages/flag/res/flag/li.svg": "071b1d57a0ece6b2b738a3de7dfd0ccd",
"assets/packages/flag/res/flag/mm.svg": "2d22272029a2d705b4cd5c0a4895ef16",
"assets/packages/flag/res/flag/cf.svg": "66eaa7d7fa8434f3966af11188be0028",
"assets/packages/flag/res/flag/bb.svg": "68cbe43424c89d45c4d06fda5195fdcd",
"assets/packages/flag/res/flag/to.svg": "f4d05f56b92d182344f767567eb17211",
"assets/packages/flag/res/flag/tn.svg": "179c4fc6765bf7369d8136ae3986e517",
"assets/packages/flag/res/flag/ao.svg": "ea0a59870bfb372f25c6f56271eb6808",
"assets/packages/flag/res/flag/bt.svg": "ce4684f240e15637d2c67eb222d63fe5",
"assets/packages/flag/res/flag/cg.svg": "5911439801b0aa84bcb9f67d90c4ed89",
"assets/packages/flag/res/flag/ml.svg": "12f23b6b05cc66725e2374f8dc78f5c0",
"assets/packages/flag/res/flag/jo.svg": "34d7eca815fff085db34d0e97ef84ac3",
"assets/packages/flag/res/flag/it.svg": "41b03921340062a6a1727eb440d19a8b",
"assets/packages/flag/res/flag/gh.svg": "7d6d7a831497ce467b888fbba4cf7d21",
"assets/packages/flag/res/flag/sm.svg": "16dab5ad5a24fc6af779439d1ef21724",
"assets/packages/flag/res/flag/pa.svg": "1a65c4313238fbc4b8cfbce75172a24f",
"assets/packages/flag/res/flag/sz.svg": "609860b29fbc32697847b72b40c3feba",
"assets/packages/flag/res/flag/pw.svg": "2104cf16e5d8b2927269348f649b641f",
"assets/packages/flag/res/flag/sl.svg": "7755f12e8da38a69f6347c901557b429",
"assets/packages/flag/res/flag/de.svg": "85f98c37ca46ee50b5c8ba121baacf2d",
"assets/packages/flag/res/flag/fm.svg": "cfc3756759f4002983b49217456fc8e4",
"assets/packages/flag/res/flag/kh.svg": "6e722bc2d4535eb7655d4f8f95ad90be",
"assets/packages/flag/res/flag/et.svg": "120ea455502dbaa6dffe199a6b589e8b",
"assets/packages/flag/res/flag/ec.svg": "94317befb597bfc7cbe5a664dbe34afd",
"assets/packages/flag/res/flag/sn.svg": "4db98c0bbb98adc9ae3d8fd689a97600",
"assets/packages/flag/res/flag/sy.svg": "d8e896be0dd656174ccb831f6b42a997",
"assets/packages/flag/res/flag/pt.svg": "8399d871b0102e3df032cc9f69ca06aa",
"assets/packages/flag/res/flag/so.svg": "6e5f13371514efbf71ddfdcc5eaa2c14",
"assets/packages/flag/res/flag/eu.svg": "9491b689ec6a5a12ca42ec1096568b80",
"assets/packages/flag/res/flag/jm.svg": "684650029f9dad09d779663fcb809282",
"assets/packages/flag/res/flag/hr.svg": "3e56776d23fdd54b4ed116481dd19d2b",
"assets/packages/flag/res/flag/ki.svg": "64cf951cfc4bcec910b2d5911dcf78b4",
"assets/packages/flag/res/flag/kz.svg": "0fe9097bba1cc582f03d6b845bea512a",
"assets/packages/flag/res/flag/ie.svg": "4a6b333e1b344bd04ee59f19fbd4abaa",
"assets/packages/flag/res/flag/km.svg": "6d07496344175e577266949b2833b0c3",
"assets/packages/flag/res/flag/ir.svg": "6d32f5794b10d03a50057b8fd5ecea46",
"assets/packages/flag/res/flag/gy.svg": "3d50da7f6eff25385a33bd1c0cab7fbe",
"assets/packages/flag/res/flag/gn.svg": "a783ea888c06b7d64cf5bcd08ef20ad8",
"assets/packages/flag/res/flag/fj.svg": "4541ca5ba2cd691b30245e7d5a2d9d7b",
"assets/packages/flag/res/flag/pg.svg": "d2ad188348d575dd628d65efef4b94ee",
"assets/packages/flag/res/flag/sk.svg": "a63549e8450fff840984650a9b0c5a64",
"assets/packages/flag/res/flag/ro.svg": "15da9998583a8bece6fd90bf201b310e",
"assets/packages/flag/res/flag/eg.svg": "98f7dcbe7af8749848ba688e9fc1af2c",
"assets/packages/flag/res/flag/is.svg": "1310d11c16a0a3ad8bbec39084d98d6a",
"assets/packages/flag/res/flag/id.svg": "e9b657b839dba5a312c5ea243cf43c3d",
"assets/packages/flag/res/flag/iq.svg": "f7890d3258ca62b7efcedf3f4aae3751",
"assets/packages/flag/res/flag/kn.svg": "1ab2d7d4d373306c4d9ffdca79c80128",
"assets/packages/flag/res/flag/hu.svg": "2e0e3e500ac9a0f691900d3e27c6e8b2",
"assets/packages/flag/res/flag/ee.svg": "8665c242c58dc75c99b4e1e46e607b39",
"assets/packages/flag/res/flag/er.svg": "67f5cd294f998bb172bd8c6e702c411c",
"assets/packages/flag/res/flag/fi.svg": "a814e980a8184e1efa297d90d6284c4c",
"assets/packages/flag/res/flag/gm.svg": "51399c19982b57b330c58dbae394d5c7",
"assets/packages/flag/res/flag/ps.svg": "77872242acfe696929d9a56b55748709",
"assets/packages/flag/res/flag/si.svg": "d718e9d1b5dedd27e4114371fd00dd80",
"assets/packages/flag/res/flag/pe.svg": "23f4fbf5e318c51dcdd76271c0c6604a",
"assets/packages/flag/res/flag/qa.svg": "1dcd82370d3912273a15c26d264400fd",
"assets/packages/flag/res/flag/es.svg": "e511dceedff1a2f71233ed3907c73199",
"assets/packages/flag/res/flag/ht.svg": "93c514d3d908f86d524e68b65ea333ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_multi_formatter/flags/png/tg.png": "ae49203ef3de781e34c2b1ab072b18bb",
"assets/packages/flutter_multi_formatter/flags/png/me.png": "451723e36ee8fb7052985302601f0ee7",
"assets/packages/flutter_multi_formatter/flags/png/la.png": "8437e3b007e993d0689452dbef8dec5a",
"assets/packages/flutter_multi_formatter/flags/png/mr.png": "c290de341ec04121f81f1d92128f65b3",
"assets/packages/flutter_multi_formatter/flags/png/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/flutter_multi_formatter/flags/png/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/flutter_multi_formatter/flags/png/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/flutter_multi_formatter/flags/png/af.png": "aca8b607d5f7f7de283db4a20ca3f845",
"assets/packages/flutter_multi_formatter/flags/png/cy.png": "0a99780a720e253aac2e45e476458ba8",
"assets/packages/flutter_multi_formatter/flags/png/bj.png": "6a699b2a3de19ea9cbe7742a7eb742b6",
"assets/packages/flutter_multi_formatter/flags/png/aq.png": "d18febf275fd13385c1915ab0165af86",
"assets/packages/flutter_multi_formatter/flags/png/cn.png": "9d1e0784dcefa3513fb60071df2e04b8",
"assets/packages/flutter_multi_formatter/flags/png/gb-sct.png": "58267a46e412d0e2e92d76b00f3bddb5",
"assets/packages/flutter_multi_formatter/flags/png/co.png": "1f1228902d0fd2b6fd23d5ead00860d3",
"assets/packages/flutter_multi_formatter/flags/png/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/flutter_multi_formatter/flags/png/ag.png": "62c9310edb9dc04193b3a24b4edce8e2",
"assets/packages/flutter_multi_formatter/flags/png/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/flutter_multi_formatter/flags/png/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/flutter_multi_formatter/flags/png/zm.png": "7d304f13f136589bd6f825c07237676c",
"assets/packages/flutter_multi_formatter/flags/png/vn.png": "0feb7f0e73d4d3802e45cfb1bb1544c6",
"assets/packages/flutter_multi_formatter/flags/png/tf.png": "5cc7bee04686cd239815544e4c75a254",
"assets/packages/flutter_multi_formatter/flags/png/td.png": "11d75e01b66659fe74372765f7c82521",
"assets/packages/flutter_multi_formatter/flags/png/yt.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/lb.png": "46b6c0d58c4b99070e190ce95a7250eb",
"assets/packages/flutter_multi_formatter/flags/png/mf.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/flutter_multi_formatter/flags/png/mq.png": "ae9ad4364a913e81c9787560c3b167fd",
"assets/packages/flutter_multi_formatter/flags/png/cz.png": "bbafde1489e7a263006c9c6dbf878743",
"assets/packages/flutter_multi_formatter/flags/png/ae.png": "1439ab85e1ef23242fe7885da8a19091",
"assets/packages/flutter_multi_formatter/flags/png/cm.png": "2f8725d49955a64285d7bbd2bff02e2d",
"assets/packages/flutter_multi_formatter/flags/png/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/flutter_multi_formatter/flags/png/ar.png": "0836bad77d30f355fc2064f6df069b8c",
"assets/packages/flutter_multi_formatter/flags/png/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/flutter_multi_formatter/flags/png/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/flutter_multi_formatter/flags/png/cl.png": "2ed34ecb10a528bffc6908fd65996d2b",
"assets/packages/flutter_multi_formatter/flags/png/ad.png": "77ce19646f93c63a2387f2840bc9686e",
"assets/packages/flutter_multi_formatter/flags/png/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/flutter_multi_formatter/flags/png/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/flutter_multi_formatter/flags/png/mg.png": "4e20926e9ba5478d189f28adc813cd15",
"assets/packages/flutter_multi_formatter/flags/png/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/flutter_multi_formatter/flags/png/tr.png": "ea664a8b19fa4bd81145900d57e53fda",
"assets/packages/flutter_multi_formatter/flags/png/ua.png": "2dc383ba79588bd5a15a519a26ef204a",
"assets/packages/flutter_multi_formatter/flags/png/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/flutter_multi_formatter/flags/png/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/flutter_multi_formatter/flags/png/mt.png": "5eecdcd5c105f26d27903fbb2a1d8b36",
"assets/packages/flutter_multi_formatter/flags/png/no.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/flutter_multi_formatter/flags/png/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/flutter_multi_formatter/flags/png/bl.png": "072a0baffbf28632650627d339bf9c5b",
"assets/packages/flutter_multi_formatter/flags/png/aw.png": "410a04614d4176ea71f886f823fd35b5",
"assets/packages/flutter_multi_formatter/flags/png/bz.png": "820836c383ff34a06d3ac9f4bff68bd4",
"assets/packages/flutter_multi_formatter/flags/png/bm.png": "c348252e17350e0f8ef4f52e0791ca62",
"assets/packages/flutter_multi_formatter/flags/png/ci.png": "ad0d9306aab54c24a6b2146c3a74b954",
"assets/packages/flutter_multi_formatter/flags/png/mu.png": "ac855f82fe1038c119a25a07998fbb83",
"assets/packages/flutter_multi_formatter/flags/png/us.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/tw.png": "ec53e0e988f816e4841bd1ab3c27ed04",
"assets/packages/flutter_multi_formatter/flags/png/ye.png": "026c7294278c64c3b39dc085e8a96f3c",
"assets/packages/flutter_multi_formatter/flags/png/mw.png": "bbfeb66a5eed87cb6e72ea2686857df1",
"assets/packages/flutter_multi_formatter/flags/png/nl.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/ls.png": "ca6e2dfcf32adaea9d5e93d5391fb373",
"assets/packages/flutter_multi_formatter/flags/png/bo.png": "509a86a7d4d578c257766b8a06ef716f",
"assets/packages/flutter_multi_formatter/flags/png/at.png": "8bc220081abdf5fe2139dcf052fb922f",
"assets/packages/flutter_multi_formatter/flags/png/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/flutter_multi_formatter/flags/png/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/flutter_multi_formatter/flags/png/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/flutter_multi_formatter/flags/png/ma.png": "f60e4b79249dd35e15514d0148182e23",
"assets/packages/flutter_multi_formatter/flags/png/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/flutter_multi_formatter/flags/png/lr.png": "d64e3e67b0c90e2ef83ed9868f7c29b4",
"assets/packages/flutter_multi_formatter/flags/png/mv.png": "018b26f7521c2b3db9624f40e9e1f563",
"assets/packages/flutter_multi_formatter/flags/png/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/flutter_multi_formatter/flags/png/ug.png": "18981ef65248d3bb97deda3fc30b7030",
"assets/packages/flutter_multi_formatter/flags/png/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/flutter_multi_formatter/flags/png/pl.png": "68252741ff7ad66838559050eb9c6b96",
"assets/packages/flutter_multi_formatter/flags/png/rs.png": "b8ef69ae6caf134436c2756f65736433",
"assets/packages/flutter_multi_formatter/flags/png/in.png": "6811ad48652c371323b8a540703ddf39",
"assets/packages/flutter_multi_formatter/flags/png/ge.png": "4ef3f738568d8503bde5f647e77cac2e",
"assets/packages/flutter_multi_formatter/flags/png/gr.png": "efeed503130172fadbace1481caab4bb",
"assets/packages/flutter_multi_formatter/flags/png/gs.png": "42f0c6f9ed997ae6902823a8418ed3b3",
"assets/packages/flutter_multi_formatter/flags/png/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/flutter_multi_formatter/flags/png/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/flutter_multi_formatter/flags/png/hk.png": "3be1f46b75533ab2d423fe274cc398f0",
"assets/packages/flutter_multi_formatter/flags/png/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/flutter_multi_formatter/flags/png/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/kg.png": "660be92bf4794cf3207e33005212f272",
"assets/packages/flutter_multi_formatter/flags/png/pm.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/sv.png": "753e9326b9b68202b481b88dbb14e2d4",
"assets/packages/flutter_multi_formatter/flags/png/re.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/sa.png": "c1bcb7b3a1dbff8f6fffb9929f458ea1",
"assets/packages/flutter_multi_formatter/flags/png/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/flutter_multi_formatter/flags/png/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/flutter_multi_formatter/flags/png/ke.png": "be246664f01fa71c4b8a359305bf6d36",
"assets/packages/flutter_multi_formatter/flags/png/im.png": "df5f4c630542e241989ac64324374e42",
"assets/packages/flutter_multi_formatter/flags/png/kr.png": "938f9cb1029a71863e88011f3e79a00d",
"assets/packages/flutter_multi_formatter/flags/png/gf.png": "91f3e592fea6812f87ca5e5994924230",
"assets/packages/flutter_multi_formatter/flags/png/dj.png": "b3887992b38f208e22159d34b7cb36b5",
"assets/packages/flutter_multi_formatter/flags/png/gq.png": "7ee7587ec0dcf50180ddaad9cbb10cac",
"assets/packages/flutter_multi_formatter/flags/png/gp.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/dk.png": "1c6b350f84ce03775de43f8dadb3dd6f",
"assets/packages/flutter_multi_formatter/flags/png/gg.png": "c9d9c382e727a7a867fa824a0dd74d56",
"assets/packages/flutter_multi_formatter/flags/png/il.png": "5497e2fc32b1174d37f9bbbeacd6265b",
"assets/packages/flutter_multi_formatter/flags/png/pn.png": "20a24767371c336d18ad9800c523c45a",
"assets/packages/flutter_multi_formatter/flags/png/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/flutter_multi_formatter/flags/png/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/flutter_multi_formatter/flags/png/ru.png": "7eb6cedfbcc7f6448e54850279ff5baf",
"assets/packages/flutter_multi_formatter/flags/png/kw.png": "ff36685c5fa06a2896307a5074e74914",
"assets/packages/flutter_multi_formatter/flags/png/do.png": "a877d29919ed6e1814b07835d7806f61",
"assets/packages/flutter_multi_formatter/flags/png/gt.png": "5b45ad96fdb90c56d2cd39abefd394d0",
"assets/packages/flutter_multi_formatter/flags/png/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/gu.png": "99e5df9e745605fbb1f93155535a2964",
"assets/packages/flutter_multi_formatter/flags/png/je.png": "04ae403448836c13eaddd26fa9e64d55",
"assets/packages/flutter_multi_formatter/flags/png/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/sg.png": "a90e323283257b28b19372e19bda950d",
"assets/packages/flutter_multi_formatter/flags/png/pk.png": "e7bb9a64f3581f8f2d5aa93489009a80",
"assets/packages/flutter_multi_formatter/flags/png/sr.png": "1b7f101242df10cf44ef9b91acd4de97",
"assets/packages/flutter_multi_formatter/flags/png/se.png": "d96d54ba355a0427d2dc84e380c56e2c",
"assets/packages/flutter_multi_formatter/flags/png/jp.png": "d843ce06dae06e8cf9780b71d6e3d43b",
"assets/packages/flutter_multi_formatter/flags/png/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/flutter_multi_formatter/flags/png/eh.png": "53c935334ea149b54d38341cacb06a17",
"assets/packages/flutter_multi_formatter/flags/png/dz.png": "e8359823a7ce2e1b2d1ef79361bdbebc",
"assets/packages/flutter_multi_formatter/flags/png/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/flutter_multi_formatter/flags/png/fr.png": "4d9d99a113066b97f91654f17d671dac",
"assets/packages/flutter_multi_formatter/flags/png/dm.png": "abcbefc6234d640787ef0f0cbfd78c32",
"assets/packages/flutter_multi_formatter/flags/png/hn.png": "5a183482f4faea009e4d524c1e470397",
"assets/packages/flutter_multi_formatter/flags/png/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/flutter_multi_formatter/flags/png/rw.png": "0bd92f502b566eb99a537e88e0c5294f",
"assets/packages/flutter_multi_formatter/flags/png/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/flutter_multi_formatter/flags/png/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/flutter_multi_formatter/flags/png/qa.png": "db8bdadc6a164ef1e4f1deda1e9fb965",
"assets/packages/flutter_multi_formatter/flags/png/pe.png": "0291aca80c2a0f52d66177d16e0da63c",
"assets/packages/flutter_multi_formatter/flags/png/pr.png": "a55695e2970e758c9b2f468275e548c8",
"assets/packages/flutter_multi_formatter/flags/png/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/flutter_multi_formatter/flags/png/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/flutter_multi_formatter/flags/png/es.png": "28c7e07bba944889c1870dfc88a4c6a8",
"assets/packages/flutter_multi_formatter/flags/png/gl.png": "c36a016c88239ab5815e8ef2674182fe",
"assets/packages/flutter_multi_formatter/flags/png/gm.png": "fc1129765b7fe093c978e83cbb0f9de1",
"assets/packages/flutter_multi_formatter/flags/png/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/flutter_multi_formatter/flags/png/fi.png": "b267e5dee2f81cd260b74cd6f4a80921",
"assets/packages/flutter_multi_formatter/flags/png/ee.png": "d2beb66602072a33aa332ac906241838",
"assets/packages/flutter_multi_formatter/flags/png/kn.png": "8b078bf876eca8c26e471dbcd74f4058",
"assets/packages/flutter_multi_formatter/flags/png/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/flutter_multi_formatter/flags/png/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/flutter_multi_formatter/flags/png/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/flutter_multi_formatter/flags/png/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/flutter_multi_formatter/flags/png/pf.png": "2bcb58685c72a0ea189ed6f24787fcd8",
"assets/packages/flutter_multi_formatter/flags/png/sj.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/id.png": "20a48e5d6a67edfcae769c22cead8b75",
"assets/packages/flutter_multi_formatter/flags/png/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/flutter_multi_formatter/flags/png/eg.png": "f15be21bf64894f0c0db33336558fd64",
"assets/packages/flutter_multi_formatter/flags/png/fk.png": "f6489fb8240437330e0cec337c67ea3e",
"assets/packages/flutter_multi_formatter/flags/png/fj.png": "eab0bde840b3aedac9fade235301123c",
"assets/packages/flutter_multi_formatter/flags/png/gn.png": "3aa100d1196e50836442e4e41f56f866",
"assets/packages/flutter_multi_formatter/flags/png/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/flutter_multi_formatter/flags/png/ir.png": "a84a156345dadcab5aeda5db9462447c",
"assets/packages/flutter_multi_formatter/flags/png/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/flutter_multi_formatter/flags/png/ie.png": "3882cc83555457cd3cdfbf1a285f7d39",
"assets/packages/flutter_multi_formatter/flags/png/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/flutter_multi_formatter/flags/png/ro.png": "4fcdf6021d56e82f0067a13e6cbd78a2",
"assets/packages/flutter_multi_formatter/flags/png/sk.png": "12494ad86edebb64916831a7fcdc45e4",
"assets/packages/flutter_multi_formatter/flags/png/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/flutter_multi_formatter/flags/png/pt.png": "f7c4f806d879f5044fcc700029a20fcb",
"assets/packages/flutter_multi_formatter/flags/png/so.png": "15ce03e7b634c7c93f922ef4553f19ca",
"assets/packages/flutter_multi_formatter/flags/png/sx.png": "195a32986e11f1d0411a5fc20abd0c5e",
"assets/packages/flutter_multi_formatter/flags/png/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/flutter_multi_formatter/flags/png/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/flutter_multi_formatter/flags/png/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/flutter_multi_formatter/flags/png/eu.png": "2c370e3de950262a37b025374cfaebce",
"assets/packages/flutter_multi_formatter/flags/png/ec.png": "9d139a75b21aaa301124ad846b7390f7",
"assets/packages/flutter_multi_formatter/flags/png/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/flutter_multi_formatter/flags/png/fo.png": "7b2aa7754ea3a43b6372b2c7d93da023",
"assets/packages/flutter_multi_formatter/flags/png/kh.png": "a6ddda12068511bce8e99d2b82c13b49",
"assets/packages/flutter_multi_formatter/flags/png/sy.png": "3b05b2bf6694eadbdd84f89065cbb7f4",
"assets/packages/flutter_multi_formatter/flags/png/sn.png": "abaea692165cc3e890df7b736cf37a76",
"assets/packages/flutter_multi_formatter/flags/png/pw.png": "191c97390c0c0407c99b9d5fb9d98f34",
"assets/packages/flutter_multi_formatter/flags/png/sl.png": "460ba6dfd434d06bfbe2e3bc4944c24c",
"assets/packages/flutter_multi_formatter/flags/png/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/flutter_multi_formatter/flags/png/fm.png": "ad0f179f11aabd724f0f00c3ad26ad25",
"assets/packages/flutter_multi_formatter/flags/png/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/flutter_multi_formatter/flags/png/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/flutter_multi_formatter/flags/png/gh.png": "bc7dc85567546d0191df4d4fcc892a8a",
"assets/packages/flutter_multi_formatter/flags/png/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/flutter_multi_formatter/flags/png/it.png": "b8242dd6b72444e3a5b6a9b5e4b95407",
"assets/packages/flutter_multi_formatter/flags/png/pa.png": "0c91186f67333cece25b7b6f114aebce",
"assets/packages/flutter_multi_formatter/flags/png/sz.png": "491394c84dbb654442e0ad63296f3cd2",
"assets/packages/flutter_multi_formatter/flags/png/sm.png": "48e98ad719be013cadf5139a5f2e2d79",
"assets/packages/flutter_multi_formatter/flags/png/tn.png": "e71d23c64e7407651f805fa14262999e",
"assets/packages/flutter_multi_formatter/flags/png/ml.png": "7378ecc1a8b6c91aa5d9a26c982e4f0a",
"assets/packages/flutter_multi_formatter/flags/png/cg.png": "e5a127b0915eff11a439a9757f484dd6",
"assets/packages/flutter_multi_formatter/flags/png/ax.png": "7a8b9f688330386f5437b9e4bdf3c3e2",
"assets/packages/flutter_multi_formatter/flags/png/ao.png": "91660ff95663f3ea8f6ddfc0c97c2ab3",
"assets/packages/flutter_multi_formatter/flags/png/bt.png": "9857d9fa48b572226e9c4275fb0f3804",
"assets/packages/flutter_multi_formatter/flags/png/an.png": "cccd19a062794a67af709a59b91a9ae2",
"assets/packages/flutter_multi_formatter/flags/png/bb.png": "bad762779f71fb00e9dbc0f4a971816f",
"assets/packages/flutter_multi_formatter/flags/png/cf.png": "0da7e59a85d78ca89a3a45f68f967a92",
"assets/packages/flutter_multi_formatter/flags/png/mm.png": "5afdb2c6123f2bec3fdecd638409ab06",
"assets/packages/flutter_multi_formatter/flags/png/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/flutter_multi_formatter/flags/png/na.png": "67421813025b783b38ce65fb66f330ec",
"assets/packages/flutter_multi_formatter/flags/png/mz.png": "6e98a2bf86f2d8d0f4eaffaf8bd591b7",
"assets/packages/flutter_multi_formatter/flags/png/to.png": "4229da15117671214ec83c6365dce0b5",
"assets/packages/flutter_multi_formatter/flags/png/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/flutter_multi_formatter/flags/png/ve.png": "2e8670420a607b77ebb5df3a6d9ce16a",
"assets/packages/flutter_multi_formatter/flags/png/tz.png": "466bbbf4023c5cb013d202f74f19e743",
"assets/packages/flutter_multi_formatter/flags/png/tm.png": "153c0223e88169e2d988afa1ba74d0b9",
"assets/packages/flutter_multi_formatter/flags/png/mx.png": "0763a52cbbb6f882d1c7b67097bd35ee",
"assets/packages/flutter_multi_formatter/flags/png/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/flutter_multi_formatter/flags/png/mo.png": "6e18ce749771587d8effc18479e000d2",
"assets/packages/flutter_multi_formatter/flags/png/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/flutter_multi_formatter/flags/png/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/flutter_multi_formatter/flags/png/al.png": "3a69913f1180f063cc70c2d09c43a882",
"assets/packages/flutter_multi_formatter/flags/png/bw.png": "53fede7a11b197c2cf5cc9667544d323",
"assets/packages/flutter_multi_formatter/flags/png/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/flutter_multi_formatter/flags/png/bv.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/flutter_multi_formatter/flags/png/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/flutter_multi_formatter/flags/png/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/flutter_multi_formatter/flags/png/mn.png": "3942d1f8bfa86fd13115a70543c6c188",
"assets/packages/flutter_multi_formatter/flags/png/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/flutter_multi_formatter/flags/png/my.png": "72f82829eb4588404d519b84bfd5ad58",
"assets/packages/flutter_multi_formatter/flags/png/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/flutter_multi_formatter/flags/png/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/flutter_multi_formatter/flags/png/th.png": "626cf312c47ded97bf5dbb4339e9f02c",
"assets/packages/flutter_multi_formatter/flags/png/xk.png": "df22513149a597035238f0f0c9f06014",
"assets/packages/flutter_multi_formatter/flags/png/nf.png": "3391aec8dc77dd300f835bae7ffccd17",
"assets/packages/flutter_multi_formatter/flags/png/ly.png": "fdb3cba16a701d5471dd3bbcc6a31473",
"assets/packages/flutter_multi_formatter/flags/png/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/flutter_multi_formatter/flags/png/br.png": "0a7988dc68c66634f9e95ad0d878f7ba",
"assets/packages/flutter_multi_formatter/flags/png/cv.png": "0be7f55dcf12a903fc49a72a1071b901",
"assets/packages/flutter_multi_formatter/flags/png/be.png": "92d0285f6ed8a74a8fa6ea4b3770daac",
"assets/packages/flutter_multi_formatter/flags/png/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/flutter_multi_formatter/flags/png/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/flutter_multi_formatter/flags/png/cw.png": "a0fc17a5c96bc82996fa70d50aa9b339",
"assets/packages/flutter_multi_formatter/flags/png/bs.png": "4a88a47c73294f193cf7ad5fabfcb7ea",
"assets/packages/flutter_multi_formatter/flags/png/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/flutter_multi_formatter/flags/png/mk.png": "644972c75548c32b4b99593b48d32791",
"assets/packages/flutter_multi_formatter/flags/png/np.png": "761c731a0b63ab006273b4a1910ccf86",
"assets/packages/flutter_multi_formatter/flags/png/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/flutter_multi_formatter/flags/png/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/flutter_multi_formatter/flags/png/um.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/flutter_multi_formatter/flags/png/vc.png": "9ff42949ac191ee0adcab3815779b748",
"assets/packages/flutter_multi_formatter/flags/png/zw.png": "94d25ac1764b0895f20405bc253b3647",
"assets/packages/flutter_multi_formatter/flags/png/nr.png": "09c7da9ea9f49dea55d2bdb853cc543c",
"assets/packages/flutter_multi_formatter/flags/png/ne.png": "f29940c4d22aed2105d362d5c7dc735e",
"assets/packages/flutter_multi_formatter/flags/png/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/flutter_multi_formatter/flags/png/bq.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/bf.png": "54bb2c64b28b60df100b8abfb4b71777",
"assets/packages/flutter_multi_formatter/flags/png/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/flutter_multi_formatter/flags/png/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/flutter_multi_formatter/flags/png/gb-wls.png": "eb929cd0fe93fab638ea3f3c4b655593",
"assets/packages/flutter_multi_formatter/flags/png/mh.png": "d5ab4a201a322f99454e184699037506",
"assets/packages/flutter_multi_formatter/flags/png/za.png": "6cd7101a5f0d4b167af862b92ba8e19e",
"assets/packages/flutter_multi_formatter/flags/png/uy.png": "98db711aa764b56a68a37820995a7685",
"assets/packages/flutter_multi_formatter/flags/png/wf.png": "8e40a0c5be4080ffea10070744837d43",
"assets/packages/flutter_multi_formatter/flags/png/vu.png": "043330591a2b97ba1ef46ea08bfbbe24",
"assets/packages/flutter_multi_formatter/flags/png/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/main.svg": "2eb574ebf07c3151f465fc6890a6027c",
"assets/assets/images/no-results.svg": "f5c7f93f7ca462ec59a945d84d8f24a3",
"assets/assets/images/utair-logo.png": "d311acd3b23fa07ef7f07a0d45751ecd",
"assets/assets/icons/icon-up.svg": "c813fb53c5dc727b36b8582ad8b7d594",
"assets/assets/icons/icon-calendar.svg": "5b65727a12f6019cdd9e60c72a65c180",
"assets/assets/icons/icon-seat.svg": "b44777b025ae0ceab3d964e04f675f35",
"assets/assets/icons/icon-carry-on-inv.svg": "6ad18f42a232a97c63a7166f1d5d736b",
"assets/assets/icons/icon-carry-not-included.svg": "ec6a7bba768acee7ca300b8ada78b53e",
"assets/assets/icons/icon-business-mock.svg": "e27b66baf93b7a1505d69be08d67aea4",
"assets/assets/icons/icon-ticket-done.svg": "65df48d91d455cf15c7439d44bc33b20",
"assets/assets/icons/icon-dropdown.svg": "bc7beb0b19c1db0ed03a4dc8ef892a07",
"assets/assets/icons/icon-info.svg": "4e4de7923da0389f59def28448ab31c0",
"assets/assets/icons/icon-close-mob.svg": "dc84149fa525a84b2f151104804b0bc3",
"assets/assets/icons/icon-bag.svg": "00a3164cb30aecd66ebb2641d232ef55",
"assets/assets/icons/icon-plus.svg": "ea06c2d2c361ec4df18c19b2fedd295c",
"assets/assets/icons/icon-seat-business.svg": "63d4267a7708e82b438e7e3f3ce09b4e",
"assets/assets/icons/icon-arrow-back.svg": "b08a247e877f8bf8a17c86e523508e30",
"assets/assets/icons/icon-seat-included.svg": "8ae78d3cbe8b3c0e4f98afd71915238d",
"assets/assets/icons/icon-minus.svg": "318446c354626b75814e7904c24a7199",
"assets/assets/icons/icon-child.svg": "c983a93c2f8c9eab1eb6e56aff2b35f5",
"assets/assets/icons/icon-ticket-edit.svg": "f200cf9142e1db80f958d2746178445b",
"assets/assets/icons/icon-insurance-included.svg": "7680b59826ec68c6c6e1f1517a5fbaa1",
"assets/assets/icons/payment-fail.svg": "605c9e67f6500bc6b2ff666109030ce1",
"assets/assets/icons/icon-search.svg": "2901ec9db58f40f0ef10b17e70ddf90d",
"assets/assets/icons/icon-carry-on-included.svg": "c0eb3f6ebb228fb1f22902b28bd5372a",
"assets/assets/icons/icon-external-link.svg": "f809a7d97130826e74233f5ffa469776",
"assets/assets/icons/icon-food-not-included.svg": "01ebf5cb5be163ac311e89de87c8d5a0",
"assets/assets/icons/radio.svg": "82bc6ad27bd99a06f413d7239fe83bb5",
"assets/assets/icons/elite.svg": "2787c016e296bf3b097a842d500940d5",
"assets/assets/icons/icon-seat-not-included.svg": "d1c3d9bfc88338f4d47cbbf5bdb63f1c",
"assets/assets/icons/icon-insurance.svg": "a40b0d4486bf68b8cfb9c6613ce32a26",
"assets/assets/icons/icon-plane.svg": "9a6a19da095487b55bdd46803ed01fbb",
"assets/assets/icons/icon-round-trip.svg": "3c4678e40e8bf143c6ff12bb4a1315d6",
"assets/assets/icons/icon-map-pin.svg": "7738367047fc2b3d511deb215600220c",
"assets/assets/icons/icon-download.svg": "dd8c89fc15d5be6c74e4f6933d23e5b2",
"assets/assets/icons/icon-rouble.svg": "185c6fe6aa9d2b61c4b9582ff2bd1289",
"assets/assets/icons/icon-delete.svg": "98f910684f1cbde4f91269f4e792b392",
"assets/assets/icons/icon-success.svg": "518e71f0281b8e00549bd28894a03ffb",
"assets/assets/icons/icon-ticket-cancel.svg": "1f60db4f07a1b69cebd1461abea49f05",
"assets/assets/icons/arrow-next.svg": "60764db15e4996277eaf6dc077cd1159",
"assets/assets/icons/icon-profile.svg": "fd88063014df1f6590729fcc4fa2865f",
"assets/assets/icons/icon-locked.svg": "7b2f69523b9c1e43adf75dc4953abbd1",
"assets/assets/icons/icon-seat-paid.svg": "05098591304533384541b6bca8620112",
"assets/assets/icons/icon-basket.svg": "7615a789d081a7fe744a676adc3a27a6",
"assets/assets/icons/icon-alert-info.svg": "31aa0023a614d578eab1a63bb53c6f64",
"assets/assets/icons/icon-food.svg": "02ce3707b6114daf07957f853c8f775e",
"assets/assets/icons/icon-baggage.svg": "93702ede3213a32be79b99923821e69b",
"assets/assets/icons/icon-menu.svg": "81776a30cbb82caef914dd28c083c704",
"assets/assets/icons/radio-checked.svg": "f260475243a524e37b21f4070608cf81",
"assets/assets/icons/icon-food-included.svg": "8cbada0cb71a0fcd6d3e93618662d4dd",
"assets/assets/icons/icon-help.svg": "8090c9d3d4201d9c599973180c2a2fb3",
"assets/assets/icons/icon-alert-attention.svg": "864d02860ee4630f4bebd43cfc2b7c02",
"assets/assets/icons/icon-insurance-not-included.svg": "b4584761c84b83060d6aa503976f6aa4",
"assets/assets/icons/icon-baby.svg": "92a0fada8ea364221e906e656f80ef0f",
"assets/assets/icons/icon-sport.svg": "8ae1afb0ff41ca63a114c641ae7fbdc2",
"assets/assets/icons/arrow-up.svg": "81a608d99c4200ec56a19af56dc80a57",
"assets/assets/icons/icon-prev.svg": "1dec459eab1acdc8ff08f464eff60314",
"assets/assets/icons/icon-gold.svg": "665631722f2ccab57c7f758af0a0b8ed",
"assets/assets/icons/checkbox-success.svg": "366f5fdc060121f941b7d6f607fce7b2",
"assets/assets/icons/icon-flight-plane.svg": "85c0c4f1b923546070452f836e09256a",
"assets/assets/icons/icn_global_flight_small.svg": "32b583393111444ac026b136c8433e65",
"assets/assets/icons/icon-next.svg": "c2833297d56a062843416f57333da9c7",
"assets/assets/icons/icon-yandex.svg": "42bea0ea7f206b0a42ddd0a6769e6057",
"assets/assets/fonts/suisseintl_regular.ttf": "0e1157e43ccf71ec1cfc6378df9f9921",
"assets/assets/animations/loader.json": "7ad68841862169da5b0788da241a9548",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"src/reportWebVitals.js": "240e2381f826a9bb84d178b29b7b9abe",
"src/index.js": "8a24fd1614a7001bdab2b877a7c52aa2",
"src/index.css": "05d588cc3a91db02a4d44f6796174519",
"src/Search/Route/point.svg": "bd6e731cc7a088b59440cfd86ac7a6ae",
"src/Search/Route/plane.svg": "65d481fe963f7dcb29d302ee0dd81718",
"src/Search/Route/CitySelector/Autocomplete/index.jsx": "8209ce92ea18344a30219a79e7ed2022",
"src/Search/Route/CitySelector/Autocomplete/Autocomplete.module.css": "e4a0095878b57e0765fbac479ae6abd4",
"src/Search/Route/CitySelector/ModalSelector/ModalSelector.module.css": "6e786b66868dd505685f8a26fee5f471",
"src/Search/Route/CitySelector/ModalSelector/close.svg": "39bbf7cdf21ffe590b72b1ac9e845679",
"src/Search/Route/CitySelector/ModalSelector/index.jsx": "aee84428bccd675303353415658d8200",
"src/Search/Route/CitySelector/List/List.module.css": "88d85f481fb229070822ab5f19847f36",
"src/Search/Route/CitySelector/List/index.jsx": "f0155ab60046551e33044cd7e981d138",
"src/Search/Route/CitySelector/index.jsx": "2999dce6f4c9ce4b3e08b5d16a6197f0",
"src/Search/Route/CitySelector/queryCities.js": "b8d5c714967167fdffaf4df5cbc2acdd",
"src/Search/Route/index.jsx": "5f8c747b5a4aef0926e051dba9dfcb93",
"src/Search/Route/swap.svg": "97d8f9eb8b3fc69c5790f81c7cfdaf7f",
"src/Search/Route/Route.module.css": "4ccec9135ddb35656cd2e389189c6bef",
"src/Search/DatePicker/arrow-forward.svg": "f976721a7741d13686c513b9cdc5eb17",
"src/Search/DatePicker/DatePicker.module.css": "eb07ed0306dbb90a2c63e6ce0d49ad68",
"src/Search/DatePicker/queryFlights.js": "72e44a86974737f6faa9b6768561e60c",
"src/Search/DatePicker/Calendar/Calendar.module.css": "6b96bff61f828f3557615f7d3b44dfd9",
"src/Search/DatePicker/Calendar/index.jsx": "5128a4e7b9b4021d845f100911cef165",
"src/Search/DatePicker/Input/index.jsx": "10fac98726c15b2c15df43a4f2741541",
"src/Search/DatePicker/Input/calendar.svg": "bc5479d2badf0b8c5ff44369bfa0a4cf",
"src/Search/DatePicker/Input/Input.module.css": "c44e2b567059109b1ec7eaa3cab43bac",
"src/Search/DatePicker/ModalCalendar/close.svg": "39bbf7cdf21ffe590b72b1ac9e845679",
"src/Search/DatePicker/ModalCalendar/Title.jsx": "52021ef7ae5d467f276cb4959405ffa0",
"src/Search/DatePicker/ModalCalendar/ModalCalendar.module.css": "ba77efcf12fdca15529b2a0c0b90771b",
"src/Search/DatePicker/ModalCalendar/index.jsx": "b0e755abfdbb259fe49954354808fe78",
"src/Search/DatePicker/index.jsx": "b510263a371803e0c20643eb81d2cfed",
"src/Search/utils/debounce.js": "4b145322ab46a29b6417b6169211bb5a",
"src/Search/components/DropDown/useClickOut.js": "3d99965ebd1860930728f428bd6922ed",
"src/Search/components/DropDown/Toggle.jsx": "5c66087bff0a73846f79b906f0a935d7",
"src/Search/components/DropDown/DropDown.module.css": "39a319b7c0919b4d6badf2f74f858882",
"src/Search/components/DropDown/index.jsx": "2e2437828d952a6e65e30bc669bd432b",
"src/Search/components/Calendar/index.jsx": "04a56cd6eaf1200bb67e7b8d46e2d20b",
"src/Search/components/ConfirmButton/index.jsx": "6f4092c28d3bf1775f480c01f5fe2cf7",
"src/Search/components/ConfirmButton/ConfirmButton.module.css": "f3a795828c407ac46e495b7389214f2c",
"src/Search/components/Button/Button.module.css": "e4821bd0f9e8495a812ad8b5a75cd4a9",
"src/Search/components/Button/index.jsx": "094536755a51dc77384eed250cbb0a24",
"src/Search/components/Counter/Counter.module.css": "0f758f33f98766bc38d0addc496d2691",
"src/Search/components/Counter/index.jsx": "a958a1dd93e5da3257a03f9b22d8d5e8",
"src/Search/Passengers/getMaxCount.js": "5af9f4fcfb3dea42a8d8e552f09a39a5",
"src/Search/Passengers/Input/person.svg": "79328cfb9f70fff6d4aa0030a8af54ef",
"src/Search/Passengers/Input/index.jsx": "413de8f846732bdaa767e35a4e7e394c",
"src/Search/Passengers/Input/Input.module.css": "3e6bb6960f7f4d35328606afe09c5704",
"src/Search/Passengers/Passengers.module.css": "ba07865b6ddd4bc1d80a44ad6fbf3cd2",
"src/Search/Passengers/index.jsx": "289f1a5700c8632de977eec3e0ca7539",
"src/Search/hooks/useUtmsFromHTML.js": "6f04e486bb09682280fd7d0606e3d705",
"src/Search/Search.module.css": "43226e60c106643c7aebe140da4bb2f8",
"src/Search/index.jsx": "aeab0b89c1443bc5dccd6a89bf03730d",
"src/setupTests.js": "1a77571e1a8cf36018a41bcedf60db75",
"src/normalize.css": "d7c189328b38cb49f5688df25fd8d678",
"src/Header/LoginLink.jsx": "0505ea2251dcb34524880fb0f2c4939c",
"src/Header/Header.module.css": "568ce633273bd027c74b2f0d6586cc5b",
"src/Header/index.jsx": "a36e41d58fe1f7af64033d9433652a6a",
"src/Header/Account/validators.js": "0499b963abcaf9414ce3b4df2343b5e0",
"src/Header/Account/consts.js": "b96701da0a251d81115211701cc3d44e",
"src/Header/Account/SignUp/Agreement/Agreement.module.scss": "c3d19aefb8164b71c28cee75e2e517f1",
"src/Header/Account/SignUp/Agreement/index.jsx": "bf6c473ef912de94f0ae433cbef5e47b",
"src/Header/Account/SignUp/index.jsx": "8cc1b71fa4959c9a498f77d4c47e1672",
"src/Header/Account/SignUp/SingUp.module.scss": "16a2bb85c8484083702f250f48ecf4dd",
"src/Header/Account/LogInConfirm/Agreement/Agreement.module.scss": "d42556753a51174e2adc827423d024f4",
"src/Header/Account/LogInConfirm/Agreement/index.jsx": "23a1a95e437456c912f56c25020e0622",
"src/Header/Account/LogInConfirm/taisAuth.js": "5f4fd25d2548fb0ef02f12779ce975ff",
"src/Header/Account/LogInConfirm/index.jsx": "c99240f9c89c61b973c86ef7d4975101",
"src/Header/Account/components/RadioSelector/RadioSelector.module.scss": "d5d7a677984fa4bf2c56a9fec2d899b2",
"src/Header/Account/components/RadioSelector/index.jsx": "eb889c4e26ffc042f79c93aadf460242",
"src/Header/Account/components/PhoneInput/index.jsx": "5cbfb673f7afa3139eb2b45b1405b615",
"src/Header/Account/components/PhoneInput/PhoneInput.module.scss": "81be4d1811f631fa73cf21c98801179b",
"src/Header/Account/fetcher.js": "615658a3c97994b73bbcdb024ce3eb15",
"src/Header/Account/index.jsx": "f08915a28fecbee03f469541a6de9b6c",
"src/Header/Account/utils.js": "f92d41189e931cdbd69499b3e8ec4f19",
"src/Header/Account/Account.module.scss": "605a3ee1bb88a142d95474e3867ccf12",
"src/Header/Account/queries.js": "1ceb5bc673404e8dcd16dbadffddb54a",
"src/Header/Account/LogIn/index.jsx": "e6707fbb9755ec1a06af3b6cf8cbd746",
"src/Header/logo.svg": "bad4150a17c8d66b144130e745b8892e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
