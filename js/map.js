/* 获取geoJson */
$.getJSON('../geoJson/map.json', function (geoJson) {
	
	/* 初始化,指定需要挂载的DOM */
	const map = echarts.init(document.getElementById("map"))
	
	//map.showLoading();
	/* 加载器 */
	//map.hideLoading();
	
	/* 注册 */
	echarts.registerMap('XXX大学', geoJson);
	
	/* 配置 */
	map.setOption(
		(option = {
			title: {
				text: 'Title',
				subtext: '#Title分布图#'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b} <br/> 该地区有{c}人~'
			},
			toolbox: {
				//是否显示右侧控件
				show: false,
				orient: 'vertical',
				left: 'right',
				top: 'center',
				feature: {
					dataView: {readOnly: false},
					restore: {},
					saveAsImage: {}
				},
				
			},
			visualMap: {
				//是否显示颜色反应数量的组件
				show: false,
				min: 100,
				max: 2000,
				text: ['High', 'Low'],
				realtime: true,
				calculable: true,
				inRange: {
					color: ['lightskyblue', 'yellow', 'orangered']
				}
			},
			//配置
			series: [
				{
					//地图标题...
					name: 'XXX大学养殖场',
					type: 'map',
					map: 'XXX大学',//要求与上面注册的地图一致(否则报错)
					label: {
						show: true
					},
					//数据集
					data: [
						//西校区
						{name: '开发区', value: 500},
						{name: '住宅区', value: 600},
						{name: '教学区', value: 700},
						{name: '假山公园', value: 1800},
						{name: '运动区', value: 1200},
						
						//东校区
						{name: '排球场', value: 1200},
						{name: '篮球场', value: 1700},
						{name: '明湖', value: 900},
						{name: '住宅区1', value: 450},
						{name: '南苑', value: 1200},
						{name: '住宅区2', value: 1460},
						{name: '南家属院', value: 900},
						{name: '留学生宿舍', value: 1400},
						{name: '网球场', value: 600},
						{name: '图书馆', value: 1000},
						{name: '创新创业学院', value: 1300},
						{name: '实验楼', value: 620},
						{name: '医务室', value: 1300},
						{name: '体育场', value: 1560},
						{name: '中心花园', value: 1400},
						{name: '主楼区', value: 1700},
						{name: '民族大道', value: 999},
						{name: '游泳馆', value: 1700},
						{name: '音舞学院', value: 700},
						{name: '化学实验室', value: 1200},
						{name: '体育馆', value: 1400},
						{name: '东教学区', value: 900},
						{name: '机电管理学院', value: 1300},
						{name: '计算机学院', value: 1234},
						{name: '住宅区3', value: 1398},
						{name: '北苑', value: 1003},
						{name: '小操场', value: 700},
						{name: '教师家属院', value: 1860},
						{name: '绿化区', value: 500},
						{name: '职工住宅区', value: 1588},
						{name: '附属幼儿园', value: 1000}
						
					],
					/*
					*   自定义名称映射
					*       geoJson 中的 name
					*       映射到 data 中的name
					*       'name': 'name'
					*  */
					nameMap: {
						//'开发区': '开发区',
						//'住宅区': '住宅区',
						//'教学区': '教学区',
						//'假山公园': '假山公园',
						//'运动区': '运动区'
					}
				}
			]
		})
	);
	/*
	*   绑定点击事件,点击每块地图后将其回调赋给params
	*  */
	map.on('click', function (params) {
		const test = params.dataIndex;
		//测试console.log(test, params.name, params.value);取到对应的数据集
		window.location.href = 'https://search.bilibili.com/all?keyword=' + params.name;
	});
});