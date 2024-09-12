import { writable } from "svelte/store";

export const Hanzi = writable(['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '口', '日', '月', '田', '目', '古', '胡', '叶', '吾', '朋', '明', '品', '晶', '昌', '唱', '早', '旭', '世', '胃', '旦', '凹', '凸', '自', '白', '百', '皂', '旧', '中', '千', '舌', '升', '丸', '卜', '占', '上', '下', '卡', '卓', '朝', '嘲', '只', '贝', '贴', '贞', '员', '儿', '几', '见', '元', '页', '顽', '凡', '肌', '负', '万', '匀', '句', '旬', '勺', '的', '首', '直', '置', '具', '真', '工', '左', '右', '有', '贿', '贡', '项', '刀', '刃', '切', '召', '昭', '则', '副', '丁', '叮', '可', '哥', '顶', '乙', '飞', '子', '孔', '吼', '乱', '了', '女', '好', '如', '母', '贯', '兄', '克', '小', '少', '吵', '孙', '大', '尖', '夕', '多', '够', '外', '名', '罗', '厂', '厅', '厉', '厚', '石', '砂', '妙', '肖', '削', '光', '太', '省', '奇', '川', '州', '顺', '水', '永', '脉', '求', '泉', '原', '泳', '洲', '沼', '沙', '江', '汁', '潮', '源', '活', '消', '河', '鱼', '渔', '湖', '测', '土', '均', '肚', '尘', '填', '吐', '压', '哇', '寸', '封', '时', '寺', '火', '灭', '灰', '烦', '炎', '淡', '灯', '点', '照', '里', '量', '埋', '黑', '墨', '冒', '同', '洞', '丽', '向', '响', '尚', '字', '守', '完', '灾', '宣', '宵', '安', '宴', '寄', '富', '贮', '木', '林', '森', '梦', '机', '植', '杏', '呆', '枯', '村', '相', '本', '案', '未', '末', '沫', '味', '妹', '查', '渣', '染', '李', '桌', '杂', '若', '草', '艺', '苦', '宽', '莫', '模', '漠', '墓', '苗', '瞄', '兆', '桃', '犬', '尤', '厌', '状', '妆', '将', '获', '默', '然', '哭', '器', '臭', '狗', '牛', '特', '告', '浩', '先', '洗', '个', '介', '界', '茶', '合', '哈', '塔', '王', '玉', '宝', '球', '现', '玩', '狂', '皇', '煌', '呈', '全', '理', '主', '注', '金', '钟', '铜', '钓', '针', '钉', '铭', '镇', '道', '达', '远', '适', '过', '迈', '迅', '造', '逃', '巡', '选', '逊', '逛', '车', '连', '莲', '前', '剪', '输', '逾', '条', '处', '各', '格', '略', '客', '额', '夏', '洛', '落', '备', '冗', '沉', '军', '辉', '冠', '坑', '亩', '高', '享', '熟', '亭', '亮', '京', '景', '就', '周', '士', '吉', '壮', '学', '觉', '攻', '敌', '败', '故', '救', '敬', '敞', '言', '警', '计', '让', '狱', '讨', '训', '识', '话', '诗', '语', '调', '谈', '式', '试', '戈', '战', '划', '或', '贼', '载', '茂', '成', '城', '诚', '威', '咸', '钱', '浅', '贱', '尧', '烧', '晓', '止', '步', '涉', '频', '肯', '企', '武', '赋', '正', '证', '政', '定', '走', '超', '越', '是', '题', '延', '诞', '建', '楚', '衣', '裁', '装', '哀', '袁', '初', '补', '衬', '农', '浓', '巾', '帅', '师', '狮', '布', '帜', '帽', '幕', '棉', '市', '肺', '带', '滞', '刺', '制', '雨', '雷', '霜', '云', '运', '冰', '况', '冲', '减', '凉', '冬', '天', '吴', '娱', '误', '夭', '乔', '桥', '娇', '立', '泣', '站', '章', '竞', '帝', '童', '商', '滴', '匕', '北', '背', '比', '昆', '混', '皆', '此', '些', '它', '旨', '脂', '论', '轮', '每', '梅', '海', '乞', '吃', '复', '腹', '欠', '吹', '歌', '软', '次', '资', '姿', '咨', '赔', '培', '音', '暗', '韵', '竟', '镜', '境', '亡', '盲', '妄', '望', '方', '妨', '放', '激', '旁', '兑', '脱', '说', '曾', '增', '赠', '也', '她', '地', '池', '虫', '虾', '独', '虽', '蛇', '蛋', '己', '起', '改', '记', '已', '包', '泡', '导', '顾', '逐', '家', '场', '汤', '羊', '美', '洋', '鲜', '样', '兰', '烂', '差', '着', '养', '集', '准', '谁', '售', '午', '许', '羽', '习', '翔', '困', '固', '国', '圆', '因', '烟', '园', '回', '图', '广', '店', '库', '裤', '床', '麻', '庄', '心', '忘', '忍', '总', '态', '志', '思', '恩', '愿', '意', '想', '息', '恐', '感', '憾', '忧', '惊', '怕', '忙', '惯', '必', '手', '看', '摩', '拿', '我', '抱', '抗', '批', '招', '打', '指', '持', '担', '括', '提', '挥', '推', '搅', '执', '热', '接', '挂', '按', '掉', '拉', '啦', '找', '无', '抚', '开', '研', '弄', '异', '鼻', '刑', '型', '才', '财', '团', '存', '在', '乃', '奶', '及', '吸', '极', '史', '更', '硬', '又', '圣', '友', '双', '汉', '戏', '观', '欢', '怪', '对', '树', '难', '摊', '投', '没', '设', '股', '支', '技', '枝', '叔', '督', '寂', '反', '板', '返', '后', '质', '派', '乐', '爪', '抓', '采', '菜', '受', '授', '爱', '么', '雄', '台', '治', '始', '去', '法', '会', '至', '室', '到', '互', '充', '育', '流', '梳', '购', '构', '山', '出', '础', '岁', '密', '入', '分', '贫', '公', '松', '谷', '浴', '欲', '容', '溶', '赏', '党', '常', '堂', '皮', '波', '婆', '破', '被', '歹', '列', '烈', '死', '葬', '耳', '取', '趣', '最', '职', '敢', '曼', '慢', '漫', '夫', '规', '替', '失', '铁', '臣', '力', '边', '势', '动', '励', '历', '另', '别', '拐', '男', '功', '办', '协', '苏', '为', '奴', '努', '加', '贺', '架', '务', '雾', '行', '律', '得', '待', '往', '微', '街', '德', '禾', '程', '和', '积', '种', '移', '秋', '愁', '揪', '利', '香', '季', '委', '秀', '透', '诱', '米', '粉', '迷', '谜', '类', '来', '数', '楼', '竹', '笑', '箱', '等', '算', '答', '策', '人', '认', '价', '份', '伪', '尔', '你', '您', '称', '什', '值', '做', '但', '住', '位', '件', '仍', '他', '仅', '休', '体', '信', '依', '例', '健', '停', '倒', '仁', '优', '伤', '保', '堡', '付', '府', '俯', '代', '袋', '化', '华', '哗', '花', '货', '何', '便', '丈', '使', '久', '内', '呐', '丙', '柄', '肉', '腐', '从', '众', '坐', '座', '巫', '喝', '渴', '任', '廷', '庭', '头', '实', '买', '卖', '读', '以', '似', '并', '拼', '吕', '侣', '荣', '劳', '营', '善', '年', '夜', '液', '旅', '施', '游', '勿', '忽', '物', '易', '赐', '尸', '尼', '呢', '泥', '屋', '握', '居', '锯', '剧', '据', '层', '局', '尺', '尽', '户', '房', '雇', '护', '示', '社', '礼', '视', '福', '标', '禁', '襟', '宗', '崇', '祭', '察', '擦', '由', '抽', '油', '甲', '押', '申', '伸', '神', '果', '课', '颗', '斤', '听', '所', '近', '斩', '暂', '渐', '断', '折', '哲', '逝', '斥', '诉', '乍', '怎', '昨', '作', '雪', '灵', '妇', '扫', '寻', '急', '当', '档', '录', '碌', '争', '净', '事', '唐', '糖', '康', '尹', '伊', '君', '裙', '群', '而', '需', '儒', '瑞', '端', '曲', '斗', '料', '科', '昔', '借', '错', '散', '撒', '廿', '席', '度', '渡', '半', '伴', '胖', '判', '眷', '拳', '片', '版', '之', '乏', '眨', '不', '否', '坏', '环', '杯', '还', '怀', '矢', '族', '知', '智', '矛', '柔', '揉', '予', '序', '预', '野', '班', '临', '坚', '贤', '弓', '引', '弥', '强', '弱', '单', '弹', '费', '佛', '弟', '第', '巧', '号', '身', '射', '谢', '老', '考', '烤', '与', '写', '泻', '孝', '教', '者', '著', '猪', '追', '官', '管', '父', '交', '效', '较', '校', '足', '跑', '跳', '路', '露', '骨', '滑', '阿', '啊', '随', '阳', '阴', '荫', '防', '附', '际', '阶', '院', '阵', '队', '坠', '降', '穴', '究', '突', '空', '控', '深', '探', '丘', '兵', '丝', '织', '线', '维', '统', '给', '结', '终', '级', '纪', '红', '约', '细', '纵', '绿', '经', '轻', '续', '继', '药', '系', '紧', '却', '脚', '服', '报', '命', '贸', '留', '溜', '聊', '柳', '节', '卫', '令', '冷', '零', '领', '通', '勇', '仓', '枪', '创', '犯', '危', '脆', '印', '酒', '配', '酋', '尊', '遵', '豆', '短', '厨', '鼓', '喜', '血', '盖', '温', '监', '篮', '蓝', '银', '跟', '很', '根', '即', '退', '腿', '限', '眼', '良', '浪', '娘', '食', '饭', '餐', '馆', '既', '概', '平', '评', '坪', '乎', '呼', '希', '稀', '杀', '风', '讽', '冈', '刚', '网', '画', '凶', '胸', '脑', '恼', '离', '禽', '义', '议', '蚁', '辛', '辩', '辟', '壁', '避', '亲', '新', '薪', '幸', '叫', '收', '亥', '核', '孩', '刻', '该', '术', '述', '襄', '壤', '寒', '赛', '毒', '麦', '素', '青', '精', '请', '情', '睛', '清', '静', '责', '绩', '表', '生', '星', '姓', '性', '胜', '丰', '害', '割', '慧', '韦', '围', '伟', '春', '泰', '奉', '棒', '击', '陆', '专', '传', '转', '勤', '谨', '垂', '锤', '睡', '今', '含', '念', '东', '栋', '冻', '陈', '练', '拣', '西', '要', '腰', '票', '漂', '贾', '南', '门', '们', '闲', '问', '间', '简', '闻', '非', '排', '罪', '靠', '侯', '候', '决', '快', '块', '筷', '干', '岸', '旱', '赶', '于', '宇', '余', '除', '途', '束', '速', '辣', '整', '重', '懂', '病', '痛', '疯', '区', '枢', '欧', '医', '仰', '迎', '登', '发', '废', '形', '影', '彩', '须', '参', '惨', '修', '珍', '产', '彦', '颜', '文', '蚊', '这', '齐', '济', '率', '摔', '央', '英', '唤', '换', '巴', '把', '爸', '吧', '色', '绝', '艳', '甘', '某', '其', '期', '基', '甚', '斯', '贵', '遗', '舞', '且', '姐', '组', '祖', '助', '普', '业', '显', '亚', '恶', '严', '共', '供', '巷', '港', '井', '讲', '进', '用', '角', '确', '解', '嘴', '再', '扁', '篇', '编', '典', '氏', '纸', '昏', '婚', '低', '底', '民', '眠', '甫', '辅', '博', '搏', '都', '部', '郎', '帮', '乡', '段', '锻', '幻', '司', '词', '书', '舟', '船', '般', '盘', '搬', '瓜', '孤', '益', '假', '暇', '气', '汽', '面', '革', '鞋', '勒', '馨', '声', '承', '蒸', '牙', '穿', '呀', '释', '番', '翻', '播', '毛', '尾', '笔', '托', '宅', '展', '丧', '长', '张', '涨', '雁', '应', '兴', '举', '检', '脸', '险', '鸟', '鸡', '鹰', '鸭', '岛', '遇', '缺', '遥', '摇', '兔', '逸', '免', '晚', '象', '像', '马', '妈', '吗', '骂', '验', '骑', '虎', '虑', '虚', '鹿', '熊', '能', '寅', '演', '辰', '晨', '关', '送', '联', '鬼', '魔', '龙', '袭', '那', '哪', '两', '俩', '满', '县', '悬', '窗', '电', '掩', '丑', '扭', '黄', '横', '赤', '亦', '弯', '湾', '恋', '变', '卑', '牌', '套', '曰', '属', '叭', '咕', '胆', '咱', '肿', '串', '吓', '罩', '兽', '嚣', '矗', '颠', '巩', '叨', '刮', '盯', '呵', '姑', '婴', '姆', '兢', '奋', '夹', '颊', '厕', '硕', '砌', '哨', '晃', '泪', '泄', '泊', '沾', '渺', '汰', '咏', '腺', '鲁', '坦', '坝', '涯', '娃', '肘', '碍', '夺', '灼', '炒', '灶', '哩', '厘', '鲤', '嘿', '熏', '丹', '炯', '晌', '淌', '宁', '寡', '喧', '棚', '柏', '朴', '朵', '杠', '椅', '樱', '梢', '杜', '杰', '桐', '宋', '桂', '淋', '焚', '厢', '昧', '朱', '株', '萌', '苟', '苛', '萝', '膜', '暮', '寞', '猫', '狭', '狸', '犹', '燃', '咒', '嗅', '牢', '牡', '宪', '赞', '伞', '舍', '啥', '洽', '旺', '碧', '琐', '汪', '枉', '珠', '噩', '栓', '柱', '钥', '钻', '钞', '锁', '销', '锣', '迫', '迁', '逼', '辽', '逻', '逞', '轨', '轧', '辐', '链', '煎', '喻', '榆', '胳', '厦', '牵', '浑', '晕', '炕', '膏', '淳', '亨', '哼', '鲸', '壳', '洁', '枚', '牧', '玫', '敦', '墩', '瞻', '谓', '询', '讥', '罚', '订', '谅', '诺', '讯', '谍', '碟', '贰', '腻', '嘎', '域', '栽', '戚', '蔑', '喊', '溅', '浇', '涩', '址', '赴', '趟', '堤', '津', '键', '婿', '袜', '衰', '衷', '猿', '吊', '币', '帕', '帖', '帆', '幅', '锦', '沛', '柿', '棘', '蕾', '尝', '坛', '枣', '吞', '妖', '沃', '袄', '轿', '垃', '啼', '蒂', '顷', '匙', '乖', '乘', '剩', '毕', '棍', '谐', '柴', '沦', '敏', '霉', '迄', '砍', '坎', '炊', '钦', '剖', '菩', '黯', '赢', '芒', '荒', '谎', '茫', '坊', '芳', '访', '淤', '熬', '膀', '磅', '榜', '锐', '虹', '蝠', '浊', '蝗', '蛙', '烛', '茧', '蚕', '胞', '炮', '袍', '雹', '豪', '啄', '琢', '遂', '嫁', '肠', '杨', '烫', '荡', '姜', '详', '羡', '栏', '拦', '唯', '雀', '堆', '雕', '截', '霍', '雌', '焦', '瞧', '礁', '蕉', '翘', '塌', '翰', '耀', '戳', '咽', '姻', '墙', '旷', '矿', '庆', '嘛', '磨', '脏', '赃', '桩', '忠', '恕', '惑', '愈', '惠', '忌', '患', '惹', '恒', '悟', '悼', '惧', '慎', '惰', '恢', '惶', '忆', '悄', '恍', '恰', '愉', '怔', '怖', '慌', '愣', '悦', '憎', '惟', '悔', '慕', '添', '媳', '熄', '泌', '瑟', '蜜', '蛾', '扒', '扣', '拍', '啪', '扑', '拘', '损', '拓', '扛', '扎', '拇', '捎', '抄', '垫', '挚', '捏', '拧', '抹', '摸', '描', '挑', '扰', '搞', '拴', '拾', '搭', '掠', '拭', '挠', '扯', '撞', '摘', '拖', '扬', '搓', '捆', '扩', '撼', '挟', '擅', '颤', '戒', '械', '诫', '莽', '奔', '喷', '愤', '材', '荐', '孕', '扔', '携', '圾', '梗', '叹', '叉', '权', '寇', '敲', '轰', '滩', '毅', '肢', '妓', '歧', '翅', '淑', '椒', '盾', '贩', '扳', '烁', '觅', '妥', '豹', '貌', '睬', '允', '宏', '垒', '胎', '怠', '怡', '冶', '抬', '罢', '摆', '丢', '致', '弃', '撤', '硫', '琉', '疏', '蔬', '勾', '沟', '钩', '崩', '岩', '峭', '崎', '崖', '灿', '炭', '碳', '岂', '凯', '峡', '崔', '摧', '逆', '溯', '塑', '盼', '颁', '芬', '扮', '岔', '颂', '讼', '滚', '翁', '嗡', '裕', '榕', '熔', '裳', '掌', '撑', '膛', '颇', '坡', '披', '菠', '歼', '殖', '殊', '残', '咧', '裂', '毙', '耿', '辑', '耻', '摄', '聪', '娶', '蔓', '肤', '扶', '潜', '卧', '藏', '熙', '勋', '劣', '募', '劝', '劫', '抛', '胁', '怒', '茄', '彻', '征', '惩', '徒', '徊', '役', '循', '彼', '衍', '衡', '衔', '秃', '颓', '秒', '稍', '稣', '稿', '稠', '颖', '稼', '税', '稚', '菌', '穗', '秘', '私', '秩', '锹', '梨', '犁', '萎', '黏', '黎', '膝', '漆', '锈', '眯', '糊', '粘', '奥', '澳', '懊', '菊', '渊', '粱', '梁', '糙', '粒', '糕', '蔽', '憋', '撇', '弊', '莱', '搂', '筑', '箩', '笨', '筒', '箭', '筛', '筋', '伍', '仇', '倡', '伯', '仲', '仆', '估', '侦', '俱', '佑', '佐', '侧', '亿', '仔', '倚', '俏', '佳', '侍', '伙', '倘', '宿', '伏', '袱', '偷', '偿', '伐', '佩', '侨', '倾', '伦', '侮', '倍', '仿', '傲', '僧', '囚', '悠', '侄', '仙', '傍', '催', '俗', '侠', '俄', '聚', '符', '贷', '荷', '杖', '仗', '丛', '耸', '挫', '诬', '葛', '褐', '竭', '歇', '揭', '淫', '凭', '挺', '赎', '瓦', '瓷', '拟', '瓶', '宫', '铝', '萤', '莹', '蒙', '朦', '捞', '旋', '吻', '匆', '葱', '锡', '惕', '卢', '屉', '屑', '尿', '犀', '迟', '刷', '漏', '屁', '屈', '掘', '履', '屎', '屡', '屏', '眉', '媚', '昼', '启', '肩', '妒', '炉', '芦', '扇', '奈', '款', '凛', '祟', '祝', '祥', '蔚', '慰', '蒜', '棕', '宙', '轴', '袖', '庙', '笛', '届', '呻', '坤', '审', '婶', '畅', '巢', '棵', '裸', '裹', '析', '晰', '芹', '祈', '欣', '掀', '惭', '崭', '浙', '誓', '拆', '炸', '诈', '归', '皱', '煞', '趋', '雏', '浸', '寝', '侵', '缘', '稳', '挡', '剥', '秉', '妻', '凄', '捷', '肃', '啸', '萧', '兼', '赚', '嫌', '谦', '歉', '廉', '镰', '睁', '挣', '筝', '塘', '隶', '逮', '慷', '糠', '笋', '耍', '耐', '喘', '揣', '槽', '遭', '糟', '抖', '惜', '措', '腊', '蜡', '猎', '燕', '遮', '畔', '拌', '叛', '券', '藤', '鼎', '芝', '贬', '泛', '歪', '矫', '矮', '唉', '埃', '挨', '簇', '茅', '橘', '舒', '览', '揽', '肾', '竖', '弘', '夷', '姨', '疆', '僵', '粥', '蝉', '禅', '沸', '拂', '剃', '递', '梯', '涕', '朽', '聘', '姊', '亏', '污', '夸', '垮', '挎', '鳄', '愕', '躺', '躲', '躬', '嗜', '姥', '拷', '屿', '暑', '睹', '署', '薯', '赌', '奢', '堵', '煮', '诸', '储', '屠', '棺', '爹', '斧', '咬', '胶', '狡', '捉', '促', '趴', '踏', '践', '跃', '蹄', '踩', '蹦', '跌', '踢', '踪', '跨', '躁', '噪', '澡', '藻', '燥', '操', '猾', '髓', '陌', '隙', '陡', '陪', '障', '隧', '陋', '隐', '陕', '陵', '棱', '菱', '凌', '融', '隔', '窃', '挖', '帘', '窥', '穷', '窄', '榨', '窟', '窘', '窜', '腔', '窝', '涡', '锅', '祸', '蜗', '宾', '滨', '绷', '纤', '绰', '绍', '纱', '络', '绸', '绒', '绕', '绽', '绵', '缔', '纺', '缠', '绘', '纷', '绣', '缕', '缩', '纳', '综', '绅', '绪', '绞', '缓', '暖', '援', '绢', '捐', '缴', '邀', '缆', '哟', '颈', '茎', '径', '劲', '幼', '溪', '幽', '玄', '弦', '畜', '蓄', '磁', '滋', '慈', '累', '螺', '紫', '繁', '絮', '索', '脖', '勃', '卸', '御', '卵', '孵', '乳', '浮', '俘', '榴', '爷', '疑', '凝', '玲', '铃', '怜', '岭', '伶', '涌', '桶', '诵', '范', '扼', '卷', '倦', '圈', '怨', '宛', '腕', '婉', '碗', '苍', '抢', '诡', '跪', '舆', '酌', '酬', '酷', '醇', '醋', '酱', '奖', '浆', '桨', '蒋', '醉', '碎', '翠', '粹', '酸', '梭', '峻', '俊', '奠', '蹲', '逗', '橱', '嘻', '嘉', '盟', '孟', '猛', '盐', '盔', '盒', '盛', '盏', '盗', '磕', '盈', '盆', '蕴', '鉴', '滥', '尴', '尬', '沈', '枕', '耽', '衅', '垦', '狠', '恳', '艰', '爵', '嚼', '卿', '恨', '朗', '狼', '粮', '酿', '饥', '饶', '饰', '饮', '蚀', '饱', '馒', '饼', '饺', '饿', '溉', '慨', '苹', '萍', '秤', '淆', '艾', '哎', '赵', '攀', '刹', '枫', '钢', '岗', '纲', '屯', '吨', '顿', '纯', '齿', '龄', '汹', '篱', '仪', '辜', '辞', '宰', '辨', '辫', '臂', '劈', '譬', '僻', '纠', '咳', '嚷', '镶', '塞', '寨', '晴', '猜', '靖', '债', '牲', '隆', '腥', '猩', '醒', '寿', '畴', '涛', '铸', '祷', '筹', '契', '拜', '锋', '逢', '缝', '蓬', '篷', '蜂', '峰', '瞎', '辖', '豁', '韩', '违', '纬', '奏', '凑', '秦', '蠢', '泽', '译', '择', '捧', '砖', '唾', '吟', '贪', '琴', '炼', '晒', '洒', '栖', '栗', '牺', '潭', '覆', '飘', '献', '阔', '润', '阁', '搁', '闹', '阅', '闷', '闭', '闪', '阀', '闸', '阐', '涧', '菲', '辈', '悲', '徘', '喉', '猴', '肝', '刊', '奸', '汗', '杆', '轩', '罕', '竿', '悍', '吁', '涂', '叙', '徐', '斜', '喇', '嗽', '赖', '懒', '嫩', '董', '疗', '痰', '症', '疼', '痒', '瘫', '疫', '癌', '疲', '痴', '瘤', '疮', '疾', '瘾', '痕', '汇', '框', '筐', '砸', '匠', '匪', '匿', '兜', '巨', '柜', '渠', '拒', '矩', '距', '殴', '呕', '躯', '昂', '抑', '葵', '瞪', '凳', '澄', '僚', '拨', '泼', '拔', '杉', '彬', '衫', '彰', '膨', '渗', '诊', '趁', '寥', '谬', '铲', '萨', '刘', '坟', '纹', '斋', '斑', '剂', '挤', '脊', '函', '涵', '映', '殃', '秧', '焕', '肥', '爬', '疤', '甜', '嵌', '钳', '媒', '煤', '谋', '棋', '欺', '旗', '嘶', '撕', '堪', '勘', '遣', '谴', '囊', '溃', '宜', '谊', '租', '粗', '阻', '桑', '嗓', '叠', '锄', '碰', '谱', '壶', '凿', '湿', '哑', '晋', '哄', '洪', '烘', '戴', '翼', '恭', '拱', '撰', '粪', '殿', '暴', '瀑', '爆', '拥', '佣', '甩', '庸', '触', '蟹', '懈', '册', '删', '栅', '珊', '遍', '偏', '抵', '氓', '哺', '浦', '蒲', '薄', '铺', '捕', '敷', '膊', '傅', '缚', '簿', '郁', '郭', '廓', '邓', '鄙', '耶', '邮', '邦', '绑', '郊', '邻', '廊', '缎', '刁', '叼', '钙', '殷', '伺', '饲', '舶', '舰', '航', '舵', '舱', '艇', '沿', '铅', '狐', '瓣', '溢', '隘', '霞', '氨', '氧', '氛', '氢', '氯', '霸', '靴', '鞭', '鞠', '芽', '讶', '雅', '邪', '悉', '毯', '毫', '耗', '耕', '籍', '藉', '畏', '喂', '胀', '帐', '誉', '剑', '敛', '捡', '俭', '签', '鹏', '鸣', '鸿', '莺', '鸽', '鹤', '鹊', '鸥', '鹅', '鸦', '乌', '呜', '捣', '寓', '愚', '偶', '缸', '窑', '罐', '灌', '陶', '淘', '掏', '谣', '冤', '挽', '勉', '馋', '橡', '豫', '码', '驯', '玛', '驻', '骄', '驰', '蚂', '驶', '骚', '驾', '驴', '腾', '骡', '骤', '闯', '驱', '驳', '骗', '唬', '虏', '虐', '滤', '瞬', '麟', '磷', '唇', '辱', '震', '振', '郑', '掷', '魄', '槐', '魅', '瑰', '魂', '愧', '魁', '胧', '垄', '宠', '庞', '拢', '聋', '笼', '挪', '辆', '瞒', '龟', '蝇', '绳', '淹', '俺', '钮', '羞', '纽', '赫', '奕', '迹', '蛮', '啤', '脾', '碑', '嘱', '肆', '插', '毁', '鼠', '舅', '滔', '稻', '蹈', '嫂', '搜', '瘦', '艘', '焰', '馅', '陷', '爽', '缀', '傻', '蝴', '蝶', '蜘', '蛛', '骆', '驼', '蜻', '蜓', '凤', '凰', '玻', '璃', '橄', '榄', '芙', '蓉', '咖', '啡', '葡', '萄', '蘑', '菇', '吩', '咐', '乒', '乓', '曹', '潘', '谭', '姚', '薛', '彭', '冯', '魏', '岳', '莉', '湘', '甸', '沧', '穆', '娜', '琼', '琳', '钧']);