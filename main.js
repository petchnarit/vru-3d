/**
 * Valaya Alongkorn Rajabhat University under the Royal Patronage (VRU) - 3D Smart Campus
 * Complete 1:1 Ground-Truth Digital Twin with Real Drone Orthophoto and Complete 3D Architectural Models
 */

// 1. Campus Buildings Inventory (100% Calibrated to Drone Orthophoto & VRU Masterplan)
const HOSPITAL_BUILDINGS = [
  {
    id: 'bld-1', num: '1', name: '1. หอประชุม 80 ปี วไลยอลงกรณ์', shortName: '1', sub: 'หอประชุมใหญ่เฉลิมพระเกียรติ 80 พรรษา อาคารแลนด์มาร์คขนาดใหญ่ด้านหน้ามหาวิทยาลัย', category: 'อาคารหอประชุมและแลนด์มาร์ค', status: 'เปิดทำการปกติ', archType: 'auditorium80', pos: { x: 153.86, y: 0, z: 14.82 }, rotY: 0, anchorHeight: 15, dimensions: { w: 30.12, h: 11.0, d: 32.89 }, roofColor: 0xf8fafc, accentColor: 0x047857,
    floors: [{ num: 3, desc: 'โถงหอประชุมใหญ่ 3,500 ที่นั่ง' }, { num: 2, desc: 'โถงต้อนรับและห้องประชุมย่อย' }, { num: 1, desc: 'ลานนิทรรศการและลานจอดรถ' }]
  },
      {
    id: 'bld-2', num: '2', name: '2. อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB)', shortName: '2',
    sub: 'สำนักงานอธิการบดี, ห้องประชุมสภามหาวิทยาลัย, สำนักส่งเสริมวิชาการและงานทะเบียน',
    category: 'อาคารบริหารและสำนักงานกลาง', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'spb100', pos: { x: 122.84, y: 0, z: 14.41 }, rotY: 0, anchorHeight: 18,
    dimensions: { w: 22.5, h: 16.0, d: 14.0 }, roofColor: 0x94a3b8, accentColor: 0x047857,
    floors: [
      { num: 6, desc: 'สำนักงานอธิการบดี' },
      { num: 5, desc: 'กองนโยบายและแผน' },
      { num: 4, desc: 'ศูนย์เทคโนโลยีดิจิทัล' },
      { num: 3, desc: 'กองกลาง' },
      { num: 2, desc: 'กองคลัง' },
      { num: 1, desc: 'One Stop Service' }
    ]
  },
  {
    id: 'bld-3', num: '3', name: '3. โรงแรม มรภ.วไลยอลงกรณ์', shortName: '3',
    sub: 'ศูนย์ฝึกประสบการณ์วิชาชีพ โรงแรม มรภ.วไลยอลงกรณ์ฯ มาตรฐาน 78 ห้องพัก',
    category: 'ศูนย์ฝึกวิชาชีพและบริการที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'hotel', pos: { x: 181.5, y: 0, z: -22.2 }, rotY: 0, anchorHeight: 16,
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
    floors: [{ num: 1, desc: 'สระว่ายน้ำ 50 เมตรและศูนย์ฟิตเนส' }]
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
    id: 'bld-10', num: '10', name: '10. อาคารเรียนรวมทิศใต้ (อาคาร 9 ชั้น พร้อมปีกตะวันตก 1:1 และลานจอดรถติดถนน)', shortName: '10',
    sub: 'อาคารเรียนรวม 9 ชั้น ปีกตะวันตกครอบคลุมครบ 1:1 พร้อมลานจอดรถแอสฟัลต์ติดถนนหลักทิศเหนือ',
    category: 'อาคารเรียนรวม', status: 'เปิดทำการ 08:00 - 18:00 น.',
    archType: 'bld10_9floors', pos: { x: 141.57, y: 0, z: 52.87 }, rotY: 0, anchorHeight: 31,
    dimensions: { w: 49.5, h: 28.0, d: 12.2 }, roofColor: 0xebedf0, accentColor: 0x047857,
    floors: [
      { num: 9, desc: 'ห้องปฏิบัติการและห้องวิจัย' },
      { num: 8, desc: 'ห้องเรียนรวมและห้องบรรยาย' },
      { num: 7, desc: 'ห้องเรียนและห้องสัมมนา' },
      { num: 6, desc: 'ห้องปฏิบัติการคอมพิวเตอร์' },
      { num: 5, desc: 'ห้องเรียนรวม' },
      { num: 4, desc: 'ห้องเรียนรวม' },
      { num: 3, desc: 'ห้องเรียนรวม' },
      { num: 2, desc: 'ห้องเรียนรวมและห้องพักอาจารย์' },
      { num: 1, desc: 'โถงทางเข้ากลางและลานกิจกรรม' }
    ]
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
    archType: 'stadium', pos: { x: -142.1, y: 0, z: 13.5 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 27.3, h: 4.0, d: 49.0 }, roofColor: 0xdc2626, accentColor: 0x16a34a,
    floors: [{ num: 1, desc: 'สนามฟุตบอล ลู่วิ่ง 400 เมตร และอัฒจันทร์ประธาน' }]
  }
];

const BUILDINGS_MAP = {};
HOSPITAL_BUILDINGS.forEach(b => { BUILDINGS_MAP[b.id] = b; });

// View presets
function getOverviewPreset() {
  const isPortrait = window.innerHeight > window.innerWidth;
  if (isPortrait) {
    return { pos: { x: 35, y: 220, z: 175 }, target: { x: 25, y: 0, z: 18 } };
  } else {
    return { pos: { x: 35, y: 185, z: 160 }, target: { x: 25, y: 0, z: 18 } };
  }
}

const VIEW_PRESETS = {
  front: { pos: { x: 165, y: 65, z: 45 }, target: { x: 155, y: 6, z: 15 } },
  academic: { pos: { x: 65, y: 75, z: 55 }, target: { x: 45, y: 5, z: 5 } },
  thaiLake: { pos: { x: 20, y: 50, z: 30 }, target: { x: -1, y: 3, z: 0 } },
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

// Scene setup
function initScene() {
  const canvas = document.getElementById('world');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdce7f2);

  const initPreset = getOverviewPreset();
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.5, 1200);
  camera.position.set(initPreset.pos.x, initPreset.pos.y, initPreset.pos.z);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
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
  ambientLight = new THREE.AmbientLight(0xfff7ed, 0.75);
  scene.add(ambientLight);

  hemiLight = new THREE.HemisphereLight(0xdce7f2, 0x475569, 0.45);
  scene.add(hemiLight);

  sunLight = new THREE.DirectionalLight(0xffedd5, 1.4);
  sunLight.position.set(80, 220, 140);
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

  // === Master Materials (100% Matching Real Photographic Architecture) ===
  const whiteArchMat = new THREE.MeshStandardMaterial({
    color: 0xf5f7fa,
    roughness: 0.28,
    metalness: 0.08
  });
  const darkFasciaMat = new THREE.MeshStandardMaterial({
    color: 0x1f2327,
    roughness: 0.45,
    metalness: 0.35
  });
  const emeraldGlassMat = new THREE.MeshStandardMaterial({
    color: 0x1a4a42,
    roughness: 0.04,
    metalness: 0.90,
    transparent: true,
    opacity: 0.88,
    emissive: new THREE.Color(0x1a4a42),
    emissiveIntensity: 0.15
  });
  emissiveMaterials.push(emeraldGlassMat);

  const mullionMat = new THREE.MeshStandardMaterial({
    color: 0x141619,
    roughness: 0.25,
    metalness: 0.88
  });
  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0xd9dde2,
    roughness: 0.82,
    metalness: 0.03
  });
  const lampGlowMat = new THREE.MeshStandardMaterial({
    color: 0xfff3e0,
    emissive: new THREE.Color(0xfff3e0),
    emissiveIntensity: 1.0
  });

  // Architectural Dimensions (Facing East toward +X)
  // X: West (-X) to East (+X, front facade facing road)
  // Z: North (-Z) to South (+Z, total facade span ~32.89m)
  const hallWidth = 26.0;   // West-East depth of enclosed auditorium
  const hallLength = 32.89; // North-South facade span
  const floor1H = 4.5;      // Open undercroft height (ground to 2nd floor terrace)
  const floor2H = 7.8;      // 2nd floor grand hall height
  const totalH = floor1H + floor2H; // 12.3m
  const colonnadeX = 13.5;  // Front freestanding colonnade plane (+X)
  const glassX = 10.8;      // Recessed glass curtain wall plane (2.7m behind colonnade!)

  // NO WATER PLANE / NO POND: Natural drone ground surface

  // --- 1. Ground Floor: Half Enclosed Conference Room (Rear) & Half Open Undercroft (Front) ---
  // Ground foundation slab
  const groundSlab = new THREE.Mesh(new THREE.BoxGeometry(hallWidth + 4.0, 0.6, hallLength + 2.0), concreteMat);
  groundSlab.position.set(0, 0.3, 0);
  groundSlab.receiveShadow = true;
  group.add(groundSlab);

  // 1.1 Enclosed Lower Conference Hall (ครึ่งหลังฝั่งทิศตะวันตก: ห้องประชุมชั้นล่าง)
  const confRoomW = 14.5; // Rear half width along X
  const confRoomD = hallLength * 0.92; // Along Z
  const confRoomX = -hallWidth / 2 + confRoomW / 2 + 0.5; // X: ~ -5.25
  const confRoom = new THREE.Mesh(new THREE.BoxGeometry(confRoomW, floor1H, confRoomD), whiteArchMat);
  confRoom.position.set(confRoomX, floor1H / 2 + 0.6, 0);
  confRoom.castShadow = true;
  confRoom.receiveShadow = true;
  group.add(confRoom);

  // Conference room window ribbon & doors along its front and sides
  const confWin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.4, confRoomD * 0.8), darkFasciaMat);
  confWin.position.set(confRoomX + confRoomW / 2 + 0.05, floor1H * 0.55 + 0.6, 0);
  group.add(confWin);

  // 1.2 Open Undercroft with Pilotis Columns (ครึ่งหน้าฝั่งทิศตะวันออก: โถงเสาเปิดโล่ง)
  // Grid columns supporting the 2nd floor terrace in the open front section
  for (let xi of [confRoomX + confRoomW / 2 + 1.2, confRoomX + confRoomW / 2 + 4.8, colonnadeX - 1.2]) {
    for (let zi = -hallLength / 2 + 2.2; zi <= hallLength / 2 - 2.2; zi += 4.2) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.85, floor1H, 0.85), concreteMat);
      col.position.set(xi, floor1H / 2 + 0.6, zi);
      col.castShadow = true;
      col.receiveShadow = true;
      group.add(col);
    }
  }

  // --- 2. Main Enclosed Auditorium Hall (West / Rear Massing) ---
  const rearHallWidth = 21.5;
  const rearHall = new THREE.Mesh(new THREE.BoxGeometry(rearHallWidth, floor2H, hallLength * 0.94), whiteArchMat);
  rearHall.position.set(-3.2, floor1H + 0.6 + floor2H / 2, 0);
  rearHall.castShadow = true;
  rearHall.receiveShadow = true;
  group.add(rearHall);

  const fasciaBand = new THREE.Mesh(new THREE.BoxGeometry(rearHallWidth + 0.2, 1.2, hallLength * 0.95), darkFasciaMat);
  fasciaBand.position.set(-3.2, totalH + 0.6 - 0.6, 0);
  group.add(fasciaBand);

  // --- 3. Recessed Emerald Green Curtain Wall (ผนังกระจกมรกตถอยร่น 2.7m หลังแนวเสา) ---
  const curtainW = hallLength * 0.92;
  const curtainH = floor2H - 0.5;
  const curtainGlass = new THREE.Mesh(new THREE.BoxGeometry(0.2, curtainH, curtainW), emeraldGlassMat);
  curtainGlass.position.set(glassX, floor1H + 0.6 + curtainH / 2 + 0.2, 0);
  curtainGlass.castShadow = true;
  group.add(curtainGlass);

  const numMullions = 26;
  const mullionStepZ = curtainW / numMullions;
  for (let i = 0; i <= numMullions; i++) {
    const mz = -curtainW / 2 + i * mullionStepZ;
    const mulV = new THREE.Mesh(new THREE.BoxGeometry(0.28, curtainH, 0.12), mullionMat);
    mulV.position.set(glassX + 0.08, floor1H + 0.6 + curtainH / 2 + 0.2, mz);
    group.add(mulV);
  }
  for (let ty of [floor1H + 0.6 + curtainH * 0.33, floor1H + 0.6 + curtainH * 0.67]) {
    const transom = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, curtainW), mullionMat);
    transom.position.set(glassX + 0.08, ty, 0);
    group.add(transom);
  }

  // --- 4. The 9 Freestanding Flaring Pointed Arches Colonnade (เสาซุ้มโค้งผาย 9 ซุ้มด้านหน้า) ---
  const colonnadeGroup = new THREE.Group();
  colonnadeGroup.position.set(colonnadeX, floor1H + 0.6, 0);

  const archSpan = 3.65;
  const archDepth = 1.2;
  const colBaseThick = 0.55;

  function createFlaringPillarArch(span, height) {
    const pGroup = new THREE.Group();
    const pHeight = height * 0.68;
    for (let side of [-1, 1]) {
      const pz = side * (span / 2 - colBaseThick / 2);
      const stem = new THREE.Mesh(new THREE.BoxGeometry(archDepth, pHeight, colBaseThick), whiteArchMat);
      stem.position.set(0, pHeight / 2, pz);
      stem.castShadow = true;
      pGroup.add(stem);

      const groove = new THREE.Mesh(new THREE.BoxGeometry(0.1, pHeight, 0.14), darkFasciaMat);
      groove.position.set(archDepth / 2 + 0.02, pHeight / 2, pz);
      pGroup.add(groove);

      const branchH = height - pHeight;
      const branch = new THREE.Mesh(new THREE.BoxGeometry(archDepth, branchH, colBaseThick * 0.9), whiteArchMat);
      branch.position.set(0, pHeight + branchH / 2 - 0.2, pz + side * (span * 0.18));
      branch.rotation.x = side * -0.32;
      branch.castShadow = true;
      pGroup.add(branch);
    }

    const peakCurve = new THREE.Mesh(
      new THREE.CylinderGeometry(span * 0.45, span * 0.45, archDepth, 16, 1, false, 0, Math.PI),
      whiteArchMat
    );
    peakCurve.rotation.z = Math.PI / 2;
    peakCurve.rotation.y = Math.PI / 2;
    peakCurve.position.set(0, height - 0.2, 0);
    peakCurve.castShadow = true;
    pGroup.add(peakCurve);

    const keelFin = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 4), whiteArchMat);
    keelFin.position.set(0, height + 0.45, 0);
    keelFin.rotation.y = Math.PI / 4;
    keelFin.castShadow = true;
    pGroup.add(keelFin);

    return pGroup;
  }

  for (let bay = -4; bay <= 4; bay++) {
    const isCenter = (bay === 0);
    const isCentralSpan = (Math.abs(bay) <= 2);
    const bHeight = isCenter ? (floor2H + 0.8) : isCentralSpan ? floor2H : (floor2H - 1.2);
    const arch = createFlaringPillarArch(archSpan, bHeight);
    arch.position.set(0, 0, bay * archSpan);
    colonnadeGroup.add(arch);
  }

  const portal = new THREE.Mesh(new THREE.BoxGeometry(0.9, floor2H + 1.2, 4.2), whiteArchMat);
  portal.position.set(0.4, (floor2H + 1.2) / 2, 0);
  portal.castShadow = true;
  colonnadeGroup.add(portal);

  const emblemGold = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.15, 24), new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.85,
    roughness: 0.2
  }));
  emblemGold.rotation.z = Math.PI / 2;
  emblemGold.position.set(0.9, floor2H + 0.5, 0);
  colonnadeGroup.add(emblemGold);

  group.add(colonnadeGroup);

  // --- 5. Tiered Cantilevered Modern Flat Roof with 45-Degree Inverted Chamfered Soffit ---
  const roofOverhangX = colonnadeX + 4.5;
  const centralRoofW = hallWidth + 9.5;
  const centralRoofD = 18.5;
  const centralRoofH = 1.4;
  const roofY = totalH + 0.6 + 0.7;

  const centralRoof = new THREE.Mesh(new THREE.BoxGeometry(centralRoofW, centralRoofH, centralRoofD), whiteArchMat);
  centralRoof.position.set((roofOverhangX - hallWidth / 2) / 2, roofY, 0);
  centralRoof.castShadow = true;
  group.add(centralRoof);

  const frontSoffit = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.9, centralRoofD), whiteArchMat);
  frontSoffit.position.set(roofOverhangX - 1.4, roofY - 0.9, 0);
  frontSoffit.rotation.z = -0.785;
  group.add(frontSoffit);

  for (let s of [-1, 1]) {
    const wingW = centralRoofW - 1.5;
    const wingD = 8.2;
    const wingRoof = new THREE.Mesh(new THREE.BoxGeometry(wingW, 1.0, wingD), whiteArchMat);
    wingRoof.position.set((roofOverhangX - hallWidth / 2) / 2 - 0.75, roofY - 1.2, s * (centralRoofD / 2 + wingD / 2 - 0.2));
    wingRoof.castShadow = true;
    group.add(wingRoof);
  }

  // --- 6. Front Grand Entrance Terrace Concourse (Connecting Building to Ramps) ---
  // In world coords: extends from building facade at X=13.5 out to ramp line at X=24.8
  // Along Z: spans from North ramp start (Z = -9.06) to South ramp start (Z = +7.58)
  const terraceStartX = colonnadeX; // 13.5
  const terraceEndX = 24.8;
  const terraceWidth = terraceEndX - terraceStartX; // 11.3m
  const terraceMidX = (terraceStartX + terraceEndX) / 2; // 19.15
  const terraceZ_North = -9.06;
  const terraceZ_South = 7.58;
  const terraceDepth = terraceZ_South - terraceZ_North; // 16.64m
  const terraceMidZ = (terraceZ_North + terraceZ_South) / 2; // -0.74

  const terraceConcourse = new THREE.Mesh(new THREE.BoxGeometry(terraceWidth, 0.8, terraceDepth), concreteMat);
  terraceConcourse.position.set(terraceMidX, floor1H + 0.6 + 0.4, terraceMidZ);
  terraceConcourse.castShadow = true;
  terraceConcourse.receiveShadow = true;
  group.add(terraceConcourse);

  // Front Parapet along East edge of Terrace (NO FRONT STAIRS - ขอบระเบียงทึบตรง ไม่ยื่นบันไดลงพื้น)
  const terraceParapet = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.1, terraceDepth), whiteArchMat);
  terraceParapet.position.set(terraceEndX - 0.18, floor1H + 0.6 + 0.8 + 0.55, terraceMidZ);
  terraceParapet.castShadow = true;
  group.add(terraceParapet);

  // --- 7. EXACT CALIBRATED NORTH & SOUTH ELEVATED RAMPS (ตรงตามรอยคอนกรีตจริงในภาพโดรน 100%) ---
  // 7.1 South Ramp: Runs strictly North-to-South along Z axis from Z=7.58 to Z=23.09 at X=24.8!
  const southRampX = 24.8;
  const southRampZ_Start = 7.58;
  const southRampZ_End = 23.09;
  const southRampLen = southRampZ_End - southRampZ_Start; // 15.51m
  const southRampMidZ = (southRampZ_Start + southRampZ_End) / 2; // 15.335
  const southRampW = 3.6;
  const southRampTopY = floor1H + 0.6 + 0.8; // 5.9m (level with terrace)

  const southSlope = Math.atan2(southRampTopY, southRampLen);
  const southDeckLen = Math.sqrt(southRampLen * southRampLen + southRampTopY * southRampTopY);

  const southRamp = new THREE.Mesh(new THREE.BoxGeometry(southRampW, 0.5, southDeckLen), concreteMat);
  southRamp.position.set(southRampX, southRampTopY / 2, southRampMidZ);
  southRamp.rotation.x = southSlope;
  southRamp.castShadow = true;
  southRamp.receiveShadow = true;
  group.add(southRamp);

  for (let sw of [-1, 1]) {
    const sp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.1, southDeckLen), whiteArchMat);
    sp.position.set(southRampX + sw * (southRampW / 2 - 0.15), southRampTopY / 2 + 0.55, southRampMidZ);
    sp.rotation.x = southSlope;
    sp.castShadow = true;
    group.add(sp);
  }

  // Support piers under South Ramp
  for (let f of [0.3, 0.65]) {
    const pz = southRampZ_Start + f * southRampLen;
    const curH = (1 - f) * southRampTopY;
    if (curH > 0.8) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(0.7, curH, 0.7), concreteMat);
      pier.position.set(southRampX, curH / 2, pz);
      pier.castShadow = true;
      group.add(pier);
    }
  }

  // 7.2 North Bridge / Ramp: Runs strictly South-to-North along Z axis from Z=-9.06 to Z=-22.36 at X=24.0!
  const northBridgeX = 24.0;
  const northZ_Start = -9.06;
  const northZ_End = -22.36;
  const northBridgeLen = Math.abs(northZ_End - northZ_Start); // 13.30m
  const northMidZ = (northZ_Start + northZ_End) / 2; // -15.71
  const northBridgeW = 3.2;
  const northTopY = floor1H + 0.6 + 0.8; // 5.9m (level with terrace)

  const northSlope = -Math.atan2(northTopY, northBridgeLen);
  const northDeckLen = Math.sqrt(northBridgeLen * northBridgeLen + northTopY * northTopY);

  const northBridge = new THREE.Mesh(new THREE.BoxGeometry(northBridgeW, 0.5, northDeckLen), concreteMat);
  northBridge.position.set(northBridgeX, northTopY / 2, northMidZ);
  northBridge.rotation.x = northSlope;
  northBridge.castShadow = true;
  northBridge.receiveShadow = true;
  group.add(northBridge);

  for (let nw of [-1, 1]) {
    const np = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.1, northDeckLen), whiteArchMat);
    np.position.set(northBridgeX + nw * (northBridgeW / 2 - 0.15), northTopY / 2 + 0.55, northMidZ);
    np.rotation.x = northSlope;
    np.castShadow = true;
    group.add(np);
  }

  // Support piers under North Bridge
  for (let f of [0.3, 0.65]) {
    const pz = northZ_Start - f * northBridgeLen;
    const curH = (1 - f) * northTopY;
    if (curH > 0.8) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(0.65, curH, 0.65), concreteMat);
      pier.position.set(northBridgeX, curH / 2, pz);
      pier.castShadow = true;
      group.add(pier);
    }
  }

  // --- 8. Night Illumination Engine ---
  const nightLightsGroup = new THREE.Group();
  nightLightsGroup.name = 'auditorium80Lighting';

  for (let z of [-7.2, 0, 7.2]) {
    const intLight = new THREE.PointLight(0xffa726, 2.5, 25, 1.6);
    intLight.position.set(glassX - 3.5, floor1H + floor2H * 0.55, z);
    nightLightsGroup.add(intLight);
  }

  for (let bay = -4; bay <= 4; bay += 2) {
    const uplight = new THREE.PointLight(0xfff3e0, 1.8, 14, 1.5);
    uplight.position.set(colonnadeX + 0.5, floor1H + 1.2, bay * archSpan);
    nightLightsGroup.add(uplight);
  }

  const pylonSpot = new THREE.SpotLight(0xffe082, 3.5, 20, Math.PI / 4, 0.5, 1.5);
  pylonSpot.position.set(colonnadeX + 6.0, floor1H + 1.5, 0);
  pylonSpot.target.position.set(colonnadeX, floor1H + floor2H * 0.8, 0);
  nightLightsGroup.add(pylonSpot);
  nightLightsGroup.add(pylonSpot.target);

  group.add(nightLightsGroup);

  return group;
}

// 3D Building Geometries (All others wiped - building anew one by one)
// === Building 2 (อาคาร 100 ปี สมเด็จพระศรีนครินทร์ - SPB) - 9-Story Architectural Model ===
// === Building 10 (อาคารเรียนรวมทิศใต้ - อาคาร 9 ชั้น ทรงระเบียงโค้ง) - Exact 1:1 Match ===
// === Building 10 (อาคารเรียนรวมทิศใต้ 9 ชั้น - West Wing 1:1 + North Parking Lot) ===
// === Building 10 (อาคารเรียนรวมทิศใต้ 9 ชั้น - สัดส่วนปีกตะวันตก 1:1 + ลานจอดรถติดถนนทิศเหนือ) ===
// === Building 10 (อาคารเรียนรวมทิศใต้ 9 ชั้น - สัดส่วนปีกตะวันตก 1:1 ครบวงจร + ลานจอดรถติดถนนทิศเหนือ) ===
function createBuilding10Mesh() {
  const group = new THREE.Group();

  // Materials
  const whiteWallMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.35,
    metalness: 0.08
  });
  const darkTrimMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.45,
    metalness: 0.4
  });
  const concreteMat = new THREE.MeshStandardMaterial({
    color: 0xd9dde2,
    roughness: 0.8,
    metalness: 0.03
  });
  const greenDeckMat = new THREE.MeshStandardMaterial({
    color: 0x2e7d32, // Waterproof green deck coating on West Wing roof
    roughness: 0.6,
    metalness: 0.05
  });
  const shedRoofMat = new THREE.MeshStandardMaterial({
    color: 0xebedf0,
    roughness: 0.35,
    metalness: 0.15
  });
  const windowGlassMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    roughness: 0.08,
    metalness: 0.85,
    transparent: true,
    opacity: 0.85,
    emissive: new THREE.Color(0xffbf69),
    emissiveIntensity: 0.1
  });
  emissiveMaterials.push(windowGlassMat);

  const asphaltMat = new THREE.MeshStandardMaterial({
    color: 0x222a36, // Dark rich asphalt for parking lot
    roughness: 0.92,
    metalness: 0.02
  });
  const curbMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.75,
    metalness: 0.05
  });
  const whiteLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const hedgeMat = new THREE.MeshStandardMaterial({
    color: 0x15803d,
    roughness: 0.9,
    metalness: 0.0
  });
  const beaconMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

  const numFloors = 9;
  const floorHeight = 3.0; // 9 * 3.0m = 27.0m
  const podiumH = 0.8;
  const totalHeight = podiumH + numFloors * floorHeight; // 27.8m

  // Entire complex spans 49.5m along X (x: -24.75 to +24.75)
  // Depth is 12.0m along Z (z: -6.0 to +6.0)
  const totalSpanX = 49.5;
  const totalDepthZ = 12.0;

  // =========================================================================
  // 1. BASE FOUNDATION PODIUM (Spanning 49.5m East-West)
  // =========================================================================
  const podium = new THREE.Mesh(new THREE.BoxGeometry(totalSpanX + 0.6, podiumH, totalDepthZ + 0.6), concreteMat);
  podium.position.set(0, podiumH / 2, 0);
  podium.receiveShadow = true;
  group.add(podium);

  // =========================================================================
  // 2. CENTRAL 9-STORY ATRIUM & NORTH ENTRANCE PORCH (X in [-3.0 .. +3.0])
  // =========================================================================
  const atriumW = 6.0;
  const atriumD = totalDepthZ * 0.75;
  const atriumTower = new THREE.Mesh(new THREE.BoxGeometry(atriumW, numFloors * floorHeight, atriumD), whiteWallMat);
  atriumTower.position.set(0, podiumH + (numFloors * floorHeight) / 2, 0);
  atriumTower.castShadow = true;
  atriumTower.receiveShadow = true;
  group.add(atriumTower);

  // North Curved Entrance & Drop-off Canopy (Facing North -Z at Z = -atriumD/2)
  const porchRadius = 3.2;
  const porchH = 4.5;
  const porchGeo = new THREE.CylinderGeometry(porchRadius, porchRadius, porchH, 24, 1, false, -Math.PI / 2, Math.PI);
  const porch = new THREE.Mesh(porchGeo, whiteWallMat);
  porch.position.set(0, podiumH + porchH / 2, -atriumD / 2);
  porch.castShadow = true;
  group.add(porch);

  // Glass entrance doors on curved porch
  const porchGlassGeo = new THREE.CylinderGeometry(porchRadius + 0.05, porchRadius + 0.05, 3.2, 20, 1, false, -Math.PI * 0.45, Math.PI * 0.9);
  const porchGlass = new THREE.Mesh(porchGlassGeo, windowGlassMat);
  porchGlass.position.set(0, podiumH + 1.6, -atriumD / 2);
  group.add(porchGlass);

  // Stepped Barrel Vaults / Curved Skylight on Atrium Roof
  const vaultRadius = 2.6;
  const vaultL = atriumD * 0.85;
  const vaultGeo = new THREE.CylinderGeometry(vaultRadius, vaultRadius, vaultL, 16, 1, false, 0, Math.PI);
  const vault = new THREE.Mesh(vaultGeo, windowGlassMat);
  vault.rotation.x = Math.PI / 2;
  vault.position.set(0, totalHeight + 0.6, 0);
  vault.castShadow = true;
  group.add(vault);

  // Central Elevator Penthouse & Aviation Beacon
  const pentH = 3.4;
  const penthouse = new THREE.Mesh(new THREE.BoxGeometry(4.2, pentH, 3.8), whiteWallMat);
  penthouse.position.set(0, totalHeight + pentH / 2 + 0.4, 2.0);
  penthouse.castShadow = true;
  group.add(penthouse);

  const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.6, 8), beaconMat);
  beacon.position.set(0, totalHeight + pentH + 0.7, 2.0);
  group.add(beacon);

  // =========================================================================
  // 3. WEST WING (1:1 FULL EXTENT: X in [-24.75 .. -3.0], Width = 21.75m)
  // =========================================================================
  // 3A. Mid-West 9-Story Main Wing (X in [-14.0 .. -3.0], Width = 11.0m)
  const midWestW = 11.0;
  const midWestCenterX = -3.0 - midWestW / 2; // -8.5
  const midWestD = 8.5;

  const midWestTower = new THREE.Mesh(new THREE.BoxGeometry(midWestW, numFloors * floorHeight, midWestD), whiteWallMat);
  midWestTower.position.set(midWestCenterX, podiumH + (numFloors * floorHeight) / 2, 0);
  midWestTower.castShadow = true;
  midWestTower.receiveShadow = true;
  group.add(midWestTower);

  // Ribbon windows for Mid-West Wing
  for (let f = 1; f <= numFloors; f++) {
    const floorY = podiumH + (f - 1) * floorHeight;
    const winY = floorY + floorHeight * 0.55;

    const winN = new THREE.Mesh(new THREE.BoxGeometry(midWestW * 0.9, 1.35, 0.2), windowGlassMat);
    winN.position.set(midWestCenterX, winY, -midWestD / 2 - 0.05);
    group.add(winN);

    const winS = new THREE.Mesh(new THREE.BoxGeometry(midWestW * 0.9, 1.35, 0.2), windowGlassMat);
    winS.position.set(midWestCenterX, winY, midWestD / 2 + 0.05);
    group.add(winS);

    const spandrel = new THREE.Mesh(new THREE.BoxGeometry(midWestW + 0.2, 0.35, midWestD + 0.2), darkTrimMat);
    spandrel.position.set(midWestCenterX, floorY, 0);
    group.add(spandrel);
  }

  // Waterproof Green Roof Deck on Mid-West Roof
  const midWestGreenDeck = new THREE.Mesh(new THREE.BoxGeometry(midWestW - 0.4, 0.15, midWestD - 0.4), greenDeckMat);
  midWestGreenDeck.position.set(midWestCenterX, totalHeight + 0.08, 0);
  group.add(midWestGreenDeck);

  const midWestParapet = new THREE.Mesh(new THREE.BoxGeometry(midWestW, 0.8, midWestD), darkTrimMat);
  midWestParapet.position.set(midWestCenterX, totalHeight + 0.4, 0);
  group.add(midWestParapet);

  // Mid-wing Small Gabled Roof Pavilion on Deck
  const midGable = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.4, 3.2), whiteWallMat);
  midGable.position.set(midWestCenterX, totalHeight + 0.7, 0.5);
  midGable.castShadow = true;
  group.add(midGable);

  // 3B. Far-West Laboratory & Engineering Complex (X in [-24.75 .. -14.0], Width = 10.75m)
  const farWestW = 10.75;
  const farWestCenterX = -14.0 - farWestW / 2; // -19.375
  const farWestH = 14.5; // ~4-5 stories
  const farWestD = totalDepthZ * 0.85;

  const farWestTower = new THREE.Mesh(new THREE.BoxGeometry(farWestW, farWestH, farWestD), whiteWallMat);
  farWestTower.position.set(farWestCenterX, podiumH + farWestH / 2, 0);
  farWestTower.castShadow = true;
  farWestTower.receiveShadow = true;
  group.add(farWestTower);

  // Far-West Gabled White Roof Pavilion on North half
  const farGableW = farWestW * 0.85;
  const farGableD = farWestD * 0.45;
  const farGable = new THREE.Mesh(new THREE.BoxGeometry(farGableW, 1.2, farGableD), shedRoofMat);
  farGable.position.set(farWestCenterX, podiumH + farWestH + 0.6, -farWestD * 0.22);
  farGable.castShadow = true;
  group.add(farGable);

  // HVAC Chillers and mechanical duct units on Far-West flat deck
  for (let ox of [-2.2, 0, 2.2]) {
    const chiller = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 2.0), darkTrimMat);
    chiller.position.set(farWestCenterX + ox, podiumH + farWestH + 0.6, farWestD * 0.24);
    chiller.castShadow = true;
    group.add(chiller);
  }

  // Far-West Diagonal Structural Brise-Soleil Fins (at X = -24.75)
  const farWestX = -totalSpanX / 2; // -24.75
  for (let z = -farWestD / 2 + 1.0; z <= farWestD / 2 - 1.0; z += 1.8) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.8, farWestH * 0.9, 0.15), whiteWallMat);
    fin.position.set(farWestX + 0.4, podiumH + farWestH / 2, z);
    fin.rotation.y = 0.45;
    fin.castShadow = true;
    group.add(fin);
  }

  // =========================================================================
  // 4. EAST WING (X in [+3.0 .. +24.75], Width = 21.75m)
  // =========================================================================
  const eastW = 21.75;
  const eastCenterX = 3.0 + eastW / 2; // +13.875

  // 4A. North 9-Story Classroom Tower
  const eastNorthD = 5.8;
  const eastNorthTower = new THREE.Mesh(new THREE.BoxGeometry(eastW, numFloors * floorHeight, eastNorthD), whiteWallMat);
  eastNorthTower.position.set(eastCenterX, podiumH + (numFloors * floorHeight) / 2, -totalDepthZ / 2 + eastNorthD / 2);
  eastNorthTower.castShadow = true;
  eastNorthTower.receiveShadow = true;
  group.add(eastNorthTower);

  for (let f = 1; f <= numFloors; f++) {
    const floorY = podiumH + (f - 1) * floorHeight;
    const winY = floorY + floorHeight * 0.55;

    const winN = new THREE.Mesh(new THREE.BoxGeometry(eastW * 0.92, 1.35, 0.2), windowGlassMat);
    winN.position.set(eastCenterX, winY, -totalDepthZ / 2 - 0.05);
    group.add(winN);

    const spandrel = new THREE.Mesh(new THREE.BoxGeometry(eastW + 0.2, 0.35, eastNorthD + 0.2), darkTrimMat);
    spandrel.position.set(eastCenterX, floorY, -totalDepthZ / 2 + eastNorthD / 2);
    group.add(spandrel);
  }

  // 4B. South Grand Lecture Auditorium Hall (Large Pitched White Metal Roof)
  const audW = eastW * 0.88;
  const audD = totalDepthZ * 0.5;
  const audH = 14.5;
  const audCenterZ = totalDepthZ / 2 - audD / 2;

  const audBlock = new THREE.Mesh(new THREE.BoxGeometry(audW, audH, audD), whiteWallMat);
  audBlock.position.set(eastCenterX - 1.0, podiumH + audH / 2, audCenterZ);
  audBlock.castShadow = true;
  audBlock.receiveShadow = true;
  group.add(audBlock);

  const audRoof = new THREE.Mesh(new THREE.BoxGeometry(audW + 0.6, 0.6, audD + 0.6), shedRoofMat);
  audRoof.position.set(eastCenterX - 1.0, podiumH + audH + 0.8, audCenterZ);
  audRoof.rotation.x = -0.16; // sloped down to south
  audRoof.castShadow = true;
  group.add(audRoof);

  // Far-East Diagonal Structural Fins (at X = +24.75)
  const farEastX = totalSpanX / 2; // +24.75
  for (let z = -totalDepthZ / 2 + 1.0; z <= totalDepthZ / 2 - 1.0; z += 1.8) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.8, numFloors * floorHeight * 0.9, 0.15), whiteWallMat);
    fin.position.set(farEastX - 0.4, podiumH + (numFloors * floorHeight) / 2, z);
    fin.rotation.y = -0.45;
    fin.castShadow = true;
    group.add(fin);
  }

  // =========================================================================
  // 5. NORTH PARKING LOT (ติดถนนทางทิศเหนือ พอดี 0-GAP FLUSH)
  // =========================================================================
  // Extending from Z = -11.82 (touching the main North Road flush) down to Z = -6.84
  const parkW = totalSpanX; // 49.5m wide spanning the whole front
  const parkD = 4.98;
  const parkX = 0;
  const parkZ = -9.33; // Centered at -9.33, extends from -11.82 (road) to -6.84

  // Full Asphalt Paved Parking Surface
  const parkGround = new THREE.Mesh(new THREE.BoxGeometry(parkW, 0.12, parkD), asphaltMat);
  parkGround.position.set(parkX, 0.06, parkZ);
  parkGround.receiveShadow = true;
  group.add(parkGround);

  // Concrete Curbs along the perimeter (North, South, West, East)
  const curbN = new THREE.Mesh(new THREE.BoxGeometry(parkW + 0.4, 0.22, 0.22), curbMat);
  curbN.position.set(parkX, 0.11, parkZ - parkD / 2);
  group.add(curbN);

  const curbS = new THREE.Mesh(new THREE.BoxGeometry(parkW + 0.4, 0.22, 0.22), curbMat);
  curbS.position.set(parkX, 0.11, parkZ + parkD / 2);
  group.add(curbS);

  const curbW = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, parkD), curbMat);
  curbW.position.set(parkX - parkW / 2, 0.11, parkZ);
  group.add(curbW);

  const curbE = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, parkD), curbMat);
  curbE.position.set(parkX + parkW / 2, 0.11, parkZ);
  group.add(curbE);

  // White Painted Parking Stall Dividing Stripes (Every 2.4m along width: 20 stalls)
  const stallStep = 2.4;
  for (let x = -parkW / 2 + 1.2; x <= parkW / 2 - 1.2; x += stallStep) {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, parkD * 0.88), whiteLineMat);
    line.position.set(parkX + x, 0.13, parkZ);
    group.add(line);
  }

  // Access Entrance / Drop-off Driveway connecting Parking directly to Main Entrance
  const driveW = 6.0;
  const driveD = Math.abs(parkZ - (-atriumD / 2));
  const driveway = new THREE.Mesh(new THREE.BoxGeometry(driveW, 0.1, driveD + 0.4), asphaltMat);
  driveway.position.set(0, 0.05, (parkZ + (-atriumD / 2)) / 2);
  driveway.receiveShadow = true;
  group.add(driveway);

  // Low decorative hedge shrubs separating parking lot from entrance concourse
  const hedgeW = parkW * 0.44;
  for (let side of [-1, 1]) {
    const hedge = new THREE.Mesh(new THREE.BoxGeometry(hedgeW, 0.55, 0.45), hedgeMat);
    hedge.position.set(parkX + side * (parkW * 0.27), 0.28, parkZ + parkD / 2 + 0.35);
    group.add(hedge);
  }

  return group;
}


function buildBuildings() {
  HOSPITAL_BUILDINGS.forEach(bld => {
    const bGroup = new THREE.Group();
    bGroup.position.set(bld.pos.x, 0, bld.pos.z);
    bGroup.rotation.y = bld.rotY || 0;
    bGroup.userData = bld;

    if (bld.id === 'bld-1') {
      const mesh = createAuditorium80Mesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-10') {
      // Building 10 (อาคารเรียนรวมทิศใต้ 9 ชั้น - ทรงระเบียงโค้ง) - Correct spot!
      const mesh = createBuilding10Mesh();
      bGroup.add(mesh);
    } else {
      // Invisible flat hitbox on ground for raycasting/clicking (no 3D mesh rendered yet)
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
    const anchorY = (data.id === 'bld-1' ? 15.0 : data.id === 'bld-10' ? 31.0 : 1.2);
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

  // Collapse / Expand Toolbar Button
  const collapseToolbarBtn = document.getElementById('collapseToolbar');
  const toolbar = document.querySelector('.toolbar');
  collapseToolbarBtn?.addEventListener('click', () => {
    if (!toolbar) return;
    const isCollapsed = toolbar.classList.toggle('collapsed');
    collapseToolbarBtn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
    collapseToolbarBtn.innerHTML = isCollapsed ? '› เมนู' : '‹';
    collapseToolbarBtn.title = isCollapsed ? 'ขยายแถบเมนูนำทาง' : 'ย่อแถบเมนูนำทาง';
  });

  // Toggle Walkways
  const toggleWalkwaysBtn = document.getElementById('toggleWalkways');
  toggleWalkwaysBtn?.addEventListener('click', () => {
    state.showWalkways = state.showWalkways === undefined ? false : !state.showWalkways;
    toggleWalkwaysBtn.classList.toggle('active', state.showWalkways);
    toggleWalkwaysBtn.setAttribute('aria-pressed', state.showWalkways ? 'true' : 'false');
  });

  document.getElementById('fullscreenTop')?.addEventListener('click', toggleFullscreen);
  document.getElementById('toggleUI')?.addEventListener('click', toggleFullscreen);

  // Setup fullscreen change listeners to keep button labels and titles in sync
  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(ev => {
    document.addEventListener(ev, updateFullscreenButtons);
  });

  // Keyboard shortcuts: F for Fullscreen/Minimize, H for Collapse Toolbar
  window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'h' || e.key === 'H') {
      collapseToolbarBtn?.click();
    } else if (e.key === 'Escape') {
      if (document.body.classList.contains('fullscreen-mode')) {
        document.body.classList.remove('fullscreen-mode');
        updateFullscreenButtons();
      }
    }
  });

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
    ambientLight.intensity = 0.75;
    sunLight.intensity = 1.4;
    emissiveMaterials.forEach(m => { m.emissiveIntensity = 0.0; });
  } else {
    scene.background.setHex(0x0a111c);
    ambientLight.color.setHex(0x1e293b);
    ambientLight.intensity = 0.35;
    sunLight.intensity = 0.2;
    emissiveMaterials.forEach(m => { m.emissiveIntensity = 0.85; });
  }
}

function isFullscreenActive() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement ||
    document.body.classList.contains('fullscreen-mode')
  );
}

function updateFullscreenButtons() {
  const isFs = isFullscreenActive();
  const topText = document.getElementById('fullscreenTopText');
  const dockBtn = document.getElementById('toggleUI');
  if (topText) topText.textContent = isFs ? 'ย่อจอ' : 'เต็มจอ';
  if (dockBtn) {
    dockBtn.textContent = isFs ? 'ย่อจอ' : 'เต็มจอ';
    dockBtn.title = isFs ? 'ย่อหน้าต่างกลับสู่ขนาดปกติ (กดปุ่ม F หรือ Esc)' : 'เปิดโหมดเต็มจอ (กดปุ่ม F)';
    dockBtn.classList.toggle('active', isFs);
  }
}

function toggleFullscreen() {
  const isFs = isFullscreenActive();
  if (!isFs) {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (rfs) {
      rfs.call(el).catch(() => {
        // Fallback for mobile devices / iOS Safari where requestFullscreen is not allowed
        document.body.classList.toggle('fullscreen-mode');
        updateFullscreenButtons();
      });
    } else {
      document.body.classList.toggle('fullscreen-mode');
      updateFullscreenButtons();
    }
  } else {
    const efs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
    if (efs && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
      efs.call(document).catch(() => {});
    }
    document.body.classList.remove('fullscreen-mode');
  }
  setTimeout(updateFullscreenButtons, 80);
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
  const tourStops = ['bld-8', 'bld-1', 'bld-2', 'bld-3', 'bld-31', 'bld-36', 'bld-43', 'bld-57'];
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
