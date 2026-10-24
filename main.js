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
    archType: 'box', pos: { x: -135.0, y: 0, z: 45.0 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 18.0, h: 6.5, d: 10.0 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการเพาะเลี้ยงเนื้อเยื่อ' }, { num: 1, desc: 'ศูนย์เรียนรู้พันธุ์พืช' }]
  },
  {
    id: 'bld-55', num: '55', name: '55. Valaya Hub & Resort', shortName: '55',
    sub: 'Valaya Hub ศูนย์นวัตกรรมการเรียนรู้และที่พักรีสอร์ทเพื่อการศึกษา',
    category: 'ศูนย์การเรียนรู้และที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -155.0, y: 0, z: 45.0 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 18.0, h: 6.0, d: 10.0 }, roofColor: 0x92400e, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ห้องพักรับรอง' }, { num: 1, desc: 'Co-Working Space & Cafe' }]
  },
  {
    id: 'bld-57', num: '57', name: '57. สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ', shortName: '57',
    sub: 'สนามฟุตบอลหญ้าจริง ลู่วิ่งสังเคราะห์มาตรฐาน 400 เมตร 8 ลู่ และอัฒจันทร์ประธาน',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 06:00 - 21:00 น.',
    archType: 'stadium', pos: { x: -135.78, y: 0, z: 13.34 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 39.3, h: 4.0, d: 48.1 }, roofColor: 0xc2410c, accentColor: 0x16a34a,
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



// =========================================================================
// GISTDA GeoTwin LOD1 3D Smart Campus Engine
// Procedural LOD1 Building Massing, Highway & Campus Roads, Parking,
// Hydrology (Canals & Ponds), Paddy Fields, Thai House, Monument, Stadium
// =========================================================================

// Shared GISTDA Materials
const gistdaWallMat = new THREE.MeshStandardMaterial({
  color: 0xf8fafc,
  roughness: 0.35,
  metalness: 0.08
});
const gistdaTrimMat = new THREE.MeshStandardMaterial({
  color: 0x1e293b,
  roughness: 0.45,
  metalness: 0.4
});
const gistdaConcreteMat = new THREE.MeshStandardMaterial({
  color: 0xd9dde2,
  roughness: 0.8,
  metalness: 0.03
});
const gistdaGlassMat = new THREE.MeshStandardMaterial({
  color: 0x0284c7,
  roughness: 0.08,
  metalness: 0.85,
  transparent: true,
  opacity: 0.85,
  emissive: new THREE.Color(0xffbf69),
  emissiveIntensity: 0.1
});
emissiveMaterials.push(gistdaGlassMat);

const gistdaWaterMat = new THREE.MeshStandardMaterial({
  color: 0x0284c7,
  roughness: 0.1,
  metalness: 0.9,
  transparent: true,
  opacity: 0.82
});
const gistdaAsphaltMat = new THREE.MeshStandardMaterial({
  color: 0x1e293b,
  roughness: 0.92,
  metalness: 0.02
});
const gistdaHighwayMat = new THREE.MeshStandardMaterial({
  color: 0x0f172a,
  roughness: 0.95,
  metalness: 0.01
});
const gistdaCurbMat = new THREE.MeshStandardMaterial({
  color: 0xe2e8f0,
  roughness: 0.75,
  metalness: 0.05
});
const gistdaWhiteLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const gistdaYellowLineMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
const gistdaTrackMat = new THREE.MeshStandardMaterial({
  color: 0xd946ef, // Synthetic athletic track
  roughness: 0.8,
  metalness: 0.02
});
const gistdaGrassPitchMat = new THREE.MeshStandardMaterial({
  color: 0x15803d,
  roughness: 0.9,
  metalness: 0.0
});
const gistdaPaddyMat = new THREE.MeshStandardMaterial({
  color: 0x65a30d, // Rice paddy green
  roughness: 0.95,
  metalness: 0.0
});
const gistdaEarthMat = new THREE.MeshStandardMaterial({
  color: 0x78350f, // Earth bunds / คันนาดิน
  roughness: 0.95,
  metalness: 0.0
});
const gistdaThaiWoodMat = new THREE.MeshStandardMaterial({
  color: 0x78350f, // Teak wood
  roughness: 0.7,
  metalness: 0.1
});
const gistdaThaiRoofMat = new THREE.MeshStandardMaterial({
  color: 0xb45309, // Orange-brown terracotta Thai tile
  roughness: 0.4,
  metalness: 0.15
});

// --- Standard GISTDA GeoTwin LOD1 Building Generator ---
function createGistdaLOD1Mesh(bld) {
  const group = new THREE.Group();
  const w = bld.dimensions.w;
  const h = bld.dimensions.h;
  const d = bld.dimensions.d;
  const numFloors = Math.max(1, Math.round(h / 3.0));
  const floorHeight = h / numFloors;
  const podiumH = 0.5;

  // Base Concrete Podium
  const podium = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, podiumH, d + 0.6), gistdaConcreteMat);
  podium.position.set(0, podiumH / 2, 0);
  podium.receiveShadow = true;
  group.add(podium);

  // Main LOD1 Tower Mass
  const tower = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), gistdaWallMat);
  tower.position.set(0, podiumH + h / 2, 0);
  tower.castShadow = true;
  tower.receiveShadow = true;
  group.add(tower);

  // Ribbon Windows & Floor Bands
  for (let f = 1; f <= numFloors; f++) {
    const floorY = podiumH + (f - 1) * floorHeight;
    const winY = floorY + floorHeight * 0.55;

    // North & South Windows
    const winN = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, floorHeight * 0.45, 0.15), gistdaGlassMat);
    winN.position.set(0, winY, -d / 2 - 0.03);
    group.add(winN);

    const winS = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, floorHeight * 0.45, 0.15), gistdaGlassMat);
    winS.position.set(0, winY, d / 2 + 0.03);
    group.add(winS);

    // East & West Windows
    const winE = new THREE.Mesh(new THREE.BoxGeometry(0.15, floorHeight * 0.45, d * 0.82), gistdaGlassMat);
    winE.position.set(w / 2 + 0.03, winY, 0);
    group.add(winE);

    const winW = new THREE.Mesh(new THREE.BoxGeometry(0.15, floorHeight * 0.45, d * 0.82), gistdaGlassMat);
    winW.position.set(-w / 2 - 0.03, winY, 0);
    group.add(winW);

    // Spandrel band
    const spandrel = new THREE.Mesh(new THREE.BoxGeometry(w + 0.15, 0.25, d + 0.15), gistdaTrimMat);
    spandrel.position.set(0, floorY, 0);
    group.add(spandrel);
  }

  // Rooftop Parapet Wall
  const roofY = podiumH + h;
  const parapet = new THREE.Mesh(new THREE.BoxGeometry(w, 0.7, d), gistdaTrimMat);
  parapet.position.set(0, roofY + 0.35, 0);
  group.add(parapet);

  // Rooftop Flat Deck Inner (Slightly sunken)
  const deckMat = new THREE.MeshStandardMaterial({
    color: bld.roofColor || 0x475569,
    roughness: 0.6,
    metalness: 0.1
  });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(w - 0.4, 0.1, d - 0.4), deckMat);
  deck.position.set(0, roofY + 0.1, 0);
  group.add(deck);

  // Rooftop Elevator Penthouse & Mechanical Room
  const pentW = Math.min(w * 0.35, 5.0);
  const pentD = Math.min(d * 0.35, 4.0);
  const pentH = 2.4;
  const penthouse = new THREE.Mesh(new THREE.BoxGeometry(pentW, pentH, pentD), gistdaWallMat);
  penthouse.position.set(w * 0.15, roofY + pentH / 2 + 0.2, -d * 0.15);
  penthouse.castShadow = true;
  group.add(penthouse);

  // AC Condenser Chiller Units
  if (w > 12 && d > 8) {
    const chW = 1.6;
    const chD = 1.2;
    const chH = 1.0;
    const chiller = new THREE.Mesh(new THREE.BoxGeometry(chW, chH, chD), gistdaTrimMat);
    chiller.position.set(-w * 0.2, roofY + chH / 2 + 0.2, d * 0.2);
    chiller.castShadow = true;
    group.add(chiller);
  }

  return group;
}

// --- Building 2: อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB 100) ---
function createSPB100Mesh() {
  const group = new THREE.Group();
  const w = 22.5;
  const h = 18.0; // 6-story monumental administrative tower
  const d = 14.0;
  const podiumH = 0.8;

  // Base
  const podium = new THREE.Mesh(new THREE.BoxGeometry(w + 1.2, podiumH, d + 1.2), gistdaConcreteMat);
  podium.position.set(0, podiumH / 2, 0);
  group.add(podium);

  // Main Tower
  const tower = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), gistdaWallMat);
  tower.position.set(0, podiumH + h / 2, 0);
  tower.castShadow = true;
  tower.receiveShadow = true;
  group.add(tower);

  // Front Blue Tinted Curtain Wall Atrium
  const curtnW = w * 0.6;
  const curtnH = h * 0.85;
  const curtain = new THREE.Mesh(new THREE.BoxGeometry(curtnW, curtnH, 0.4), gistdaGlassMat);
  curtain.position.set(0, podiumH + curtnH / 2 + 0.8, -d / 2 - 0.1);
  group.add(curtain);

  // Architectural Crown Parapet
  const crown = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 1.2, d + 0.4), gistdaTrimMat);
  crown.position.set(0, podiumH + h + 0.6, 0);
  crown.castShadow = true;
  group.add(crown);

  // Helipad / Rooftop Platform
  const heli = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 0.3, 24), gistdaConcreteMat);
  heli.position.set(0, podiumH + h + 1.3, 0);
  group.add(heli);

  return group;
}

// --- Building 8: พระอนุสาวรีย์สมเด็จเจ้าฟ้าวไลยอลงกรณ์ฯ ---
function createMonumentMesh() {
  const group = new THREE.Group();
  // 3-Tier Marble Plinth
  const tier1 = new THREE.Mesh(new THREE.CylinderGeometry(5.0, 5.2, 0.4, 32), gistdaConcreteMat);
  tier1.position.y = 0.2;
  tier1.receiveShadow = true;
  group.add(tier1);

  const tier2 = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.8, 0.4, 32), gistdaWallMat);
  tier2.position.y = 0.6;
  group.add(tier2);

  const tier3 = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.4, 0.8, 32), gistdaWallMat);
  tier3.position.y = 1.2;
  tier3.castShadow = true;
  group.add(tier3);

  // Pedestal & Bronze Statue
  const pedestalMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.5 });
  const pedestal = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.6, 1.4), pedestalMat);
  pedestal.position.y = 2.4;
  pedestal.castShadow = true;
  group.add(pedestal);

  const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.25, metalness: 0.85 });
  const statue = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 1.8, 16), bronzeMat);
  statue.position.y = 4.1;
  statue.castShadow = true;
  group.add(statue);

  // Landscaped Floral Ring
  const flowerRing = new THREE.Mesh(new THREE.RingGeometry(5.5, 7.2, 32), gistdaGrassPitchMat);
  flowerRing.rotation.x = -Math.PI / 2;
  flowerRing.position.y = 0.05;
  flowerRing.receiveShadow = true;
  group.add(flowerRing);

  return group;
}

// --- Building 36: เรือนเจ้าฟ้า (เรือนไทยวไลยอลงกรณ์) ---
function createThaiPavilionMesh() {
  const group = new THREE.Group();
  const w = 8.5;
  const d = 8.0;
  const stiltH = 2.4; // ยกใต้ถุนสูง

  // Wooden Stilts / Pillars (ใต้ถุน)
  for (let x of [-w / 2 + 0.8, 0, w / 2 - 0.8]) {
    for (let z of [-d / 2 + 0.8, 0, d / 2 - 0.8]) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, stiltH, 8), gistdaThaiWoodMat);
      col.position.set(x, stiltH / 2, z);
      col.castShadow = true;
      group.add(col);
    }
  }

  // Wooden Floor Veranda (ชานเรือน)
  const floor = new THREE.Mesh(new THREE.BoxGeometry(w, 0.25, d), gistdaThaiWoodMat);
  floor.position.set(0, stiltH, 0);
  floor.castShadow = true;
  group.add(floor);

  // House Body
  const houseW = w * 0.75;
  const houseD = d * 0.75;
  const houseH = 2.8;
  const house = new THREE.Mesh(new THREE.BoxGeometry(houseW, houseH, houseD), gistdaThaiWoodMat);
  house.position.set(0, stiltH + houseH / 2, 0);
  house.castShadow = true;
  group.add(house);

  // Traditional Pitched Thai Roof (ทรงจั่ว)
  const roofGeo = new THREE.ConeGeometry(houseW * 0.85, 2.6, 4);
  const roof = new THREE.Mesh(roofGeo, gistdaThaiRoofMat);
  roof.rotation.y = Math.PI / 4;
  roof.position.set(0, stiltH + houseH + 1.3, 0);
  roof.castShadow = true;
  group.add(roof);

  return group;
}

// --- Building 57: สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ ---
function createStadiumMesh() {
  const group = new THREE.Group();
  const trackW = 42.0;
  const trackD = 52.0;

  // Invisible click hitbox on the field for raycasting
  const hitGeo = new THREE.PlaneGeometry(trackW, trackD);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const hitMesh = new THREE.Mesh(hitGeo, hitMat);
  hitMesh.rotation.x = -Math.PI / 2;
  hitMesh.position.y = 0.05;
  group.add(hitMesh);

  // 1. Covered Grandstand on West Side (-X) exactly over real grandstand in drone photo
  const standW = 5.2;
  const standD = 32.0;
  const standH = 5.5;
  const stand = new THREE.Mesh(new THREE.BoxGeometry(standW, standH, standD), gistdaConcreteMat);
  stand.position.set(-trackW / 2 - standW / 2 + 1.0, standH / 2, 0);
  stand.castShadow = true;
  group.add(stand);

  // Grandstand Cantilever Roof
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(standW + 2.5, 0.4, standD + 1.2), gistdaTrimMat);
  canopy.position.set(-trackW / 2 - standW / 2 + 2.2, standH + 0.6, 0);
  canopy.rotation.z = -0.15;
  canopy.castShadow = true;
  group.add(canopy);

  // 2. 4 Floodlight Spotlight Towers at the 4 exact corners of the 400m track
  const cornerCoords = [
    { x: -trackW / 2 - 1.5, z: -trackD / 2 + 2.0 },
    { x: trackW / 2 + 1.5,  z: -trackD / 2 + 2.0 },
    { x: -trackW / 2 - 1.5, z: trackD / 2 - 2.0 },
    { x: trackW / 2 + 1.5,  z: trackD / 2 - 2.0 }
  ];

  cornerCoords.forEach(c => {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.38, 15.0, 8), gistdaTrimMat);
    pole.position.set(c.x, 7.5, c.z);
    pole.castShadow = true;
    group.add(pole);

    const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.2, 1.0), gistdaWallMat);
    lamp.position.set(c.x, 15.4, c.z);
    group.add(lamp);
  });

  return group;
}

// --- Building 5: อาคารศูนย์ส่งเสริมสุขภาพ / สระว่ายน้ำ 50 เมตร ---
function createHealthPoolMesh() {
  const group = new THREE.Group();
  const bldW = 16.0;
  const bldD = 14.0;
  const bldH = 5.0;

  // Gym Building
  const bld = new THREE.Mesh(new THREE.BoxGeometry(bldW, bldH, bldD), gistdaWallMat);
  bld.position.set(0, bldH / 2, 0);
  bld.castShadow = true;
  group.add(bld);

  // 50m Swimming Pool Deck next to building (+Z)
  const poolW = 12.0;
  const poolD = 18.0;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(poolW + 2.0, 0.2, poolD + 2.0), gistdaConcreteMat);
  deck.position.set(0, 0.1, bldD / 2 + poolD / 2 + 1.0);
  deck.receiveShadow = true;
  group.add(deck);

  // Blue Water Surface
  const water = new THREE.Mesh(new THREE.BoxGeometry(poolW, 0.22, poolD), gistdaWaterMat);
  water.position.set(0, 0.12, bldD / 2 + poolD / 2 + 1.0);
  group.add(water);

  return group;
}

// --- GISTDA Infrastructure: Roads, Highway, Parking, Canals, Paddy, Housing ---
function createGistdaInfrastructure() {
  const infraGroup = new THREE.Group();

  // =========================================================================
  // 1. PHAHONYOTHIN HIGHWAY (ถนนพหลโยธิน - ทล.1 ด้านหน้า ม. ฝั่งทิศตะวันออก)
  // =========================================================================
  const hwW = 18.0; // 8 lanes wide
  const hwL = 118.0; // spanning full north-south length of campus
  const hwX = 196.0;
  const hwZ = 0;

  const highway = new THREE.Mesh(new THREE.BoxGeometry(hwW, 0.12, hwL), gistdaHighwayMat);
  highway.position.set(hwX, 0.06, hwZ);
  highway.receiveShadow = true;
  infraGroup.add(highway);

  // Central Median Barrier (เกาะกลางถนน)
  const median = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, hwL), gistdaConcreteMat);
  median.position.set(hwX, 0.3, hwZ);
  infraGroup.add(median);

  // Highway Lane Divider Stripes
  for (let laneOffset of [-6.0, -3.0, 3.0, 6.0]) {
    for (let z = -hwL / 2 + 2.5; z <= hwL / 2 - 2.5; z += 5.0) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 3.0), gistdaWhiteLineMat);
      stripe.position.set(hwX + laneOffset, 0.14, z);
      infraGroup.add(stripe);
    }
  }

  // =========================================================================
  // 2. MAIN CAMPUS INTERNAL ROADS (ถนนหลักภายในมหาวิทยาลัย)
  // =========================================================================
  const roadMat = gistdaAsphaltMat;
  const roadW = 6.0;

  // 2A. Main East-West Spine Road (เชื่อมจากซุ้มประตูหน้า ถึงขอบสนามกีฬาหน้าอาคาร 42)
  const mainSpineL = 296.0; // Ends at X = -114 right before the stadium!
  const mainSpineX = 34.0;  // Spans from +182 down to -114
  const mainSpine = new THREE.Mesh(new THREE.BoxGeometry(mainSpineL, 0.1, roadW), roadMat);
  mainSpine.position.set(mainSpineX, 0.05, 0);
  mainSpine.receiveShadow = true;
  infraGroup.add(mainSpine);

  // Dashed Centerline for Main Spine (stopping cleanly before stadium)
  for (let x = -110; x <= 180; x += 4.5) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.02, 0.15), gistdaWhiteLineMat);
    dash.position.set(x, 0.12, 0);
    infraGroup.add(dash);
  }

  // 2B. North Ring Road (เลียบแนวอาคาร 19, 20, 29, 30)
  const northRoadL = 280.0;
  const northRoad = new THREE.Mesh(new THREE.BoxGeometry(northRoadL, 0.1, roadW), roadMat);
  northRoad.position.set(20.0, 0.05, -34.0);
  northRoad.receiveShadow = true;
  infraGroup.add(northRoad);

  // 2C. South Ring Road (ผ่านหน้าตึก 10, คณะครุศาสตร์, หอสมุด, ถึงสนามกีฬา)
  const southRoadL = 310.0;
  const southRoad = new THREE.Mesh(new THREE.BoxGeometry(southRoadL, 0.1, roadW), roadMat);
  southRoad.position.set(10.0, 0.05, 42.0);
  southRoad.receiveShadow = true;
  infraGroup.add(southRoad);

  // 2D. North-South Connecting Cross Avenues
  for (let crossX of [138.0, 68.0, -10.0, -85.0]) {
    const crossAve = new THREE.Mesh(new THREE.BoxGeometry(roadW, 0.09, 82.0), roadMat);
    crossAve.position.set(crossX, 0.045, 4.0);
    crossAve.receiveShadow = true;
    infraGroup.add(crossAve);
  }

  // =========================================================================
  // 3. GISTDA PARKING LOTS (ลานจอดรถตามผัง GIS)
  // =========================================================================
  const parkingConfigs = [
    { x: 135.0, z: 14.0, w: 14.0, d: 18.0, name: 'SPB 100 Parking' },
    { x: -6.0, z: 20.0, w: 22.0, d: 10.0, name: 'Library Parking' },
    { x: 51.0, z: -10.0, w: 24.0, d: 8.0, name: 'Science Faculty Parking' },
    { x: -120.0, z: 14.0, w: 16.0, d: 24.0, name: 'Stadium Parking' }
  ];

  parkingConfigs.forEach(pk => {
    const lot = new THREE.Mesh(new THREE.BoxGeometry(pk.w, 0.12, pk.d), gistdaAsphaltMat);
    lot.position.set(pk.x, 0.06, pk.z);
    lot.receiveShadow = true;
    infraGroup.add(lot);

    // Curbs
    const curb = new THREE.Mesh(new THREE.BoxGeometry(pk.w + 0.4, 0.22, pk.d + 0.4), gistdaCurbMat);
    curb.position.set(pk.x, 0.1, pk.z);
    infraGroup.add(curb);

    // Stalls
    const step = 2.4;
    for (let ox = -pk.w / 2 + 1.2; ox <= pk.w / 2 - 1.2; ox += step) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, pk.d * 0.85), gistdaWhiteLineMat);
      line.position.set(pk.x + ox, 0.14, pk.z);
      infraGroup.add(line);
    }
  });

  // =========================================================================
  // 4. HYDROLOGY: CANALS & NATURAL PONDS (ระบบคูคลองและสระน้ำ)
  // =========================================================================
  // 4A. North Drainage Canal (คลองเชียงรากน้อย - คลองระบายน้ำทิศเหนือเลียบแนวรั้วจริง)
  const canalW = 4.8;
  const canalL = 340.0; // Spanning full length of northern boundary
  const canalX = 15.0;
  const canalZ = -49.5; // Exactly on Chiang Rak Noi canal in drone photograph!

  const canalBed = new THREE.Mesh(new THREE.BoxGeometry(canalL, 0.25, canalW + 0.8), gistdaConcreteMat);
  canalBed.position.set(canalX, 0.05, canalZ);
  infraGroup.add(canalBed);

  const canalWater = new THREE.Mesh(new THREE.BoxGeometry(canalL, 0.22, canalW), gistdaWaterMat);
  canalWater.position.set(canalX, 0.14, canalZ);
  infraGroup.add(canalWater);

  // 4B. Natural Lotus Pond at Thai House (สระบัวเรือนเจ้าฟ้า)
  const pondGeo = new THREE.CylinderGeometry(11.0, 11.0, 0.2, 32);
  const pond = new THREE.Mesh(pondGeo, gistdaWaterMat);
  pond.position.set(-0.7, 0.1, 8.0);
  infraGroup.add(pond);

  const pondBank = new THREE.Mesh(new THREE.CylinderGeometry(11.8, 12.0, 0.18, 32), gistdaConcreteMat);
  pondBank.position.set(-0.7, 0.05, 8.0);
  infraGroup.add(pondBank);

  // =========================================================================
  // 5. AGRICULTURAL DEMONSTRATION PADDY FIELDS (ทุ่งนาและแปลงเกษตรสาธิต)
  // =========================================================================
  // Located at X in [15..45], Z in [22..40] near Faculty of Agriculture
  const paddyW = 32.0;
  const paddyD = 18.0;
  const paddyX = 30.0;
  const paddyZ = 32.0;

  const paddyBase = new THREE.Mesh(new THREE.BoxGeometry(paddyW, 0.15, paddyD), gistdaPaddyMat);
  paddyBase.position.set(paddyX, 0.08, paddyZ);
  paddyBase.receiveShadow = true;
  infraGroup.add(paddyBase);

  // Earth bund dikes (คันนาดิน) dividing the fields into plots
  for (let ox of [-10.0, 0.0, 10.0]) {
    const bund = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, paddyD), gistdaEarthMat);
    bund.position.set(paddyX + ox, 0.2, paddyZ);
    infraGroup.add(bund);
  }
  for (let oz of [-4.5, 4.5]) {
    const bund = new THREE.Mesh(new THREE.BoxGeometry(paddyW, 0.3, 0.6), gistdaEarthMat);
    bund.position.set(paddyX, 0.2, paddyZ + oz);
    infraGroup.add(bund);
  }

  // =========================================================================
  // 6. STAFF RESIDENTIAL HOUSING (โซนบ้านพักอาจารย์/บุคลากร ท้าย ม.)
  // =========================================================================
  // Grid layout of detached 1-2 story cottages with pitched hip roofs
  const houseMat = new THREE.MeshStandardMaterial({ color: 0xffedd5, roughness: 0.5 });
  const houseRoofMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.4 });

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 5; c++) {
      const hx = -105.0 - c * 7.5;
      const hz = -15.0 - r * 8.0;

      const houseBody = new THREE.Mesh(new THREE.BoxGeometry(5.2, 3.5, 5.0), houseMat);
      houseBody.position.set(hx, 1.75, hz);
      houseBody.castShadow = true;
      infraGroup.add(houseBody);

      const roofCone = new THREE.ConeGeometry(4.2, 1.8, 4);
      const hRoof = new THREE.Mesh(roofCone, houseRoofMat);
      hRoof.rotation.y = Math.PI / 4;
      hRoof.position.set(hx, 4.4, hz);
      hRoof.castShadow = true;
      infraGroup.add(hRoof);
    }
  }

  
  // =========================================================================
  // 7. REAL TREE LINEAR ROWS & GROVES (ต้นไม้ 3 มิติ วางตรงตามพุ่มไม้จริงในภาพถ่ายโดรน)
  // =========================================================================
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.9, metalness: 0.0 });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9, metalness: 0.0 });
  const treeCone = new THREE.ConeGeometry(2.2, 5.5, 6);
  const trunkCyl = new THREE.CylinderGeometry(0.3, 0.4, 2.0, 6);

  function addTree(tx, tz, s = 1.0) {
    const tg = new THREE.Group();
    tg.position.set(tx, 0, tz);
    tg.scale.setScalar(s);
    const tr = new THREE.Mesh(trunkCyl, trunkMat);
    tr.position.y = 1.0;
    tg.add(tr);
    const cr = new THREE.Mesh(treeCone, treeMat);
    cr.position.y = 2.0 + 2.75;
    cr.castShadow = true;
    tg.add(cr);
    infraGroup.add(tg);
  }

  // Trees along North Canal buffer (Z = -44.0, every 14m from X = -140 to +160)
  for (let x = -140; x <= 160; x += 14) {
    addTree(x, -44.0, 0.9 + (Math.abs(x) % 3) * 0.1);
  }

  // Trees along Monument Plaza circle (X = 184.0, Z = 14.5)
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
    addTree(184.0 + Math.cos(a) * 8.5, 14.5 + Math.sin(a) * 8.5, 0.85);
  }

  // Trees around Thai House lotus pond (X = -0.7, Z = 8.0)
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
    addTree(-0.7 + Math.cos(a) * 14.0, 8.0 + Math.sin(a) * 14.0, 0.95);
  }

  // Trees along Building 10 parking buffer (Z = 43.5, X in [115..165])
  for (let x = 115; x <= 165; x += 10) {
    addTree(x, 43.5, 0.85);
  }

  // Trees along southern natural boundary (Z = 53.0, every 12m)
  for (let x = -130; x <= 130; x += 12) {
    addTree(x, 53.0, 1.0 + (Math.abs(x) % 2) * 0.15);
  }

  return infraGroup;
}


// 336 Campus Buildings aligned 1:1 to Drone Orthophoto pixels
const DRONE_ALIGNED_BUILDINGS = [{"id": "bld-grid-1", "x": -187.73, "z": -54.21, "w": 19.29, "d": 3.0, "h": 7.0, "area": 718}, {"id": "bld-grid-2", "x": -169.26, "z": -54.38, "w": 3.0, "d": 3.0, "h": 4.5, "area": 65}, {"id": "bld-grid-3", "x": -36.25, "z": -54.56, "w": 3.0, "d": 3.0, "h": 4.5, "area": 25}, {"id": "bld-grid-4", "x": -56.53, "z": -54.44, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-5", "x": -202.1, "z": -53.2, "w": 3.0, "d": 3.0, "h": 4.5, "area": 449}, {"id": "bld-grid-6", "x": -52.44, "z": -54.21, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-7", "x": -194.74, "z": -52.55, "w": 8.3, "d": 3.0, "h": 7.0, "area": 1184}, {"id": "bld-grid-8", "x": 102.14, "z": -52.91, "w": 3.16, "d": 3.0, "h": 4.5, "area": 27}, {"id": "bld-grid-9", "x": -55.48, "z": -52.79, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-10", "x": 81.27, "z": -52.79, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-11", "x": -31.11, "z": -52.67, "w": 3.0, "d": 3.0, "h": 4.5, "area": 25}, {"id": "bld-grid-12", "x": 60.41, "z": -52.67, "w": 3.16, "d": 3.0, "h": 4.5, "area": 27}, {"id": "bld-grid-13", "x": -51.39, "z": -52.55, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-14", "x": 9.63, "z": -52.55, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-15", "x": 32.01, "z": -52.55, "w": 3.39, "d": 3.0, "h": 4.5, "area": 29}, {"id": "bld-grid-16", "x": 39.49, "z": -52.55, "w": 3.16, "d": 3.0, "h": 4.5, "area": 27}, {"id": "bld-grid-17", "x": 85.48, "z": -52.55, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-18", "x": 64.56, "z": -52.43, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-19", "x": 13.83, "z": -52.31, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-20", "x": 27.27, "z": -52.31, "w": 3.0, "d": 3.0, "h": 4.5, "area": 22}, {"id": "bld-grid-21", "x": 43.75, "z": -52.31, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-22", "x": -192.46, "z": -51.72, "w": 3.74, "d": 3.0, "h": 4.5, "area": 159}, {"id": "bld-grid-23", "x": -98.2, "z": -51.84, "w": 8.77, "d": 3.0, "h": 4.5, "area": 75}, {"id": "bld-grid-24", "x": -86.27, "z": -51.61, "w": 6.66, "d": 3.0, "h": 4.5, "area": 57}, {"id": "bld-grid-25", "x": -179.72, "z": -51.25, "w": 5.84, "d": 3.0, "h": 4.5, "area": 53}, {"id": "bld-grid-26", "x": 103.25, "z": -51.25, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-27", "x": -189.89, "z": -50.96, "w": 3.0, "d": 3.0, "h": 4.5, "area": 56}, {"id": "bld-grid-28", "x": 82.33, "z": -51.13, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-29", "x": -187.78, "z": -50.96, "w": 3.0, "d": 3.0, "h": 4.5, "area": 28}, {"id": "bld-grid-30", "x": -179.08, "z": -49.18, "w": 7.13, "d": 3.78, "h": 7.0, "area": 1846}, {"id": "bld-grid-31", "x": 61.52, "z": -51.01, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-32", "x": 10.68, "z": -50.9, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-33", "x": 30.78, "z": -50.9, "w": 3.0, "d": 3.0, "h": 4.5, "area": 22}, {"id": "bld-grid-34", "x": 40.6, "z": -50.9, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-35", "x": 86.53, "z": -50.9, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-36", "x": 65.67, "z": -50.78, "w": 3.16, "d": 3.0, "h": 4.5, "area": 27}, {"id": "bld-grid-37", "x": 14.89, "z": -50.66, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-38", "x": 26.05, "z": -50.66, "w": 3.39, "d": 3.0, "h": 4.5, "area": 29}, {"id": "bld-grid-39", "x": 44.81, "z": -50.66, "w": 3.04, "d": 3.0, "h": 4.5, "area": 26}, {"id": "bld-grid-40", "x": -189.83, "z": -48.77, "w": 3.0, "d": 3.66, "h": 4.5, "area": 426}, {"id": "bld-grid-41", "x": -187.84, "z": -48.89, "w": 3.0, "d": 3.43, "h": 4.5, "area": 428}, {"id": "bld-grid-42", "x": -192.69, "z": -45.1, "w": 3.74, "d": 10.76, "h": 9.5, "area": 2557}, {"id": "bld-grid-43", "x": -200.99, "z": -47.88, "w": 3.51, "d": 4.73, "h": 7.0, "area": 872}, {"id": "bld-grid-44", "x": -95.16, "z": -50.19, "w": 6.66, "d": 3.0, "h": 4.5, "area": 57}, {"id": "bld-grid-45", "x": -83.12, "z": -49.95, "w": 8.77, "d": 3.0, "h": 4.5, "area": 75}, {"id": "bld-grid-46", "x": -204.09, "z": -48.65, "w": 3.0, "d": 3.0, "h": 4.5, "area": 110}, {"id": "bld-grid-47", "x": -184.86, "z": -47.47, "w": 3.97, "d": 4.85, "h": 7.0, "area": 1257}, {"id": "bld-grid-48", "x": -170.19, "z": -46.41, "w": 3.0, "d": 3.0, "h": 4.5, "area": 294}, {"id": "bld-grid-49", "x": 174.78, "z": -45.75, "w": 3.27, "d": 4.25, "h": 7.0, "area": 865}, {"id": "bld-grid-50", "x": 166.71, "z": -45.7, "w": 3.27, "d": 4.14, "h": 7.0, "area": 894}, {"id": "bld-grid-51", "x": 170.16, "z": -45.52, "w": 3.62, "d": 4.25, "h": 7.0, "area": 992}, {"id": "bld-grid-52", "x": 178.28, "z": -45.52, "w": 3.74, "d": 4.25, "h": 7.0, "area": 1020}, {"id": "bld-grid-53", "x": -171.07, "z": -45.99, "w": 3.0, "d": 3.0, "h": 4.5, "area": 69}, {"id": "bld-grid-54", "x": -188.84, "z": -45.58, "w": 3.74, "d": 3.0, "h": 7.0, "area": 650}, {"id": "bld-grid-55", "x": -176.27, "z": -43.92, "w": 7.83, "d": 3.9, "h": 7.0, "area": 1880}, {"id": "bld-grid-56", "x": -203.45, "z": -44.04, "w": 3.0, "d": 3.19, "h": 4.5, "area": 339}, {"id": "bld-grid-57", "x": 97.99, "z": -39.49, "w": 6.08, "d": 10.16, "h": 9.5, "area": 4472}, {"id": "bld-grid-58", "x": 35.28, "z": -43.69, "w": 3.0, "d": 3.0, "h": 4.5, "area": 91}, {"id": "bld-grid-59", "x": 19.15, "z": -42.27, "w": 3.0, "d": 3.0, "h": 4.5, "area": 23}, {"id": "bld-grid-60", "x": -189.25, "z": -42.86, "w": 3.0, "d": 3.0, "h": 4.5, "area": 87}, {"id": "bld-grid-61", "x": -71.78, "z": -42.45, "w": 7.36, "d": 3.0, "h": 7.0, "area": 892}, {"id": "bld-grid-62", "x": 37.62, "z": -42.56, "w": 3.0, "d": 3.0, "h": 4.5, "area": 274}, {"id": "bld-grid-63", "x": -81.54, "z": -41.15, "w": 6.31, "d": 3.0, "h": 7.0, "area": 649}, {"id": "bld-grid-64", "x": 68.47, "z": -38.96, "w": 3.0, "d": 5.55, "h": 7.0, "area": 793}, {"id": "bld-grid-65", "x": 53.57, "z": -39.2, "w": 10.52, "d": 4.85, "h": 9.5, "area": 3165}, {"id": "bld-grid-66", "x": 61.4, "z": -37.25, "w": 3.0, "d": 6.15, "h": 4.5, "area": 540}, {"id": "bld-grid-67", "x": 190.56, "z": -40.02, "w": 3.0, "d": 3.0, "h": 4.5, "area": 20}, {"id": "bld-grid-68", "x": -72.07, "z": -37.95, "w": 6.55, "d": 3.0, "h": 7.0, "area": 828}, {"id": "bld-grid-69", "x": -9.19, "z": -37.13, "w": 3.0, "d": 3.78, "h": 7.0, "area": 768}, {"id": "bld-grid-70", "x": -81.01, "z": -37.84, "w": 7.13, "d": 3.0, "h": 7.0, "area": 937}, {"id": "bld-grid-71", "x": -63.37, "z": -37.25, "w": 3.39, "d": 3.0, "h": 7.0, "area": 626}, {"id": "bld-grid-72", "x": -203.33, "z": -35.71, "w": 3.0, "d": 3.78, "h": 4.5, "area": 437}, {"id": "bld-grid-73", "x": 32.94, "z": -31.87, "w": 23.49, "d": 8.86, "h": 12.0, "area": 12230}, {"id": "bld-grid-74", "x": 54.27, "z": -33.23, "w": 8.88, "d": 4.49, "h": 9.5, "area": 2773}, {"id": "bld-grid-75", "x": -201.4, "z": -33.7, "w": 3.62, "d": 3.31, "h": 4.5, "area": 508}, {"id": "bld-grid-76", "x": -198.65, "z": -32.46, "w": 3.51, "d": 3.43, "h": 4.5, "area": 523}, {"id": "bld-grid-77", "x": 178.23, "z": -31.34, "w": 3.62, "d": 4.25, "h": 7.0, "area": 962}, {"id": "bld-grid-78", "x": -64.89, "z": -31.16, "w": 7.13, "d": 3.43, "h": 7.0, "area": 1589}, {"id": "bld-grid-79", "x": -64.83, "z": -28.97, "w": 6.78, "d": 3.0, "h": 4.5, "area": 191}, {"id": "bld-grid-80", "x": -202.57, "z": -24.89, "w": 3.86, "d": 7.92, "h": 9.5, "area": 2169}, {"id": "bld-grid-81", "x": -92.88, "z": -24.24, "w": 6.08, "d": 6.62, "h": 7.0, "area": 1519}, {"id": "bld-grid-82", "x": 80.63, "z": -26.9, "w": 3.86, "d": 3.0, "h": 4.5, "area": 33}, {"id": "bld-grid-83", "x": 132.06, "z": -26.79, "w": 13.21, "d": 3.0, "h": 4.5, "area": 113}, {"id": "bld-grid-84", "x": 113.88, "z": -26.55, "w": 10.05, "d": 3.0, "h": 4.5, "area": 86}, {"id": "bld-grid-85", "x": -101.29, "z": -25.54, "w": 3.0, "d": 3.0, "h": 4.5, "area": 252}, {"id": "bld-grid-86", "x": 127.32, "z": -25.13, "w": 10.05, "d": 3.0, "h": 4.5, "area": 86}, {"id": "bld-grid-87", "x": 151.28, "z": -21.35, "w": 12.39, "d": 6.97, "h": 9.5, "area": 3629}, {"id": "bld-grid-88", "x": -72.19, "z": -23.42, "w": 3.0, "d": 3.0, "h": 4.5, "area": 185}, {"id": "bld-grid-89", "x": 52.11, "z": -20.4, "w": 47.8, "d": 6.5, "h": 16.0, "area": 20500}, {"id": "bld-grid-90", "x": 102.31, "z": -19.81, "w": 3.51, "d": 7.45, "h": 7.0, "area": 1493}, {"id": "bld-grid-91", "x": -88.03, "z": -22.59, "w": 3.0, "d": 3.0, "h": 4.5, "area": 204}, {"id": "bld-grid-92", "x": 81.51, "z": -20.34, "w": 10.52, "d": 5.91, "h": 9.5, "area": 3820}, {"id": "bld-grid-93", "x": 122.24, "z": -22.41, "w": 6.9, "d": 3.0, "h": 7.0, "area": 859}, {"id": "bld-grid-94", "x": 111.31, "z": -22.24, "w": 7.71, "d": 3.0, "h": 7.0, "area": 871}, {"id": "bld-grid-95", "x": 173.2, "z": -20.7, "w": 16.71, "d": 4.49, "h": 9.5, "area": 4677}, {"id": "bld-grid-96", "x": 93.95, "z": -19.64, "w": 3.86, "d": 5.67, "h": 7.0, "area": 1229}, {"id": "bld-grid-97", "x": -63.37, "z": -21.94, "w": 5.26, "d": 3.0, "h": 4.5, "area": 45}, {"id": "bld-grid-98", "x": -108.48, "z": -20.29, "w": 3.62, "d": 3.19, "h": 7.0, "area": 724}, {"id": "bld-grid-99", "x": 192.6, "z": -20.29, "w": 3.0, "d": 3.0, "h": 4.5, "area": 25}, {"id": "bld-grid-100", "x": 124.23, "z": -19.52, "w": 4.09, "d": 4.02, "h": 7.0, "area": 1156}, {"id": "bld-grid-101", "x": -153.66, "z": -19.81, "w": 3.97, "d": 3.0, "h": 7.0, "area": 649}, {"id": "bld-grid-102", "x": -142.44, "z": -19.4, "w": 3.27, "d": 3.78, "h": 7.0, "area": 863}, {"id": "bld-grid-103", "x": -148.75, "z": -19.93, "w": 3.0, "d": 3.0, "h": 4.5, "area": 462}, {"id": "bld-grid-104", "x": -86.57, "z": -19.46, "w": 3.51, "d": 3.43, "h": 7.0, "area": 812}, {"id": "bld-grid-105", "x": -171.01, "z": -19.64, "w": 3.16, "d": 3.0, "h": 4.5, "area": 517}, {"id": "bld-grid-106", "x": -177.03, "z": -19.1, "w": 4.44, "d": 3.66, "h": 7.0, "area": 1040}, {"id": "bld-grid-107", "x": -202.16, "z": -17.92, "w": 4.68, "d": 5.79, "h": 7.0, "area": 1929}, {"id": "bld-grid-108", "x": -130.63, "z": -19.46, "w": 3.51, "d": 3.0, "h": 7.0, "area": 690}, {"id": "bld-grid-109", "x": -137.0, "z": -19.1, "w": 3.86, "d": 3.0, "h": 7.0, "area": 766}, {"id": "bld-grid-110", "x": -116.37, "z": -19.22, "w": 3.74, "d": 3.0, "h": 7.0, "area": 727}, {"id": "bld-grid-111", "x": -56.18, "z": -20.52, "w": 5.14, "d": 3.0, "h": 4.5, "area": 44}, {"id": "bld-grid-112", "x": -122.74, "z": -19.22, "w": 5.03, "d": 3.0, "h": 7.0, "area": 888}, {"id": "bld-grid-113", "x": -101.7, "z": -19.16, "w": 3.62, "d": 3.0, "h": 7.0, "area": 680}, {"id": "bld-grid-114", "x": -159.79, "z": -18.99, "w": 3.62, "d": 3.0, "h": 7.0, "area": 713}, {"id": "bld-grid-115", "x": -189.25, "z": -18.39, "w": 18.35, "d": 3.66, "h": 9.5, "area": 4319}, {"id": "bld-grid-116", "x": -165.58, "z": -18.87, "w": 3.51, "d": 3.0, "h": 7.0, "area": 686}, {"id": "bld-grid-117", "x": -19.3, "z": -18.93, "w": 7.6, "d": 3.0, "h": 7.0, "area": 680}, {"id": "bld-grid-118", "x": -25.91, "z": -17.8, "w": 3.04, "d": 3.0, "h": 4.5, "area": 598}, {"id": "bld-grid-119", "x": 174.6, "z": -18.69, "w": 12.51, "d": 3.0, "h": 4.5, "area": 179}, {"id": "bld-grid-120", "x": -42.09, "z": -13.67, "w": 3.0, "d": 10.28, "h": 7.0, "area": 842}, {"id": "bld-grid-121", "x": 152.39, "z": -16.15, "w": 12.27, "d": 3.19, "h": 9.5, "area": 2628}, {"id": "bld-grid-122", "x": 155.32, "z": -17.69, "w": 3.0, "d": 3.0, "h": 4.5, "area": 25}, {"id": "bld-grid-123", "x": 47.73, "z": -15.85, "w": 6.31, "d": 3.0, "h": 7.0, "area": 1249}, {"id": "bld-grid-124", "x": 195.87, "z": -14.97, "w": 3.0, "d": 3.43, "h": 4.5, "area": 29}, {"id": "bld-grid-125", "x": -175.63, "z": -16.39, "w": 3.51, "d": 3.0, "h": 4.5, "area": 30}, {"id": "bld-grid-126", "x": -143.72, "z": -16.27, "w": 3.51, "d": 3.0, "h": 4.5, "area": 30}, {"id": "bld-grid-127", "x": -117.48, "z": -16.15, "w": 3.0, "d": 3.0, "h": 4.5, "area": 21}, {"id": "bld-grid-128", "x": 3.14, "z": -14.67, "w": 3.0, "d": 3.0, "h": 4.5, "area": 442}, {"id": "bld-grid-129", "x": -26.31, "z": -12.9, "w": 4.32, "d": 5.67, "h": 7.0, "area": 1703}, {"id": "bld-grid-130", "x": -202.16, "z": -12.43, "w": 4.68, "d": 4.96, "h": 7.0, "area": 1667}, {"id": "bld-grid-131", "x": -138.87, "z": -14.85, "w": 3.62, "d": 3.0, "h": 4.5, "area": 31}, {"id": "bld-grid-132", "x": -79.9, "z": -8.53, "w": 8.18, "d": 12.06, "h": 9.5, "area": 3158}, {"id": "bld-grid-133", "x": 65.84, "z": -13.67, "w": 3.0, "d": 3.0, "h": 4.5, "area": 24}, {"id": "bld-grid-134", "x": 41.59, "z": -13.55, "w": 3.0, "d": 3.0, "h": 4.5, "area": 23}, {"id": "bld-grid-135", "x": -158.33, "z": -10.83, "w": 6.78, "d": 4.85, "h": 9.5, "area": 2306}, {"id": "bld-grid-136", "x": -187.43, "z": -11.42, "w": 3.04, "d": 3.0, "h": 4.5, "area": 522}, {"id": "bld-grid-137", "x": 188.86, "z": -11.6, "w": 3.0, "d": 3.0, "h": 4.5, "area": 229}, {"id": "bld-grid-138", "x": 62.22, "z": -12.25, "w": 3.0, "d": 3.0, "h": 4.5, "area": 24}, {"id": "bld-grid-139", "x": 37.97, "z": -12.13, "w": 3.0, "d": 3.0, "h": 4.5, "area": 23}, {"id": "bld-grid-140", "x": -176.91, "z": -10.59, "w": 3.97, "d": 3.0, "h": 7.0, "area": 716}, {"id": "bld-grid-141", "x": -182.29, "z": -10.53, "w": 3.27, "d": 3.0, "h": 4.5, "area": 592}, {"id": "bld-grid-142", "x": 33.7, "z": -10.3, "w": 6.31, "d": 3.0, "h": 7.0, "area": 802}, {"id": "bld-grid-143", "x": -131.33, "z": -10.24, "w": 4.21, "d": 3.0, "h": 4.5, "area": 363}, {"id": "bld-grid-144", "x": 43.23, "z": -6.1, "w": 12.04, "d": 8.39, "h": 12.0, "area": 7138}, {"id": "bld-grid-145", "x": 79.05, "z": -7.64, "w": 3.27, "d": 5.08, "h": 7.0, "area": 1159}, {"id": "bld-grid-146", "x": 81.97, "z": -7.11, "w": 3.0, "d": 6.15, "h": 7.0, "area": 1029}, {"id": "bld-grid-147", "x": 26.87, "z": -4.03, "w": 3.0, "d": 11.58, "h": 9.5, "area": 2310}, {"id": "bld-grid-148", "x": 94.36, "z": -5.16, "w": 3.0, "d": 8.63, "h": 7.0, "area": 671}, {"id": "bld-grid-149", "x": -202.04, "z": -6.69, "w": 4.91, "d": 4.85, "h": 7.0, "area": 1699}, {"id": "bld-grid-150", "x": -25.61, "z": -9.06, "w": 3.0, "d": 3.0, "h": 4.5, "area": 23}, {"id": "bld-grid-151", "x": 168.29, "z": -0.31, "w": 3.0, "d": 17.14, "h": 7.0, "area": 1989}, {"id": "bld-grid-152", "x": -22.11, "z": -7.64, "w": 3.0, "d": 3.0, "h": 4.5, "area": 23}, {"id": "bld-grid-153", "x": 36.51, "z": -7.11, "w": 3.0, "d": 3.0, "h": 4.5, "area": 67}, {"id": "bld-grid-154", "x": -179.31, "z": -6.34, "w": 9.0, "d": 3.0, "h": 7.0, "area": 1281}, {"id": "bld-grid-155", "x": -198.95, "z": -5.22, "w": 3.0, "d": 4.25, "h": 4.5, "area": 36}, {"id": "bld-grid-156", "x": 70.52, "z": -5.04, "w": 3.04, "d": 4.14, "h": 7.0, "area": 866}, {"id": "bld-grid-157", "x": -20.12, "z": -5.28, "w": 8.3, "d": 3.43, "h": 7.0, "area": 1995}, {"id": "bld-grid-158", "x": 32.59, "z": -5.16, "w": 5.49, "d": 3.43, "h": 7.0, "area": 1343}, {"id": "bld-grid-159", "x": 65.32, "z": -5.1, "w": 5.49, "d": 3.55, "h": 7.0, "area": 1410}, {"id": "bld-grid-160", "x": 206.28, "z": -4.63, "w": 3.0, "d": 3.0, "h": 4.5, "area": 24}, {"id": "bld-grid-161", "x": 142.11, "z": -4.39, "w": 3.0, "d": 3.0, "h": 4.5, "area": 300}, {"id": "bld-grid-162", "x": -34.2, "z": -2.38, "w": 5.84, "d": 5.91, "h": 9.5, "area": 2080}, {"id": "bld-grid-163", "x": -39.93, "z": -1.79, "w": 3.04, "d": 6.85, "h": 7.0, "area": 1443}, {"id": "bld-grid-164", "x": -44.49, "z": -2.2, "w": 5.84, "d": 5.79, "h": 9.5, "area": 2090}, {"id": "bld-grid-165", "x": 78.94, "z": -2.73, "w": 3.0, "d": 3.31, "h": 4.5, "area": 593}, {"id": "bld-grid-166", "x": -178.9, "z": -2.14, "w": 8.42, "d": 3.78, "h": 7.0, "area": 1853}, {"id": "bld-grid-167", "x": -202.1, "z": -0.73, "w": 4.79, "d": 5.67, "h": 7.0, "area": 1829}, {"id": "bld-grid-168", "x": 38.26, "z": -0.02, "w": 15.9, "d": 6.62, "h": 9.5, "area": 4468}, {"id": "bld-grid-169", "x": 65.79, "z": -2.14, "w": 3.0, "d": 3.0, "h": 4.5, "area": 414}, {"id": "bld-grid-170", "x": -197.31, "z": 0.04, "w": 3.0, "d": 4.61, "h": 4.5, "area": 39}, {"id": "bld-grid-171", "x": -19.01, "z": -0.31, "w": 7.48, "d": 3.0, "h": 7.0, "area": 1586}, {"id": "bld-grid-172", "x": 72.21, "z": 0.4, "w": 7.13, "d": 3.9, "h": 7.0, "area": 1996}, {"id": "bld-grid-173", "x": 4.37, "z": 2.23, "w": 6.78, "d": 7.33, "h": 9.5, "area": 2992}, {"id": "bld-grid-174", "x": 60.88, "z": 0.52, "w": 14.84, "d": 3.0, "h": 9.5, "area": 3175}, {"id": "bld-grid-175", "x": -84.93, "z": 2.35, "w": 11.45, "d": 3.78, "h": 9.5, "area": 2827}, {"id": "bld-grid-176", "x": 153.86, "z": 14.82, "w": 14.49, "d": 27.3, "h": 16.0, "area": 26486}, {"id": "bld-grid-177", "x": -18.95, "z": 1.76, "w": 7.36, "d": 3.0, "h": 4.5, "area": 299}, {"id": "bld-grid-178", "x": -201.69, "z": 4.65, "w": 5.61, "d": 4.85, "h": 7.0, "area": 1940}, {"id": "bld-grid-179", "x": -198.6, "z": 4.71, "w": 3.0, "d": 4.73, "h": 4.5, "area": 76}, {"id": "bld-grid-180", "x": -113.1, "z": 4.77, "w": 5.84, "d": 3.9, "h": 7.0, "area": 1491}, {"id": "bld-grid-181", "x": -107.78, "z": 5.01, "w": 5.03, "d": 3.9, "h": 7.0, "area": 1308}, {"id": "bld-grid-182", "x": 94.95, "z": 7.08, "w": 13.09, "d": 8.04, "h": 12.0, "area": 7195}, {"id": "bld-grid-183", "x": -19.01, "z": 5.36, "w": 10.75, "d": 3.19, "h": 9.5, "area": 2419}, {"id": "bld-grid-184", "x": -86.8, "z": 8.02, "w": 27.12, "d": 4.96, "h": 12.0, "area": 8153}, {"id": "bld-grid-185", "x": -35.72, "z": 7.19, "w": 5.38, "d": 3.0, "h": 7.0, "area": 838}, {"id": "bld-grid-186", "x": 80.75, "z": 10.92, "w": 4.32, "d": 8.63, "h": 9.5, "area": 2336}, {"id": "bld-grid-187", "x": -19.36, "z": 8.91, "w": 9.12, "d": 3.66, "h": 7.0, "area": 1918}, {"id": "bld-grid-188", "x": -202.34, "z": 13.99, "w": 4.32, "d": 11.94, "h": 9.5, "area": 3737}, {"id": "bld-grid-189", "x": -194.33, "z": 10.03, "w": 3.51, "d": 3.0, "h": 7.0, "area": 645}, {"id": "bld-grid-190", "x": 58.48, "z": 11.33, "w": 3.04, "d": 4.96, "h": 7.0, "area": 1054}, {"id": "bld-grid-191", "x": 206.39, "z": 10.62, "w": 3.0, "d": 3.31, "h": 4.5, "area": 28}, {"id": "bld-grid-192", "x": -189.13, "z": 10.38, "w": 3.86, "d": 3.0, "h": 7.0, "area": 711}, {"id": "bld-grid-193", "x": -110.99, "z": 11.21, "w": 10.75, "d": 4.25, "h": 9.5, "area": 2863}, {"id": "bld-grid-194", "x": 55.03, "z": 11.57, "w": 3.39, "d": 4.73, "h": 7.0, "area": 1126}, {"id": "bld-grid-195", "x": -178.2, "z": 10.62, "w": 3.51, "d": 3.0, "h": 7.0, "area": 643}, {"id": "bld-grid-196", "x": -29.3, "z": 12.28, "w": 10.75, "d": 3.55, "h": 9.5, "area": 2472}, {"id": "bld-grid-197", "x": 115.34, "z": 16.41, "w": 20.69, "d": 10.87, "h": 12.0, "area": 11469}, {"id": "bld-grid-198", "x": -85.81, "z": 13.34, "w": 28.4, "d": 4.49, "h": 12.0, "area": 7171}, {"id": "bld-grid-199", "x": 98.81, "z": 11.51, "w": 5.38, "d": 3.0, "h": 4.5, "area": 79}, {"id": "bld-grid-200", "x": 163.56, "z": 14.17, "w": 3.0, "d": 3.0, "h": 4.5, "area": 213}, {"id": "bld-grid-201", "x": 189.74, "z": 13.75, "w": 3.0, "d": 3.0, "h": 4.5, "area": 130}, {"id": "bld-grid-202", "x": -196.61, "z": 14.52, "w": 3.0, "d": 3.0, "h": 4.5, "area": 140}, {"id": "bld-grid-203", "x": -193.86, "z": 15.05, "w": 4.21, "d": 3.43, "h": 7.0, "area": 906}, {"id": "bld-grid-204", "x": 95.06, "z": 17.65, "w": 11.45, "d": 8.63, "h": 12.0, "area": 6689}, {"id": "bld-grid-205", "x": -188.72, "z": 14.93, "w": 3.51, "d": 3.0, "h": 7.0, "area": 606}, {"id": "bld-grid-206", "x": -28.48, "z": 13.69, "w": 3.0, "d": 3.0, "h": 4.5, "area": 36}, {"id": "bld-grid-207", "x": 51.82, "z": 14.58, "w": 3.0, "d": 3.0, "h": 4.5, "area": 303}, {"id": "bld-grid-208", "x": -178.26, "z": 15.23, "w": 3.62, "d": 3.0, "h": 7.0, "area": 676}, {"id": "bld-grid-209", "x": -183.64, "z": 16.0, "w": 3.62, "d": 3.0, "h": 7.0, "area": 670}, {"id": "bld-grid-210", "x": 73.5, "z": 17.36, "w": 14.61, "d": 4.02, "h": 9.5, "area": 4018}, {"id": "bld-grid-211", "x": -113.62, "z": 17.42, "w": 5.96, "d": 3.9, "h": 7.0, "area": 1528}, {"id": "bld-grid-212", "x": -108.31, "z": 17.65, "w": 4.91, "d": 3.9, "h": 7.0, "area": 1290}, {"id": "bld-grid-213", "x": 29.09, "z": 17.77, "w": 6.9, "d": 3.43, "h": 7.0, "area": 1668}, {"id": "bld-grid-214", "x": 58.66, "z": 17.53, "w": 3.16, "d": 3.0, "h": 4.5, "area": 567}, {"id": "bld-grid-215", "x": 39.31, "z": 18.3, "w": 3.27, "d": 3.31, "h": 7.0, "area": 737}, {"id": "bld-grid-216", "x": 49.42, "z": 19.31, "w": 12.97, "d": 5.32, "h": 9.5, "area": 4878}, {"id": "bld-grid-217", "x": -19.01, "z": 19.19, "w": 11.69, "d": 3.9, "h": 9.5, "area": 3079}, {"id": "bld-grid-218", "x": -178.43, "z": 19.01, "w": 3.27, "d": 3.0, "h": 7.0, "area": 619}, {"id": "bld-grid-219", "x": -194.51, "z": 19.37, "w": 3.16, "d": 3.07, "h": 7.0, "area": 682}, {"id": "bld-grid-220", "x": -183.93, "z": 19.78, "w": 3.74, "d": 3.0, "h": 7.0, "area": 657}, {"id": "bld-grid-221", "x": -46.24, "z": 21.49, "w": 5.14, "d": 4.02, "h": 7.0, "area": 714}, {"id": "bld-grid-222", "x": 60.06, "z": 20.43, "w": 3.16, "d": 3.0, "h": 4.5, "area": 54}, {"id": "bld-grid-223", "x": 60.06, "z": 21.02, "w": 3.16, "d": 3.0, "h": 4.5, "area": 99}, {"id": "bld-grid-224", "x": -113.92, "z": 23.5, "w": 5.84, "d": 4.02, "h": 7.0, "area": 1490}, {"id": "bld-grid-225", "x": 59.18, "z": 23.62, "w": 6.08, "d": 4.25, "h": 7.0, "area": 908}, {"id": "bld-grid-226", "x": -108.54, "z": 23.74, "w": 4.91, "d": 4.02, "h": 7.0, "area": 1331}, {"id": "bld-grid-227", "x": -43.79, "z": 23.21, "w": 3.0, "d": 3.0, "h": 4.5, "area": 235}, {"id": "bld-grid-228", "x": -84.46, "z": 24.45, "w": 10.99, "d": 4.02, "h": 9.5, "area": 2909}, {"id": "bld-grid-229", "x": 44.51, "z": 28.53, "w": 5.26, "d": 12.17, "h": 9.5, "area": 3645}, {"id": "bld-grid-230", "x": -194.45, "z": 24.09, "w": 3.51, "d": 3.0, "h": 7.0, "area": 619}, {"id": "bld-grid-231", "x": -183.99, "z": 24.45, "w": 3.16, "d": 3.0, "h": 4.5, "area": 596}, {"id": "bld-grid-232", "x": -69.39, "z": 24.98, "w": 11.69, "d": 3.9, "h": 9.5, "area": 2720}, {"id": "bld-grid-233", "x": -189.3, "z": 25.16, "w": 3.74, "d": 3.0, "h": 7.0, "area": 755}, {"id": "bld-grid-234", "x": 76.19, "z": 26.64, "w": 6.19, "d": 5.32, "h": 9.5, "area": 2285}, {"id": "bld-grid-235", "x": -179.02, "z": 25.39, "w": 3.0, "d": 3.0, "h": 4.5, "area": 478}, {"id": "bld-grid-236", "x": -43.2, "z": 25.99, "w": 3.27, "d": 3.07, "h": 4.5, "area": 346}, {"id": "bld-grid-237", "x": 102.95, "z": 33.79, "w": 3.0, "d": 15.13, "h": 4.5, "area": 128}, {"id": "bld-grid-238", "x": 31.48, "z": 29.71, "w": 3.97, "d": 5.55, "h": 7.0, "area": 1455}, {"id": "bld-grid-239", "x": -178.61, "z": 28.59, "w": 3.62, "d": 3.0, "h": 7.0, "area": 686}, {"id": "bld-grid-240", "x": -194.1, "z": 28.64, "w": 3.0, "d": 3.0, "h": 4.5, "area": 427}, {"id": "bld-grid-241", "x": 60.18, "z": 29.89, "w": 19.05, "d": 4.25, "h": 9.5, "area": 4642}, {"id": "bld-grid-242", "x": -184.04, "z": 29.18, "w": 3.51, "d": 3.0, "h": 7.0, "area": 611}, {"id": "bld-grid-243", "x": -12.7, "z": 32.13, "w": 10.52, "d": 7.8, "h": 9.5, "area": 5840}, {"id": "bld-grid-244", "x": 0.1, "z": 30.89, "w": 3.62, "d": 3.9, "h": 7.0, "area": 1013}, {"id": "bld-grid-245", "x": -184.1, "z": 30.83, "w": 3.39, "d": 3.0, "h": 4.5, "area": 74}, {"id": "bld-grid-246", "x": -193.45, "z": 31.6, "w": 3.0, "d": 3.0, "h": 4.5, "area": 96}, {"id": "bld-grid-247", "x": -193.63, "z": 33.61, "w": 3.0, "d": 3.19, "h": 7.0, "area": 621}, {"id": "bld-grid-248", "x": 60.7, "z": 33.25, "w": 11.22, "d": 3.0, "h": 9.5, "area": 2016}, {"id": "bld-grid-249", "x": 0.22, "z": 39.75, "w": 10.64, "d": 13.59, "h": 12.0, "area": 9382}, {"id": "bld-grid-250", "x": -189.77, "z": 34.44, "w": 3.74, "d": 3.0, "h": 7.0, "area": 657}, {"id": "bld-grid-251", "x": -184.34, "z": 34.73, "w": 3.62, "d": 3.0, "h": 7.0, "area": 701}, {"id": "bld-grid-252", "x": 81.04, "z": 35.14, "w": 15.66, "d": 3.66, "h": 9.5, "area": 3877}, {"id": "bld-grid-253", "x": -179.02, "z": 34.97, "w": 3.51, "d": 3.0, "h": 7.0, "area": 669}, {"id": "bld-grid-254", "x": -65.0, "z": 38.63, "w": 4.56, "d": 9.22, "h": 9.5, "area": 2797}, {"id": "bld-grid-255", "x": 29.96, "z": 35.62, "w": 3.0, "d": 3.0, "h": 4.5, "area": 475}, {"id": "bld-grid-256", "x": 33.29, "z": 35.62, "w": 3.0, "d": 3.0, "h": 4.5, "area": 253}, {"id": "bld-grid-257", "x": 26.87, "z": 35.74, "w": 3.0, "d": 3.0, "h": 4.5, "area": 289}, {"id": "bld-grid-258", "x": -198.83, "z": 36.74, "w": 3.0, "d": 3.78, "h": 4.5, "area": 32}, {"id": "bld-grid-259", "x": 60.7, "z": 35.38, "w": 3.27, "d": 3.0, "h": 4.5, "area": 28}, {"id": "bld-grid-260", "x": 73.5, "z": 36.44, "w": 3.0, "d": 3.0, "h": 4.5, "area": 32}, {"id": "bld-grid-261", "x": 56.55, "z": 36.8, "w": 3.16, "d": 3.0, "h": 4.5, "area": 27}, {"id": "bld-grid-262", "x": 29.9, "z": 38.69, "w": 8.06, "d": 3.0, "h": 4.5, "area": 311}, {"id": "bld-grid-263", "x": 20.67, "z": 39.75, "w": 3.0, "d": 3.0, "h": 4.5, "area": 212}, {"id": "bld-grid-264", "x": 29.9, "z": 39.52, "w": 8.06, "d": 3.0, "h": 4.5, "area": 288}, {"id": "bld-grid-265", "x": -187.84, "z": 45.49, "w": 4.56, "d": 9.93, "h": 9.5, "area": 3101}, {"id": "bld-grid-266", "x": -190.53, "z": 45.72, "w": 3.0, "d": 10.16, "h": 4.5, "area": 514}, {"id": "bld-grid-267", "x": -181.06, "z": 45.72, "w": 3.62, "d": 7.8, "h": 9.5, "area": 2046}, {"id": "bld-grid-268", "x": 142.46, "z": 42.71, "w": 6.66, "d": 3.0, "h": 4.5, "area": 57}, {"id": "bld-grid-269", "x": 105.82, "z": 46.61, "w": 3.0, "d": 6.5, "h": 7.0, "area": 1158}, {"id": "bld-grid-270", "x": -19.94, "z": 45.55, "w": 3.0, "d": 3.0, "h": 4.5, "area": 195}, {"id": "bld-grid-271", "x": -48.35, "z": 46.43, "w": 4.68, "d": 3.0, "h": 7.0, "area": 897}, {"id": "bld-grid-272", "x": 178.93, "z": 47.5, "w": 8.53, "d": 4.96, "h": 9.5, "area": 2729}, {"id": "bld-grid-273", "x": -53.26, "z": 46.55, "w": 3.74, "d": 3.0, "h": 7.0, "area": 768}, {"id": "bld-grid-274", "x": -64.13, "z": 46.61, "w": 4.21, "d": 3.0, "h": 7.0, "area": 800}, {"id": "bld-grid-275", "x": -58.52, "z": 46.61, "w": 3.74, "d": 3.0, "h": 7.0, "area": 736}, {"id": "bld-grid-276", "x": -80.37, "z": 47.44, "w": 3.97, "d": 4.14, "h": 7.0, "area": 933}, {"id": "bld-grid-277", "x": -74.94, "z": 46.73, "w": 3.86, "d": 3.0, "h": 7.0, "area": 747}, {"id": "bld-grid-278", "x": -69.62, "z": 46.67, "w": 3.74, "d": 3.0, "h": 7.0, "area": 694}, {"id": "bld-grid-279", "x": -113.39, "z": 46.96, "w": 3.62, "d": 3.0, "h": 7.0, "area": 719}, {"id": "bld-grid-280", "x": -107.84, "z": 46.9, "w": 3.97, "d": 3.0, "h": 7.0, "area": 795}, {"id": "bld-grid-281", "x": -97.03, "z": 46.85, "w": 4.09, "d": 3.0, "h": 7.0, "area": 805}, {"id": "bld-grid-282", "x": -85.81, "z": 46.85, "w": 3.86, "d": 3.0, "h": 7.0, "area": 759}, {"id": "bld-grid-283", "x": 134.51, "z": 47.14, "w": 3.0, "d": 3.31, "h": 4.5, "area": 283}, {"id": "bld-grid-284", "x": -91.42, "z": 46.9, "w": 3.86, "d": 3.0, "h": 7.0, "area": 726}, {"id": "bld-grid-285", "x": 66.9, "z": 46.67, "w": 3.0, "d": 3.0, "h": 4.5, "area": 210}, {"id": "bld-grid-286", "x": 73.62, "z": 47.14, "w": 3.0, "d": 3.0, "h": 4.5, "area": 157}, {"id": "bld-grid-287", "x": 39.72, "z": 49.62, "w": 20.45, "d": 6.38, "h": 12.0, "area": 8789}, {"id": "bld-grid-288", "x": 123.93, "z": 49.62, "w": 12.16, "d": 5.91, "h": 9.5, "area": 4376}, {"id": "bld-grid-289", "x": 77.42, "z": 48.62, "w": 5.61, "d": 3.43, "h": 7.0, "area": 1293}, {"id": "bld-grid-290", "x": 91.56, "z": 49.21, "w": 15.9, "d": 4.61, "h": 9.5, "area": 5299}, {"id": "bld-grid-291", "x": 165.6, "z": 49.27, "w": 3.0, "d": 3.0, "h": 4.5, "area": 168}, {"id": "bld-grid-292", "x": 66.84, "z": 48.8, "w": 3.0, "d": 3.0, "h": 4.5, "area": 111}, {"id": "bld-grid-293", "x": 196.34, "z": 50.63, "w": 3.0, "d": 4.61, "h": 4.5, "area": 39}, {"id": "bld-grid-294", "x": 146.02, "z": 50.57, "w": 14.26, "d": 3.78, "h": 9.5, "area": 3819}, {"id": "bld-grid-295", "x": 193.3, "z": 51.87, "w": 3.0, "d": 6.15, "h": 4.5, "area": 52}, {"id": "bld-grid-296", "x": 58.72, "z": 52.7, "w": 3.04, "d": 7.33, "h": 7.0, "area": 1257}, {"id": "bld-grid-297", "x": 69.23, "z": 50.98, "w": 4.68, "d": 3.0, "h": 7.0, "area": 776}, {"id": "bld-grid-298", "x": 73.5, "z": 51.45, "w": 3.39, "d": 3.0, "h": 4.5, "area": 426}, {"id": "bld-grid-299", "x": -47.0, "z": 53.46, "w": 3.39, "d": 3.9, "h": 7.0, "area": 751}, {"id": "bld-grid-300", "x": 100.91, "z": 53.94, "w": 10.29, "d": 4.85, "h": 9.5, "area": 2826}, {"id": "bld-grid-301", "x": -183.69, "z": 52.05, "w": 3.0, "d": 3.0, "h": 4.5, "area": 24}, {"id": "bld-grid-302", "x": -29.88, "z": 54.11, "w": 8.88, "d": 4.02, "h": 9.5, "area": 2028}, {"id": "bld-grid-303", "x": 25.58, "z": 54.05, "w": 5.49, "d": 3.9, "h": 7.0, "area": 1272}, {"id": "bld-grid-304", "x": -22.28, "z": 54.41, "w": 5.61, "d": 4.37, "h": 7.0, "area": 1656}, {"id": "bld-grid-305", "x": 178.11, "z": 54.17, "w": 5.49, "d": 3.9, "h": 7.0, "area": 1229}, {"id": "bld-grid-306", "x": -91.3, "z": 54.41, "w": 3.62, "d": 4.14, "h": 7.0, "area": 916}, {"id": "bld-grid-307", "x": 66.31, "z": 53.82, "w": 3.74, "d": 3.0, "h": 7.0, "area": 713}, {"id": "bld-grid-308", "x": -190.77, "z": 54.94, "w": 3.0, "d": 4.25, "h": 7.0, "area": 740}, {"id": "bld-grid-309", "x": -41.57, "z": 54.23, "w": 6.55, "d": 3.0, "h": 7.0, "area": 1139}, {"id": "bld-grid-310", "x": -181.53, "z": 54.65, "w": 11.57, "d": 3.19, "h": 9.5, "area": 2447}, {"id": "bld-grid-311", "x": -134.9, "z": 54.41, "w": 3.62, "d": 3.0, "h": 4.5, "area": 466}, {"id": "bld-grid-312", "x": 71.75, "z": 54.47, "w": 6.9, "d": 3.0, "h": 7.0, "area": 890}, {"id": "bld-grid-313", "x": -156.81, "z": 55.06, "w": 3.51, "d": 3.0, "h": 7.0, "area": 638}, {"id": "bld-grid-314", "x": -140.45, "z": 55.06, "w": 3.27, "d": 3.0, "h": 7.0, "area": 635}, {"id": "bld-grid-315", "x": -58.52, "z": 55.06, "w": 3.74, "d": 3.0, "h": 7.0, "area": 685}, {"id": "bld-grid-316", "x": -52.96, "z": 55.06, "w": 3.86, "d": 3.0, "h": 7.0, "area": 751}, {"id": "bld-grid-317", "x": -86.33, "z": 55.18, "w": 4.91, "d": 3.0, "h": 7.0, "area": 945}, {"id": "bld-grid-318", "x": -72.07, "z": 55.12, "w": 9.12, "d": 3.0, "h": 7.0, "area": 1737}, {"id": "bld-grid-319", "x": -63.83, "z": 55.12, "w": 3.62, "d": 3.0, "h": 7.0, "area": 679}, {"id": "bld-grid-320", "x": 21.49, "z": 54.94, "w": 3.0, "d": 3.0, "h": 4.5, "area": 276}, {"id": "bld-grid-321", "x": -80.31, "z": 55.3, "w": 3.62, "d": 3.0, "h": 7.0, "area": 622}, {"id": "bld-grid-322", "x": -118.77, "z": 55.89, "w": 3.62, "d": 3.55, "h": 7.0, "area": 871}, {"id": "bld-grid-323", "x": -102.29, "z": 55.47, "w": 6.9, "d": 3.0, "h": 7.0, "area": 1271}, {"id": "bld-grid-324", "x": -96.91, "z": 55.41, "w": 3.86, "d": 3.0, "h": 7.0, "area": 712}, {"id": "bld-grid-325", "x": -129.7, "z": 55.59, "w": 3.97, "d": 3.0, "h": 7.0, "area": 773}, {"id": "bld-grid-326", "x": -124.2, "z": 55.65, "w": 3.51, "d": 3.0, "h": 7.0, "area": 689}, {"id": "bld-grid-327", "x": -113.16, "z": 55.59, "w": 4.32, "d": 3.0, "h": 7.0, "area": 834}, {"id": "bld-grid-328", "x": -107.78, "z": 55.53, "w": 3.86, "d": 3.0, "h": 7.0, "area": 700}, {"id": "bld-grid-329", "x": -167.68, "z": 55.89, "w": 4.21, "d": 3.0, "h": 7.0, "area": 864}, {"id": "bld-grid-330", "x": -172.88, "z": 56.0, "w": 4.79, "d": 3.0, "h": 7.0, "area": 902}, {"id": "bld-grid-331", "x": -162.54, "z": 56.06, "w": 3.74, "d": 3.0, "h": 7.0, "area": 700}, {"id": "bld-grid-332", "x": 41.12, "z": 56.36, "w": 3.16, "d": 3.0, "h": 4.5, "area": 562}, {"id": "bld-grid-333", "x": 71.75, "z": 55.65, "w": 6.9, "d": 3.0, "h": 4.5, "area": 183}, {"id": "bld-grid-334", "x": 196.11, "z": 59.85, "w": 3.0, "d": 5.79, "h": 4.5, "area": 49}, {"id": "bld-grid-335", "x": 193.07, "z": 60.85, "w": 3.0, "d": 3.78, "h": 4.5, "area": 32}, {"id": "bld-grid-336", "x": 167.47, "z": 62.15, "w": 8.3, "d": 3.0, "h": 4.5, "area": 558}];

function buildBuildings() {
  // 1. Build Campus Infrastructure aligned 1:1 to Drone Photograph (Roads, Canals, Lotus Pond, Trees, Highway)
  const infra = createGistdaInfrastructure();
  buildingsGroup.add(infra);

  // 2. Build Ancillary Buildings & Footprints from Drone Mapping (336 Buildings)
  const minorBldMat = new THREE.MeshStandardMaterial({
    color: 0xF1ECE1, // Maps3D warm ivory
    roughness: 0.45,
    metalness: 0.08
  });
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x64748b, linewidth: 1.5 });

    DRONE_ALIGNED_BUILDINGS.forEach(b => {
    // Exclude outside campus fence bounds
    if (b.x < -160 || b.x > 188 || b.z < -52 || b.z > 54) return;

    // Do NOT allow any building on the stadium or athletic field
    if (b.x >= -165 && b.x <= -102 && b.z >= -22 && b.z <= 42) return;

    // Do NOT allow any building on the central Thai house pond
    if (Math.sqrt(b.x * b.x + (b.z - 8.0) * (b.z - 8.0)) < 16.0) return;

    // Do NOT allow any building near major landmarks
    const isNearLandmark = HOSPITAL_BUILDINGS.some(lm => {
      const dx = lm.pos.x - b.x;
      const dz = lm.pos.z - b.z;
      const minDist = (lm.id === 'bld-1' || lm.id === 'bld-10' ? 24.0 : 16.0);
      return Math.sqrt(dx * dx + dz * dz) < minDist;
    });

    if (!isNearLandmark) {
      const bGroup = new THREE.Group();
      bGroup.position.set(b.x, 0, b.z);
      const towerGeo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const tower = new THREE.Mesh(towerGeo, minorBldMat);
      tower.position.set(0, b.h / 2, 0);
      tower.castShadow = true;
      tower.receiveShadow = true;
      bGroup.add(tower);

      const edges = new THREE.EdgesGeometry(towerGeo);
      const wire = new THREE.LineSegments(edges, edgeMat);
      wire.position.copy(tower.position);
      bGroup.add(wire);

      buildingsGroup.add(bGroup);
    }
  });

  // 3. Build 3D Models for ALL Major Campus Landmarks with 1:1 Architectural Precision
  HOSPITAL_BUILDINGS.forEach(bld => {
    const bGroup = new THREE.Group();
    bGroup.position.set(bld.pos.x, 0, bld.pos.z);
    bGroup.rotation.y = bld.rotY || 0;
    bGroup.userData = bld;

    if (bld.id === 'bld-1') {
      // Landmark 1: หอประชุม 80 ปี (1:1 Architectural Precision)
      const mesh = createAuditorium80Mesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-10') {
      // Landmark 10: อาคารเรียนรวมทิศใต้ 9 ชั้น (1:1 West Wing + Chillers + Parking)
      const mesh = createBuilding10Mesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-2') {
      // Landmark 2: อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB 100)
      const mesh = createSPB100Mesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-8') {
      // Landmark 8: พระอนุสาวรีย์สมเด็จเจ้าฟ้าวไลยอลงกรณ์ฯ
      const mesh = createMonumentMesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-36') {
      // Landmark 36: เรือนเจ้าฟ้า (เรือนไทยวไลยอลงกรณ์)
      const mesh = createThaiPavilionMesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-57') {
      // Landmark 57: สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ (ลู่วิ่ง 400 ม. + อัฒจันทร์)
      const mesh = createStadiumMesh();
      bGroup.add(mesh);
    } else if (bld.id === 'bld-5') {
      // Landmark 5: ศูนย์ส่งเสริมสุขภาพ & สระว่ายน้ำ 50 ม.
      const mesh = createHealthPoolMesh();
      bGroup.add(mesh);
    } else {
      // GISTDA GeoTwin LOD1 Model for all other faculties, dorms, and campus facilities
      const mesh = createGistdaLOD1Mesh(bld);
      bGroup.add(mesh);
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

function boot() {
  initProceduralTextures();
  initScene();
  animate();

  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hide');
      setTimeout(() => { loading.style.display = 'none'; }, 400);
    }, 500);
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
