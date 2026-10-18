/**
 * Valaya Alongkorn Rajabhat University under the Royal Patronage (VRU) - 3D Smart Campus
 * Built 100% 1:1 calibrated to vru-drone-map.jpg
 */

// 1. Definitive Campus Buildings Inventory (Every real building measured directly from drone orthophoto)
const HOSPITAL_BUILDINGS = [
  {
    id: 'bld-1', num: '1', name: '1. หอประชุม 80 ปี วไลยอลงกรณ์', shortName: '1',
    sub: 'หอประชุมใหญ่เฉลิมพระเกียรติ 80 พรรษา อาคารแลนด์มาร์คขนาดใหญ่ด้านหน้ามหาวิทยาลัย',
    category: 'อาคารหอประชุมและแลนด์มาร์ค', status: 'เปิดทำการปกติ',
    archType: 'auditorium80', pos: { x: 159.8, y: 0, z: 16.3 }, rotY: 0, anchorHeight: 16,
    dimensions: { w: 41.9, h: 14.0, d: 30.1 }, roofColor: 0xf8fafc, accentColor: 0x047857,
    floors: [{ num: 3, desc: 'โถงหอประชุมใหญ่ 3,500 ที่นั่ง' }, { num: 2, desc: 'โถงต้อนรับและห้องประชุมย่อย' }, { num: 1, desc: 'ลานนิทรรศการ' }]
  },
  {
    id: 'bld-2', num: '2', name: '2. อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB)', shortName: '2',
    sub: 'สำนักงานอธิการบดี, ห้องประชุมสภามหาวิทยาลัย, สำนักส่งเสริมวิชาการและงานทะเบียน',
    category: 'อาคารบริหารและสำนักงานกลาง', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'spb100', pos: { x: 122.8, y: 0, z: 14.8 }, rotY: 0, anchorHeight: 18,
    dimensions: { w: 25.4, h: 16.0, d: 13.2 }, roofColor: 0x94a3b8, accentColor: 0x047857,
    floors: [{ num: 6, desc: 'สำนักงานอธิการบดี' }, { num: 5, desc: 'กองนโยบายและแผน' }, { num: 4, desc: 'ศูนย์เทคโนโลยีดิจิทัล' }, { num: 3, desc: 'กองกลาง' }, { num: 2, desc: 'กองคลัง' }, { num: 1, desc: 'One Stop Service' }]
  },
  {
    id: 'bld-3', num: '3', name: '3. โรงแรม มรภ.วไลยอลงกรณ์', shortName: '3',
    sub: 'ศูนย์ฝึกประสบการณ์วิชาชีพ โรงแรม มรภ.วไลยอลงกรณ์ฯ มาตรฐาน 78 ห้องพัก',
    category: 'ศูนย์ฝึกวิชาชีพและบริการที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'hotel', pos: { x: 181.5, y: 0, z: -22.2 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 24.0, h: 12.0, d: 14.0 }, roofColor: 0x334155, accentColor: 0x059669,
    floors: [{ num: 4, desc: 'ห้องพักรับรองพิเศษ' }, { num: 3, desc: 'ห้องพักสัมมนา' }, { num: 2, desc: 'ห้องจัดเลี้ยง' }, { num: 1, desc: 'ล็อบบี้ต้อนรับ' }]
  },
  {
    id: 'bld-4', num: '4', name: '4. VRU Green Community Mall', shortName: '4',
    sub: 'ศูนย์รวมร้านค้า ร้านอาหาร สหกรณ์ และพื้นที่บริการชุมชนริมถนนพหลโยธิน',
    category: 'อาคารบริการและสวัสดิการ', status: 'เปิดบริการ 07:00 - 20:00 น.',
    archType: 'mall', pos: { x: 180.7, y: 0, z: -42.0 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 36.0, h: 6.0, d: 26.0 }, roofColor: 0x475569, accentColor: 0x10b981,
    floors: [{ num: 2, desc: 'Co-Working Space' }, { num: 1, desc: 'ศูนย์อาหารและร้านค้า' }]
  },
  {
    id: 'bld-5', num: '5', name: '5. อาคารศูนย์ส่งเสริมสุขภาพ / สระว่ายน้ำ', shortName: '5',
    sub: 'สระว่ายน้ำอวยพร เปล่งวานิช ขนาด 50 เมตร และศูนย์ฟิตเนสออกกำลังกาย',
    category: 'ศูนย์กีฬาและสุขภาพ', status: 'เปิดบริการ 06:00 - 20:00 น.',
    archType: 'pool', pos: { x: 157.2, y: 0, z: -22.2 }, rotY: 0, anchorHeight: 7,
    dimensions: { w: 16.0, h: 4.5, d: 14.0 }, roofColor: 0x0284c7, accentColor: 0x0284c7,
    floors: [{ num: 1, desc: 'สระว่ายน้ำและศูนย์ฟิตเนส' }]
  },
  {
    id: 'bld-8', num: '8', name: '8. พระอนุสาวรีย์เจ้าฟ้าวไลยอลงกรณ์ฯ', shortName: '8',
    sub: 'พระอนุสาวรีย์สมเด็จพระราชปิตุจฉา เจ้าฟ้าวไลยอลงกรณ์ กรมหลวงเพชรบุรีราชสิรินธร',
    category: 'อนุสาวรีย์และสิ่งศักดิ์สิทธิ์', status: 'เปิดสักการะตลอดวัน',
    archType: 'monument', pos: { x: 184.0, y: 0, z: 14.5 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 5.0, h: 5.0, d: 5.0 }, roofColor: 0xfbbf24, accentColor: 0xf59e0b,
    floors: [{ num: 1, desc: 'ลานพระอนุสาวรีย์' }]
  },
  {
    id: 'bld-11', num: '11', name: '11. ยิมเนเซียม 1 (โรงยิม 1)', shortName: '11',
    sub: 'อาคารพลศึกษา สนามบาสเกตบอล วอลเลย์บอล และแบดมินตันในร่ม',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 08:00 - 21:00 น.',
    archType: 'box', pos: { x: 98.4, y: 0, z: 10.7 }, rotY: 0, anchorHeight: 11,
    dimensions: { w: 13.2, h: 8.0, d: 13.2 }, roofColor: 0x334155, accentColor: 0x38bdf8,
    floors: [{ num: 2, desc: 'อัฒจันทร์ในร่ม' }, { num: 1, desc: 'สนามแข่งขันในร่ม' }]
  },
  {
    id: 'bld-12', num: '12', name: '12. อาคาร 75 ปี วไลยอลงกรณ์ (ศูนย์ภาษา)', shortName: '12',
    sub: 'สถาบันภาษา ศูนย์การเรียนรู้ภาษาต่างประเทศและห้องปฏิบัติการคอมพิวเตอร์',
    category: 'อาคารเรียนและภาษา', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 68.0, y: 0, z: 16.0 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 20.0, h: 10.0, d: 12.0 }, roofColor: 0x334155, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ศูนย์ภาษา' }, { num: 3, desc: 'ห้อง Lab ภาษา' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'ประชาสัมพันธ์' }]
  },
  {
    id: 'bld-13', num: '13', name: '13. อาคารศูนย์วิทยาศาสตร์ (SCB)', shortName: '13',
    sub: 'ศูนย์ปฏิบัติการวิทยาศาสตร์ เครื่องมือวิเคราะห์ขั้นสูง และห้องแล็บวิจัย',
    category: 'อาคารวิทยาศาสตร์และวิจัย', status: 'เปิดทำการ 08:30 - 17:00 น.',
    archType: 'box', pos: { x: 54.0, y: 0, z: 16.0 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 20.0, h: 10.0, d: 12.0 }, roofColor: 0x1e293b, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องปฏิบัติการเคมี' }, { num: 3, desc: 'ห้องปฏิบัติการฟิสิกส์' }, { num: 2, desc: 'ห้องชีววิทยา' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-14', num: '14', name: '14. อาคารเรียนคณะเทคโนโลยีการเกษตร', shortName: '14',
    sub: 'อาคารเรียนและห้องปฏิบัติการเทคโนโลยีการผลิตพืชและสัตว์',
    category: 'อาคารเรียนและเกษตร', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 38.0, y: 0, z: 16.0 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 18.0, h: 9.0, d: 12.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องเรียน' }, { num: 2, desc: 'ห้องพักอาจารย์' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-15', num: '15', name: '15. คณะเทคโนโลยีการเกษตร (FAT)', shortName: '15',
    sub: 'สำนักงานคณบดีคณะเทคโนโลยีการเกษตร และศูนย์วิจัยแปรรูปผลผลิตทางการเกษตร',
    category: 'สำนักงานคณะและวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 26.7, y: 0, z: 23.4 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 16.3, h: 9.0, d: 20.3 }, roofColor: 0x166534, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องประชุมคณะ' }, { num: 1, desc: 'บริการวิชาการ' }]
  },
  {
    id: 'bld-16', num: '16', name: '16. อาคารเรียนคณะครุศาสตร์', shortName: '16',
    sub: 'อาคารเรียนรวมคณะครุศาสตร์ ศูนย์พัฒนาวิชาชีพครู (ปีกทิศเหนือ)',
    category: 'อาคารเรียนและฝึกอบรม', status: 'เปิดทำการ 08:00 - 17:00 น.',
    archType: 'box', pos: { x: 50.6, y: 0, z: 20.1 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 23.4, h: 10.0, d: 7.6 }, roofColor: 0x991b1b, accentColor: 0xdc2626,
    floors: [{ num: 4, desc: 'ห้องเรียนรวม' }, { num: 3, desc: 'ห้องบรรยาย' }, { num: 2, desc: 'ห้องปฏิบัติการสอน' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-17', num: '17', name: '17. คณะครุศาสตร์ (FE)', shortName: '17',
    sub: 'สำนักงานคณบดีคณะครุศาสตร์ คณะแห่งแรกและประวัติศาสตร์ของมหาวิทยาลัย (ปีกทิศใต้)',
    category: 'สำนักงานคณะ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 63.8, y: 0, z: 32.0 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 25.4, h: 10.0, d: 9.2 }, roofColor: 0x7f1d1d, accentColor: 0xdc2626,
    floors: [{ num: 4, desc: 'สำนักงานคณบดี' }, { num: 3, desc: 'ห้องประชุมครุศาสตร์' }, { num: 2, desc: 'ฝ่ายวิชาการ' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-18', num: '18', name: '18. อาคารกองพัฒนานักศึกษา', shortName: '18',
    sub: 'กองพัฒนานักศึกษา, องค์การบริหารนักศึกษา, กองทุน กยศ., และงานแนะแนว',
    category: 'อาคารบริการนักศึกษา', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 68.0, y: 0, z: 30.0 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 18.0, h: 9.0, d: 12.0 }, roofColor: 0x047857, accentColor: 0x059669,
    floors: [{ num: 3, desc: 'งานกองทุน กยศ.' }, { num: 2, desc: 'องค์การนักศึกษา' }, { num: 1, desc: 'จุดบริการนักศึกษา' }]
  },
  {
    id: 'bld-19', num: '19', name: '19. คณะวิทยาศาสตร์และเทคโนโลยี (FST)', shortName: '19',
    sub: 'สำนักงานคณบดีและอาคารเรียนคณะวิทยาศาสตร์และเทคโนโลยี อาคารแนวยาวฝั่งทิศเหนือ',
    category: 'สำนักงานคณะและวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 51.0, y: 0, z: -20.4 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 61.2, h: 10.0, d: 12.4 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'สำนักงานคณบดี' }, { num: 3, desc: 'ห้องปฏิบัติการคอมพิวเตอร์' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-20', num: '20', name: '20. อาคารพยาบาล และร้านค้า', shortName: '20',
    sub: 'ศูนย์บริการสาธารณสุขและพยาบาลปฐมพยาบาล ร้านสะดวกซื้อ และตู้บริการอัตโนมัติ',
    category: 'อาคารบริการสุขภาพและชุมชน', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 54.0, y: 0, z: -8.0 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 16.0, h: 5.0, d: 10.0 }, roofColor: 0x0284c7, accentColor: 0x0ea5e9,
    floors: [{ num: 2, desc: 'ห้องพักฟื้นและปฐมพยาบาล' }, { num: 1, desc: 'ร้านค้าสะดวกซื้อ' }]
  },
  {
    id: 'bld-23', num: '23', name: '23. อาคาร 60 ปี วไลยอลงกรณ์', shortName: '23',
    sub: 'อาคาร 60 ปี วไลยอลงกรณ์ และศูนย์ฝึกปฏิบัติการคหกรรมศาสตร์',
    category: 'อาคารเรียนและปฏิบัติการ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 22.0, y: 0, z: -21.0 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 22.0, h: 9.0, d: 12.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องปฏิบัติการคหกรรม' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-28', num: '28', name: '28. คณะวิทยาการจัดการ (FMS)', shortName: '28',
    sub: 'สำนักงานคณบดีและอาคารเรียนคณะวิทยาการจัดการ หลังคาสีแดงส้มฝั่งตะวันตก',
    category: 'สำนักงานคณะและเรียนรวม', status: 'เปิดทำการ 08:00 - 18:00 น.',
    archType: 'box', pos: { x: -41.5, y: 0, z: -6.1 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 16.3, h: 9.0, d: 12.2 }, roofColor: 0x991b1b, accentColor: 0xdc2626,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องเรียน MBA' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-29', num: '29', name: '29. อาคารเรียนรวมวิทยาศาสตร์ (SCC2)', shortName: '29',
    sub: 'อาคารเรียนรวมวิทยาศาสตร์ SCC2 และห้องปฏิบัติการพื้นฐาน',
    category: 'อาคารเรียนรวม', status: 'เปิดทำการ 08:00 - 17:00 น.',
    archType: 'box', pos: { x: 4.0, y: 0, z: -21.0 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 20.0, h: 9.0, d: 12.0 }, roofColor: 0x334155, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องบรรยาย' }, { num: 3, desc: 'ห้องปฏิบัติการ' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงอาคาร' }]
  },
  {
    id: 'bld-30', num: '30', name: '30. โรงเรียนสาธิตฯ (ฝ่ายมัธยม)', shortName: '30',
    sub: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ (ฝ่ายมัธยม)',
    category: 'โรงเรียนสาธิต', status: 'เปิดทำการ 07:30 - 16:30 น.',
    archType: 'box', pos: { x: -93.4, y: 0, z: 4.0 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 26.0, h: 10.0, d: 16.0 }, roofColor: 0x166534, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องเรียนมัธยมปลาย' }, { num: 2, desc: 'ห้องเรียนมัธยมต้น' }, { num: 1, desc: 'สำนักงานโรงเรียน' }]
  },
  {
    id: 'bld-31', num: '31', name: '31. สำนักวิทยบริการและเทคโนโลยีสารสนเทศ (หอสมุดกลาง)', shortName: '31',
    sub: 'หอสมุดกลาง อาคารหลังคาสีส้มพีชริมสระน้ำใหญ่ Co-Working Space ศูนย์การเรียนรู้ดิจิทัล',
    category: 'อาคารหอสมุดและวิทยบริการ', status: 'เปิดบริการ 08:00 - 20:00 น.',
    archType: 'box', pos: { x: -5.9, y: 0, z: 35.6 }, rotY: 0, anchorHeight: 16,
    dimensions: { w: 34.6, h: 13.0, d: 28.5 }, roofColor: 0xea580c, accentColor: 0xf97316,
    floors: [{ num: 4, desc: 'ห้องศึกษาค้นคว้าเดี่ยว' }, { num: 3, desc: 'คลังหนังสือวิชาการ' }, { num: 2, desc: 'ห้องบริการมัลติมีเดีย' }, { num: 1, desc: 'โถงยืม-คืนหนังสือ' }]
  },
  {
    id: 'bld-36', num: '36', name: '36. เรือนเจ้าฟ้า (เรือนไทยวไลยอลงกรณ์)', shortName: '36',
    sub: 'เรือนไทยไม้สักประยุกต์ ศูนย์อนุรักษ์ศิลปวัฒนธรรม ตั้งตระหง่านกลางสระน้ำใหญ่',
    category: 'อาคารอนุรักษ์ศิลปวัฒนธรรม', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'thaiPavilion', pos: { x: -0.7, y: 0, z: -0.6 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 8.5, h: 6.5, d: 8.0 }, roofColor: 0xb45309, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ชานเรือนและหอจัดแสดงพระราชประวัติ' }, { num: 1, desc: 'ใต้ถุนเรือนไทยริมสระบัว' }]
  },
  {
    id: 'bld-37', num: '37', name: '37. อาคารฝ่ายยานพาหนะ', shortName: '37',
    sub: 'ฝ่ายยานพาหนะ โรงจอดรถรางไฟฟ้า และศูนย์ซ่อมบำรุงรถส่วนกลาง',
    category: 'อาคารบริการและยานพาหนะ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -44.0, y: 0, z: 16.0 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 18.0, h: 5.5, d: 12.0 }, roofColor: 0x475569, accentColor: 0x64748b,
    floors: [{ num: 2, desc: 'สำนักงานฝ่ายยานพาหนะ' }, { num: 1, desc: 'โรงจอดรถและสถานีชาร์จ EV' }]
  },
  {
    id: 'bld-38', num: '38', name: '38. อาคารปฏิบัติการเทคโนโลยีอุตสาหกรรม', shortName: '38',
    sub: 'อาคารปฏิบัติการทางวิศวกรรม โรงประลองเครื่องกล ไฟฟ้า และยานยนต์',
    category: 'โรงประลองและปฏิบัติการ', status: 'เปิดทำการ 08:30 - 17:00 น.',
    archType: 'box', pos: { x: -85.8, y: 0, z: 14.0 }, rotY: 0, anchorHeight: 10,
    dimensions: { w: 24.0, h: 7.0, d: 7.0 }, roofColor: 0x9a3412, accentColor: 0xc2410c,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการ CAD/CAM' }, { num: 1, desc: 'โรงประลองเครื่องกล' }]
  },
  {
    id: 'bld-39', num: '39', name: '39. คณะเทคโนโลยีอุตสาหกรรม (FIT)', shortName: '39',
    sub: 'สำนักงานคณบดีคณะเทคโนโลยีอุตสาหกรรม และห้องปฏิบัติการวิศวกรรม',
    category: 'สำนักงานคณะและวิศวกรรม', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -85.8, y: 0, z: 26.0 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 24.0, h: 10.0, d: 9.0 }, roofColor: 0x7c2d12, accentColor: 0xc2410c,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องปฏิบัติการไฟฟ้า' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-40', num: '40', name: '40. หอพักโกเมน', shortName: '40',
    sub: 'หอพักนักศึกษาหญิงในกำกับมหาวิทยาลัย (อาคารโกเมน แถวกลางเหนือ)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -98.7, y: 0, z: 3.6 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 24.4, h: 12.0, d: 6.5 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับและร้านสะดวกซื้อ' }]
  },
  {
    id: 'bld-41', num: '41', name: '41. หอพักเพทาย', shortName: '41',
    sub: 'หอพักนักศึกษาหญิงในกำกับมหาวิทยาลัย (อาคารเพทาย แถวกลางใต้)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -97.8, y: 0, z: 9.6 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 26.3, h: 12.0, d: 5.4 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-42', num: '42', name: '42. ยิมเนเซียม 2', shortName: '42',
    sub: 'อาคารพลศึกษาและสนามกีฬาในร่ม 2 ศูนย์ฝึกซ้อมนักกีฬา',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 08:00 - 21:00 น.',
    archType: 'box', pos: { x: -106.0, y: 0, z: -5.0 }, rotY: 0, anchorHeight: 10,
    dimensions: { w: 16.5, h: 7.5, d: 5.5 }, roofColor: 0x0284c7, accentColor: 0x0284c7,
    floors: [{ num: 2, desc: 'อัฒจันทร์' }, { num: 1, desc: 'สนามฝึกซ้อม' }]
  },
  {
    id: 'bld-43', num: '43', name: '43. หอพักนักศึกษา 1', shortName: '43',
    sub: 'หอพักนักศึกษา อาคาร 1 (แถวบนสุด ทิศเหนือ)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -97.0, y: 0, z: -1.8 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 11.1, h: 12.0, d: 4.9 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-44', num: '44', name: '44. หอพักนักศึกษา 2', shortName: '44',
    sub: 'หอพักนักศึกษา อาคาร 2 (แถวล่าง ฝั่งทิศตะวันตก)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -98.2, y: 0, z: 21.3 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 10.9, h: 12.0, d: 5.3 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-45', num: '45', name: '45. หอพักนักศึกษา 3', shortName: '45',
    sub: 'หอพักนักศึกษา อาคาร 3 (แถวล่าง ฝั่งทิศตะวันออก)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -83.3, y: 0, z: 22.3 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 10.9, h: 12.0, d: 5.4 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-49', num: '49', name: '49. หอพักนักศึกษานานาชาติ', shortName: '49',
    sub: 'หอพักนักศึกษานานาชาติและนักศึกษาโครงการพิเศษ',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -92.0, y: 0, z: 28.0 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 20.0, h: 12.0, d: 14.0 }, roofColor: 0x475569, accentColor: 0x0ea5e9,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-53', num: '53', name: '53. ศูนย์ อพ.สธ.', shortName: '53',
    sub: 'ศูนย์ประสานงานโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ (อพ.สธ.)',
    category: 'ศูนย์อนุรักษ์และวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -140.0, y: 0, z: 34.0 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 18.0, h: 6.5, d: 12.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการเพาะเลี้ยงเนื้อเยื่อ' }, { num: 1, desc: 'ศูนย์เรียนรู้พันธุ์พืช' }]
  },
  {
    id: 'bld-55', num: '55', name: '55. Valaya Hub & Resort', shortName: '55',
    sub: 'Valaya Hub ศูนย์นวัตกรรมการเรียนรู้และที่พักรีสอร์ทเพื่อการศึกษา',
    category: 'ศูนย์การเรียนรู้และที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -155.0, y: 0, z: 34.0 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 18.0, h: 6.0, d: 12.0 }, roofColor: 0x92400e, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ห้องพักรับรอง' }, { num: 1, desc: 'Co-Working Space & Cafe' }]
  },
  {
    id: 'bld-57', num: '57', name: '57. สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ', shortName: '57',
    sub: 'สนามฟุตบอลหญ้าจริง ลู่วิ่งสังเคราะห์มาตรฐาน 400 เมตร 8 ลู่ และอัฒจันทร์ประธาน',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 06:00 - 21:00 น.',
    archType: 'stadium', pos: { x: -142.1, y: 0, z: 13.5 }, rotY: 0, anchorHeight: 7,
    dimensions: { w: 27.3, h: 4.0, d: 49.0 }, roofColor: 0xdc2626, accentColor: 0x16a34a,
    floors: [{ num: 1, desc: 'สนามฟุตบอล ลู่วิ่ง 400 เมตร และอัฒจันทร์ประธาน' }]
  }
];

const BUILDINGS_MAP = {};
HOSPITAL_BUILDINGS.forEach(b => { BUILDINGS_MAP[b.id] = b; });

// View presets
// View presets
function getOverviewPreset() {
  const isPortrait = window.innerHeight > window.innerWidth;
  if (isPortrait) {
    return { pos: { x: 0, y: 240, z: 180 }, target: { x: 0, y: 0, z: 0 } };
  } else {
    return { pos: { x: 0, y: 190, z: 160 }, target: { x: 0, y: 0, z: 0 } };
  }
}

const VIEW_PRESETS = {
  front: { pos: { x: 235, y: 70, z: 25 }, target: { x: 160, y: 8, z: 15 } },
  academic: { pos: { x: 65, y: 75, z: 55 }, target: { x: 45, y: 5, z: 5 } },
  thaiLake: { pos: { x: 25, y: 55, z: 35 }, target: { x: -1, y: 4, z: 0 } },
  stadium: { pos: { x: -110, y: 65, z: 60 }, target: { x: -142, y: 4, z: 13.5 } }
};

let scene, camera, renderer, controls;
let buildingsGroup, groundGroup, propsGroup;
let ambientLight, sunLight, hemiLight;
let sunTargetObj;
let raycaster, mouse;
const labelElements = new Map();
const buildingMeshes = new Map();
const emissiveMaterials = [];
const sharedTextures = {};

const state = {
  dayMode: true,
  showLabels: true,
  isOrbiting: false,
  selectedBuilding: null,
  activeMapTab: 'floor'
};

// Procedural texture generators
function initProceduralTextures() {
  const texLoader = new THREE.TextureLoader();
  sharedTextures.droneMap = texLoader.load('img/vru-drone-map-4k.jpg', (tex) => {
    tex.encoding = THREE.sRGBEncoding;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
  });

  sharedTextures.poolWater = createPoolTexture();
  sharedTextures.water = createWaterTexture();
  sharedTextures.solar = createSolarTexture();
  sharedTextures.vruMainSign = createVruMainSignTexture();
}

function createPoolTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 0, 128, 128);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 1.5;
  for (let i = 0; i <= 128; i += 16) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 128); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(128, i); ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 4);
  return tex;
}

function createWaterTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0d9488';
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = '#14b8a6';
  for (let i = 0; i < 40; i++) {
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 4, 2);
  }
  return new THREE.CanvasTexture(c);
}

function createSolarTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1e3a8a';
  ctx.fillRect(0, 0, 64, 64);
  ctx.strokeStyle = '#60a5fa';
  ctx.lineWidth = 1;
  ctx.strokeRect(2, 2, 60, 60);
  ctx.strokeRect(16, 2, 32, 60);
  ctx.strokeRect(2, 16, 60, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  return tex;
}

function createVruMainSignTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#064e3b';
  ctx.fillRect(0, 0, 512, 128);
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('มหาวิทยาลัยราชภัฏวไลยอลงกรณ์', 256, 52);
  ctx.font = '20px sans-serif';
  ctx.fillText('ในพระบรมราชูปถัมภ์', 256, 88);
  return new THREE.CanvasTexture(c);
}

// Scene setup
function initScene() {
  const canvas = document.getElementById('world');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdce7f2);
  // scene.fog removed for maximum texture clarity

  const initPreset = getOverviewPreset();
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.5, 1200);
  camera.position.set(initPreset.pos.x, initPreset.pos.y, initPreset.pos.z);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.outputEncoding = THREE.sRGBEncoding;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(initPreset.target.x, initPreset.target.y, initPreset.target.z);
  controls.maxPolarAngle = Math.PI / 2 - 0.02;
  controls.minPolarAngle = 0.04;
  controls.minDistance = 2.0;
  controls.maxDistance = 750;
  controls.zoomSpeed = 1.35;
  controls.screenSpacePanning = true;

  window.scene = scene;
  window.camera = camera;
  window.renderer = renderer;
  window.controls = controls;

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  groundGroup = new THREE.Group();
  buildingsGroup = new THREE.Group();
  propsGroup = new THREE.Group();
  scene.add(groundGroup);
  scene.add(buildingsGroup);
  scene.add(propsGroup);

  setupLighting();
  buildGround();
  buildBuildings();
  create3DLabels();
  setupUI();

  window.addEventListener('resize', onWindowResize);
  canvas.addEventListener('click', onCanvasClick);
}

function setupLighting() {
  ambientLight = new THREE.AmbientLight(0xfff7ed, 0.72);
  scene.add(ambientLight);

  hemiLight = new THREE.HemisphereLight(0xdce7f2, 0x475569, 0.45);
  scene.add(hemiLight);

  sunLight = new THREE.DirectionalLight(0xffedd5, 1.35);
  sunLight.position.set(140, 240, 160);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  sunLight.shadow.bias = -0.00035;
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 600;
  const shadowDist = 220;
  sunLight.shadow.camera.left = -shadowDist;
  sunLight.shadow.camera.right = shadowDist;
  sunLight.shadow.camera.top = shadowDist;
  sunLight.shadow.camera.bottom = -shadowDist;

  sunTargetObj = new THREE.Object3D();
  sunTargetObj.position.set(0, 0, 0);
  scene.add(sunTargetObj);
  sunLight.target = sunTargetObj;
  scene.add(sunLight);
}

function buildGround() {
  // Aerial Drone Orthophoto Masterplane (416.6 x 120.0 m)
  const droneGeo = new THREE.PlaneGeometry(416.6, 120.0);
  const droneMat = new THREE.MeshBasicMaterial({
    map: sharedTextures.droneMap
  });
  const droneMesh = new THREE.Mesh(droneGeo, droneMat);
  droneMesh.rotation.x = -Math.PI / 2;
  droneMesh.position.set(0, 0.01, 0);
  droneMesh.receiveShadow = true;
  groundGroup.add(droneMesh);

  // Outer Surrounding Horizon Plane
  const outerGeo = new THREE.PlaneGeometry(900, 900);
  const outerMat = new THREE.MeshStandardMaterial({ color: 0x3d6339, roughness: 0.95 });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  outerMesh.rotation.x = -Math.PI / 2;
  outerMesh.position.set(0, -0.05, 0);
  outerMesh.receiveShadow = true;
  groundGroup.add(outerMesh);
}

function createAuditorium80Mesh() {
  const group = new THREE.Group();

  // === Materials matching exact Google Maps satellite photo (upload_20261018_164025_1.jpeg) ===
  // Light grey / off-white metal sheet roof cladding with flat shading for realistic facet shadows
  const roofSheetMat = new THREE.MeshStandardMaterial({
    color: 0xebedf0,
    roughness: 0.42,
    metalness: 0.22,
    flatShading: true
  });
  const roofNorthSlopeMat = new THREE.MeshStandardMaterial({
    color: 0xcfd4d9,
    roughness: 0.48,
    metalness: 0.18,
    flatShading: true
  });
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    roughness: 0.72,
    metalness: 0.05
  });
  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.82,
    metalness: 0.04
  });
  const trussMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.25,
    metalness: 0.35
  });
  const darkTrimMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.5,
    metalness: 0.3
  });
  const ridgeCapMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.15
  });

  const baseH = 8.5; // Wall height
  const roofPeakH = 15.0; // Roof ridge height
  const halfW = 19.5; // ~39m total width
  const halfD = 14.5; // ~29m total depth

  // --- 1. Base Solid Podium ---
  const podium = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 + 2.0, 1.2, halfD * 2 + 1.5), concreteMat);
  podium.position.y = 0.6;
  podium.receiveShadow = true;
  group.add(podium);

  // --- 2. Main Hall Walls ---
  const mainWalls = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2, baseH, halfD * 2), wallMat);
  mainWalls.position.set(0, baseH / 2 + 0.6, 0);
  mainWalls.castShadow = true;
  mainWalls.receiveShadow = true;
  group.add(mainWalls);

  // Perimeter ribbon windows
  const winBand = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 + 0.15, 1.2, halfD * 2 + 0.15), darkTrimMat);
  winBand.position.set(0, baseH - 1.0, 0);
  group.add(winBand);

  // --- 3. Multi-Tiered Solid Hip Roof (Exact match to Google Maps satellite geometry) ---
  // Geometry constructed with vertices:
  // Base corners at Y = baseH + 0.6:
  // vNW: (-halfW, Y, -halfD), vNE: (halfW, Y, -halfD)
  // vSW: (-halfW, Y,  halfD), vSE: (halfW, Y,  halfD)
  // Ridge vertices at Y = roofPeakH along the central axis:
  // rN: (0, roofPeakH, -halfD * 0.45), rS: (0, roofPeakH, halfD * 0.45)
  const Yb = baseH + 0.6;
  const Yr = roofPeakH;
  const rZ = halfD * 0.45;

  const roofGeo = new THREE.BufferGeometry();
  const positions = [
    // South Triangular Hip Slope (vSW, vSE, rS)
    -halfW, Yb, halfD,    halfW, Yb, halfD,    0, Yr, rZ,
    // North Triangular Hip Slope (vNE, vNW, rN)
    halfW, Yb, -halfD,    -halfW, Yb, -halfD,  0, Yr, -rZ,
    // West Trapezoidal Slope (2 triangles: vNW, vSW, rN and rN, vSW, rS)
    -halfW, Yb, -halfD,   -halfW, Yb, halfD,   0, Yr, -rZ,
    0, Yr, -rZ,           -halfW, Yb, halfD,   0, Yr, rZ,
    // East Trapezoidal Slope (2 triangles: vSE, vNE, rS and rS, vNE, rN)
    halfW, Yb, halfD,     halfW, Yb, -halfD,   0, Yr, rZ,
    0, Yr, rZ,            halfW, Yb, -halfD,   0, Yr, -rZ
  ];
  roofGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  roofGeo.computeVertexNormals();

  const mainRoofMesh = new THREE.Mesh(roofGeo, roofSheetMat);
  mainRoofMesh.castShadow = true;
  mainRoofMesh.receiveShadow = true;
  group.add(mainRoofMesh);

  // --- 4. East Entrance Wing Projection (Facing Front/East) ---
  const eW = 8.5;
  const eD = 14.0;
  const eX = halfW + eW / 2;
  const eWall = new THREE.Mesh(new THREE.BoxGeometry(eW, baseH * 0.85, eD), wallMat);
  eWall.position.set(eX, (baseH * 0.85) / 2 + 0.6, 0);
  eWall.castShadow = true;
  group.add(eWall);

  // East Wing Hip Roof
  const eRoofGeo = new THREE.BufferGeometry();
  const ePos = [
    halfW, Yb, -eD / 2,   halfW + eW, Yb, -eD / 2,   halfW + eW * 0.65, Yr * 0.85, 0,
    halfW, Yb, -eD / 2,   halfW + eW * 0.65, Yr * 0.85, 0,  halfW, Yr * 0.9, 0,
    halfW + eW, Yb, eD / 2,  halfW, Yb, eD / 2,     halfW, Yr * 0.9, 0,
    halfW + eW, Yb, eD / 2,  halfW, Yr * 0.9, 0,     halfW + eW * 0.65, Yr * 0.85, 0,
    halfW + eW, Yb, -eD / 2, halfW + eW, Yb, eD / 2, halfW + eW * 0.65, Yr * 0.85, 0
  ];
  eRoofGeo.setAttribute('position', new THREE.Float32BufferAttribute(ePos, 3));
  eRoofGeo.computeVertexNormals();
  const eRoofMesh = new THREE.Mesh(eRoofGeo, roofSheetMat);
  eRoofMesh.castShadow = true;
  group.add(eRoofMesh);

  // --- 5. White Architectural Ridge & Hip Caps (Sharp defined seam lines) ---
  const ridgeGroup = new THREE.Group();
  function createRidgeLine(p1, p2) {
    const v1 = new THREE.Vector3(...p1);
    const v2 = new THREE.Vector3(...p2);
    const len = v1.distanceTo(v2);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, len, 6), ridgeCapMat);
    bar.position.copy(new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5));
    bar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v2.clone().sub(v1).normalize());
    bar.castShadow = true;
    return bar;
  }
  // Central ridge
  ridgeGroup.add(createRidgeLine([0, Yr + 0.1, -rZ], [0, Yr + 0.1, rZ]));
  // 4 Corner Hips
  ridgeGroup.add(createRidgeLine([0, Yr + 0.1, -rZ], [-halfW, Yb + 0.1, -halfD]));
  ridgeGroup.add(createRidgeLine([0, Yr + 0.1, -rZ], [halfW, Yb + 0.1, -halfD]));
  ridgeGroup.add(createRidgeLine([0, Yr + 0.1, rZ], [-halfW, Yb + 0.1, halfD]));
  ridgeGroup.add(createRidgeLine([0, Yr + 0.1, rZ], [halfW, Yb + 0.1, halfD]));
  group.add(ridgeGroup);

  // --- 6. Exposed White Steel Space Frame / Truss Lattice (Around eaves/corners as in satellite) ---
  const trussY = Yb + 0.2;
  function createTrussCanopy(w, d, px, pz) {
    const tGroup = new THREE.Group();
    tGroup.position.set(px, trussY, pz);

    const bTop = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, 0.4), trussMat);
    bTop.position.set(0, 0, -d / 2);
    tGroup.add(bTop);
    const bBot = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, 0.4), trussMat);
    bBot.position.set(0, 0, d / 2);
    tGroup.add(bBot);
    const bSide = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, d), trussMat);
    bSide.position.set(w / 2, 0, 0);
    tGroup.add(bSide);

    // Lattice grid bars
    for (let x = -w / 2 + 2.5; x < w / 2; x += 2.5) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, d), trussMat);
      bar.position.set(x, 0, 0);
      tGroup.add(bar);
    }
    return tGroup;
  }

  // North & Corner Truss Lattice (Matching the visible white trusses in satellite photo)
  group.add(createTrussCanopy(halfW * 2 + 4.0, 3.5, 0, -halfD - 1.75));
  group.add(createTrussCanopy(halfW * 2 + 4.0, 3.5, 0, halfD + 1.75));
  group.add(createTrussCanopy(4.0, halfD * 2, -halfW - 2.0, 0));

  // --- 7. Full Solid Ascending Entrance Ramp (Connecting from ground to entrance) ---
  const rampW = 5.5;
  const rampLen = 16.0;
  const rampMesh = new THREE.Mesh(new THREE.BoxGeometry(rampW, 2.0, rampLen), concreteMat);
  rampMesh.position.set(halfW + 3.0, 1.0, 14.0);
  rampMesh.rotation.x = 0.125;
  rampMesh.castShadow = true;
  rampMesh.receiveShadow = true;
  group.add(rampMesh);

  // Parapet walls for ramp
  for (let s of [-1, 1]) {
    const bal = new THREE.Mesh(new THREE.BoxGeometry(0.35, 2.8, rampLen), wallMat);
    bal.position.set(halfW + 3.0 + s * (rampW / 2 - 0.2), 1.4, 14.0);
    bal.rotation.x = 0.125;
    bal.castShadow = true;
    group.add(bal);
  }

  return group;
}

function buildBuildings() {
  HOSPITAL_BUILDINGS.forEach(bld => {
    const bGroup = new THREE.Group();
    bGroup.position.set(bld.pos.x, 0, bld.pos.z);
    bGroup.userData = bld;

    if (bld.id === 'bld-1') {
      const mesh = createAuditorium80Mesh();
      bGroup.add(mesh);
    } else {
      // Invisible flat hitbox on ground for raycast clicking (no 3D mesh rendered yet)
      const hitGeo = new THREE.PlaneGeometry(bld.dimensions.w, bld.dimensions.d);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.rotation.x = -Math.PI / 2;
      hitMesh.position.y = 0.05;
      hitMesh.userData = bld;
      bGroup.add(hitMesh);
    }

    buildingsGroup.add(bGroup);
    buildingMeshes.set(bld.id, bGroup);
  });
}


// 3D Floating Pin Number Badges
function create3DLabels() {
  const container = document.getElementById('labelsContainer');
  if (!container) return;
  container.innerHTML = '';
  labelElements.clear();

  HOSPITAL_BUILDINGS.forEach(bld => {
    const pin = document.createElement('div');
    pin.className = 'label-pin';
    pin.id = 'label-' + bld.id;
    pin.setAttribute('data-id', bld.id);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = bld.num;
    pin.appendChild(name);

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      selectBuilding(bld.id, true);
    });

    container.appendChild(pin);
    labelElements.set(bld.id, { element: pin, data: bld });
  });
}

function updateLabelPositions() {
  const container = document.getElementById('labelsContainer');
  const svg = document.getElementById('labelLeaders');
  if (!container || !svg) return;

  if (!state.showLabels) {
    container.style.display = 'none';
    svg.style.display = 'none';
    return;
  }
  container.style.display = '';
  svg.style.display = '';

  let svgPaths = '';
  const w = window.innerWidth;
  const h = window.innerHeight;
  const tempV = new THREE.Vector3();
  const camDir = new THREE.Vector3();
  camera.getWorldDirection(camDir);
  const toAnchor = new THREE.Vector3();
  const placedBoxes = [];

  labelElements.forEach(({ element, data }) => {
    const anchorY = 1.8;
    toAnchor.set(data.pos.x - camera.position.x, anchorY - camera.position.y, data.pos.z - camera.position.z);

    if (toAnchor.dot(camDir) <= 0.2) {
      element.style.display = 'none';
      return;
    }

    tempV.set(data.pos.x, anchorY, data.pos.z);
    tempV.project(camera);

    if (tempV.z < -1.0 || tempV.z > 1.0) {
      element.style.display = 'none';
      return;
    }

    const screenX = (tempV.x * 0.5 + 0.5) * w;
    const screenY = (-(tempV.y * 0.5) + 0.5) * h;

    if (screenX < -50 || screenX > w + 50 || screenY < -50 || screenY > h + 50) {
      element.style.display = 'none';
      return;
    }

    let adjustedY = screenY - 26;
    const boxW = 28;
    const boxH = 26;
    let collides = false;
    for (const pb of placedBoxes) {
      if (Math.abs(screenX - pb.x) < boxW && Math.abs(adjustedY - pb.y) < boxH) {
        collides = true;
        break;
      }
    }

    if (collides && !element.classList.contains('selected')) {
      element.style.display = 'none';
      return;
    }

    placedBoxes.push({ x: screenX, y: adjustedY });

    element.style.display = 'flex';
    element.style.left = screenX + 'px';
    element.style.top = adjustedY + 'px';

    svgPaths += '<line x1="' + screenX + '" y1="' + screenY + '" x2="' + screenX + '" y2="' + (adjustedY + 6) + '" stroke="rgba(2, 132, 199, 0.75)" stroke-width="1.2" stroke-dasharray="2,2"/>';
  });

  svg.innerHTML = svgPaths;
}

// Building Selection & Detail Panel
function selectBuilding(id, shouldFocus) {
  if (!id || id === 'overview') {
    resetView();
    return;
  }

  const bld = BUILDINGS_MAP[id];
  if (!bld) return;

  state.selectedBuilding = bld;

  labelElements.forEach(({ element }, k) => {
    element.classList.toggle('selected', k === id);
  });

  buildingMeshes.forEach((mesh, k) => {
    mesh.traverse(child => {
      if (child.isMesh && child.material && child.material.emissive) {
        child.userData.origEmissive = child.userData.origEmissive ?? child.material.emissive.getHex();
        if (k === id) {
          child.material.emissive.setHex(0x059669);
          child.material.emissiveIntensity = 0.35;
        } else {
          child.material.emissive.setHex(child.userData.origEmissive || 0x000000);
          child.material.emissiveIntensity = 0.0;
        }
      }
    });
  });

  if (shouldFocus) {
    focusBuilding(bld);
  }

  updateDetailPanel(bld);
}

function focusBuilding(bld) {
  const targetX = bld.pos.x;
  const targetY = (bld.dimensions.h || 10) * 0.45;
  const targetZ = bld.pos.z;

  const off = { x: 18, y: 32, z: 42 };
  new TWEEN.Tween(controls.target)
    .to({ x: targetX, y: targetY, z: targetZ }, 1000)
    .easing(TWEEN.Easing.Cubic.Out)
    .start();

  new TWEEN.Tween(camera.position)
    .to({ x: targetX + off.x, y: targetY + off.y, z: targetZ + off.z }, 1000)
    .easing(TWEEN.Easing.Cubic.Out)
    .start();
}

function updateDetailPanel(bld) {
  const detail = document.getElementById('detail');
  if (!detail) return;

  const titleEl = document.getElementById('entityTitle');
  if (titleEl) titleEl.textContent = bld.name;

  const subEl = document.getElementById('entitySub');
  if (subEl) subEl.textContent = bld.sub || (bld.category + ' · มรภ.วไลยอลงกรณ์ฯ');

  const typeEl = document.getElementById('entityType');
  if (typeEl) typeEl.textContent = bld.category;

  const statusEl = document.getElementById('entityStatus');
  if (statusEl) statusEl.textContent = bld.status;

  const miniDiagram = document.getElementById('miniDiagram');
  if (miniDiagram) {
    if (bld.floors && bld.floors.length > 0) {
      miniDiagram.innerHTML = bld.floors.map((f, idx) =>
        '<div class="floor-block ' + (idx === 0 ? 'active' : '') + '" data-floor="' + f.num + '">' +
          '<span>ชั้น ' + f.num + '</span><small>' + f.desc + '</small>' +
        '</div>'
      ).join('');
    } else {
      miniDiagram.innerHTML = '<div class="floor-block active"><span>ชั้น 1</span><small>พื้นที่บริการและการใช้งาน</small></div>';
    }
  }

  const detailNote = document.getElementById('detailNote');
  if (detailNote) detailNote.textContent = bld.sub || '';

  const emptyMsg = detail.querySelector('.detail-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';

  const scrollArea = detail.querySelector('.detail-scroll');
  if (scrollArea) scrollArea.style.display = 'block';

  detail.hidden = false;
}

function resetView() {
  state.selectedBuilding = null;
  labelElements.forEach(({ element }) => element.classList.remove('selected'));
  buildingMeshes.forEach(mesh => {
    mesh.traverse(child => {
      if (child.isMesh && child.material && child.material.emissive) {
        child.material.emissive.setHex(child.userData.origEmissive || 0x000000);
        child.material.emissiveIntensity = 0.0;
      }
    });
  });

  const p = getOverviewPreset();
  new TWEEN.Tween(controls.target).to(p.target, 1100).easing(TWEEN.Easing.Cubic.Out).start();
  new TWEEN.Tween(camera.position).to(p.pos, 1100).easing(TWEEN.Easing.Cubic.Out).start();

  const detail = document.getElementById('detail');
  if (detail) detail.hidden = true;
}

// UI Controls & Event Listeners
function setupUI() {
  setInterval(() => {
    const el = document.getElementById('clock');
    if (el) {
      const now = new Date();
      el.textContent = now.toTimeString().split(' ')[0];
    }
  }, 1000);

  document.getElementById('brandReset')?.addEventListener('click', resetView);
  document.getElementById('reset')?.addEventListener('click', resetView);

  const closeDetail = document.getElementById('closeDetail');
  closeDetail?.addEventListener('click', () => {
    const d = document.getElementById('detail');
    if (d) d.hidden = true;
  });

  setupSearch();

  const turntableBtn = document.getElementById('turntable');
  turntableBtn?.addEventListener('click', () => {
    state.isOrbiting = !state.isOrbiting;
    controls.autoRotate = state.isOrbiting;
    controls.autoRotateSpeed = 1.6;
    turntableBtn.classList.toggle('active', state.isOrbiting);
    turntableBtn.setAttribute('aria-pressed', state.isOrbiting ? 'true' : 'false');
  });

  const labelsBtn = document.getElementById('toggleLabels');
  labelsBtn?.addEventListener('click', () => {
    state.showLabels = !state.showLabels;
    labelsBtn.classList.toggle('active', state.showLabels);
    labelsBtn.setAttribute('aria-pressed', state.showLabels ? 'true' : 'false');
    updateLabelPositions();
  });

  document.getElementById('tour')?.addEventListener('click', startCampusTour);

  const toggleTableBtn = document.getElementById('toggleTable');
  toggleTableBtn?.addEventListener('click', () => {
    const tp = document.getElementById('tablePanel');
    if (tp) {
      tp.hidden = !tp.hidden;
      if (!tp.hidden) showDirectoryTable();
    }
  });

  document.getElementById('closeTable')?.addEventListener('click', () => {
    const tp = document.getElementById('tablePanel');
    if (tp) tp.hidden = true;
  });

  const lightToggle = document.getElementById('lightToggle');
  const lightPanel = document.getElementById('lightPanel');
  lightToggle?.addEventListener('click', () => {
    lightPanel.hidden = !lightPanel.hidden;
  });
  document.getElementById('closeLight')?.addEventListener('click', () => {
    lightPanel.hidden = true;
  });

  // Light presets
  document.querySelectorAll('[data-light]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-light');
      if (mode === 'morning') {
        setSunLight(-120, 30, 1.2, 0.45);
      } else if (mode === 'noon') {
        setSunLight(-40, 75, 1.6, 0.6);
      } else if (mode === 'evening') {
        setSunLight(130, 20, 1.3, 0.4);
      } else if (mode === 'night') {
        setDayMode(false);
      }
    });
  });

  document.getElementById('fullscreenTop')?.addEventListener('click', toggleFullscreen);
  document.getElementById('toggleUI')?.addEventListener('click', toggleFullscreen);

  setupMapModal();
}

function setSunLight(azDeg, elDeg, power, amb) {
  setDayMode(true);
  const azRad = THREE.MathUtils.degToRad(azDeg);
  const elRad = THREE.MathUtils.degToRad(elDeg);
  const dist = 300;
  sunLight.position.set(
    dist * Math.cos(elRad) * Math.sin(azRad),
    dist * Math.sin(elRad),
    dist * Math.cos(elRad) * Math.cos(azRad)
  );
  sunLight.intensity = power;
  ambientLight.intensity = amb;
}

function setDayMode(isDay) {
  state.dayMode = isDay;
  if (isDay) {
    scene.background.setHex(0xdce7f2);
    ambientLight.color.setHex(0xfff7ed);
    ambientLight.intensity = 0.72;
    sunLight.intensity = 1.35;
    emissiveMaterials.forEach(m => { m.emissiveIntensity = 0.05; });
    toggleAuditorium80NightLights(false);
  } else {
    scene.background.setHex(0x0a111c); // Deep twilight navy sky
    ambientLight.color.setHex(0x1e293b);
    ambientLight.intensity = 0.28;
    sunLight.intensity = 0.12; // Gentle moonlight
    emissiveMaterials.forEach(m => { m.emissiveIntensity = 2.4; }); // Radiant golden interior glow
    toggleAuditorium80NightLights(true);
  }
}

function toggleAuditorium80NightLights(isNight) {
  buildingsGroup.traverse(child => {
    if (child.name === 'auditorium80NightLights') {
      child.visible = isNight;
    }
    if (child.userData && child.userData.waterPool) {
      child.material.color.setHex(isNight ? 0x050d18 : 0x0284c7);
      child.material.roughness = isNight ? 0.02 : 0.06;
    }
  });
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function setupSearch() {
  const inp = document.getElementById('search');
  if (!inp) return;

  const res = document.createElement('div');
  res.id = 'searchResults';
  res.className = 'glass';
  res.style.cssText = 'position: absolute; top: 60px; left: 50%; transform: translateX(-50%); width: 340px; max-height: 280px; overflow-y: auto; border-radius: 10px; z-index: 100; display: none;';
  document.body.appendChild(res);

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { res.style.display = 'none'; return; }

    const matches = HOSPITAL_BUILDINGS.filter(b =>
      b.num.toLowerCase().includes(q) ||
      b.name.toLowerCase().includes(q) ||
      (b.sub && b.sub.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      res.innerHTML = '<div style="padding: 10px; font-size: 12px; color: var(--muted);">ไม่พบอาคารที่ตรงกับ "' + q + '"</div>';
      res.style.display = 'block';
      return;
    }

    res.innerHTML = matches.slice(0, 10).map(b =>
      '<div class="search-item" data-id="' + b.id + '" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid rgba(0,0,0,0.05); font-size: 13px;">' +
        '<strong>' + b.num + '</strong> · ' + b.name +
        '<div style="font-size: 11px; color: var(--muted);">' + b.category + '</div>' +
      '</div>'
    ).join('');
    res.style.display = 'block';

    res.querySelectorAll('.search-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        selectBuilding(id, true);
        res.style.display = 'none';
        inp.value = '';
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!inp.contains(e.target) && !res.contains(e.target)) {
      res.style.display = 'none';
    }
  });
}

function setupMapModal() {
  const modal = document.getElementById('modal');
  const mapImg = document.getElementById('modalMapImg');
  const modalTitle = document.getElementById('modalTitle');
  const btnFloor = document.getElementById('btnModalFloor');
  const btnMap2 = document.getElementById('btnModalMap2');
  const btnMap1 = document.getElementById('btnModalMap1');

  function switchMap(type) {
    if (!mapImg || !modalTitle) return;
    if (type === 'floor') {
      mapImg.src = 'Artboard-6.png';
      modalTitle.textContent = '★ แผนผัง 3 มิติ 57 อาคาร · มรภ.วไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ (Artboard-6.png)';
      if (btnFloor) { btnFloor.style.background = 'var(--accent)'; btnFloor.style.color = '#ffffff'; }
      if (btnMap2) { btnMap2.style.background = 'rgba(0,0,0,0.06)'; btnMap2.style.color = 'inherit'; }
      if (btnMap1) { btnMap1.style.background = 'rgba(0,0,0,0.06)'; btnMap1.style.color = 'inherit'; }
    } else if (type === 'maps2') {
      mapImg.src = 'MapVRU-2016.jpg';
      modalTitle.textContent = 'แผนผังอาคาร 2 มิติ · มรภ.วไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ (MapVRU-2016.jpg)';
      if (btnFloor) { btnFloor.style.background = 'rgba(0,0,0,0.06)'; btnFloor.style.color = 'inherit'; }
      if (btnMap2) { btnMap2.style.background = 'var(--accent)'; btnMap2.style.color = '#ffffff'; }
      if (btnMap1) { btnMap1.style.background = 'rgba(0,0,0,0.06)'; btnMap1.style.color = 'inherit'; }
    } else {
      mapImg.src = 'img/vru-drone-map-4k.jpg';
      modalTitle.textContent = 'ภาพถ่ายโดรน / ดาวเทียม 4K ปัจจุบัน · มรภ.วไลยอลงกรณ์ฯ จ.ปทุมธานี';
      if (btnFloor) { btnFloor.style.background = 'rgba(0,0,0,0.06)'; btnFloor.style.color = 'inherit'; }
      if (btnMap2) { btnMap2.style.background = 'rgba(0,0,0,0.06)'; btnMap2.style.color = 'inherit'; }
      if (btnMap1) { btnMap1.style.background = 'var(--accent)'; btnMap1.style.color = '#ffffff'; }
    }
  }

  btnFloor?.addEventListener('click', () => switchMap('floor'));
  btnMap2?.addEventListener('click', () => switchMap('maps2'));
  btnMap1?.addEventListener('click', () => switchMap('maps'));
  document.getElementById('map')?.addEventListener('click', () => { if (modal) modal.hidden = false; });
  document.getElementById('closeModal')?.addEventListener('click', () => { if (modal) modal.hidden = true; });
}

function showDirectoryTable() {
  const tp = document.getElementById('tablePanel');
  const thead = document.getElementById('tableHead');
  const tbody = document.getElementById('tableBody');
  if (!tp || !tbody) return;

  if (thead) {
    thead.innerHTML = '<tr>' +
      '<th style="padding: 8px 12px; text-align: left;">เลข</th>' +
      '<th style="padding: 8px 12px; text-align: left;">ชื่ออาคาร / หน่วยงาน</th>' +
      '<th style="padding: 8px 12px; text-align: left;">หมวดหมู่</th>' +
      '<th style="padding: 8px 12px; text-align: left;">สถานะ</th>' +
    '</tr>';
  }

  tbody.innerHTML = HOSPITAL_BUILDINGS.map(b =>
    '<tr style="cursor: pointer; border-bottom: 1px solid rgba(0,0,0,0.05);" data-id="' + b.id + '">' +
      '<td style="padding: 8px 12px; font-weight: 700; color: var(--accent);">' + b.num + '</td>' +
      '<td style="padding: 8px 12px; font-weight: 600;">' + b.name + '</td>' +
      '<td style="padding: 8px 12px; color: var(--muted);">' + b.category + '</td>' +
      '<td style="padding: 8px 12px;"><span class="badge" style="background: rgba(4,120,87,0.1); color: #047857; padding: 2px 8px; border-radius: 4px; font-size: 11px;">' + b.status + '</span></td>' +
    '</tr>'
  ).join('');

  tbody.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.getAttribute('data-id');
      tp.hidden = true;
      selectBuilding(id, true);
    });
  });

  tp.hidden = false;
}

let tourIndex = 0;
function startCampusTour() {
  const tourStops = ['bld-8', 'bld-1', 'bld-2', 'bld-3', 'bld-22', 'bld-36', 'bld-43', 'bld-57'];
  tourIndex = 0;

  function nextStop() {
    if (tourIndex >= tourStops.length) {
      resetView();
      return;
    }
    const bldId = tourStops[tourIndex++];
    selectBuilding(bldId, true);
    setTimeout(nextStop, 3500);
  }

  nextStop();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  updateLabelPositions();
}

function onCanvasClick(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(buildingsGroup.children, true);
  if (intersects.length > 0) {
    let top = intersects[0].object;
    while (top.parent && top.parent !== buildingsGroup) {
      top = top.parent;
    }
    if (top.userData && top.userData.id) {
      selectBuilding(top.userData.id, true);
    }
  } else {
    const hits = raycaster.intersectObjects(groundGroup.children, true);
    if (hits.length > 0) {
      resetView();
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();
  updateLabelPositions();
  renderer.render(scene, camera);
}

window.addEventListener('DOMContentLoaded', () => {
  initProceduralTextures();
  initScene();
  animate();

  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => {
      loading.style.opacity = '0';
      setTimeout(() => { loading.style.display = 'none'; }, 400);
    }, 600);
  }
});
