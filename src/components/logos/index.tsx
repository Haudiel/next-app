import React, { FC, useEffect } from 'react';
import { chakra, ChakraProps } from '@chakra-ui/react';

const Logo: FC<ChakraProps> = ({ ...props }) => {

  useEffect(() => {
    const logoElement = document.querySelector('.login__brand') as any;
    if (logoElement) logoElement.style.margin = 0;
  }, []);

  return (
    <chakra.svg
        version='1.1'
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg"
        x="0px" 
        y="0px"
        width="200px" 
        viewBox="0 0 1505 304" 
        // enable-background="new 0 0 1505 304" 
    >
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M922.000000,305.000000 
	C616.500000,305.000000 311.000000,305.004242 5.500067,304.858704 
	C4.211046,304.858093 0.872537,307.328461 1.468657,302.500000 
	C41.552944,302.000000 81.168571,302.000000 121.915276,302.000000 
	C101.777084,247.221909 81.892029,193.132370 61.507439,137.684021 
	C60.287071,140.680954 59.578632,142.259964 58.994240,143.883621 
	C56.448463,150.956741 53.995766,158.063766 51.405514,165.120392 
	C42.913429,188.255386 34.408356,211.385742 25.846292,234.494904 
	C18.615393,254.011246 11.325276,273.505920 3.934827,292.962097 
	C3.585978,293.880493 2.006414,294.331390 1.000000,295.000000 
	C1.000000,197.090683 1.000000,99.181374 1.000000,1.000000 
	C55.025528,1.000000 109.051514,1.000000 163.833801,1.329936 
	C160.731171,3.439032 156.825867,5.124916 153.022110,7.015110 
	C142.285873,12.350251 132.534210,30.222822 134.036041,42.119572 
	C135.541519,54.045280 139.993042,64.522217 150.211639,71.682106 
	C165.842712,82.634346 185.178558,81.700569 198.816803,70.376076 
	C210.359879,60.791309 215.320908,47.914673 212.053757,32.498581 
	C208.812531,17.204691 199.733185,7.561978 184.964325,2.944382 
	C184.183258,2.700174 183.649094,1.666278 183.000000,1.000005 
	C623.884827,1.000000 1064.769653,1.000000 1506.000000,1.000000 
	C1506.000000,99.025558 1506.000000,197.051514 1505.682129,295.830383 
	C1504.583862,295.388336 1503.530273,294.290955 1503.063232,292.983948 
	C1494.871460,270.058289 1486.840088,247.075134 1478.592896,224.169617 
	C1468.936523,197.350418 1459.014771,170.626709 1449.382935,143.798813 
	C1442.962769,125.916733 1436.848267,107.924911 1430.654175,90.146225 
	C1401.586060,90.146225 1372.945312,90.146225 1344.281372,90.146225 
	C1338.965698,105.554512 1333.758911,120.862587 1328.402710,136.118240 
	C1321.664062,155.311600 1314.731201,174.436905 1308.013428,193.637466 
	C1299.601685,217.679657 1291.350952,241.778229 1282.922485,265.814484 
	C1282.375366,267.374542 1280.903076,268.610199 1279.861084,269.996765 
	C1279.531616,269.833923 1279.202026,269.671082 1278.872437,269.508240 
	C1278.872437,209.781082 1278.872437,150.053909 1278.872437,90.000008 
	C1255.409790,90.000008 1232.281982,90.117485 1209.157349,89.896736 
	C1204.753296,89.854691 1203.845825,91.401741 1203.931396,95.395775 
	C1204.407593,117.642265 1204.314209,139.906723 1205.154297,162.137100 
	C1205.552368,172.667435 1207.630249,183.131302 1208.870117,193.634399 
	C1209.302246,197.295227 1209.503540,200.983322 1209.810303,204.658951 
	C1209.220825,204.805313 1208.631348,204.951675 1208.041870,205.098022 
	C1204.230225,198.439194 1200.519531,191.720108 1196.587158,185.133286 
	C1186.530762,168.287659 1176.336670,151.524292 1166.272217,134.683334 
	C1158.027588,120.887398 1149.787842,107.085945 1141.797485,93.142799 
	C1140.303589,90.535934 1138.669434,89.942406 1135.961182,89.952499 
	C1113.464355,90.036308 1090.967285,89.996155 1068.470215,90.011787 
	C1067.368774,90.012558 1066.267334,90.183891 1065.293823,90.265121 
	C1065.293823,160.997757 1065.293823,231.396469 1065.293823,301.705261 
	C1090.325439,301.705261 1115.062256,301.705261 1140.000000,301.705261 
	C1140.000000,279.600677 1140.314941,257.783752 1139.865967,235.982590 
	C1139.644287,225.221664 1138.004517,214.490494 1137.022705,203.744354 
	C1136.699219,200.203613 1136.427002,196.658173 1136.131226,193.114868 
	C1136.587524,192.982376 1137.043701,192.849899 1137.500000,192.717407 
	C1138.603638,194.580719 1139.680054,196.460739 1140.815063,198.304733 
	C1152.198120,216.798660 1163.616577,235.270767 1174.972412,253.781326 
	C1184.218018,268.851959 1193.331665,284.004272 1202.695312,299.000763 
	C1203.591431,300.435822 1205.846680,301.871002 1207.475586,301.876282 
	C1254.802124,302.029266 1302.129395,301.973206 1349.456299,302.065552 
	C1352.341675,302.071198 1353.462891,300.988220 1354.029053,298.384186 
	C1355.724731,290.583374 1357.565796,282.814178 1359.323853,275.147064 
	C1378.702026,275.147064 1397.673584,275.147064 1416.526733,275.147064 
	C1418.707153,282.874268 1421.324341,290.343719 1422.768555,298.033447 
	C1423.484253,301.843658 1425.086792,302.036163 1428.010376,302.030304 
	C1454.006958,301.978241 1480.003418,302.000000 1506.000000,302.000000 
	C1506.000000,302.999237 1506.000000,303.998444 1506.000000,304.998840 
	C1325.640869,305.000000 1145.281616,305.000000 964.160889,304.641449 
	C965.976135,303.529175 968.515320,302.593414 971.135803,302.049744 
	C998.498718,296.372986 1021.830139,283.761719 1039.570068,261.838165 
	C1046.910522,252.766510 1052.544800,242.611832 1054.960571,231.053665 
	C1056.646606,222.986984 1058.371094,214.841339 1058.944336,206.651596 
	C1059.629639,196.860886 1059.106079,186.985565 1059.106079,177.324524 
	C1019.612183,177.324524 979.877014,177.324524 940.000000,177.324524 
	C940.000000,185.802185 940.000000,193.955887 940.000000,202.109589 
	C940.000000,210.365143 940.000000,218.620712 940.000000,227.223663 
	C952.041382,227.223663 963.432190,227.223663 975.297974,227.223663 
	C971.354980,236.760544 963.996887,241.002884 955.084595,243.497177 
	C940.839844,247.483780 928.093018,244.122284 917.916443,234.072952 
	C909.011169,225.279129 905.333069,213.427856 905.116028,200.988937 
	C904.905945,188.944702 908.521057,178.001205 915.453430,167.814819 
	C927.347412,150.337875 960.514038,143.997894 975.155334,166.217575 
	C975.735718,167.098206 978.223633,167.470428 979.467896,167.044037 
	C987.797485,164.189560 996.012634,161.003326 1004.299438,158.020813 
	C1018.312134,152.977493 1032.332642,147.954086 1046.395020,143.052155 
	C1048.824951,142.205078 1049.777832,141.153564 1048.320923,138.837189 
	C1043.296997,130.849655 1038.044312,123.205963 1030.657104,116.945946 
	C1009.139404,98.711456 983.623657,90.269890 956.366943,87.349571 
	C943.590271,85.980659 930.202759,87.103996 917.464050,89.277542 
	C893.229248,93.412605 871.787048,103.657501 854.436096,121.899315 
	C838.125671,139.047119 829.419434,159.578308 827.303772,182.595047 
	C826.154236,195.101059 826.156006,207.888367 828.848755,220.567230 
	C833.531860,242.617462 843.319885,261.281769 860.541687,276.215118 
	C877.798767,291.179108 897.706848,299.616638 920.028259,303.072266 
	C920.767212,303.186707 921.346375,304.334106 922.000000,305.000000 
M803.500000,302.000000 
	C819.160645,302.000000 834.821350,302.000000 850.698669,302.000000 
	C850.216370,300.491516 849.823486,299.125214 849.345825,297.789185 
	C841.366150,275.468781 833.436951,253.130081 825.372986,230.840149 
	C814.312805,200.268280 803.074219,169.760834 792.059998,139.172501 
	C786.528015,123.809387 781.378723,108.308540 775.866089,92.938187 
	C775.417908,91.688423 773.501343,90.130798 772.258545,90.123299 
	C745.431702,89.961487 718.603271,89.956299 691.776672,90.136154 
	C690.499939,90.144714 688.553162,91.888878 688.067017,93.238510 
	C676.940002,124.128654 665.913208,155.055359 654.996338,186.020569 
	C647.220459,208.076584 639.666809,230.210938 631.915833,252.275818 
	C630.976440,254.950073 629.425171,257.409393 628.157471,259.968323 
	C627.768982,259.818268 627.380554,259.668243 626.992065,259.518188 
	C617.676758,203.038132 608.361511,146.558075 599.033325,90.000084 
	C573.243286,90.000084 548.093567,89.961311 522.945007,90.109535 
	C521.626282,90.117310 519.472961,91.459869 519.128052,92.607651 
	C512.621033,114.263245 506.193848,135.945297 500.053009,157.707336 
	C497.349030,167.289642 495.287720,177.054703 492.996002,186.751312 
	C491.964417,191.116119 491.083313,195.516495 490.133942,199.900726 
	C489.667267,199.890762 489.200592,199.880798 488.733917,199.870819 
	C479.115875,163.300827 469.497803,126.730827 459.837555,90.000443 
	C433.910736,90.000443 408.263336,89.953728 382.617737,90.145767 
	C381.403931,90.154869 379.365967,92.135582 379.135773,93.447884 
	C377.538239,102.554985 376.430664,111.746490 374.954193,120.876678 
	C371.360718,143.098038 367.641205,165.298996 363.993561,187.511612 
	C360.974823,205.894257 358.055481,224.293472 354.965454,242.664032 
	C351.663849,262.292664 348.213715,281.896332 344.792328,301.720062 
	C370.343414,301.720062 395.575012,301.720062 420.646484,301.720062 
	C424.381989,264.665527 428.087952,227.903946 431.877167,190.316223 
	C432.731750,191.365860 433.714325,192.052032 433.944031,192.934250 
	C436.696808,203.506470 438.956024,214.222031 442.084747,224.678543 
	C449.482574,249.402756 457.240692,274.019806 465.020050,298.627472 
	C465.452667,299.995972 467.381683,301.834625 468.639740,301.854706 
	C482.952179,302.083038 497.269623,301.999695 511.584076,301.999695 
	C516.958191,285.484375 522.406067,269.246216 527.518433,252.903046 
	C533.833252,232.715866 539.853271,212.436539 546.096069,192.226486 
	C546.298645,191.570786 547.544556,191.237396 548.689758,190.508209 
	C549.161499,197.513016 549.537598,203.741730 550.010437,209.963089 
	C550.644104,218.300476 551.267700,226.640152 552.048401,234.964508 
	C553.299622,248.307236 554.714722,261.634521 555.986511,274.975403 
	C556.837708,283.903870 557.560669,292.844574 558.360229,302.000000 
	C560.191956,302.000000 561.836731,302.000000 563.481506,302.000000 
	C595.808228,302.000000 628.134888,302.000000 660.461609,302.000000 
	C671.459351,302.000000 682.458862,302.095764 693.452759,301.889526 
	C694.979797,301.860870 697.523254,300.615479 697.823059,299.469482 
	C699.928345,291.422394 701.568420,283.253540 703.384338,275.000122 
	C721.766113,275.000122 739.917236,274.943909 758.066223,275.117737 
	C759.372681,275.130219 761.483398,276.584503 761.825684,277.770782 
	C763.784973,284.561005 765.387939,291.457947 766.968445,298.351532 
	C767.554871,300.909119 768.583984,302.124207 771.507629,302.071930 
	C781.835571,301.887146 792.168762,302.000000 803.500000,302.000000 
M71.508423,131.005905 
	C73.551003,136.732849 75.558090,142.472763 77.642303,148.184509 
	C86.806976,173.300110 95.972923,198.415283 105.178665,223.515839 
	C114.440346,248.768951 123.706688,274.020721 133.162811,299.201080 
	C133.643921,300.482239 135.924576,301.853394 137.389908,301.878693 
	C149.715103,302.091614 162.045547,301.999969 174.374420,302.000000 
	C187.840820,302.000000 201.307236,302.000000 215.219620,302.000000 
	C212.244354,293.413361 209.544098,285.218781 206.574478,277.123047 
	C196.429977,249.467255 186.200485,221.842621 175.983856,194.213333 
	C170.154144,178.447769 164.199249,162.727936 158.459915,146.929672 
	C152.502457,130.530975 146.916840,113.993721 140.681885,97.703346 
	C139.809204,95.423218 140.448120,90.969162 135.712372,90.980934 
	C116.567848,91.028503 97.423141,91.000671 78.449608,91.000671 
	C76.646896,95.977722 75.067688,100.689453 73.241074,105.303230 
	C70.015152,113.451546 65.629135,121.450333 71.508423,131.005905 
M298.000183,272.524780 
	C297.328003,270.725098 296.635559,268.932678 295.986816,267.124573 
	C291.227814,253.860886 286.569550,240.560211 281.705231,227.335327 
	C271.759125,200.294464 261.683624,173.301239 251.700287,146.274033 
	C244.898743,127.860634 238.163132,109.422890 231.399506,91.000015 
	C212.667343,91.000015 194.175903,91.111107 175.688187,90.898552 
	C172.322922,90.859871 170.988693,92.318199 170.016373,94.993301 
	C167.390533,102.217537 164.517899,109.362259 162.207199,116.684959 
	C161.458099,119.058899 161.538498,122.077980 162.293137,124.469467 
	C164.362900,131.028519 166.991989,137.411102 169.400055,143.863388 
	C179.589935,171.166840 189.908432,198.423203 199.932434,225.787430 
	C209.219864,251.140945 218.192474,276.609772 227.241959,301.855499 
	C254.367111,301.855499 281.000275,301.855499 308.720093,301.855499 
	C305.046173,292.046448 301.541656,282.689758 298.000183,272.524780 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M1506.000000,301.571533 
	C1480.003418,302.000000 1454.006958,301.978241 1428.010376,302.030304 
	C1425.086792,302.036163 1423.484253,301.843658 1422.768555,298.033447 
	C1421.324341,290.343719 1418.707153,282.874268 1416.526733,275.147064 
	C1397.673584,275.147064 1378.702026,275.147064 1359.323853,275.147064 
	C1357.565796,282.814178 1355.724731,290.583374 1354.029053,298.384186 
	C1353.462891,300.988220 1352.341675,302.071198 1349.456299,302.065552 
	C1302.129395,301.973206 1254.802124,302.029266 1207.475586,301.876282 
	C1205.846680,301.871002 1203.591431,300.435822 1202.695312,299.000763 
	C1193.331665,284.004272 1184.218018,268.851959 1174.972412,253.781326 
	C1163.616577,235.270767 1152.198120,216.798660 1140.815063,198.304733 
	C1139.680054,196.460739 1138.603638,194.580719 1137.500000,192.717407 
	C1137.043701,192.849899 1136.587524,192.982376 1136.131226,193.114868 
	C1136.427002,196.658173 1136.699219,200.203613 1137.022705,203.744354 
	C1138.004517,214.490494 1139.644287,225.221664 1139.865967,235.982590 
	C1140.314941,257.783752 1140.000000,279.600677 1140.000000,301.705261 
	C1115.062256,301.705261 1090.325439,301.705261 1065.293823,301.705261 
	C1065.293823,231.396469 1065.293823,160.997757 1065.293823,90.265121 
	C1066.267334,90.183891 1067.368774,90.012558 1068.470215,90.011787 
	C1090.967285,89.996155 1113.464355,90.036308 1135.961182,89.952499 
	C1138.669434,89.942406 1140.303589,90.535934 1141.797485,93.142799 
	C1149.787842,107.085945 1158.027588,120.887398 1166.272217,134.683334 
	C1176.336670,151.524292 1186.530762,168.287659 1196.587158,185.133286 
	C1200.519531,191.720108 1204.230225,198.439194 1208.041870,205.098022 
	C1208.631348,204.951675 1209.220825,204.805313 1209.810303,204.658951 
	C1209.503540,200.983322 1209.302246,197.295227 1208.870117,193.634399 
	C1207.630249,183.131302 1205.552368,172.667435 1205.154297,162.137100 
	C1204.314209,139.906723 1204.407593,117.642265 1203.931396,95.395775 
	C1203.845825,91.401741 1204.753296,89.854691 1209.157349,89.896736 
	C1232.281982,90.117485 1255.409790,90.000008 1278.872437,90.000008 
	C1278.872437,150.053909 1278.872437,209.781082 1278.872437,269.508240 
	C1279.202026,269.671082 1279.531616,269.833923 1279.861084,269.996765 
	C1280.903076,268.610199 1282.375366,267.374542 1282.922485,265.814484 
	C1291.350952,241.778229 1299.601685,217.679657 1308.013428,193.637466 
	C1314.731201,174.436905 1321.664062,155.311600 1328.402710,136.118240 
	C1333.758911,120.862587 1338.965698,105.554512 1344.281372,90.146225 
	C1372.945312,90.146225 1401.586060,90.146225 1430.654175,90.146225 
	C1436.848267,107.924911 1442.962769,125.916733 1449.382935,143.798813 
	C1459.014771,170.626709 1468.936523,197.350418 1478.592896,224.169617 
	C1486.840088,247.075134 1494.871460,270.058289 1503.063232,292.983948 
	C1503.530273,294.290955 1504.583862,295.388336 1505.682129,296.291626 
	C1506.000000,297.714355 1506.000000,299.428711 1506.000000,301.571533 
M1377.548462,204.964813 
	C1375.997925,211.498718 1374.447388,218.032639 1372.855835,224.739258 
	C1383.075928,224.739258 1392.955444,224.739258 1402.669189,224.739258 
	C1397.926270,203.630585 1393.231323,182.735291 1388.536499,161.839996 
	C1388.032227,161.863861 1387.528076,161.887726 1387.023926,161.911591 
	C1385.804077,167.347748 1384.535278,172.773468 1383.375732,178.222443 
	C1381.534546,186.874832 1379.766113,195.542694 1377.548462,204.964813 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M922.468628,305.000000 
	C921.346375,304.334106 920.767212,303.186707 920.028259,303.072266 
	C897.706848,299.616638 877.798767,291.179108 860.541687,276.215118 
	C843.319885,261.281769 833.531860,242.617462 828.848755,220.567230 
	C826.156006,207.888367 826.154236,195.101059 827.303772,182.595047 
	C829.419434,159.578308 838.125671,139.047119 854.436096,121.899315 
	C871.787048,103.657501 893.229248,93.412605 917.464050,89.277542 
	C930.202759,87.103996 943.590271,85.980659 956.366943,87.349571 
	C983.623657,90.269890 1009.139404,98.711456 1030.657104,116.945946 
	C1038.044312,123.205963 1043.296997,130.849655 1048.320923,138.837189 
	C1049.777832,141.153564 1048.824951,142.205078 1046.395020,143.052155 
	C1032.332642,147.954086 1018.312134,152.977493 1004.299438,158.020813 
	C996.012634,161.003326 987.797485,164.189560 979.467896,167.044037 
	C978.223633,167.470428 975.735718,167.098206 975.155334,166.217575 
	C960.514038,143.997894 927.347412,150.337875 915.453430,167.814819 
	C908.521057,178.001205 904.905945,188.944702 905.116028,200.988937 
	C905.333069,213.427856 909.011169,225.279129 917.916443,234.072952 
	C928.093018,244.122284 940.839844,247.483780 955.084595,243.497177 
	C963.996887,241.002884 971.354980,236.760544 975.297974,227.223663 
	C963.432190,227.223663 952.041382,227.223663 940.000000,227.223663 
	C940.000000,218.620712 940.000000,210.365143 940.000000,202.109589 
	C940.000000,193.955887 940.000000,185.802185 940.000000,177.324524 
	C979.877014,177.324524 1019.612183,177.324524 1059.106079,177.324524 
	C1059.106079,186.985565 1059.629639,196.860886 1058.944336,206.651596 
	C1058.371094,214.841339 1056.646606,222.986984 1054.960571,231.053665 
	C1052.544800,242.611832 1046.910522,252.766510 1039.570068,261.838165 
	C1021.830139,283.761719 998.498718,296.372986 971.135803,302.049744 
	C968.515320,302.593414 965.976135,303.529175 963.699585,304.641449 
	C950.312439,305.000000 936.624878,305.000000 922.468628,305.000000 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M1.000000,295.437500 
	C2.006414,294.331390 3.585978,293.880493 3.934827,292.962097 
	C11.325276,273.505920 18.615393,254.011246 25.846292,234.494904 
	C34.408356,211.385742 42.913429,188.255386 51.405514,165.120392 
	C53.995766,158.063766 56.448463,150.956741 58.994240,143.883621 
	C59.578632,142.259964 60.287071,140.680954 61.507439,137.684021 
	C81.892029,193.132370 101.777084,247.221909 121.915276,302.000000 
	C81.168571,302.000000 41.552944,302.000000 1.468657,302.000000 
	C1.000000,299.958344 1.000000,297.916656 1.000000,295.437500 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M182.531708,1.000005 
	C183.649094,1.666278 184.183258,2.700174 184.964325,2.944382 
	C199.733185,7.561978 208.812531,17.204691 212.053757,32.498581 
	C215.320908,47.914673 210.359879,60.791309 198.816803,70.376076 
	C185.178558,81.700569 165.842712,82.634346 150.211639,71.682106 
	C139.993042,64.522217 135.541519,54.045280 134.036041,42.119572 
	C132.534210,30.222822 142.285873,12.350251 153.022110,7.015110 
	C156.825867,5.124916 160.731171,3.439032 164.295044,1.329936 
	C170.021149,1.000000 176.042297,1.000000 182.531708,1.000005 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M803.000000,302.000000 
	C792.168762,302.000000 781.835571,301.887146 771.507629,302.071930 
	C768.583984,302.124207 767.554871,300.909119 766.968445,298.351532 
	C765.387939,291.457947 763.784973,284.561005 761.825684,277.770782 
	C761.483398,276.584503 759.372681,275.130219 758.066223,275.117737 
	C739.917236,274.943909 721.766113,275.000122 703.384338,275.000122 
	C701.568420,283.253540 699.928345,291.422394 697.823059,299.469482 
	C697.523254,300.615479 694.979797,301.860870 693.452759,301.889526 
	C682.458862,302.095764 671.459351,302.000000 660.461609,302.000000 
	C628.134888,302.000000 595.808228,302.000000 563.481506,302.000000 
	C561.836731,302.000000 560.191956,302.000000 558.360229,302.000000 
	C557.560669,292.844574 556.837708,283.903870 555.986511,274.975403 
	C554.714722,261.634521 553.299622,248.307236 552.048401,234.964508 
	C551.267700,226.640152 550.644104,218.300476 550.010437,209.963089 
	C549.537598,203.741730 549.161499,197.513016 548.689758,190.508209 
	C547.544556,191.237396 546.298645,191.570786 546.096069,192.226486 
	C539.853271,212.436539 533.833252,232.715866 527.518433,252.903046 
	C522.406067,269.246216 516.958191,285.484375 511.584076,301.999695 
	C497.269623,301.999695 482.952179,302.083038 468.639740,301.854706 
	C467.381683,301.834625 465.452667,299.995972 465.020050,298.627472 
	C457.240692,274.019806 449.482574,249.402756 442.084747,224.678543 
	C438.956024,214.222031 436.696808,203.506470 433.944031,192.934250 
	C433.714325,192.052032 432.731750,191.365860 431.877167,190.316223 
	C428.087952,227.903946 424.381989,264.665527 420.646484,301.720062 
	C395.575012,301.720062 370.343414,301.720062 344.792328,301.720062 
	C348.213715,281.896332 351.663849,262.292664 354.965454,242.664032 
	C358.055481,224.293472 360.974823,205.894257 363.993561,187.511612 
	C367.641205,165.298996 371.360718,143.098038 374.954193,120.876678 
	C376.430664,111.746490 377.538239,102.554985 379.135773,93.447884 
	C379.365967,92.135582 381.403931,90.154869 382.617737,90.145767 
	C408.263336,89.953728 433.910736,90.000443 459.837555,90.000443 
	C469.497803,126.730827 479.115875,163.300827 488.733917,199.870819 
	C489.200592,199.880798 489.667267,199.890762 490.133942,199.900726 
	C491.083313,195.516495 491.964417,191.116119 492.996002,186.751312 
	C495.287720,177.054703 497.349030,167.289642 500.053009,157.707336 
	C506.193848,135.945297 512.621033,114.263245 519.128052,92.607651 
	C519.472961,91.459869 521.626282,90.117310 522.945007,90.109535 
	C548.093567,89.961311 573.243286,90.000084 599.033325,90.000084 
	C608.361511,146.558075 617.676758,203.038132 626.992065,259.518188 
	C627.380554,259.668243 627.768982,259.818268 628.157471,259.968323 
	C629.425171,257.409393 630.976440,254.950073 631.915833,252.275818 
	C639.666809,230.210938 647.220459,208.076584 654.996338,186.020569 
	C665.913208,155.055359 676.940002,124.128654 688.067017,93.238510 
	C688.553162,91.888878 690.499939,90.144714 691.776672,90.136154 
	C718.603271,89.956299 745.431702,89.961487 772.258545,90.123299 
	C773.501343,90.130798 775.417908,91.688423 775.866089,92.938187 
	C781.378723,108.308540 786.528015,123.809387 792.059998,139.172501 
	C803.074219,169.760834 814.312805,200.268280 825.372986,230.840149 
	C833.436951,253.130081 841.366150,275.468781 849.345825,297.789185 
	C849.823486,299.125214 850.216370,300.491516 850.698669,302.000000 
	C834.821350,302.000000 819.160645,302.000000 803.000000,302.000000 
M731.061462,162.576920 
	C726.450439,183.264404 721.839417,203.951904 717.202393,224.755829 
	C727.086914,224.755829 736.977783,224.755829 746.992676,224.755829 
	C745.509094,218.076981 744.027222,211.668655 742.668274,205.234375 
	C739.744202,191.389465 736.908875,177.525681 733.919128,163.695145 
	C733.773193,163.019791 732.500793,162.587952 731.061462,162.576920 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M71.273117,130.673126 
	C65.629135,121.450333 70.015152,113.451546 73.241074,105.303230 
	C75.067688,100.689453 76.646896,95.977722 78.449608,91.000671 
	C97.423141,91.000671 116.567848,91.028503 135.712372,90.980934 
	C140.448120,90.969162 139.809204,95.423218 140.681885,97.703346 
	C146.916840,113.993721 152.502457,130.530975 158.459915,146.929672 
	C164.199249,162.727936 170.154144,178.447769 175.983856,194.213333 
	C186.200485,221.842621 196.429977,249.467255 206.574478,277.123047 
	C209.544098,285.218781 212.244354,293.413361 215.219620,302.000000 
	C201.307236,302.000000 187.840820,302.000000 174.374420,302.000000 
	C162.045547,301.999969 149.715103,302.091614 137.389908,301.878693 
	C135.924576,301.853394 133.643921,300.482239 133.162811,299.201080 
	C123.706688,274.020721 114.440346,248.768951 105.178665,223.515839 
	C95.972923,198.415283 86.806976,173.300110 77.642303,148.184509 
	C75.558090,142.472763 73.551003,136.732849 71.273117,130.673126 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M298.018677,272.928955 
	C301.541656,282.689758 305.046173,292.046448 308.720093,301.855499 
	C281.000275,301.855499 254.367111,301.855499 227.241959,301.855499 
	C218.192474,276.609772 209.219864,251.140945 199.932434,225.787430 
	C189.908432,198.423203 179.589935,171.166840 169.400055,143.863388 
	C166.991989,137.411102 164.362900,131.028519 162.293137,124.469467 
	C161.538498,122.077980 161.458099,119.058899 162.207199,116.684959 
	C164.517899,109.362259 167.390533,102.217537 170.016373,94.993301 
	C170.988693,92.318199 172.322922,90.859871 175.688187,90.898552 
	C194.175903,91.111107 212.667343,91.000015 231.399506,91.000015 
	C238.163132,109.422890 244.898743,127.860634 251.700287,146.274033 
	C261.683624,173.301239 271.759125,200.294464 281.705231,227.335327 
	C286.569550,240.560211 291.227814,253.860886 295.986816,267.124573 
	C296.635559,268.932678 297.328003,270.725098 298.018677,272.928955 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M1377.757690,204.584412 
	C1379.766113,195.542694 1381.534546,186.874832 1383.375732,178.222443 
	C1384.535278,172.773468 1385.804077,167.347748 1387.023926,161.911591 
	C1387.528076,161.887726 1388.032227,161.863861 1388.536499,161.839996 
	C1393.231323,182.735291 1397.926270,203.630585 1402.669189,224.739258 
	C1392.955444,224.739258 1383.075928,224.739258 1372.855835,224.739258 
	C1374.447388,218.032639 1375.997925,211.498718 1377.757690,204.584412 
z"/>
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M731.407227,162.309814 
	C732.500793,162.587952 733.773193,163.019791 733.919128,163.695145 
	C736.908875,177.525681 739.744202,191.389465 742.668274,205.234375 
	C744.027222,211.668655 745.509094,218.076981 746.992676,224.755829 
	C736.977783,224.755829 727.086914,224.755829 717.202393,224.755829 
	C721.839417,203.951904 726.450439,183.264404 731.407227,162.309814 
z"/>
    </chakra.svg>
  );
};

export default Logo;
