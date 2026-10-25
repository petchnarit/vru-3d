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
    archType: 'hotel', pos: { x: 180.37, y: 0, z: -23.79 }, rotY: 0, anchorHeight: 16,
    dimensions: { w: 17.0, h: 12.0, d: 4.8 }, roofColor: 0x334155, accentColor: 0x059669,
    floors: [{ num: 4, desc: 'ห้องพักรับรองพิเศษ' }, { num: 3, desc: 'ห้องพักสัมมนา' }, { num: 2, desc: 'ห้องจัดเลี้ยง' }, { num: 1, desc: 'ล็อบบี้ต้อนรับ' }]
  },
  {
    id: 'bld-4', num: '4', name: '4. VRU Green Community Mall', shortName: '4',
    sub: 'ศูนย์รวมร้านค้า ร้านอาหาร สหกรณ์ และพื้นที่บริการชุมชนริมถนนพหลโยธิน',
    category: 'อาคารบริการและสวัสดิการ', status: 'เปิดบริการ 07:00 - 20:00 น.',
    archType: 'mall', pos: { x: 186.28, y: 0, z: 49.36 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 8.87, h: 6.0, d: 5.36 }, roofColor: 0x475569, accentColor: 0x10b981,
    floors: [{ num: 2, desc: 'Co-Working Space' }, { num: 1, desc: 'ศูนย์อาหารและร้านค้า' }]
  },
  {
    id: 'bld-5', num: '5', name: '5. อาคารศูนย์ส่งเสริมสุขภาพ / สระว่ายน้ำ', shortName: '5',
    sub: 'สระว่ายน้ำอวยพร เปล่งวานิช ขนาด 50 เมตร และศูนย์ฟิตเนสออกกำลังกาย',
    category: 'ศูนย์กีฬาและสุขภาพ', status: 'เปิดบริการ 06:00 - 20:00 น.',
    archType: 'pool', pos: { x: 155.62, y: 0, z: -24.9 }, rotY: 0, anchorHeight: 7,
    dimensions: { w: 12.93, h: 4.5, d: 7.39 }, roofColor: 0x0284c7, accentColor: 0x0284c7,
    floors: [{ num: 1, desc: 'สระว่ายน้ำ 50 เมตรและศูนย์ฟิตเนส' }]
  },
  {
    id: 'bld-8', num: '8', name: '8. พระอนุสาวรีย์เจ้าฟ้าวไลยอลงกรณ์ฯ', shortName: '8',
    sub: 'พระอนุสาวรีย์สมเด็จพระราชปิตุจฉา เจ้าฟ้าวไลยอลงกรณ์ กรมหลวงเพชรบุรีราชสิรินธร',
    category: 'อนุสาวรีย์และสิ่งศักดิ์สิทธิ์', status: 'เปิดสักการะตลอดวัน',
    archType: 'monument', pos: { x: 175.2, y: 0, z: 14.82 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 4.99, h: 5.0, d: 4.99 }, roofColor: 0xfbbf24, accentColor: 0xf59e0b,
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
    archType: 'box', pos: { x: 97.98, y: 0, z: 6.13 }, rotY: 0, anchorHeight: 11,
    dimensions: { w: 13.3, h: 8.0, d: 8.68 }, roofColor: 0x334155, accentColor: 0x38bdf8,
    floors: [{ num: 2, desc: 'อัฒจันทร์ในร่ม' }, { num: 1, desc: 'สนามแข่งขันในร่ม' }]
  },
  {
    id: 'bld-12', num: '12', name: '12. อาคาร 75 ปี วไลยอลงกรณ์ (ศูนย์ภาษา)', shortName: '12',
    sub: 'สถาบันภาษา ศูนย์การเรียนรู้ภาษาต่างประเทศและห้องปฏิบัติการคอมพิวเตอร์',
    category: 'อาคารเรียนและภาษา', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 76.92, y: 0, z: 17.96 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 15.15, h: 10.0, d: 4.43 }, roofColor: 0x334155, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ศูนย์ภาษา' }, { num: 3, desc: 'ห้อง Lab ภาษา' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'ประชาสัมพันธ์' }]
  },
  {
    id: 'bld-13', num: '13', name: '13. อาคารศูนย์วิทยาศาสตร์ (SCB)', shortName: '13',
    sub: 'ศูนย์ปฏิบัติการวิทยาศาสตร์ เครื่องมือวิเคราะห์ขั้นสูง และห้องแล็บวิจัย',
    category: 'อาคารวิทยาศาสตร์และวิจัย', status: 'เปิดทำการ 08:30 - 17:00 น.',
    archType: 'box', pos: { x: 37.02, y: 0, z: -8.65 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 12.56, h: 10.0, d: 8.87 }, roofColor: 0x1e293b, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องปฏิบัติการเคมี' }, { num: 3, desc: 'ห้องปฏิบัติการฟิสิกส์' }, { num: 2, desc: 'ห้องชีววิทยา' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-14', num: '14', name: '14. อาคารเรียนคณะเทคโนโลยีการเกษตร', shortName: '14',
    sub: 'อาคารเรียนและห้องปฏิบัติการเทคโนโลยีการผลิตพืชและสัตว์',
    category: 'อาคารเรียนและเกษตร', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 31.11, y: 0, z: -35.99 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 24.38, h: 9.0, d: 9.42 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องเรียน' }, { num: 2, desc: 'ห้องพักอาจารย์' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-15', num: '15', name: '15. คณะเทคโนโลยีการเกษตร (FAT)', shortName: '15',
    sub: 'สำนักงานคณบดีคณะเทคโนโลยีการเกษตร และศูนย์วิจัยแปรรูปผลผลิตทางการเกษตร',
    category: 'สำนักงานคณะและวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 43.67, y: 0, z: 17.96 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 13.67, h: 9.0, d: 5.73 }, roofColor: 0x166534, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องประชุมคณะ' }, { num: 1, desc: 'บริการวิชาการ' }]
  },
  {
    id: 'bld-16', num: '16', name: '16. อาคารเรียนคณะครุศาสตร์', shortName: '16',
    sub: 'อาคารเรียนรวมคณะครุศาสตร์ ศูนย์พัฒนาวิชาชีพครู (ปีกทิศเหนือ)',
    category: 'อาคารเรียนและฝึกอบรม', status: 'เปิดทำการ 08:00 - 17:00 น.',
    archType: 'box', pos: { x: 55.86, y: 0, z: 29.41 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 19.95, h: 10.0, d: 4.62 }, roofColor: 0x991b1b, accentColor: 0xdc2626,
    floors: [{ num: 4, desc: 'ห้องเรียนรวม' }, { num: 3, desc: 'ห้องบรรยาย' }, { num: 2, desc: 'ห้องปฏิบัติการสอน' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-17', num: '17', name: '17. คณะครุศาสตร์ (FE)', shortName: '17',
    sub: 'สำนักงานคณบดีคณะครุศาสตร์ คณะแห่งแรกและประวัติศาสตร์ของมหาวิทยาลัย (ปีกทิศใต้)',
    category: 'สำนักงานคณะ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 84.31, y: 0, z: 36.06 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 16.26, h: 10.0, d: 4.06 }, roofColor: 0x7f1d1d, accentColor: 0xdc2626,
    floors: [{ num: 4, desc: 'สำนักงานคณบดี' }, { num: 3, desc: 'ห้องประชุมครุศาสตร์' }, { num: 2, desc: 'ฝ่ายวิชาการ' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-18', num: '18', name: '18. อาคารกองพัฒนานักศึกษา', shortName: '18',
    sub: 'กองพัฒนานักศึกษา, องค์การบริหารนักศึกษา, กองทุน กยศ., และงานแนะแนว',
    category: 'อาคารบริการนักศึกษา', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 97.98, y: 0, z: 17.4 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 11.82, h: 9.0, d: 9.05 }, roofColor: 0x047857, accentColor: 0x059669,
    floors: [{ num: 3, desc: 'งานกองทุน กยศ.' }, { num: 2, desc: 'องค์การนักศึกษา' }, { num: 1, desc: 'จุดบริการนักศึกษา' }]
  },
  {
    id: 'bld-19', num: '19', name: '19. คณะวิทยาศาสตร์และเทคโนโลยี (FST)', shortName: '19',
    sub: 'สำนักงานคณบดีและอาคารเรียนคณะวิทยาศาสตร์และเทคโนโลยี อาคารแนวยาวฝั่งทิศเหนือ',
    category: 'สำนักงานคณะและวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 51.06, y: 0, z: -23.24 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 49.51, h: 10.0, d: 7.02 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'สำนักงานคณบดี' }, { num: 3, desc: 'ห้องปฏิบัติการคอมพิวเตอร์' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-20', num: '20', name: '20. อาคารพยาบาล และร้านค้า', shortName: '20',
    sub: 'ศูนย์บริการสาธารณสุขและพยาบาลปฐมพยาบาล ร้านสะดวกซื้อ และตู้บริการอัตโนมัติ',
    category: 'อาคารบริการสุขภาพและชุมชน', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 64.36, y: 0, z: -1.07 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 15.52, h: 5.0, d: 3.33 }, roofColor: 0x0284c7, accentColor: 0x0ea5e9,
    floors: [{ num: 2, desc: 'ห้องพักฟื้นและปฐมพยาบาล' }, { num: 1, desc: 'ร้านค้าสะดวกซื้อ' }]
  },
  {
    id: 'bld-23', num: '23', name: '23. อาคาร 60 ปี วไลยอลงกรณ์', shortName: '23',
    sub: 'อาคาร 60 ปี วไลยอลงกรณ์ และศูนย์ฝึกปฏิบัติการคหกรรมศาสตร์',
    category: 'อาคารเรียนและปฏิบัติการ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: 33.69, y: 0, z: -1.44 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 16.63, h: 9.0, d: 7.02 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องปฏิบัติการคหกรรม' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงนิทรรศการ' }]
  },
  {
    id: 'bld-28', num: '28', name: '28. คณะวิทยาการจัดการ (FMS)', shortName: '28',
    sub: 'สำนักงานคณบดีและอาคารเรียนคณะวิทยาการจัดการ หลังคาสีแดงส้มฝั่งตะวันตก',
    category: 'สำนักงานคณะและเรียนรวม', status: 'เปิดทำการ 08:00 - 18:00 น.',
    archType: 'box', pos: { x: -50.91, y: 0, z: -5.5 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 6.47, h: 9.0, d: 6.28 }, roofColor: 0x991b1b, accentColor: 0xdc2626,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องเรียน MBA' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-29', num: '29', name: '29. อาคารเรียนรวมวิทยาศาสตร์ (SCC2)', shortName: '29',
    sub: 'อาคารเรียนรวมวิทยาศาสตร์ SCC2 และห้องปฏิบัติการพื้นฐาน',
    category: 'อาคารเรียนรวม', status: 'เปิดทำการ 08:00 - 17:00 น.',
    archType: 'box', pos: { x: -0.67, y: 0, z: -0.15 }, rotY: 0, anchorHeight: 12,
    dimensions: { w: 7.2, h: 9.0, d: 7.76 }, roofColor: 0x334155, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องบรรยาย' }, { num: 3, desc: 'ห้องปฏิบัติการ' }, { num: 2, desc: 'ห้องเรียน' }, { num: 1, desc: 'โถงอาคาร' }]
  },
  {
    id: 'bld-30', num: '30', name: '30. โรงเรียนสาธิตฯ (ฝ่ายมัธยม)', shortName: '30',
    sub: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ (ฝ่ายมัธยม)',
    category: 'โรงเรียนสาธิต', status: 'เปิดทำการ 07:30 - 16:30 น.',
    archType: 'box', pos: { x: -80.84, y: 0, z: 36.8 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 9.61, h: 10.0, d: 6.28 }, roofColor: 0x166534, accentColor: 0x16a34a,
    floors: [{ num: 3, desc: 'ห้องเรียนมัธยมปลาย' }, { num: 2, desc: 'ห้องเรียนมัธยมต้น' }, { num: 1, desc: 'สำนักงานโรงเรียน' }]
  },
  {
    id: 'bld-31', num: '31', name: '31. สำนักวิทยบริการและเทคโนโลยีสารสนเทศ (หอสมุดกลาง)', shortName: '31',
    sub: 'หอสมุดกลาง อาคารหลังคาสีส้มพีชริมสระน้ำใหญ่ Co-Working Space ศูนย์การเรียนรู้ดิจิทัล',
    category: 'อาคารหอสมุดและวิทยบริการ', status: 'เปิดบริการ 08:00 - 20:00 น.',
    archType: 'box', pos: { x: -5.47, y: 0, z: 41.23 }, rotY: 0, anchorHeight: 16,
    dimensions: { w: 11.82, h: 13.0, d: 14.41 }, roofColor: 0xea580c, accentColor: 0xf97316,
    floors: [{ num: 4, desc: 'ห้องศึกษาค้นคว้าเดี่ยว' }, { num: 3, desc: 'คลังหนังสือวิชาการ' }, { num: 2, desc: 'ห้องบริการมัลติมีเดีย' }, { num: 1, desc: 'โถงยืม-คืนหนังสือ' }]
  },
  {
    id: 'bld-36', num: '36', name: '36. เรือนเจ้าฟ้า (เรือนไทยวไลยอลงกรณ์)', shortName: '36',
    sub: 'เรือนไทยไม้สักประยุกต์ ศูนย์อนุรักษ์ศิลปวัฒนธรรม ตั้งตระหง่านกลางสระน้ำใหญ่',
    category: 'อาคารอนุรักษ์ศิลปวัฒนธรรม', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'thaiPavilion', pos: { x: -21.17, y: 0, z: -0.15 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 6.65, h: 6.5, d: 6.65 }, roofColor: 0xb45309, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ชานเรือนและหอจัดแสดงพระราชประวัติ' }, { num: 1, desc: 'ใต้ถุนเรือนไทยริมสระบัว' }]
  },
  {
    id: 'bld-37', num: '37', name: '37. อาคารฝ่ายยานพาหนะ', shortName: '37',
    sub: 'ฝ่ายยานพาหนะ โรงจอดรถรางไฟฟ้า และศูนย์ซ่อมบำรุงรถส่วนกลาง',
    category: 'อาคารบริการและยานพาหนะ', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -19.14, y: 0, z: 31.63 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 11.08, h: 5.5, d: 8.31 }, roofColor: 0x475569, accentColor: 0x64748b,
    floors: [{ num: 2, desc: 'สำนักงานฝ่ายยานพาหนะ' }, { num: 1, desc: 'โรงจอดรถและสถานีชาร์จ EV' }]
  },
  {
    id: 'bld-38', num: '38', name: '38. อาคารปฏิบัติการเทคโนโลยีอุตสาหกรรม', shortName: '38',
    sub: 'อาคารปฏิบัติการทางวิศวกรรม โรงประลองเครื่องกล ไฟฟ้า และยานยนต์',
    category: 'โรงประลองและปฏิบัติการ', status: 'เปิดทำการ 08:30 - 17:00 น.',
    archType: 'box', pos: { x: -35.76, y: 0, z: 2.62 }, rotY: 0, anchorHeight: 10,
    dimensions: { w: 11.08, h: 7.0, d: 3.51 }, roofColor: 0x9a3412, accentColor: 0xc2410c,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการ CAD/CAM' }, { num: 1, desc: 'โรงประลองเครื่องกล' }]
  },
  {
    id: 'bld-39', num: '39', name: '39. คณะเทคโนโลยีอุตสาหกรรม (FIT)', shortName: '39',
    sub: 'สำนักงานคณบดีคณะเทคโนโลยีอุตสาหกรรม และห้องปฏิบัติการวิศวกรรม',
    category: 'สำนักงานคณะและวิศวกรรม', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -35.39, y: 0, z: 17.59 }, rotY: 0, anchorHeight: 13,
    dimensions: { w: 12.19, h: 10.0, d: 4.25 }, roofColor: 0x7c2d12, accentColor: 0xc2410c,
    floors: [{ num: 3, desc: 'สำนักงานคณบดี' }, { num: 2, desc: 'ห้องปฏิบัติการไฟฟ้า' }, { num: 1, desc: 'โถงกิจกรรม' }]
  },
  {
    id: 'bld-40', num: '40', name: '40. หอพักโกเมน', shortName: '40',
    sub: 'หอพักนักศึกษาหญิงในกำกับมหาวิทยาลัย (อาคารโกเมน แถวกลางเหนือ)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -105.59, y: 0, z: -0.33 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 28.08, h: 12.0, d: 5.17 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับและร้านสะดวกซื้อ' }]
  },
  {
    id: 'bld-41', num: '41', name: '41. หอพักเพทาย', shortName: '41',
    sub: 'หอพักนักศึกษาหญิงในกำกับมหาวิทยาลัย (อาคารเพทาย แถวกลางใต้)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -104.85, y: 0, z: 6.69 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 28.82, h: 12.0, d: 4.8 }, roofColor: 0xd97706, accentColor: 0xf59e0b,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-42', num: '42', name: '42. ยิมเนเซียม 2', shortName: '42',
    sub: 'อาคารพลศึกษาและสนามกีฬาในร่ม 2 ศูนย์ฝึกซ้อมนักกีฬา',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 08:00 - 21:00 น.',
    archType: 'box', pos: { x: -99.31, y: 0, z: -18.25 }, rotY: 0, anchorHeight: 10,
    dimensions: { w: 8.5, h: 7.5, d: 12.56 }, roofColor: 0x0284c7, accentColor: 0x0284c7,
    floors: [{ num: 2, desc: 'อัฒจันทร์' }, { num: 1, desc: 'สนามฝึกซ้อม' }]
  },
  {
    id: 'bld-43', num: '43', name: '43. หอพักนักศึกษา 1', shortName: '43',
    sub: 'หอพักนักศึกษา อาคาร 1 (แถวบนสุด ทิศเหนือ)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -104.48, y: 0, z: -6.8 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 11.82, h: 12.0, d: 4.06 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-44', num: '44', name: '44. หอพักนักศึกษา 2', shortName: '44',
    sub: 'หอพักนักศึกษา อาคาร 2 (แถวล่าง ฝั่งทิศตะวันตก)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -126.65, y: 0, z: -0.52 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 6.28, h: 12.0, d: 4.25 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-45', num: '45', name: '45. หอพักนักศึกษา 3', shortName: '45',
    sub: 'หอพักนักศึกษา อาคาร 3 (แถวล่าง ฝั่งทิศตะวันออก)',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -126.65, y: 0, z: 12.6 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 6.28, h: 12.0, d: 4.25 }, roofColor: 0xf8fafc, accentColor: 0x0284c7,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงบริการ' }]
  },
  {
    id: 'bld-49', num: '49', name: '49. หอพักนักศึกษานานาชาติ', shortName: '49',
    sub: 'หอพักนักศึกษานานาชาติและนักศึกษาโครงการพิเศษ',
    category: 'หอพักนักศึกษา', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -104.11, y: 0, z: 19.06 }, rotY: 0, anchorHeight: 15,
    dimensions: { w: 11.45, h: 12.0, d: 4.25 }, roofColor: 0x475569, accentColor: 0x0ea5e9,
    floors: [{ num: 4, desc: 'ห้องพักชั้น 4' }, { num: 3, desc: 'ห้องพักชั้น 3' }, { num: 2, desc: 'ห้องพักชั้น 2' }, { num: 1, desc: 'โถงต้อนรับ' }]
  },
  {
    id: 'bld-53', num: '53', name: '53. ศูนย์ อพ.สธ.', shortName: '53',
    sub: 'ศูนย์ประสานงานโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ (อพ.สธ.)',
    category: 'ศูนย์อนุรักษ์และวิจัย', status: 'เปิดทำการ 08:30 - 16:30 น.',
    archType: 'box', pos: { x: -168.21, y: 0, z: -14.93 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 7.02, h: 6.5, d: 5.17 }, roofColor: 0x15803d, accentColor: 0x16a34a,
    floors: [{ num: 2, desc: 'ห้องปฏิบัติการเพาะเลี้ยงเนื้อเยื่อ' }, { num: 1, desc: 'ศูนย์เรียนรู้พันธุ์พืช' }]
  },
  {
    id: 'bld-55', num: '55', name: '55. Valaya Hub & Resort', shortName: '55',
    sub: 'Valaya Hub ศูนย์นวัตกรรมการเรียนรู้และที่พักรีสอร์ทเพื่อการศึกษา',
    category: 'ศูนย์การเรียนรู้และที่พัก', status: 'เปิดบริการ 24 ชั่วโมง',
    archType: 'box', pos: { x: -187.98, y: 0, z: 53.05 }, rotY: 0, anchorHeight: 9,
    dimensions: { w: 11.82, h: 6.0, d: 3.51 }, roofColor: 0x92400e, accentColor: 0xd97706,
    floors: [{ num: 2, desc: 'ห้องพักรับรอง' }, { num: 1, desc: 'Co-Working Space & Cafe' }]
  },
  {
    id: 'bld-57', num: '57', name: '57. สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ', shortName: '57',
    sub: 'สนามฟุตบอลหญ้าจริง ลู่วิ่งสังเคราะห์มาตรฐาน 400 เมตร 8 ลู่ และอัฒจันทร์ประธาน',
    category: 'สนามกีฬาและนันทนาการ', status: 'เปิดบริการ 06:00 - 21:00 น.',
    archType: 'stadium', pos: { x: -153.25, y: 0, z: 3.73 }, rotY: 0, anchorHeight: 8,
    dimensions: { w: 27.71, h: 4.0, d: 46.18 }, roofColor: 0xc2410c, accentColor: 0x16a34a,
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

// --- Realistic Architectural Building Generator (LOD2+ with Real Roofs & Solar Panels) ---

// Mathematically Pure 3D Hip Roof Geometry Generator (ทรงปั้นหยาสมจริง ไร้กรวยแหลม)
function createHipRoofGeometry(w, d, h) {
  const hw = w / 2;
  const hd = d / 2;
  // Ridge runs along the longer axis
  const isWide = w >= d;
  const ridgeHalf = isWide ? Math.max(0.2, hw - hd * 0.85) : Math.max(0.2, hd - hw * 0.85);

  // 4 base corners (y=0) + 2 ridge vertices (y=h)
  // Base: 0:(-hw,0,-hd), 1:(hw,0,-hd), 2:(hw,0,hd), 3:(-hw,0,hd)
  let r0, r1;
  if (isWide) {
    r0 = [-ridgeHalf, h, 0];
    r1 = [ ridgeHalf, h, 0];
  } else {
    r0 = [0, h, -ridgeHalf];
    r1 = [0, h,  ridgeHalf];
  }

  const v0 = [-hw, 0, -hd];
  const v1 = [ hw, 0, -hd];
  const v2 = [ hw, 0,  hd];
  const v3 = [-hw, 0,  hd];

  const positions = [];
  function addTri(a, b, c) {
    positions.push(...a, ...b, ...c);
  }

  if (isWide) {
    // North slope (v0, r0, r1, v1)
    addTri(v0, r1, r0);
    addTri(v0, v1, r1);
    // South slope (v3, v2, r1, r0)
    addTri(v3, r0, r1);
    addTri(v3, r1, v2);
    // West hip triangle (v0, r0, v3)
    addTri(v0, r0, v3);
    // East hip triangle (v1, v2, r1)
    addTri(v1, v2, r1);
  } else {
    // West slope (v0, v3, r1, r0)
    addTri(v0, r0, r1);
    addTri(v0, r1, v3);
    // East slope (v1, r0, r1, v2)
    addTri(v1, r1, r0);
    addTri(v1, v2, r1);
    // North hip triangle (v0, v1, r0)
    addTri(v0, v1, r0);
    // South hip triangle (v3, r1, v2)
    addTri(v3, r1, v2);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.computeVertexNormals();
  return geo;
}

function createGistdaLOD1Mesh(bld) {
  const group = new THREE.Group();
  const w = bld.dimensions.w;
  const h = bld.dimensions.h;
  const d = bld.dimensions.d;
  const numFloors = Math.max(1, Math.round(h / 3.2));
  const floorHeight = h / numFloors;
  const podiumH = 0.6;

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.38,
    metalness: 0.05
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: bld.accentColor || 0x334155,
    roughness: 0.45,
    metalness: 0.15
  });
  const roofColorHex = bld.roofColor || 0x334155;
  const roofTileMat = new THREE.MeshStandardMaterial({
    color: roofColorHex,
    roughness: 0.42,
    metalness: 0.18
  });
  const solarMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.15,
    metalness: 0.85
  });

  // 1. Concrete Foundation Podium
  const podium = new THREE.Mesh(new THREE.BoxGeometry(w + 0.8, podiumH, d + 0.8), gistdaConcreteMat);
  podium.position.set(0, podiumH / 2, 0);
  podium.receiveShadow = true;
  group.add(podium);

  // 2. Main Architectural Building Mass
  const tower = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
  tower.position.set(0, podiumH + h / 2, 0);
  tower.castShadow = true;
  tower.receiveShadow = true;
  group.add(tower);

  // 3. Detailed Windows, Sunshades, and Vertical Columns
  for (let f = 1; f <= numFloors; f++) {
    const floorY = podiumH + (f - 1) * floorHeight;
    const winY = floorY + floorHeight * 0.55;

    // Tinted Glass Windows (North & South)
    const winN = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, floorHeight * 0.46, 0.14), gistdaGlassMat);
    winN.position.set(0, winY, -d / 2 - 0.03);
    group.add(winN);

    const winS = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, floorHeight * 0.46, 0.14), gistdaGlassMat);
    winS.position.set(0, winY, d / 2 + 0.03);
    group.add(winS);

    // East & West Windows
    const winE = new THREE.Mesh(new THREE.BoxGeometry(0.14, floorHeight * 0.46, d * 0.82), gistdaGlassMat);
    winE.position.set(w / 2 + 0.03, winY, 0);
    group.add(winE);

    const winW = new THREE.Mesh(new THREE.BoxGeometry(0.14, floorHeight * 0.46, d * 0.82), gistdaGlassMat);
    winW.position.set(-w / 2 - 0.03, winY, 0);
    group.add(winW);

    // Horizontal Sunshade Overhangs / Floor Slabs
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w + 0.35, 0.22, d + 0.35), gistdaConcreteMat);
    slab.position.set(0, floorY + floorHeight, 0);
    group.add(slab);
  }

  // Vertical Structural Pilasters along Facade
  const colStep = Math.max(3.5, w / 6);
  for (let x = -w / 2 + 1.2; x <= w / 2 - 1.2; x += colStep) {
    for (let side of [-1, 1]) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.32, h, 0.28), wallMat);
      col.position.set(x, podiumH + h / 2, side * (d / 2 + 0.08));
      group.add(col);
    }
  }

  // 4. Realistic Roof Architecture (Pitched Hip/Gable Roof vs Modern Flat Deck)
  const roofY = podiumH + h;
  const isPitched = (roofColorHex !== 0xf8fafc && roofColorHex !== 0x94a3b8 && roofColorHex !== 0x475569 && roofColorHex !== 0x334155);

  if (isPitched) {
    // Traditional Thai University Pitched Hip Roof with Eave Overhang (ทรงปั้นหยาสมจริง)
    const eaveW = w + 1.0;
    const eaveD = d + 1.0;
    const eaveBase = new THREE.Mesh(new THREE.BoxGeometry(eaveW, 0.25, eaveD), accentMat);
    eaveBase.position.set(0, roofY + 0.125, 0);
    group.add(eaveBase);

    const ridgeH = Math.min(2.8, Math.max(1.4, Math.min(w, d) * 0.22));
    const hipGeo = createHipRoofGeometry(eaveW, eaveD, ridgeH);
    const hipRoof = new THREE.Mesh(hipGeo, roofTileMat);
    hipRoof.position.set(0, roofY + 0.25, 0);
    hipRoof.castShadow = true;
    hipRoof.receiveShadow = true;
    group.add(hipRoof);
  } else {
    // Modern Flat Roof with Parapet, Colored Deck, Penthouse & Solar Panels
    const parapet = new THREE.Mesh(new THREE.BoxGeometry(w, 0.75, d), accentMat);
    parapet.position.set(0, roofY + 0.38, 0);
    group.add(parapet);

    const deck = new THREE.Mesh(new THREE.BoxGeometry(w - 0.5, 0.15, d - 0.5), roofTileMat);
    deck.position.set(0, roofY + 0.42, 0);
    group.add(deck);

    // Elevator Penthouse
    const pentW = Math.min(w * 0.3, 4.8);
    const pentD = Math.min(d * 0.35, 3.8);
    const pentH = 2.4;
    const penthouse = new THREE.Mesh(new THREE.BoxGeometry(pentW, pentH, pentD), wallMat);
    penthouse.position.set(w * 0.18, roofY + pentH / 2 + 0.4, -d * 0.15);
    penthouse.castShadow = true;
    group.add(penthouse);

    // Rooftop Solar PV Panels
    if (w >= 14) {
      for (let rz of [-d * 0.2, d * 0.15]) {
        const pv = new THREE.Mesh(new THREE.BoxGeometry(w * 0.45, 0.15, 1.8), solarMat);
        pv.position.set(-w * 0.15, roofY + 0.65, rz);
        pv.rotation.x = 0.22;
        group.add(pv);
      }
    }
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
  const trackW = 26.6;
  const trackD = 46.2;

  // Invisible click hitbox on the field for raycasting
  const hitGeo = new THREE.PlaneGeometry(trackW, trackD);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const hitMesh = new THREE.Mesh(hitGeo, hitMat);
  hitMesh.rotation.x = -Math.PI / 2;
  hitMesh.position.y = 0.05;
  group.add(hitMesh);

  // 1. Covered Grandstand on West Side (-X) exactly over real grandstand in drone photo (X=-168.2, Z=7.8)
  const standW = 3.8;
  const standD = 16.0;
  const standH = 5.5;
  const stand = new THREE.Mesh(new THREE.BoxGeometry(standW, standH, standD), gistdaConcreteMat);
  stand.position.set(-14.9, standH / 2, 4.0);
  stand.castShadow = true;
  group.add(stand);

  // Grandstand Cantilever Roof (Green roof matching drone photo)
  const standRoofMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.45, metalness: 0.15 });
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(standW + 1.8, 0.4, standD + 1.0), standRoofMat);
  canopy.position.set(-14.2, standH + 0.6, 4.0);
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

  // NOTE: All campus roads, highway lanes, parking lots, and agricultural paddy fields
  // are already present in crystal-clear 4K resolution on the aerial drone orthophoto!
  // We do NOT cover them with artificial gray/green polygons so the real drone photo is 100% visible!

  // 1. North Drainage Canal (คลองเชียงรากน้อย - Translucent water reflection)
  const canalW = 4.5;
  const canalL = 340.0;
  const canalWaterMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    roughness: 0.1,
    metalness: 0.85,
    transparent: true,
    opacity: 0.45
  });
  const canalWater = new THREE.Mesh(new THREE.BoxGeometry(canalL, 0.1, canalW), canalWaterMat);
  canalWater.position.set(15.0, 0.05, -49.5);
  infraGroup.add(canalWater);

  // 2. Natural Rectangular Pond at Central Campus (สระน้ำใหญ่เรือนเจ้าฟ้า - Subtle water shimmer)
  const pond = new THREE.Mesh(new THREE.BoxGeometry(16.6, 0.08, 46.2), canalWaterMat);
  pond.position.set(-15.3, 0.04, -1.8);
  infraGroup.add(pond);

  // 3. Realistic Multi-Tiered 3D Trees placed on real greenery
  const foliageDarkMat = new THREE.MeshStandardMaterial({ color: 0x1b4d20, roughness: 0.85 });
  const foliageMidMat  = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.8 });
  const foliageLightMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.8 });
  const flameFlowerMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.7 }); // ต้นหางนกยูงฝรั่ง
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 });

  const sphereGeo1 = new THREE.DodecahedronGeometry(1.8, 1);
  const sphereGeo2 = new THREE.DodecahedronGeometry(1.4, 1);
  const trunkCyl = new THREE.CylinderGeometry(0.22, 0.35, 2.2, 6);

  function addRealisticTree(tx, tz, scale = 1.0, isFlame = false) {
    const tg = new THREE.Group();
    tg.position.set(tx, 0, tz);
    tg.scale.setScalar(scale);

    const tr = new THREE.Mesh(trunkCyl, trunkMat);
    tr.position.y = 1.1;
    tr.castShadow = true;
    tg.add(tr);

    const mat1 = isFlame ? flameFlowerMat : foliageDarkMat;
    const mat2 = isFlame ? flameFlowerMat : foliageMidMat;
    const mat3 = isFlame ? foliageMidMat  : foliageLightMat;

    const c1 = new THREE.Mesh(sphereGeo1, mat1);
    c1.position.set(0, 2.8, 0);
    c1.scale.set(1.2, 0.85, 1.2);
    c1.castShadow = true;
    tg.add(c1);

    const c2 = new THREE.Mesh(sphereGeo2, mat2);
    c2.position.set(0.6, 3.6, 0.4);
    c2.castShadow = true;
    tg.add(c2);

    const c3 = new THREE.Mesh(sphereGeo2, mat3);
    c3.position.set(-0.5, 3.8, -0.4);
    c3.scale.setScalar(0.85);
    c3.castShadow = true;
    tg.add(c3);

    infraGroup.add(tg);
  }

  // Trees along North Canal buffer (Z = -44.5)
  for (let x = -140; x <= 165; x += 15) {
    addRealisticTree(x, -44.5, 0.85 + (Math.abs(x) % 3) * 0.12, x === 95);
  }

  // Trees along Monument Plaza circle (X = 184.0, Z = 14.5)
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
    addRealisticTree(184.0 + Math.cos(a) * 9.5, 14.5 + Math.sin(a) * 9.5, 0.8);
  }

  // Trees around Thai House island (-25.5, Z in [-15..15])
  for (let z = -15; z <= 15; z += 6) {
    addRealisticTree(-25.5, z, 0.85, z === 3);
  }

  // Trees along Building 10 North Tree Buffer (Z = 46.2, X in [120..162])
  for (let x = 120; x <= 162; x += 10.5) {
    addRealisticTree(x, 46.2, 0.85, x === 141); // Flame of the forest tree in front of Bld 10!
  }

  // Trees along southern forest boundary (Z = 55.5)
  for (let x = -130; x <= 130; x += 13) {
    addRealisticTree(x, 55.5, 0.95 + (Math.abs(x) % 2) * 0.15);
  }

  return infraGroup;
}


// 336 Campus Buildings aligned 1:1 to Drone Orthophoto pixels
const DRONE_ALIGNED_BUILDINGS = [{"id": "bld-auto-1", "x": -193.69, "z": -59.62, "w": 17.3, "d": 1.8, "h": 8.0, "area": 31.1, "roofHex": 6973806, "px": 395.3, "py": 10.3}, {"id": "bld-auto-2", "x": -177.52, "z": -59.81, "w": 2.09, "d": 1.8, "h": 5.5, "area": 3.8, "roofHex": 6973806, "px": 833.0, "py": 5.2}, {"id": "bld-auto-3", "x": -44.16, "z": -61.52, "w": 3.05, "d": 1.8, "h": 5.5, "area": 5.5, "roofHex": 6973806, "px": 4442.8, "py": -41.2}, {"id": "bld-auto-4", "x": -67.78, "z": -61.01, "w": 3.79, "d": 1.8, "h": 5.5, "area": 6.8, "roofHex": 6973806, "px": 3803.4, "py": -27.2}, {"id": "bld-auto-5", "x": -206.5, "z": -58.54, "w": 2.36, "d": 2.54, "h": 5.5, "area": 6.0, "roofHex": 6973806, "px": 48.8, "py": 39.5}, {"id": "bld-auto-6", "x": -62.68, "z": -60.85, "w": 2.91, "d": 1.8, "h": 5.5, "area": 5.2, "roofHex": 6973806, "px": 3941.6, "py": -22.9}, {"id": "bld-auto-7", "x": -199.96, "z": -57.84, "w": 7.53, "d": 2.92, "h": 8.0, "area": 22.0, "roofHex": 6973806, "px": 225.8, "py": 58.4}, {"id": "bld-auto-8", "x": 106.44, "z": -58.22, "w": 3.72, "d": 1.8, "h": 5.5, "area": 6.7, "roofHex": 10786974, "px": 8519.1, "py": 48.1}, {"id": "bld-auto-9", "x": -66.46, "z": -59.25, "w": 2.91, "d": 1.8, "h": 5.5, "area": 5.2, "roofHex": 10261664, "px": 3839.0, "py": 20.2}, {"id": "bld-auto-10", "x": 83.0, "z": -58.1, "w": 3.33, "d": 1.8, "h": 5.5, "area": 6.0, "roofHex": 12101540, "px": 7884.6, "py": 51.5}, {"id": "bld-auto-11", "x": -38.79, "z": -59.39, "w": 3.05, "d": 1.8, "h": 5.5, "area": 5.5, "roofHex": 10590888, "px": 4588.2, "py": 16.5}, {"id": "bld-auto-12", "x": 60.15, "z": -57.97, "w": 3.46, "d": 1.8, "h": 5.5, "area": 6.2, "roofHex": 15129047, "px": 7266.1, "py": 54.9}, {"id": "bld-auto-13", "x": -61.36, "z": -59.1, "w": 3.79, "d": 1.8, "h": 5.5, "area": 6.8, "roofHex": 10064800, "px": 3977.1, "py": 24.5}, {"id": "bld-auto-14", "x": 5.18, "z": -57.84, "w": 3.38, "d": 1.8, "h": 5.5, "area": 6.1, "roofHex": 3952192, "px": 5778.3, "py": 58.4}, {"id": "bld-auto-15", "x": 30.04, "z": -57.84, "w": 3.72, "d": 1.8, "h": 5.5, "area": 6.7, "roofHex": 11973806, "px": 6451.1, "py": 58.4}, {"id": "bld-auto-16", "x": 37.92, "z": -57.84, "w": 3.29, "d": 1.8, "h": 5.5, "area": 5.9, "roofHex": 15524833, "px": 6664.4, "py": 58.4}, {"id": "bld-auto-17", "x": 87.61, "z": -57.84, "w": 2.56, "d": 1.8, "h": 5.5, "area": 4.6, "roofHex": 10852506, "px": 8009.3, "py": 58.4}, {"id": "bld-auto-18", "x": 64.69, "z": -57.71, "w": 2.56, "d": 1.8, "h": 5.5, "area": 4.6, "roofHex": 11378071, "px": 7389.1, "py": 61.9}, {"id": "bld-auto-19", "x": 9.86, "z": -57.59, "w": 2.6, "d": 1.8, "h": 5.5, "area": 4.7, "roofHex": 9989758, "px": 5904.9, "py": 65.3}, {"id": "bld-auto-20", "x": 24.81, "z": -57.59, "w": 2.86, "d": 1.8, "h": 5.5, "area": 5.1, "roofHex": 14735318, "px": 6309.4, "py": 65.3}, {"id": "bld-auto-21", "x": 42.36, "z": -57.59, "w": 2.43, "d": 1.8, "h": 5.5, "area": 4.4, "roofHex": 15128791, "px": 6784.5, "py": 65.3}, {"id": "bld-auto-22", "x": -197.89, "z": -56.95, "w": 3.39, "d": 1.8, "h": 5.5, "area": 6.1, "roofHex": 12501455, "px": 281.7, "py": 82.4}, {"id": "bld-auto-23", "x": -114.41, "z": -57.32, "w": 6.96, "d": 1.8, "h": 5.5, "area": 12.5, "roofHex": 8945032, "px": 2541.4, "py": 72.5}, {"id": "bld-auto-24", "x": -104.16, "z": -57.26, "w": 6.85, "d": 1.8, "h": 5.5, "area": 12.3, "roofHex": 7302768, "px": 2818.7, "py": 74.1}, {"id": "bld-auto-25", "x": -186.47, "z": -56.45, "w": 5.04, "d": 1.8, "h": 5.5, "area": 9.1, "roofHex": 7040872, "px": 591.0, "py": 96.1}, {"id": "bld-auto-26", "x": 107.75, "z": -56.45, "w": 2.75, "d": 1.8, "h": 5.5, "area": 5.0, "roofHex": 4673116, "px": 8554.4, "py": 96.1}, {"id": "bld-auto-27", "x": -195.56, "z": -56.13, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 8423296, "px": 344.9, "py": 104.8}, {"id": "bld-auto-28", "x": 84.15, "z": -56.32, "w": 2.56, "d": 1.8, "h": 5.5, "area": 4.6, "roofHex": 5067615, "px": 7915.7, "py": 99.7}, {"id": "bld-auto-29", "x": -193.65, "z": -56.13, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 4148320, "px": 396.5, "py": 104.8}, {"id": "bld-auto-30", "x": -185.92, "z": -54.23, "w": 6.13, "d": 4.06, "h": 8.0, "area": 24.9, "roofHex": 8238259, "px": 605.8, "py": 156.3}, {"id": "bld-auto-31", "x": 61.37, "z": -56.19, "w": 2.56, "d": 1.8, "h": 5.5, "area": 4.6, "roofHex": 6710638, "px": 7299.0, "py": 103.1}, {"id": "bld-auto-32", "x": 6.35, "z": -56.06, "w": 2.6, "d": 1.8, "h": 5.5, "area": 4.7, "roofHex": 7762817, "px": 5810.0, "py": 106.5}, {"id": "bld-auto-33", "x": 28.7, "z": -56.06, "w": 2.86, "d": 1.8, "h": 5.5, "area": 5.1, "roofHex": 8749194, "px": 6414.9, "py": 106.5}, {"id": "bld-auto-34", "x": 39.08, "z": -56.06, "w": 2.43, "d": 1.8, "h": 5.5, "area": 4.4, "roofHex": 10392728, "px": 6695.7, "py": 106.5}, {"id": "bld-auto-35", "x": 88.76, "z": -56.06, "w": 3.33, "d": 1.8, "h": 5.5, "area": 6.0, "roofHex": 4410453, "px": 8040.5, "py": 106.5}, {"id": "bld-auto-36", "x": 65.91, "z": -55.94, "w": 3.46, "d": 1.8, "h": 5.5, "area": 6.2, "roofHex": 4081485, "px": 7422.0, "py": 109.9}, {"id": "bld-auto-37", "x": 11.03, "z": -55.81, "w": 3.38, "d": 1.8, "h": 5.5, "area": 6.1, "roofHex": 7039351, "px": 5936.6, "py": 113.4}, {"id": "bld-auto-38", "x": 23.44, "z": -55.81, "w": 3.77, "d": 1.8, "h": 5.5, "area": 6.8, "roofHex": 8682633, "px": 6272.5, "py": 113.4}, {"id": "bld-auto-39", "x": 43.46, "z": -55.81, "w": 3.16, "d": 1.8, "h": 5.5, "area": 5.7, "roofHex": 8551556, "px": 6814.2, "py": 113.4}, {"id": "bld-auto-40", "x": -195.51, "z": -53.78, "w": 1.8, "d": 3.94, "h": 5.5, "area": 7.1, "roofHex": 8280684, "px": 346.3, "py": 168.3}, {"id": "bld-auto-41", "x": -193.71, "z": -53.91, "w": 1.8, "d": 3.68, "h": 5.5, "area": 6.6, "roofHex": 9275797, "px": 395.0, "py": 164.9}, {"id": "bld-auto-42", "x": -198.1, "z": -49.85, "w": 3.39, "d": 11.55, "h": 10.5, "area": 39.2, "roofHex": 8750224, "px": 276.0, "py": 274.8}, {"id": "bld-auto-43", "x": -205.57, "z": -52.83, "w": 3.06, "d": 5.08, "h": 8.0, "area": 15.5, "roofHex": 12621224, "px": 74.0, "py": 194.0}, {"id": "bld-auto-44", "x": -111.99, "z": -55.59, "w": 5.29, "d": 1.8, "h": 5.5, "area": 9.5, "roofHex": 12825268, "px": 2606.7, "py": 119.3}, {"id": "bld-auto-45", "x": -100.7, "z": -55.56, "w": 10.43, "d": 1.8, "h": 5.5, "area": 18.8, "roofHex": 9996687, "px": 2912.3, "py": 120.3}, {"id": "bld-auto-46", "x": -208.03, "z": -53.66, "w": 1.8, "d": 2.67, "h": 5.5, "area": 4.8, "roofHex": 8881802, "px": 7.4, "py": 171.7}, {"id": "bld-auto-47", "x": -191.0, "z": -52.39, "w": 3.6, "d": 5.2, "h": 8.0, "area": 18.7, "roofHex": 9668757, "px": 468.2, "py": 206.1}, {"id": "bld-auto-48", "x": -178.32, "z": -51.24, "w": 2.09, "d": 3.17, "h": 5.5, "area": 6.6, "roofHex": 11912173, "px": 811.4, "py": 237.0}, {"id": "bld-auto-49", "x": 183.23, "z": -50.55, "w": 3.57, "d": 4.57, "h": 8.0, "area": 16.3, "roofHex": 5004911, "px": 10597.5, "py": 255.9}, {"id": "bld-auto-50", "x": 174.44, "z": -50.48, "w": 3.57, "d": 4.44, "h": 8.0, "area": 15.9, "roofHex": 14740985, "px": 10359.5, "py": 257.7}, {"id": "bld-auto-51", "x": 178.2, "z": -50.29, "w": 3.95, "d": 4.57, "h": 8.0, "area": 18.1, "roofHex": 14939388, "px": 10461.3, "py": 262.8}, {"id": "bld-auto-52", "x": 186.83, "z": -50.29, "w": 3.63, "d": 4.57, "h": 8.0, "area": 16.6, "roofHex": 15924477, "px": 10694.9, "py": 262.8}, {"id": "bld-auto-53", "x": -179.07, "z": -50.8, "w": 1.8, "d": 2.79, "h": 5.5, "area": 5.0, "roofHex": 12701677, "px": 791.2, "py": 249.0}, {"id": "bld-auto-54", "x": -194.61, "z": -50.35, "w": 3.39, "d": 2.92, "h": 8.0, "area": 9.9, "roofHex": 4933981, "px": 370.7, "py": 261.1}, {"id": "bld-auto-55", "x": -183.5, "z": -48.58, "w": 6.67, "d": 4.19, "h": 8.0, "area": 27.9, "roofHex": 8684177, "px": 671.3, "py": 309.2}, {"id": "bld-auto-56", "x": -207.57, "z": -48.7, "w": 1.8, "d": 3.43, "h": 5.5, "area": 6.2, "roofHex": 10262187, "px": 19.7, "py": 305.7}, {"id": "bld-auto-57", "x": 101.56, "z": -43.82, "w": 7.16, "d": 10.92, "h": 10.5, "area": 78.2, "roofHex": 14938358, "px": 8386.8, "py": 438.0}, {"id": "bld-auto-58", "x": 33.54, "z": -48.32, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 7898002, "px": 6545.9, "py": 316.0}, {"id": "bld-auto-59", "x": 15.78, "z": -46.8, "w": 1.8, "d": 2.92, "h": 5.5, "area": 5.3, "roofHex": 8420478, "px": 6065.0, "py": 357.2}, {"id": "bld-auto-60", "x": -194.98, "z": -47.44, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 7831651, "px": 360.6, "py": 340.1}, {"id": "bld-auto-61", "x": -86.81, "z": -47.76, "w": 9.19, "d": 2.29, "h": 8.0, "area": 21.0, "roofHex": 5138018, "px": 3288.3, "py": 331.2}, {"id": "bld-auto-62", "x": 35.97, "z": -47.12, "w": 2.55, "d": 1.8, "h": 5.5, "area": 4.6, "roofHex": 7502986, "px": 6611.7, "py": 348.6}, {"id": "bld-auto-63", "x": -98.99, "z": -46.13, "w": 7.87, "d": 1.8, "h": 8.0, "area": 14.2, "roofHex": 7965541, "px": 2958.8, "py": 375.3}, {"id": "bld-auto-64", "x": 68.98, "z": -43.25, "w": 2.43, "d": 5.96, "h": 8.0, "area": 14.5, "roofHex": 4601156, "px": 7505.1, "py": 453.5}, {"id": "bld-auto-66", "x": 61.24, "z": -41.41, "w": 1.8, "d": 6.6, "h": 5.5, "area": 11.9, "roofHex": 3225663, "px": 7295.5, "py": 503.2}, {"id": "bld-auto-67", "x": 196.14, "z": -44.39, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 8289400, "px": 10946.7, "py": 422.5}, {"id": "bld-auto-68", "x": -87.17, "z": -42.93, "w": 8.17, "d": 2.29, "h": 8.0, "area": 18.7, "roofHex": 10594490, "px": 3278.5, "py": 462.0}, {"id": "bld-auto-69", "x": -15.43, "z": -41.28, "w": 2.97, "d": 4.06, "h": 8.0, "area": 12.1, "roofHex": 6790819, "px": 5220.5, "py": 506.6}, {"id": "bld-auto-70", "x": -98.33, "z": -42.59, "w": 8.89, "d": 2.29, "h": 8.0, "area": 20.4, "roofHex": 7570780, "px": 2976.6, "py": 471.3}, {"id": "bld-auto-71", "x": -76.31, "z": -42.38, "w": 4.23, "d": 2.79, "h": 8.0, "area": 11.8, "roofHex": 6184807, "px": 3572.6, "py": 477.0}, {"id": "bld-auto-72", "x": -207.49, "z": -39.76, "w": 1.8, "d": 4.06, "h": 5.5, "area": 7.3, "roofHex": 6447723, "px": 21.9, "py": 547.8}, {"id": "bld-auto-73", "x": 30.69, "z": -35.63, "w": 25.29, "d": 9.52, "h": 14.0, "area": 240.8, "roofHex": 9214634, "px": 6468.7, "py": 659.5}, {"id": "bld-auto-75", "x": -205.89, "z": -37.6, "w": 3.07, "d": 3.55, "h": 5.5, "area": 10.9, "roofHex": 6123673, "px": 65.2, "py": 606.3}, {"id": "bld-auto-76", "x": -203.51, "z": -36.27, "w": 3.18, "d": 3.68, "h": 5.5, "area": 11.7, "roofHex": 4083802, "px": 129.6, "py": 642.3}, {"id": "bld-auto-77", "x": 186.79, "z": -35.06, "w": 3.54, "d": 4.57, "h": 8.0, "area": 16.2, "roofHex": 13096933, "px": 10693.7, "py": 675.0}, {"id": "bld-auto-78", "x": -78.2, "z": -35.81, "w": 8.89, "d": 3.68, "h": 8.0, "area": 32.7, "roofHex": 15131890, "px": 3521.3, "py": 654.9}, {"id": "bld-auto-79", "x": -78.13, "z": -33.46, "w": 8.46, "d": 1.8, "h": 5.5, "area": 15.2, "roofHex": 7303262, "px": 3523.2, "py": 718.3}, {"id": "bld-auto-80", "x": -206.81, "z": -28.15, "w": 2.99, "d": 8.5, "h": 10.5, "area": 25.4, "roofHex": 6517112, "px": 40.4, "py": 862.2}, {"id": "bld-auto-81", "x": -110.19, "z": -27.77, "w": 4.82, "d": 7.11, "h": 8.0, "area": 34.3, "roofHex": 3559756, "px": 2655.6, "py": 872.4}, {"id": "bld-auto-82", "x": 82.3, "z": -30.3, "w": 4.23, "d": 1.8, "h": 5.5, "area": 7.6, "roofHex": 10260359, "px": 7865.5, "py": 803.8}, {"id": "bld-auto-83", "x": 138.67, "z": -30.18, "w": 13.18, "d": 1.8, "h": 5.5, "area": 23.7, "roofHex": 4014653, "px": 9391.4, "py": 807.3}, {"id": "bld-auto-84", "x": 119.95, "z": -29.92, "w": 11.19, "d": 1.8, "h": 5.5, "area": 20.1, "roofHex": 5923408, "px": 8884.7, "py": 814.1}, {"id": "bld-auto-85", "x": -116.86, "z": -29.04, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 3363148, "px": 2474.9, "py": 838.1}, {"id": "bld-auto-86", "x": 133.95, "z": -28.4, "w": 10.03, "d": 1.8, "h": 5.5, "area": 18.1, "roofHex": 6318428, "px": 9263.5, "py": 855.3}, {"id": "bld-auto-87", "x": 158.02, "z": -24.34, "w": 12.7, "d": 7.49, "h": 10.5, "area": 95.1, "roofHex": 10795985, "px": 9915.1, "py": 965.3}, {"id": "bld-auto-88", "x": -87.32, "z": -27.31, "w": 2.04, "d": 2.03, "h": 5.5, "area": 4.1, "roofHex": 3226703, "px": 3274.5, "py": 884.7}, {"id": "bld-auto-89", "x": 51.54, "z": -23.32, "w": 51.4, "d": 6.98, "h": 18.0, "area": 358.8, "roofHex": 9410464, "px": 7033.1, "py": 992.7}, {"id": "bld-auto-90", "x": 106.65, "z": -22.69, "w": 4.13, "d": 8.0, "h": 8.0, "area": 33.0, "roofHex": 10777717, "px": 8524.7, "py": 1009.9}, {"id": "bld-auto-91", "x": -106.34, "z": -26.06, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 4543570, "px": 2759.8, "py": 918.5}, {"id": "bld-auto-92", "x": 83.26, "z": -23.26, "w": 11.52, "d": 6.34, "h": 10.5, "area": 73.0, "roofHex": 9340814, "px": 7891.5, "py": 994.4}, {"id": "bld-auto-93", "x": 128.87, "z": -25.48, "w": 6.88, "d": 1.9, "h": 8.0, "area": 13.1, "roofHex": 15002615, "px": 9126.2, "py": 934.3}, {"id": "bld-auto-94", "x": 117.25, "z": -25.29, "w": 9.08, "d": 1.8, "h": 8.0, "area": 16.3, "roofHex": 14672365, "px": 8811.5, "py": 939.4}, {"id": "bld-auto-95", "x": 181.03, "z": -23.64, "w": 17.25, "d": 4.82, "h": 10.5, "area": 83.1, "roofHex": 9934491, "px": 10537.8, "py": 984.2}, {"id": "bld-auto-96", "x": 96.93, "z": -22.5, "w": 4.3, "d": 6.09, "h": 8.0, "area": 26.2, "roofHex": 3358798, "px": 8261.6, "py": 1015.0}, {"id": "bld-auto-97", "x": -76.31, "z": -25.94, "w": 6.56, "d": 1.8, "h": 5.5, "area": 11.8, "roofHex": 4738399, "px": 3572.6, "py": 921.8}, {"id": "bld-auto-98", "x": -122.57, "z": -23.28, "w": 2.88, "d": 3.43, "h": 8.0, "area": 9.9, "roofHex": 6515022, "px": 2320.5, "py": 993.8}, {"id": "bld-auto-99", "x": 197.61, "z": -23.2, "w": 1.8, "d": 3.17, "h": 5.5, "area": 5.7, "roofHex": 11318201, "px": 10986.6, "py": 996.1}, {"id": "bld-auto-100", "x": 130.86, "z": -22.37, "w": 4.08, "d": 4.31, "h": 8.0, "area": 17.6, "roofHex": 14015720, "px": 9179.8, "py": 1018.4}, {"id": "bld-auto-101", "x": -163.87, "z": -22.69, "w": 3.7, "d": 3.17, "h": 8.0, "area": 11.7, "roofHex": 7697509, "px": 1202.6, "py": 1009.9}, {"id": "bld-auto-102", "x": -153.44, "z": -22.24, "w": 3.04, "d": 4.06, "h": 8.0, "area": 12.3, "roofHex": 3160907, "px": 1485.0, "py": 1021.9}, {"id": "bld-auto-103", "x": -159.3, "z": -22.81, "w": 2.39, "d": 2.67, "h": 5.5, "area": 6.4, "roofHex": 3754558, "px": 1326.2, "py": 1006.5}, {"id": "bld-auto-104", "x": -104.82, "z": -22.73, "w": 3.5, "d": 3.68, "h": 8.0, "area": 12.9, "roofHex": 8946289, "px": 2800.9, "py": 1008.7}, {"id": "bld-auto-105", "x": -179.02, "z": -22.5, "w": 2.69, "d": 3.05, "h": 5.5, "area": 8.2, "roofHex": 5331778, "px": 792.6, "py": 1015.0}, {"id": "bld-auto-106", "x": -184.15, "z": -21.93, "w": 3.78, "d": 3.94, "h": 8.0, "area": 14.9, "roofHex": 2373970, "px": 653.7, "py": 1030.5}, {"id": "bld-auto-107", "x": -206.44, "z": -20.66, "w": 3.73, "d": 6.22, "h": 8.0, "area": 23.2, "roofHex": 10134161, "px": 50.5, "py": 1064.8}, {"id": "bld-auto-108", "x": -142.46, "z": -22.31, "w": 3.26, "d": 2.92, "h": 8.0, "area": 9.5, "roofHex": 5133396, "px": 1782.1, "py": 1020.2}, {"id": "bld-auto-109", "x": -148.38, "z": -21.93, "w": 3.59, "d": 3.17, "h": 8.0, "area": 11.4, "roofHex": 8420718, "px": 1621.7, "py": 1030.5}, {"id": "bld-auto-110", "x": -129.2, "z": -22.05, "w": 3.48, "d": 2.92, "h": 8.0, "area": 10.2, "roofHex": 4279908, "px": 2140.9, "py": 1027.0}, {"id": "bld-auto-111", "x": -67.34, "z": -24.59, "w": 6.42, "d": 1.8, "h": 5.5, "area": 11.6, "roofHex": 5265484, "px": 3815.3, "py": 958.5}, {"id": "bld-auto-112", "x": -135.13, "z": -22.05, "w": 4.67, "d": 2.67, "h": 8.0, "area": 12.5, "roofHex": 5925754, "px": 1980.6, "py": 1027.0}, {"id": "bld-auto-113", "x": -117.19, "z": -22.18, "w": 2.88, "d": 2.79, "h": 8.0, "area": 8.0, "roofHex": 6452110, "px": 2466.1, "py": 1023.7}, {"id": "bld-auto-114", "x": -169.44, "z": -21.8, "w": 3.11, "d": 2.92, "h": 8.0, "area": 9.1, "roofHex": 2905167, "px": 1051.7, "py": 1033.9}, {"id": "bld-auto-115", "x": -195.02, "z": -21.17, "w": 16.56, "d": 3.94, "h": 10.5, "area": 65.2, "roofHex": 6184808, "px": 359.5, "py": 1051.1}, {"id": "bld-auto-116", "x": -174.39, "z": -21.67, "w": 2.99, "d": 2.92, "h": 8.0, "area": 8.7, "roofHex": 10260116, "px": 917.9, "py": 1037.3}, {"id": "bld-auto-117", "x": -26.34, "z": -22.92, "w": 8.18, "d": 1.8, "h": 8.0, "area": 14.7, "roofHex": 8624056, "px": 4925.1, "py": 1003.7}, {"id": "bld-auto-118", "x": -33.36, "z": -21.85, "w": 3.17, "d": 2.92, "h": 5.5, "area": 9.3, "roofHex": 7375002, "px": 4735.1, "py": 1032.7}, {"id": "bld-auto-119", "x": 182.68, "z": -21.48, "w": 12.92, "d": 1.8, "h": 5.5, "area": 23.3, "roofHex": 10526625, "px": 10582.7, "py": 1042.5}, {"id": "bld-auto-120", "x": -50.26, "z": -17.56, "w": 1.8, "d": 11.04, "h": 8.0, "area": 19.9, "roofHex": 9672823, "px": 4277.7, "py": 1148.8}, {"id": "bld-auto-121", "x": 159.18, "z": -18.76, "w": 12.68, "d": 3.43, "h": 10.5, "area": 43.5, "roofHex": 9938879, "px": 9946.4, "py": 1116.3}, {"id": "bld-auto-122", "x": 162.01, "z": -20.41, "w": 3.19, "d": 1.8, "h": 5.5, "area": 5.7, "roofHex": 10860239, "px": 10023.2, "py": 1071.7}, {"id": "bld-auto-123", "x": 46.5, "z": -18.44, "w": 6.57, "d": 3.05, "h": 8.0, "area": 20.0, "roofHex": 7763837, "px": 6896.5, "py": 1124.9}, {"id": "bld-auto-124", "x": 199.97, "z": -17.49, "w": 1.8, "d": 3.68, "h": 5.5, "area": 6.6, "roofHex": 15660536, "px": 11050.4, "py": 1150.7}, {"id": "bld-auto-125", "x": -182.95, "z": -19.01, "w": 2.99, "d": 1.8, "h": 5.5, "area": 5.4, "roofHex": 5791342, "px": 686.1, "py": 1109.5}, {"id": "bld-auto-126", "x": -154.63, "z": -18.88, "w": 3.26, "d": 1.8, "h": 5.5, "area": 5.9, "roofHex": 8092813, "px": 1452.6, "py": 1112.9}, {"id": "bld-auto-127", "x": -130.24, "z": -18.76, "w": 2.28, "d": 1.8, "h": 5.5, "area": 4.1, "roofHex": 9012586, "px": 2112.9, "py": 1116.3}, {"id": "bld-auto-128", "x": -2.09, "z": -17.17, "w": 2.84, "d": 2.79, "h": 5.5, "area": 7.9, "roofHex": 13802643, "px": 5581.5, "py": 1159.3}, {"id": "bld-auto-129", "x": -33.79, "z": -16.59, "w": 4.51, "d": 6.09, "h": 8.0, "area": 27.5, "roofHex": 6315877, "px": 4723.5, "py": 1175.0}, {"id": "bld-auto-130", "x": -206.44, "z": -14.76, "w": 3.73, "d": 5.33, "h": 8.0, "area": 19.9, "roofHex": 14605275, "px": 50.5, "py": 1224.6}, {"id": "bld-auto-131", "x": -150.12, "z": -17.36, "w": 3.37, "d": 1.8, "h": 5.5, "area": 6.1, "roofHex": 5004889, "px": 1574.7, "py": 1154.1}, {"id": "bld-auto-132", "x": -96.94, "z": -11.14, "w": 10.21, "d": 12.94, "h": 10.5, "area": 132.1, "roofHex": 6187376, "px": 3014.1, "py": 1322.5}, {"id": "bld-auto-133", "x": 66.1, "z": -16.09, "w": 3.07, "d": 1.8, "h": 5.5, "area": 5.5, "roofHex": 5856864, "px": 7427.2, "py": 1188.5}, {"id": "bld-auto-134", "x": 40.11, "z": -15.96, "w": 2.8, "d": 1.8, "h": 5.5, "area": 5.0, "roofHex": 3489591, "px": 6723.7, "py": 1191.9}, {"id": "bld-auto-135", "x": -168.08, "z": -13.05, "w": 6.04, "d": 5.2, "h": 10.5, "area": 31.4, "roofHex": 5920863, "px": 1088.6, "py": 1270.9}, {"id": "bld-auto-136", "x": -193.33, "z": -13.68, "w": 2.76, "d": 2.67, "h": 5.5, "area": 7.4, "roofHex": 2834247, "px": 405.1, "py": 1253.8}, {"id": "bld-auto-137", "x": 194.91, "z": -13.87, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 8486009, "px": 10913.7, "py": 1248.6}, {"id": "bld-auto-138", "x": 62.13, "z": -14.57, "w": 3.07, "d": 1.8, "h": 5.5, "area": 5.5, "roofHex": 7369081, "px": 7319.7, "py": 1229.7}, {"id": "bld-auto-139", "x": 36.34, "z": -14.44, "w": 2.8, "d": 1.8, "h": 5.5, "area": 5.0, "roofHex": 3620667, "px": 6621.6, "py": 1233.1}, {"id": "bld-auto-140", "x": -184.05, "z": -12.79, "w": 3.39, "d": 2.92, "h": 8.0, "area": 9.9, "roofHex": 2178113, "px": 656.4, "py": 1277.9}, {"id": "bld-auto-141", "x": -188.69, "z": -12.73, "w": 2.92, "d": 2.79, "h": 5.5, "area": 8.1, "roofHex": 9145234, "px": 530.7, "py": 1279.5}, {"id": "bld-auto-142", "x": 31.81, "z": -12.47, "w": 6.74, "d": 3.05, "h": 8.0, "area": 20.6, "roofHex": 4281669, "px": 6499.1, "py": 1286.4}, {"id": "bld-auto-143", "x": -143.11, "z": -12.41, "w": 3.91, "d": 1.8, "h": 5.5, "area": 7.0, "roofHex": 10062468, "px": 1764.4, "py": 1288.1}, {"id": "bld-auto-144", "x": 41.81, "z": -7.97, "w": 12.53, "d": 9.01, "h": 14.0, "area": 112.9, "roofHex": 11187908, "px": 6769.7, "py": 1408.4}, {"id": "bld-auto-145", "x": 80.57, "z": -9.62, "w": 3.59, "d": 5.46, "h": 8.0, "area": 19.6, "roofHex": 13023409, "px": 7818.7, "py": 1363.7}, {"id": "bld-auto-146", "x": 83.77, "z": -9.05, "w": 2.82, "d": 6.6, "h": 8.0, "area": 18.6, "roofHex": 9014157, "px": 7905.4, "py": 1379.2}, {"id": "bld-auto-147", "x": 24.35, "z": -5.75, "w": 3.25, "d": 12.44, "h": 10.5, "area": 40.4, "roofHex": 5397612, "px": 6297.1, "py": 1468.5}, {"id": "bld-auto-148", "x": 97.34, "z": -6.95, "w": 1.8, "d": 9.26, "h": 8.0, "area": 16.7, "roofHex": 11835536, "px": 8272.6, "py": 1435.9}, {"id": "bld-auto-149", "x": -206.33, "z": -8.6, "w": 3.94, "d": 5.2, "h": 8.0, "area": 20.5, "roofHex": 12434878, "px": 53.3, "py": 1391.1}, {"id": "bld-auto-150", "x": -33.05, "z": -12.45, "w": 2.81, "d": 1.8, "h": 5.5, "area": 5.1, "roofHex": 4477265, "px": 4743.4, "py": 1287.1}, {"id": "bld-auto-151", "x": 176.16, "z": -1.75, "w": 2.42, "d": 18.4, "h": 8.0, "area": 44.5, "roofHex": 10921121, "px": 10406.0, "py": 1576.6}, {"id": "bld-auto-152", "x": -29.4, "z": -10.86, "w": 2.81, "d": 1.8, "h": 5.5, "area": 5.1, "roofHex": 2963536, "px": 4842.4, "py": 1330.1}, {"id": "bld-auto-153", "x": 34.82, "z": -9.05, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 10727617, "px": 6580.4, "py": 1379.2}, {"id": "bld-auto-154", "x": -186.15, "z": -8.22, "w": 7.79, "d": 2.41, "h": 8.0, "area": 18.8, "roofHex": 10125173, "px": 599.5, "py": 1401.5}, {"id": "bld-auto-155", "x": -203.78, "z": -7.02, "w": 1.8, "d": 4.57, "h": 5.5, "area": 8.2, "roofHex": 5987948, "px": 122.5, "py": 1434.1}, {"id": "bld-auto-156", "x": 71.22, "z": -6.82, "w": 3.33, "d": 4.44, "h": 8.0, "area": 14.8, "roofHex": 12237471, "px": 7565.8, "py": 1439.3}, {"id": "bld-auto-157", "x": -27.21, "z": -8.28, "w": 8.88, "d": 3.68, "h": 8.0, "area": 32.7, "roofHex": 7763836, "px": 4901.6, "py": 1400.0}, {"id": "bld-auto-158", "x": 30.63, "z": -6.95, "w": 5.94, "d": 3.68, "h": 8.0, "area": 21.9, "roofHex": 8224647, "px": 6467.1, "py": 1435.9}, {"id": "bld-auto-159", "x": 65.53, "z": -6.89, "w": 6.02, "d": 3.81, "h": 8.0, "area": 22.9, "roofHex": 9677256, "px": 7411.6, "py": 1437.5}, {"id": "bld-auto-160", "x": 207.46, "z": -6.38, "w": 1.8, "d": 3.05, "h": 5.5, "area": 5.5, "roofHex": 5133403, "px": 11253.2, "py": 1451.3}, {"id": "bld-auto-161", "x": 148.7, "z": -6.13, "w": 1.8, "d": 2.54, "h": 5.5, "area": 4.6, "roofHex": 4212799, "px": 9662.8, "py": 1458.2}, {"id": "bld-auto-162", "x": -42.02, "z": -5.45, "w": 6.1, "d": 6.34, "h": 10.5, "area": 38.7, "roofHex": 9794427, "px": 4500.6, "py": 1476.4}, {"id": "bld-auto-163", "x": -48.0, "z": -4.84, "w": 3.17, "d": 7.36, "h": 8.0, "area": 23.3, "roofHex": 5990782, "px": 4338.8, "py": 1493.0}, {"id": "bld-auto-164", "x": -53.06, "z": -5.19, "w": 6.7, "d": 6.22, "h": 10.5, "area": 41.7, "roofHex": 8351608, "px": 4202.0, "py": 1483.5}, {"id": "bld-auto-165", "x": 80.44, "z": -4.35, "w": 2.82, "d": 3.55, "h": 5.5, "area": 10.0, "roofHex": 11778502, "px": 7815.2, "py": 1506.3}, {"id": "bld-auto-166", "x": -185.78, "z": -3.72, "w": 7.26, "d": 4.06, "h": 8.0, "area": 29.5, "roofHex": 5204298, "px": 609.5, "py": 1523.4}, {"id": "bld-auto-167", "x": -206.38, "z": -2.19, "w": 3.83, "d": 6.09, "h": 8.0, "area": 23.3, "roofHex": 11514552, "px": 51.9, "py": 1564.6}, {"id": "bld-auto-168", "x": 36.55, "z": -1.43, "w": 16.73, "d": 7.11, "h": 10.5, "area": 119.0, "roofHex": 10793150, "px": 6627.3, "py": 1585.3}, {"id": "bld-auto-169", "x": 66.04, "z": -3.72, "w": 2.95, "d": 2.29, "h": 5.5, "area": 6.8, "roofHex": 13424351, "px": 7425.4, "py": 1523.4}, {"id": "bld-auto-170", "x": -202.29, "z": -1.37, "w": 1.8, "d": 4.95, "h": 5.5, "area": 8.9, "roofHex": 6118763, "px": 162.6, "py": 1586.9}, {"id": "bld-auto-171", "x": -26.03, "z": -2.93, "w": 8.07, "d": 3.17, "h": 8.0, "area": 25.6, "roofHex": 7304319, "px": 4933.5, "py": 1544.8}, {"id": "bld-auto-172", "x": 73.08, "z": -0.99, "w": 7.81, "d": 4.19, "h": 8.0, "area": 32.7, "roofHex": 9759992, "px": 7616.0, "py": 1597.3}, {"id": "bld-auto-173", "x": -0.74, "z": 0.98, "w": 7.69, "d": 7.87, "h": 10.5, "area": 60.5, "roofHex": 12285283, "px": 5617.9, "py": 1650.6}, {"id": "bld-auto-174", "x": 60.66, "z": -0.86, "w": 16.26, "d": 3.17, "h": 10.5, "area": 51.5, "roofHex": 15332340, "px": 7279.9, "py": 1600.7}, {"id": "bld-auto-175", "x": -102.24, "z": 0.64, "w": 12.35, "d": 4.06, "h": 10.5, "area": 50.1, "roofHex": 7439517, "px": 2870.6, "py": 1641.2}, {"id": "bld-auto-176", "x": 160.75, "z": 14.49, "w": 15.13, "d": 29.32, "h": 18.0, "area": 443.6, "roofHex": 11315110, "px": 9989.1, "py": 2016.3}, {"id": "bld-auto-177", "x": -25.97, "z": -0.7, "w": 7.95, "d": 1.8, "h": 5.5, "area": 14.3, "roofHex": 7299951, "px": 4935.2, "py": 1605.0}, {"id": "bld-auto-178", "x": -206.01, "z": 3.58, "w": 4.58, "d": 5.2, "h": 8.0, "area": 23.8, "roofHex": 5923186, "px": 62.0, "py": 1720.9}, {"id": "bld-auto-179", "x": -203.46, "z": 3.64, "w": 1.8, "d": 5.08, "h": 5.5, "area": 9.1, "roofHex": 8420483, "px": 131.1, "py": 1722.6}, {"id": "bld-auto-180", "x": -126.4, "z": 3.7, "w": 4.96, "d": 4.19, "h": 8.0, "area": 20.8, "roofHex": 5463654, "px": 2216.9, "py": 1724.1}, {"id": "bld-auto-181", "x": -122.01, "z": 3.87, "w": 3.99, "d": 4.19, "h": 8.0, "area": 16.7, "roofHex": 5989498, "px": 2335.5, "py": 1728.6}, {"id": "bld-auto-182", "x": 98.25, "z": 6.18, "w": 14.88, "d": 8.63, "h": 14.0, "area": 128.4, "roofHex": 9669781, "px": 8297.3, "py": 1791.3}, {"id": "bld-auto-183", "x": -25.97, "z": 3.17, "w": 11.6, "d": 3.43, "h": 10.5, "area": 39.8, "roofHex": 6773863, "px": 4935.0, "py": 1709.7}, {"id": "bld-auto-184", "x": -102.38, "z": 6.73, "w": 27.49, "d": 5.33, "h": 14.0, "area": 146.5, "roofHex": 12956844, "px": 2867.0, "py": 1806.1}, {"id": "bld-auto-185", "x": -43.61, "z": 4.8, "w": 5.61, "d": 2.54, "h": 8.0, "area": 14.2, "roofHex": 6383430, "px": 4457.7, "py": 1753.9}, {"id": "bld-auto-186", "x": 82.43, "z": 10.31, "w": 4.74, "d": 9.26, "h": 10.5, "area": 43.9, "roofHex": 7237491, "px": 7869.0, "py": 1903.0}, {"id": "bld-auto-187", "x": -26.38, "z": 6.97, "w": 9.81, "d": 3.94, "h": 8.0, "area": 38.7, "roofHex": 8749160, "px": 4924.0, "py": 1812.6}, {"id": "bld-auto-188", "x": -206.59, "z": 13.61, "w": 3.41, "d": 12.82, "h": 10.5, "area": 43.7, "roofHex": 4675415, "px": 46.2, "py": 1992.3}, {"id": "bld-auto-189", "x": -199.59, "z": 9.35, "w": 3.18, "d": 2.79, "h": 8.0, "area": 8.9, "roofHex": 4018270, "px": 235.8, "py": 1877.2}, {"id": "bld-auto-190", "x": 58.04, "z": 10.75, "w": 3.33, "d": 5.33, "h": 8.0, "area": 17.7, "roofHex": 11715292, "px": 7208.8, "py": 1915.0}, {"id": "bld-auto-191", "x": 207.54, "z": 9.99, "w": 1.8, "d": 3.55, "h": 5.5, "area": 6.4, "roofHex": 8882061, "px": 11255.5, "py": 1894.4}, {"id": "bld-auto-192", "x": -194.87, "z": 9.74, "w": 3.5, "d": 2.79, "h": 8.0, "area": 9.8, "roofHex": 5006163, "px": 363.5, "py": 1887.6}, {"id": "bld-auto-193", "x": -124.75, "z": 10.58, "w": 8.91, "d": 4.57, "h": 10.5, "area": 40.7, "roofHex": 5069164, "px": 2261.5, "py": 1910.4}, {"id": "bld-auto-194", "x": 54.26, "z": 11.01, "w": 3.71, "d": 5.08, "h": 8.0, "area": 18.8, "roofHex": 1539804, "px": 7106.7, "py": 1921.9}, {"id": "bld-auto-195", "x": -185.14, "z": 9.99, "w": 2.99, "d": 2.79, "h": 8.0, "area": 8.3, "roofHex": 2176326, "px": 626.8, "py": 1894.4}, {"id": "bld-auto-196", "x": -36.9, "z": 10.38, "w": 11.22, "d": 3.81, "h": 10.5, "area": 42.7, "roofHex": 4016218, "px": 4639.3, "py": 1905.1}, {"id": "bld-auto-197", "x": 121.07, "z": 16.21, "w": 22.5, "d": 11.68, "h": 14.0, "area": 262.8, "roofHex": 13945806, "px": 8914.9, "py": 2062.7}, {"id": "bld-auto-198", "x": -101.22, "z": 12.42, "w": 29.25, "d": 4.82, "h": 14.0, "area": 141.0, "roofHex": 6711631, "px": 2898.4, "py": 1960.1}, {"id": "bld-auto-199", "x": 102.52, "z": 10.94, "w": 6.33, "d": 1.8, "h": 5.5, "area": 11.4, "roofHex": 2634302, "px": 8412.9, "py": 1920.2}, {"id": "bld-auto-200", "x": 171.0, "z": 13.8, "w": 2.55, "d": 2.54, "h": 5.5, "area": 6.5, "roofHex": 9933461, "px": 10266.3, "py": 1997.4}, {"id": "bld-auto-201", "x": 195.54, "z": 13.35, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 9014931, "px": 10930.8, "py": 1985.5}, {"id": "bld-auto-202", "x": -201.65, "z": 14.18, "w": 1.8, "d": 2.54, "h": 5.5, "area": 4.6, "roofHex": 6645874, "px": 179.9, "py": 2007.8}, {"id": "bld-auto-203", "x": -199.16, "z": 14.75, "w": 3.82, "d": 3.68, "h": 8.0, "area": 14.1, "roofHex": 4281427, "px": 247.3, "py": 2023.2}, {"id": "bld-auto-204", "x": 98.35, "z": 17.54, "w": 13.03, "d": 9.26, "h": 14.0, "area": 120.7, "roofHex": 13620449, "px": 8300.0, "py": 2098.8}, {"id": "bld-auto-205", "x": -194.5, "z": 14.62, "w": 3.18, "d": 3.17, "h": 8.0, "area": 10.1, "roofHex": 6517839, "px": 373.5, "py": 2019.8}, {"id": "bld-auto-206", "x": -36.04, "z": 11.92, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 6383477, "px": 4662.4, "py": 1946.7}, {"id": "bld-auto-207", "x": 50.77, "z": 14.24, "w": 1.98, "d": 2.41, "h": 5.5, "area": 4.8, "roofHex": 15657195, "px": 7012.2, "py": 2009.5}, {"id": "bld-auto-208", "x": -185.19, "z": 14.94, "w": 3.09, "d": 3.05, "h": 8.0, "area": 9.4, "roofHex": 2374464, "px": 625.5, "py": 2028.3}, {"id": "bld-auto-209", "x": -189.89, "z": 15.76, "w": 3.29, "d": 3.17, "h": 8.0, "area": 10.4, "roofHex": 4281679, "px": 498.3, "py": 2050.7}, {"id": "bld-auto-210", "x": 74.49, "z": 17.22, "w": 16.0, "d": 4.31, "h": 10.5, "area": 69.0, "roofHex": 9999508, "px": 7654.1, "py": 2090.2}, {"id": "bld-auto-211", "x": -126.85, "z": 17.28, "w": 5.14, "d": 4.19, "h": 8.0, "area": 21.5, "roofHex": 6449272, "px": 2204.5, "py": 2091.8}, {"id": "bld-auto-212", "x": -122.43, "z": 17.45, "w": 3.9, "d": 4.19, "h": 8.0, "area": 16.3, "roofHex": 7046295, "px": 2324.2, "py": 2096.4}, {"id": "bld-auto-213", "x": 26.82, "z": 17.67, "w": 7.67, "d": 3.68, "h": 8.0, "area": 28.2, "roofHex": 8948630, "px": 6363.9, "py": 2102.3}, {"id": "bld-auto-214", "x": 58.23, "z": 17.41, "w": 3.46, "d": 2.67, "h": 5.5, "area": 9.2, "roofHex": 7828347, "px": 7214.0, "py": 2095.3}, {"id": "bld-auto-215", "x": 37.74, "z": 18.24, "w": 3.41, "d": 3.55, "h": 8.0, "area": 12.1, "roofHex": 13883107, "px": 6659.5, "py": 2117.7}, {"id": "bld-auto-216", "x": 48.37, "z": 19.32, "w": 13.71, "d": 5.71, "h": 10.5, "area": 78.3, "roofHex": 14739186, "px": 6947.1, "py": 2146.9}, {"id": "bld-auto-217", "x": -25.96, "z": 18.02, "w": 12.6, "d": 4.19, "h": 10.5, "area": 52.8, "roofHex": 8157794, "px": 4935.4, "py": 2111.7}, {"id": "bld-auto-218", "x": -185.34, "z": 19.0, "w": 2.79, "d": 3.05, "h": 8.0, "area": 8.5, "roofHex": 1915201, "px": 621.4, "py": 2138.3}, {"id": "bld-auto-219", "x": -199.75, "z": 19.38, "w": 2.86, "d": 3.3, "h": 8.0, "area": 9.4, "roofHex": 5662046, "px": 231.5, "py": 2148.6}, {"id": "bld-auto-220", "x": -190.15, "z": 19.83, "w": 3.39, "d": 2.92, "h": 8.0, "area": 9.9, "roofHex": 5335116, "px": 491.2, "py": 2160.6}, {"id": "bld-auto-221", "x": -55.03, "z": 20.29, "w": 6.25, "d": 4.31, "h": 8.0, "area": 26.9, "roofHex": 9010302, "px": 4148.5, "py": 2173.2}, {"id": "bld-auto-222", "x": 59.77, "z": 20.52, "w": 3.46, "d": 1.8, "h": 5.5, "area": 6.2, "roofHex": 9609392, "px": 7255.7, "py": 2179.5}, {"id": "bld-auto-223", "x": 59.77, "z": 21.16, "w": 3.46, "d": 1.8, "h": 5.5, "area": 6.2, "roofHex": 7172732, "px": 7255.7, "py": 2196.7}, {"id": "bld-auto-224", "x": -127.1, "z": 23.82, "w": 5.07, "d": 4.31, "h": 8.0, "area": 21.9, "roofHex": 11903131, "px": 2197.8, "py": 2268.8}, {"id": "bld-auto-225", "x": 58.8, "z": 23.95, "w": 6.66, "d": 4.57, "h": 8.0, "area": 30.4, "roofHex": 6926771, "px": 7229.6, "py": 2272.2}, {"id": "bld-auto-226", "x": -122.62, "z": 23.99, "w": 3.9, "d": 4.31, "h": 8.0, "area": 16.8, "roofHex": 6646627, "px": 2319.2, "py": 2273.4}, {"id": "bld-auto-227", "x": -52.09, "z": 22.08, "w": 2.8, "d": 2.67, "h": 5.5, "area": 7.5, "roofHex": 11588862, "px": 4228.2, "py": 2221.6}, {"id": "bld-auto-228", "x": -101.82, "z": 24.36, "w": 12.09, "d": 4.31, "h": 10.5, "area": 52.1, "roofHex": 5266767, "px": 2882.0, "py": 2283.3}, {"id": "bld-auto-229", "x": 43.15, "z": 29.22, "w": 5.47, "d": 13.07, "h": 10.5, "area": 71.5, "roofHex": 3820095, "px": 6806.0, "py": 2414.8}, {"id": "bld-auto-230", "x": -199.69, "z": 24.46, "w": 3.18, "d": 2.79, "h": 8.0, "area": 8.9, "roofHex": 5135707, "px": 232.9, "py": 2286.0}, {"id": "bld-auto-231", "x": -190.21, "z": 24.84, "w": 2.86, "d": 3.05, "h": 5.5, "area": 8.7, "roofHex": 5923667, "px": 489.7, "py": 2296.3}, {"id": "bld-auto-232", "x": -83.82, "z": 24.59, "w": 14.58, "d": 4.19, "h": 10.5, "area": 61.1, "roofHex": 4674130, "px": 3369.3, "py": 2289.5}, {"id": "bld-auto-233", "x": -195.03, "z": 25.6, "w": 3.39, "d": 3.05, "h": 8.0, "area": 10.3, "roofHex": 6584421, "px": 359.2, "py": 2316.9}, {"id": "bld-auto-234", "x": 77.43, "z": 27.19, "w": 6.78, "d": 5.71, "h": 10.5, "area": 38.7, "roofHex": 1849694, "px": 7733.8, "py": 2359.8}, {"id": "bld-auto-235", "x": -185.84, "z": 25.85, "w": 2.39, "d": 2.79, "h": 5.5, "area": 6.7, "roofHex": 8418680, "px": 607.9, "py": 2323.8}, {"id": "bld-auto-236", "x": -51.45, "z": 25.04, "w": 3.49, "d": 3.3, "h": 5.5, "area": 11.5, "roofHex": 7168362, "px": 4245.3, "py": 2301.9}, {"id": "bld-auto-237", "x": 107.41, "z": 34.86, "w": 1.8, "d": 16.24, "h": 5.5, "area": 29.2, "roofHex": 3951170, "px": 8545.1, "py": 2567.7}, {"id": "bld-auto-238", "x": 29.47, "z": 30.48, "w": 4.38, "d": 5.96, "h": 8.0, "area": 26.1, "roofHex": 7239540, "px": 6435.5, "py": 2449.1}, {"id": "bld-auto-239", "x": -185.49, "z": 29.28, "w": 3.09, "d": 3.05, "h": 8.0, "area": 9.4, "roofHex": 3884635, "px": 617.4, "py": 2416.5}, {"id": "bld-auto-240", "x": -199.38, "z": 29.34, "w": 2.55, "d": 2.41, "h": 5.5, "area": 6.1, "roofHex": 8813703, "px": 241.5, "py": 2418.3}, {"id": "bld-auto-241", "x": 59.93, "z": 30.68, "w": 20.79, "d": 4.57, "h": 10.5, "area": 95.0, "roofHex": 7958133, "px": 7260.2, "py": 2454.3}, {"id": "bld-auto-242", "x": -190.26, "z": 29.92, "w": 3.18, "d": 2.79, "h": 8.0, "area": 8.9, "roofHex": 3226182, "px": 488.3, "py": 2433.7}, {"id": "bld-auto-243", "x": -19.27, "z": 32.04, "w": 11.4, "d": 8.38, "h": 10.5, "area": 95.5, "roofHex": 14208993, "px": 5116.4, "py": 2491.3}, {"id": "bld-auto-244", "x": -5.51, "z": 31.75, "w": 4.0, "d": 4.19, "h": 8.0, "area": 16.8, "roofHex": 10065833, "px": 5488.9, "py": 2483.5}, {"id": "bld-auto-245", "x": -190.31, "z": 31.69, "w": 3.08, "d": 1.8, "h": 5.5, "area": 5.5, "roofHex": 8024957, "px": 486.9, "py": 2481.8}, {"id": "bld-auto-246", "x": -198.79, "z": 32.52, "w": 2.65, "d": 1.8, "h": 5.5, "area": 4.8, "roofHex": 6583135, "px": 257.3, "py": 2504.1}, {"id": "bld-auto-247", "x": -198.95, "z": 34.67, "w": 2.55, "d": 3.43, "h": 8.0, "area": 8.7, "roofHex": 6318203, "px": 253.0, "py": 2562.5}, {"id": "bld-auto-248", "x": 60.47, "z": 34.29, "w": 12.29, "d": 2.67, "h": 10.5, "area": 32.8, "roofHex": 8157824, "px": 7274.7, "py": 2552.2}, {"id": "bld-auto-249", "x": -5.23, "z": 41.27, "w": 11.73, "d": 14.59, "h": 14.0, "area": 171.1, "roofHex": 15777974, "px": 5496.4, "py": 2741.1}, {"id": "bld-auto-250", "x": -195.45, "z": 35.56, "w": 3.39, "d": 2.92, "h": 8.0, "area": 9.9, "roofHex": 7761528, "px": 347.7, "py": 2586.6}, {"id": "bld-auto-251", "x": -190.52, "z": 35.88, "w": 3.29, "d": 3.05, "h": 8.0, "area": 10.0, "roofHex": 2440522, "px": 481.1, "py": 2595.2}, {"id": "bld-auto-252", "x": 82.75, "z": 36.32, "w": 17.15, "d": 3.94, "h": 10.5, "area": 67.6, "roofHex": 11645621, "px": 7877.7, "py": 2607.1}, {"id": "bld-auto-253", "x": -185.84, "z": 36.13, "w": 2.99, "d": 3.05, "h": 8.0, "area": 9.1, "roofHex": 5592161, "px": 607.9, "py": 2602.0}, {"id": "bld-auto-254", "x": -78.35, "z": 39.14, "w": 5.69, "d": 9.9, "h": 10.5, "area": 56.3, "roofHex": 4084287, "px": 3517.3, "py": 2683.4}, {"id": "bld-auto-255", "x": 27.8, "z": 36.83, "w": 2.6, "d": 3.17, "h": 5.5, "area": 8.2, "roofHex": 2174521, "px": 6390.3, "py": 2620.9}, {"id": "bld-auto-256", "x": 31.46, "z": 36.83, "w": 1.8, "d": 3.17, "h": 5.5, "area": 5.7, "roofHex": 1910837, "px": 6489.6, "py": 2620.9}, {"id": "bld-auto-257", "x": 24.35, "z": 36.96, "w": 1.8, "d": 2.92, "h": 5.5, "area": 5.3, "roofHex": 2108978, "px": 6297.1, "py": 2624.3}, {"id": "bld-auto-258", "x": -203.67, "z": 38.04, "w": 1.8, "d": 4.06, "h": 5.5, "area": 7.3, "roofHex": 6779741, "px": 125.3, "py": 2653.5}, {"id": "bld-auto-259", "x": 60.47, "z": 36.58, "w": 3.59, "d": 1.8, "h": 5.5, "area": 6.5, "roofHex": 15589845, "px": 7274.7, "py": 2614.1}, {"id": "bld-auto-260", "x": 74.49, "z": 37.72, "w": 1.8, "d": 1.8, "h": 5.5, "area": 3.2, "roofHex": 2898497, "px": 7654.1, "py": 2644.9}, {"id": "bld-auto-261", "x": 55.92, "z": 38.1, "w": 3.46, "d": 1.8, "h": 5.5, "area": 6.2, "roofHex": 5924691, "px": 7151.7, "py": 2655.3}, {"id": "bld-auto-262", "x": 27.7, "z": 40.13, "w": 8.9, "d": 1.8, "h": 5.5, "area": 16.0, "roofHex": 4148829, "px": 6387.6, "py": 2710.2}, {"id": "bld-auto-263", "x": 17.46, "z": 41.27, "w": 2.73, "d": 1.8, "h": 5.5, "area": 4.9, "roofHex": 3883590, "px": 6110.7, "py": 2741.1}, {"id": "bld-auto-264", "x": 27.7, "z": 41.02, "w": 8.9, "d": 1.8, "h": 5.5, "area": 16.0, "roofHex": 13747135, "px": 6387.6, "py": 2734.3}, {"id": "bld-auto-265", "x": -193.71, "z": 47.43, "w": 4.13, "d": 10.66, "h": 10.5, "area": 44.0, "roofHex": 6252670, "px": 395.0, "py": 2907.8}, {"id": "bld-auto-266", "x": -196.14, "z": 47.68, "w": 1.8, "d": 10.92, "h": 5.5, "area": 19.7, "roofHex": 4805735, "px": 329.1, "py": 2914.6}, {"id": "bld-auto-267", "x": -187.62, "z": 47.68, "w": 3.16, "d": 8.38, "h": 10.5, "area": 26.5, "roofHex": 7565702, "px": 559.8, "py": 2914.6}, {"id": "bld-auto-268", "x": 149.05, "z": 44.45, "w": 6.65, "d": 1.8, "h": 5.5, "area": 12.0, "roofHex": 5268042, "px": 9672.3, "py": 2827.0}, {"id": "bld-auto-269", "x": 110.78, "z": 48.63, "w": 3.03, "d": 6.98, "h": 8.0, "area": 21.1, "roofHex": 10923677, "px": 8636.4, "py": 2940.4}, {"id": "bld-auto-270", "x": -27.12, "z": 46.29, "w": 2.23, "d": 1.8, "h": 5.5, "area": 4.0, "roofHex": 8944247, "px": 4903.9, "py": 2877.0}, {"id": "bld-auto-271", "x": -57.57, "z": 47.12, "w": 5.83, "d": 3.05, "h": 8.0, "area": 17.8, "roofHex": 4213339, "px": 4079.7, "py": 2899.3}, {"id": "bld-auto-272", "x": 186.97, "z": 49.59, "w": 7.73, "d": 5.33, "h": 10.5, "area": 41.2, "roofHex": 3030361, "px": 10698.6, "py": 2966.1}, {"id": "bld-auto-273", "x": -63.7, "z": 47.36, "w": 4.67, "d": 3.05, "h": 8.0, "area": 14.2, "roofHex": 4215380, "px": 3914.0, "py": 2905.9}, {"id": "bld-auto-274", "x": -77.26, "z": 47.69, "w": 5.25, "d": 2.92, "h": 8.0, "area": 15.3, "roofHex": 8945029, "px": 3546.9, "py": 2914.7}, {"id": "bld-auto-275", "x": -70.26, "z": 47.55, "w": 4.67, "d": 2.92, "h": 8.0, "area": 13.6, "roofHex": 5396071, "px": 3736.4, "py": 2911.1}, {"id": "bld-auto-276", "x": -97.53, "z": 48.96, "w": 4.96, "d": 4.44, "h": 8.0, "area": 22.0, "roofHex": 4343636, "px": 2998.3, "py": 2949.2}, {"id": "bld-auto-277", "x": -90.75, "z": 48.07, "w": 4.81, "d": 2.92, "h": 8.0, "area": 14.0, "roofHex": 4607582, "px": 3181.8, "py": 2925.1}, {"id": "bld-auto-278", "x": -84.11, "z": 47.88, "w": 4.67, "d": 2.79, "h": 8.0, "area": 13.0, "roofHex": 3819610, "px": 3361.4, "py": 2919.9}, {"id": "bld-auto-279", "x": -126.57, "z": 49.0, "w": 3.09, "d": 3.17, "h": 8.0, "area": 9.8, "roofHex": 3491409, "px": 2212.1, "py": 2950.4}, {"id": "bld-auto-280", "x": -122.06, "z": 48.86, "w": 3.15, "d": 3.05, "h": 8.0, "area": 9.6, "roofHex": 3293522, "px": 2334.3, "py": 2946.4}, {"id": "bld-auto-281", "x": -113.48, "z": 48.63, "w": 3.25, "d": 2.92, "h": 8.0, "area": 9.5, "roofHex": 7368057, "px": 2566.5, "py": 2940.2}, {"id": "bld-auto-282", "x": -104.0, "z": 48.45, "w": 4.2, "d": 2.92, "h": 8.0, "area": 12.3, "roofHex": 3754063, "px": 2823.0, "py": 2935.3}, {"id": "bld-auto-283", "x": 141.12, "z": 49.21, "w": 1.8, "d": 3.55, "h": 5.5, "area": 6.4, "roofHex": 2504524, "px": 9457.6, "py": 2955.8}, {"id": "bld-auto-284", "x": -109.02, "z": 48.61, "w": 3.06, "d": 2.79, "h": 8.0, "area": 8.5, "roofHex": 5067620, "px": 2687.1, "py": 2939.7}, {"id": "bld-auto-285", "x": 67.25, "z": 48.7, "w": 1.8, "d": 2.03, "h": 5.5, "area": 3.7, "roofHex": 2172980, "px": 7458.3, "py": 2942.1}, {"id": "bld-auto-286", "x": 74.61, "z": 49.21, "w": 1.8, "d": 2.03, "h": 5.5, "area": 3.7, "roofHex": 3951680, "px": 7657.6, "py": 2955.8}, {"id": "bld-auto-287", "x": 38.04, "z": 51.87, "w": 21.53, "d": 6.85, "h": 14.0, "area": 147.5, "roofHex": 11578537, "px": 6667.7, "py": 3028.0}, {"id": "bld-auto-288", "x": 130.56, "z": 51.87, "w": 12.13, "d": 6.34, "h": 10.5, "area": 76.9, "roofHex": 16120573, "px": 9172.0, "py": 3028.0}, {"id": "bld-auto-289", "x": 78.78, "z": 50.79, "w": 6.14, "d": 3.68, "h": 8.0, "area": 22.6, "roofHex": 10722457, "px": 7770.2, "py": 2998.7}, {"id": "bld-auto-290", "x": 94.45, "z": 51.43, "w": 17.79, "d": 4.95, "h": 10.5, "area": 88.1, "roofHex": 3488331, "px": 8194.6, "py": 3015.9}, {"id": "bld-auto-291", "x": 173.23, "z": 51.49, "w": 1.8, "d": 2.79, "h": 5.5, "area": 5.0, "roofHex": 3358776, "px": 10326.7, "py": 3017.6}, {"id": "bld-auto-292", "x": 67.19, "z": 50.98, "w": 1.92, "d": 1.8, "h": 5.5, "area": 3.5, "roofHex": 6843517, "px": 7456.6, "py": 3003.9}, {"id": "bld-auto-293", "x": 200.3, "z": 52.95, "w": 1.8, "d": 4.95, "h": 5.5, "area": 8.9, "roofHex": 11050400, "px": 11059.5, "py": 3057.2}, {"id": "bld-auto-294", "x": 152.61, "z": 52.88, "w": 14.23, "d": 4.06, "h": 10.5, "area": 57.8, "roofHex": 6517635, "px": 9768.5, "py": 3055.4}, {"id": "bld-auto-295", "x": 198.11, "z": 54.28, "w": 1.8, "d": 6.6, "h": 5.5, "area": 11.9, "roofHex": 7238013, "px": 11000.3, "py": 3093.2}, {"id": "bld-auto-296", "x": 58.29, "z": 55.17, "w": 3.33, "d": 7.87, "h": 8.0, "area": 26.2, "roofHex": 9407125, "px": 7215.8, "py": 3117.3}, {"id": "bld-auto-297", "x": 69.81, "z": 53.33, "w": 5.12, "d": 2.67, "h": 8.0, "area": 13.7, "roofHex": 3827372, "px": 7527.6, "py": 3067.4}, {"id": "bld-auto-298", "x": 74.49, "z": 53.84, "w": 3.71, "d": 1.9, "h": 5.5, "area": 7.0, "roofHex": 4748731, "px": 7654.1, "py": 3081.2}, {"id": "bld-auto-299", "x": -55.89, "z": 54.64, "w": 4.23, "d": 4.19, "h": 8.0, "area": 17.7, "roofHex": 4015949, "px": 4125.1, "py": 3102.8}, {"id": "bld-auto-300", "x": 105.0, "z": 56.5, "w": 12.11, "d": 5.2, "h": 10.5, "area": 63.0, "roofHex": 8158605, "px": 8480.0, "py": 3153.3}, {"id": "bld-auto-301", "x": -189.94, "z": 54.47, "w": 2.55, "d": 1.8, "h": 5.5, "area": 4.6, "roofHex": 6582124, "px": 496.9, "py": 3098.4}, {"id": "bld-auto-302", "x": -37.51, "z": 55.3, "w": 9.27, "d": 4.31, "h": 10.5, "area": 40.0, "roofHex": 3887442, "px": 4622.8, "py": 3120.8}, {"id": "bld-auto-303", "x": 22.92, "z": 56.63, "w": 6.11, "d": 4.19, "h": 8.0, "area": 25.6, "roofHex": 8622455, "px": 6258.4, "py": 3156.8}, {"id": "bld-auto-304", "x": -29.58, "z": 55.77, "w": 5.86, "d": 4.69, "h": 8.0, "area": 27.5, "roofHex": 4807519, "px": 4837.4, "py": 3133.5}, {"id": "bld-auto-305", "x": 186.51, "z": 56.76, "w": 5.28, "d": 4.19, "h": 8.0, "area": 22.1, "roofHex": 1649460, "px": 10686.2, "py": 3160.2}, {"id": "bld-auto-306", "x": -108.93, "z": 56.67, "w": 2.88, "d": 4.44, "h": 8.0, "area": 12.8, "roofHex": 6052947, "px": 2689.6, "py": 3157.8}, {"id": "bld-auto-307", "x": 66.61, "z": 56.37, "w": 4.1, "d": 2.92, "h": 8.0, "area": 12.0, "roofHex": 3224889, "px": 7441.0, "py": 3149.9}, {"id": "bld-auto-308", "x": -196.35, "z": 57.58, "w": 2.22, "d": 4.57, "h": 8.0, "area": 10.1, "roofHex": 5198677, "px": 323.3, "py": 3182.6}, {"id": "bld-auto-309", "x": -49.75, "z": 55.34, "w": 6.9, "d": 3.05, "h": 8.0, "area": 21.0, "roofHex": 5266006, "px": 4291.6, "py": 3122.0}, {"id": "bld-auto-310", "x": -188.14, "z": 57.26, "w": 10.18, "d": 3.43, "h": 10.5, "area": 34.9, "roofHex": 5001301, "px": 545.7, "py": 3173.9}, {"id": "bld-auto-311", "x": -146.43, "z": 57.01, "w": 3.37, "d": 2.16, "h": 5.5, "area": 7.3, "roofHex": 5002070, "px": 1674.7, "py": 3167.1}, {"id": "bld-auto-312", "x": 72.57, "z": 57.07, "w": 7.55, "d": 2.03, "h": 8.0, "area": 15.3, "roofHex": 4610096, "px": 7602.2, "py": 3168.8}, {"id": "bld-auto-313", "x": -166.79, "z": 57.71, "w": 3.24, "d": 3.05, "h": 8.0, "area": 9.9, "roofHex": 7434084, "px": 1123.4, "py": 3186.0}, {"id": "bld-auto-314", "x": -151.59, "z": 57.71, "w": 3.04, "d": 3.05, "h": 8.0, "area": 9.3, "roofHex": 5985365, "px": 1535.0, "py": 3186.0}, {"id": "bld-auto-315", "x": -70.26, "z": 56.63, "w": 4.67, "d": 3.05, "h": 8.0, "area": 14.2, "roofHex": 3755854, "px": 3736.4, "py": 3156.7}, {"id": "bld-auto-316", "x": -63.33, "z": 56.49, "w": 4.81, "d": 3.05, "h": 8.0, "area": 14.7, "roofHex": 5328209, "px": 3923.8, "py": 3153.1}, {"id": "bld-auto-317", "x": -104.42, "z": 57.4, "w": 5.04, "d": 3.05, "h": 8.0, "area": 15.4, "roofHex": 6314070, "px": 2811.7, "py": 3177.7}, {"id": "bld-auto-318", "x": -87.17, "z": 57.01, "w": 11.37, "d": 2.92, "h": 8.0, "area": 33.2, "roofHex": 6713690, "px": 3278.5, "py": 3167.1}, {"id": "bld-auto-319", "x": -76.89, "z": 56.82, "w": 4.52, "d": 2.92, "h": 8.0, "area": 13.2, "roofHex": 6057554, "px": 3556.8, "py": 3161.8}, {"id": "bld-auto-320", "x": 18.37, "z": 57.58, "w": 2.47, "d": 2.29, "h": 5.5, "area": 5.7, "roofHex": 5855845, "px": 6135.3, "py": 3182.6}, {"id": "bld-auto-321", "x": -97.45, "z": 57.4, "w": 4.52, "d": 2.79, "h": 8.0, "area": 12.6, "roofHex": 5723992, "px": 3000.3, "py": 3177.5}, {"id": "bld-auto-322", "x": -131.43, "z": 58.6, "w": 3.37, "d": 3.81, "h": 8.0, "area": 12.8, "roofHex": 8023659, "px": 2080.6, "py": 3210.0}, {"id": "bld-auto-323", "x": -117.65, "z": 57.97, "w": 5.47, "d": 2.92, "h": 8.0, "area": 16.0, "roofHex": 6117721, "px": 2453.5, "py": 3193.2}, {"id": "bld-auto-324", "x": -113.39, "z": 57.83, "w": 3.06, "d": 2.79, "h": 8.0, "area": 8.5, "roofHex": 5065803, "px": 2569.0, "py": 3189.3}, {"id": "bld-auto-325", "x": -141.59, "z": 58.28, "w": 3.7, "d": 2.92, "h": 8.0, "area": 10.8, "roofHex": 7895645, "px": 1805.6, "py": 3201.4}, {"id": "bld-auto-326", "x": -136.48, "z": 58.34, "w": 3.26, "d": 3.05, "h": 8.0, "area": 9.9, "roofHex": 5723739, "px": 1943.8, "py": 3203.1}, {"id": "bld-auto-327", "x": -126.39, "z": 58.27, "w": 3.66, "d": 2.92, "h": 8.0, "area": 10.7, "roofHex": 6116697, "px": 2216.9, "py": 3201.1}, {"id": "bld-auto-328", "x": -122.01, "z": 58.12, "w": 3.06, "d": 2.79, "h": 8.0, "area": 8.5, "roofHex": 6184794, "px": 2335.5, "py": 3197.1}, {"id": "bld-auto-329", "x": -176.18, "z": 58.6, "w": 3.59, "d": 3.05, "h": 8.0, "area": 10.9, "roofHex": 4608339, "px": 869.4, "py": 3210.0}, {"id": "bld-auto-330", "x": -180.61, "z": 58.72, "w": 4.08, "d": 2.79, "h": 8.0, "area": 11.4, "roofHex": 5001814, "px": 749.4, "py": 3213.4}, {"id": "bld-auto-331", "x": -171.8, "z": 58.79, "w": 3.19, "d": 2.92, "h": 8.0, "area": 9.3, "roofHex": 5199706, "px": 988.0, "py": 3215.2}, {"id": "bld-auto-332", "x": 39.62, "z": 59.1, "w": 3.29, "d": 2.79, "h": 5.5, "area": 9.2, "roofHex": 4085311, "px": 6710.5, "py": 3223.8}, {"id": "bld-auto-333", "x": 72.57, "z": 58.34, "w": 7.55, "d": 1.8, "h": 5.5, "area": 13.6, "roofHex": 1583658, "px": 7602.2, "py": 3203.1}, {"id": "bld-auto-334", "x": 200.13, "z": 62.85, "w": 1.8, "d": 6.22, "h": 5.5, "area": 11.2, "roofHex": 16711421, "px": 11055.0, "py": 3325.1}, {"id": "bld-auto-335", "x": 197.94, "z": 63.93, "w": 1.8, "d": 4.06, "h": 5.5, "area": 7.3, "roofHex": 16711420, "px": 10995.7, "py": 3354.3}, {"id": "bld-auto-336", "x": 175.27, "z": 65.32, "w": 9.05, "d": 1.8, "h": 5.5, "area": 16.3, "roofHex": 16711165, "px": 10381.9, "py": 3392.1}, {"id": "drone-gym-west", "x": -80.84, "z": 36.8, "w": 9.61, "d": 6.28, "h": 10.5, "area": 60.4, "roofHex": 15857145, "px": 3450.0, "py": 2620.0}, {"id": "drone-pavilion-n", "x": -26.16, "z": -9.75, "w": 3.14, "d": 3.14, "h": 6.5, "area": 9.9, "roofHex": 11817737, "px": 4930.0, "py": 1360.0}, {"id": "drone-pavilion-s", "x": -26.16, "z": 6.87, "w": 3.14, "d": 3.14, "h": 6.5, "area": 9.9, "roofHex": 11817737, "px": 4930.0, "py": 1810.0}, {"id": "drone-westpond-top", "x": -35.39, "z": -15.3, "w": 8.13, "d": 4.06, "h": 11.0, "area": 33.0, "roofHex": 16317180, "px": 4680.0, "py": 1210.0}, {"id": "drone-se-vertical", "x": 15.59, "z": 25.71, "w": 4.25, "d": 12.56, "h": 13.5, "area": 53.4, "roofHex": 3359061, "px": 6060.0, "py": 2320.0}];


// Load Real 3D Building Models from GISTDA (จิสด้า)
function loadGistda3DModel() {
  if (typeof THREE.GLTFLoader === 'undefined') return;
  const loader = new THREE.GLTFLoader();
  loader.load('gistda_campus_model.glb', (gltf) => {
    let targetMesh = null;
    gltf.scene.traverse((obj) => {
      if (obj.isMesh) targetMesh = obj;
    });
    if (!targetMesh) return;

    const geo = targetMesh.geometry.clone();
    geo.rotateX(-Math.PI / 2);
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0xF1ECE1, // GISTDA architectural ivory
      roughness: 0.38,
      metalness: 0.08
    });
    const gistdaMesh = new THREE.Mesh(geo, mat);
    gistdaMesh.name = 'gistda3DModel';

    // Edge rendering for architectural crispness
    const edges = new THREE.EdgesGeometry(geo, 25);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x475569, linewidth: 1.5 });
    const wire = new THREE.LineSegments(edges, edgeMat);
    gistdaMesh.add(wire);

    buildingsGroup.add(gistdaMesh);
  }, undefined, (err) => {
    console.warn('GISTDA 3D model notice:', err);
  });
}

function buildBuildings() {
  // GISTDA 3D footprints integrated into 1:1 photorealistic meshes
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
    // Allow the full 416.6 x 120.0 campus ground plane
    if (b.x < -207.5 || b.x > 205.0 || b.z < -59.5 || b.z > 59.5) return;

    // Only skip if this footprint is the exact same building as one of the 36 named buildings (bounding-box center overlap)
    const isSameAsNamed = HOSPITAL_BUILDINGS.some(lm => {
      if (lm.id === 'bld-57') return false; // Never suppress buildings around the stadium
      const dx = Math.abs(lm.pos.x - b.x);
      const dz = Math.abs(lm.pos.z - b.z);
      return dx < (lm.dimensions.w * 0.45 + 1.5) && dz < (lm.dimensions.d * 0.45 + 1.5);
    });

    if (!isSameAsNamed) {
      const bGroup = new THREE.Group();
      bGroup.position.set(b.x, 0, b.z);

      // Wall body in warm architectural white/ivory
      const towerGeo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const tower = new THREE.Mesh(towerGeo, minorBldMat);
      tower.position.set(0, b.h / 2, 0);
      tower.castShadow = true;
      tower.receiveShadow = true;
      bGroup.add(tower);

      // Realistic Pitched Hip Roof or Flat Cap colored with the EXACT real roof color sampled from the drone photo!
      const rMat = new THREE.MeshStandardMaterial({
        color: b.roofHex || 0x64748b,
        roughness: 0.45,
        metalness: 0.12
      });
      const eave = new THREE.Mesh(new THREE.BoxGeometry(b.w + 0.5, 0.2, b.d + 0.5), gistdaConcreteMat);
      eave.position.set(0, b.h + 0.1, 0);
      bGroup.add(eave);

      const rH = Math.min(2.0, Math.max(0.9, Math.min(b.w, b.d) * 0.22));
      const hipGeo = createHipRoofGeometry(b.w + 0.5, b.d + 0.5, rH);
      const roofCap = new THREE.Mesh(hipGeo, rMat);
      roofCap.position.set(0, b.h + 0.2, 0);
      roofCap.castShadow = true;
      bGroup.add(roofCap);

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
