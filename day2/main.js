const Area=require('./getArea')
const AreaAvg=require('./getAreaAvg')

Area.getArea('CIRCLE', 5,3.14);
Area.getArea('circle', 10,3.14);
Area.getArea('circlE', 10,3.14);
Area.getArea('parallelogram', 10,15);
Area.getArea('parallelogram', 7,8,9);
Area.getArea('trapezoid', 10,15,12); //윗변,아랫변,높이
Area.getArea('trapezoid', 10,15,-12); //윗변,아랫변,높이
Area.getArea(10, 10,15,-12); //윗변,아랫변,높이
Area.getArea('trapezoid', 10);
Area.getArea('trapezoid', 10,0,0);
AreaAvg.getAreaAvg('circle', 5, 11); //0이상의 정수 대해서 처리 가능해야 함
Area.getArea('circle', 10, 3.14);
Area.getArea('parallelogram', 10,15);
Area.getArea('trapezoid', 10);
Area.getArea('trapezoid', "ㅁㄴㅇㄹㅇㄴ","ㅇㄴㄹㄴㅇ","ㅇㄴㄹㄹㅇ");
AreaAvg.getAreaAvg('circle', 0, 3); //0이상의 정수 대해서 처리 가능해야 함
AreaAvg.getAreaAvg('circle', -3, -2); //0이상의 정수 대해서 처리 가능해야 함
Area.printExecutionSequence()