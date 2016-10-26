function initPathData(pathData) {
	pathData=(pathData)?pathData:{};
	pathData.count=(pathData.count)?pathData.count:0;
	pathData.map=(pathData.map)?pathData.map:{};
}
//接受一个path字符串 并返回一个跟它对应的短化URL
function shorten(pathData,path){
	initPathData(pathData);
	pathData.count++;
	pathData.map[pathData.count]=path;
	return pathData.count.toString(36);
}
//接受之前短化的URL并返回展开的URL
function expand(pathData,shortened){
	initPathData(pathData);
	var pathIndex=parseInt(shortened,36);
	return pathData.map[pathIndex];
}
module.exports={
	initPathData:initPathData,
	shorten:shorten,
	expand:expand
}