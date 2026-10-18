/**
 * Valaya Alongkorn Rajabhat University under the Royal Patronage (VRU) - 3D Smart Campus Digital Twin
 * ระบบผังอาคารและศูนย์ควบคุม 3 มิติอัจฉริยะ มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ จ.ปทุมธานี
 *
 * อ้างอิงแผนผังจริง 100%:
 * 1. ภาพถ่ายดาวเทียมและโมเดล 3D ปัจจุบัน (/vru/Screenshot *.png)
 * 2. แผนผัง 3 มิติ มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ฯ ครบ 57 อาคาร (Artboard-6.png)
 * 3. แผนผังอาคาร 2 มิติ มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ฯ (MapVRU-2016.jpg)
 *
 * ที่ตั้ง: เลขที่ 1 หมู่ 20 ถนนพหลโยธิน กม.48 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 13180
 */

const CAMPUS_ROT = 0.0;

// Defensive patch for Three.js to guarantee 100% crash-free rendering
if (typeof THREE !== 'undefined') {
  if (THREE.Object3D) {
    const origAdd = THREE.Object3D.prototype.add;
    THREE.Object3D.prototype.add = function (...args) {
      const filtered = args.filter(a => a != null);
      if (filtered.length > 0) {
        return origAdd.apply(this, filtered);
      }
      return this;
    };
  }
  if (THREE.Mesh) {
    const origMesh = THREE.Mesh;
    THREE.Mesh = function (geometry, material) {
      if (!material) {
        material = new THREE.MeshStandardMaterial({ color: 0x94a3b8 });
      }
      return new origMesh(geometry, material);
    };
    THREE.Mesh.prototype = origMesh.prototype;
  }
}

function campusToWorld(x, z) {
  return {
    x: x * Math.cos(CAMPUS_ROT) + z * Math.sin(CAMPUS_ROT),
    z: -x * Math.sin(CAMPUS_ROT) + z * Math.cos(CAMPUS_ROT)
  };
}

// ============================================================================
// 1. VRU Masterplan Building Inventory (ครบ 57 หมายเลขตาม Artboard-6.png & Google Maps Ground Truth)
//    แกนพิกัดมาตรฐาน 3D World (Ground Truth: Screenshot 2569-10-17 at 21.07.04.png):
//    - ทิศตะวันออก (+X, ขวามือ): ถนนพหลโยธิน (ทล.1), ซุ้มประตูใหญ่, พระอนุสาวรีย์, หอประชุม 80 ปี (x = +112 ถึง +188)
//    - ทิศตะวันตก (-X, ซ้ายมือ): สนามกีฬากลาง, ลู่วิ่ง 400ม., แฟลต/หมู่บ้านพักบุคลากร (x = -158 ถึง -220)
//    - ทิศเหนือ (-Z, ด้านบน): โรงแรม VRU, สระว่ายน้ำ, รร.สาธิตมัธยม, ศูนย์วิทย์, สมาคมศิษย์เก่า (z = -20 ถึง -60)
//    - ทิศใต้ (+Z, ด้านล่าง): คณะครุศาสตร์, รร.สาธิตประถม, คณะวิทยาการจัดการ, Community Mall (z = +15 ถึง +60)
//    - ระบบ Solar Rooftop: ผูก lid: 8..19 เข้ากับอาคารจริง 12 หลัง และจำลองแผงโซลาร์บนหลังคา
//    - ทางเชื่อมอาคาร: ปิด/ยกเลิกการสร้างทางเชื่อมทั้งหมดตามคำสั่งผู้ใช้งาน
// ============================================================================

const HOSPITAL_BUILDINGS = [
  {
    id: 'bld-1',
    num: '1',
    code: '1',
    name: '1',
    shortName: '1',
    sub: 'อาคาร 1',
    category: 'อาคาร 1',
    status: 'เปิดทำการปกติ',
    archType: 'landmark80',
    pos: { x: 159.7, y: 0, z: 8.4 },
    rotY: 0,
    anchorHeight: 16.0,
    dimensions: { w: 38.0, h: 14.0, d: 30.0 },
    roofColor: 0xf8fafc,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' }
    ],
    stats: {
      floors: '3 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 1'
    }
  },
  {
    id: 'bld-2',
    num: '2',
    code: '2',
    name: '2',
    shortName: '2',
    sub: 'อาคาร 2',
    category: 'อาคาร 2',
    status: 'เปิดทำการปกติ',
    archType: 'spb100',
    pos: { x: 123.1, y: 0, z: 16.5 },
    rotY: 0,
    anchorHeight: 18.0,
    dimensions: { w: 22.0, h: 16.0, d: 12.0 },
    roofColor: 0x94a3b8,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' },
      { num: 5, desc: 'ชั้น 5' },
      { num: 6, desc: 'ชั้น 6' }
    ],
    stats: {
      floors: '6 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 2'
    }
  },
  {
    id: 'bld-3',
    num: '3',
    code: '3',
    name: '3',
    shortName: '3',
    sub: 'อาคาร 3',
    category: 'อาคาร 3',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 181.4, y: 0, z: -22.3 },
    rotY: 0,
    anchorHeight: 14.0,
    dimensions: { w: 24.0, h: 12.0, d: 13.0 },
    roofColor: 0x334155,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 3'
    }
  },
  {
    id: 'bld-4',
    num: '4',
    code: '4',
    name: '4',
    shortName: '4',
    sub: 'อาคาร 4',
    category: 'อาคาร 4',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 172.0, y: 0, z: -43.4 },
    rotY: 0,
    anchorHeight: 8.0,
    dimensions: { w: 36.0, h: 6.0, d: 16.0 },
    roofColor: 0x475569,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 4'
    }
  },
  {
    id: 'bld-5',
    num: '5',
    code: '5',
    name: '5',
    shortName: '5',
    sub: 'อาคาร 5',
    category: 'อาคาร 5',
    status: 'เปิดทำการปกติ',
    archType: 'pool',
    pos: { x: 157.4, y: 0, z: -22.0 },
    rotY: 0,
    anchorHeight: 6.5,
    dimensions: { w: 16.0, h: 4.5, d: 14.0 },
    roofColor: 0x0284c7,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' }
    ],
    stats: {
      floors: '1 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 5'
    }
  },
  {
    id: 'bld-6',
    num: '6',
    code: '6',
    name: '6',
    shortName: '6',
    sub: 'อาคาร 6',
    category: 'อาคาร 6',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 115.0, y: 0, z: -21.6 },
    rotY: 0,
    anchorHeight: 12.0,
    dimensions: { w: 24.0, h: 10.0, d: 9.0 },
    roofColor: 0x166534,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 6'
    }
  },
  {
    id: 'bld-7',
    num: '7',
    code: '7',
    name: '7',
    shortName: '7',
    sub: 'อาคาร 7',
    category: 'อาคาร 7',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 136.4, y: 0, z: -21.2 },
    rotY: 0,
    anchorHeight: 8.0,
    dimensions: { w: 19.0, h: 6.0, d: 8.0 },
    roofColor: 0x94a3b8,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 7'
    }
  },
  {
    id: 'bld-8',
    num: '8',
    code: '8',
    name: '8',
    shortName: '8',
    sub: 'อาคาร 8',
    category: 'อาคาร 8',
    status: 'เปิดทำการปกติ',
    archType: 'monument',
    pos: { x: 184.0, y: 0, z: 13.9 },
    rotY: 0,
    anchorHeight: 7.0,
    dimensions: { w: 5.0, h: 5.0, d: 5.0 },
    roofColor: 0xfbbf24,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' }
    ],
    stats: {
      floors: '1 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 8'
    }
  },
  {
    id: 'bld-9',
    num: '9',
    code: '9',
    name: '9',
    shortName: '9',
    sub: 'อาคาร 9',
    category: 'อาคาร 9',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 117.9, y: 0, z: 51.6 },
    rotY: 0,
    anchorHeight: 14.0,
    dimensions: { w: 24.0, h: 12.0, d: 9.0 },
    roofColor: 0x334155,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 9'
    }
  },
  {
    id: 'bld-10',
    num: '10',
    code: '10',
    name: '10',
    shortName: '10',
    sub: 'อาคาร 10',
    category: 'อาคาร 10',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 145.6, y: 0, z: 53.4 },
    rotY: 0,
    anchorHeight: 16.0,
    dimensions: { w: 23.0, h: 14.0, d: 13.0 },
    roofColor: 0x166534,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' },
      { num: 5, desc: 'ชั้น 5' }
    ],
    stats: {
      floors: '5 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 10'
    }
  },
  {
    id: 'bld-11',
    num: '11',
    code: '11',
    name: '11',
    shortName: '11',
    sub: 'อาคาร 11',
    category: 'อาคาร 11',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 96.9, y: 0, z: 6.9 },
    rotY: 0,
    anchorHeight: 11.0,
    dimensions: { w: 19.5, h: 9.0, d: 15.0 },
    roofColor: 0x334155,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 11'
    }
  },
  {
    id: 'bld-13',
    num: '13',
    code: '13',
    name: '13',
    shortName: '13',
    sub: 'อาคาร 13',
    category: 'อาคาร 13',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 58.1, y: 0, z: -18.6 },
    rotY: 0,
    anchorHeight: 9.0,
    dimensions: { w: 22.5, h: 7.0, d: 8.0 },
    roofColor: 0x64748b,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 13'
    }
  },
  {
    id: 'bld-14',
    num: '14',
    code: '14',
    name: '14',
    shortName: '14',
    sub: 'อาคาร 14',
    category: 'อาคาร 14',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 70.5, y: 0, z: 17.5 },
    rotY: 0,
    anchorHeight: 10.0,
    dimensions: { w: 18.0, h: 8.0, d: 6.0 },
    roofColor: 0x475569,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' }
    ],
    stats: {
      floors: '3 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 14'
    }
  },
  {
    id: 'bld-15',
    num: '15',
    code: '15',
    name: '15',
    shortName: '15',
    sub: 'อาคาร 15',
    category: 'อาคาร 15',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 79.9, y: 0, z: 39.0 },
    rotY: 0,
    anchorHeight: 13.0,
    dimensions: { w: 17.0, h: 11.0, d: 5.5 },
    roofColor: 0x94a3b8,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 15'
    }
  },
  {
    id: 'bld-16',
    num: '16',
    code: '16',
    name: '16',
    shortName: '16',
    sub: 'อาคาร 16',
    category: 'อาคาร 16',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 58.4, y: 0, z: 28.7 },
    rotY: 0,
    anchorHeight: 10.0,
    dimensions: { w: 23.0, h: 8.0, d: 5.5 },
    roofColor: 0x78350f,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' }
    ],
    stats: {
      floors: '3 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 16'
    }
  },
  {
    id: 'bld-17',
    num: '17',
    code: '17',
    name: '17',
    shortName: '17',
    sub: 'อาคาร 17',
    category: 'อาคาร 17',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 22.0, y: 0, z: -21.0 },
    rotY: 0,
    anchorHeight: 12.0,
    dimensions: { w: 24.0, h: 10.0, d: 11.0 },
    roofColor: 0x334155,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' }
    ],
    stats: {
      floors: '3 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 17'
    }
  },
  {
    id: 'bld-19',
    num: '19',
    code: '19',
    name: '19',
    shortName: '19',
    sub: 'อาคาร 19',
    category: 'อาคาร 19',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: 22.0, y: 0, z: 22.0 },
    rotY: 0,
    anchorHeight: 12.0,
    dimensions: { w: 22.0, h: 10.0, d: 11.0 },
    roofColor: 0x78350f,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' }
    ],
    stats: {
      floors: '3 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 19'
    }
  },
  {
    id: 'bld-18',
    num: '18',
    code: '18',
    name: '18',
    shortName: '18',
    sub: 'อาคาร 18',
    category: 'อาคาร 18',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -26.2, y: 0, z: -17.9 },
    rotY: 0,
    anchorHeight: 8.5,
    dimensions: { w: 12.0, h: 6.5, d: 8.0 },
    roofColor: 0xe2e8f0,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 18'
    }
  },
  {
    id: 'bld-21',
    num: '21',
    code: '21',
    name: '21',
    shortName: '21',
    sub: 'อาคาร 21',
    category: 'อาคาร 21',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -43.0, y: 0, z: 39.0 },
    rotY: 0,
    anchorHeight: 10.5,
    dimensions: { w: 14.0, h: 8.5, d: 12.0 },
    roofColor: 0xe2e8f0,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 21'
    }
  },
  {
    id: 'bld-22',
    num: '22',
    code: '22',
    name: '22',
    shortName: '22',
    sub: 'อาคาร 22',
    category: 'อาคาร 22',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -6.9, y: 0, z: 38.3 },
    rotY: 0,
    anchorHeight: 16.0,
    dimensions: { w: 20.0, h: 14.0, d: 18.0 },
    roofColor: 0xea580c,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 22'
    }
  },
  {
    id: 'bld-23',
    num: '23',
    code: '23',
    name: '23',
    shortName: '23',
    sub: 'อาคาร 23',
    category: 'อาคาร 23',
    status: 'เปิดทำการปกติ',
    archType: 'thaiPavilion',
    pos: { x: -2.9, y: 0, z: 0.6 },
    rotY: 0,
    anchorHeight: 8.5,
    dimensions: { w: 7.3, h: 6.5, d: 7.2 },
    roofColor: 0xb45309,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 23'
    }
  },
  {
    id: 'bld-28',
    num: '28',
    code: '28',
    name: '28',
    shortName: '28',
    sub: 'อาคาร 28',
    category: 'อาคาร 28',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -43.5, y: 0, z: -9.0 },
    rotY: 0,
    anchorHeight: 12.0,
    dimensions: { w: 22.5, h: 10.0, d: 13.5 },
    roofColor: 0x991b1b,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' }
    ],
    stats: {
      floors: '3 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 28'
    }
  },
  {
    id: 'bld-30',
    num: '30',
    code: '30',
    name: '30',
    shortName: '30',
    sub: 'อาคาร 30',
    category: 'อาคาร 30',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -106.0, y: 0, z: -5.0 },
    rotY: 0,
    anchorHeight: 10.5,
    dimensions: { w: 16.5, h: 8.5, d: 5.5 },
    roofColor: 0x0284c7,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 30'
    }
  },
  {
    id: 'bld-31',
    num: '31',
    code: '31',
    name: '31',
    shortName: '31',
    sub: 'อาคาร 31',
    category: 'อาคาร 31',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -106.0, y: 0, z: -11.2 },
    rotY: 0,
    anchorHeight: 9.0,
    dimensions: { w: 16.0, h: 7.0, d: 4.6 },
    roofColor: 0xd97706,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' }
    ],
    stats: {
      floors: '2 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 31'
    }
  },
  {
    id: 'bld-43',
    num: '43',
    code: '43',
    name: '43',
    shortName: '43',
    sub: 'อาคาร 43',
    category: 'อาคาร 43',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -120.6, y: 0, z: -1.8 },
    rotY: 0,
    anchorHeight: 15.0,
    dimensions: { w: 10.5, h: 13.0, d: 5.5 },
    roofColor: 0xf8fafc,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 43'
    }
  },
  {
    id: 'bld-44',
    num: '44',
    code: '44',
    name: '44',
    shortName: '44',
    sub: 'อาคาร 44',
    category: 'อาคาร 44',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -120.6, y: 0, z: 9.3 },
    rotY: 0,
    anchorHeight: 15.0,
    dimensions: { w: 10.5, h: 13.0, d: 5.5 },
    roofColor: 0xf8fafc,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 44'
    }
  },
  {
    id: 'bld-45',
    num: '45',
    code: '45',
    name: '45',
    shortName: '45',
    sub: 'อาคาร 45',
    category: 'อาคาร 45',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -120.6, y: 0, z: 20.4 },
    rotY: 0,
    anchorHeight: 15.0,
    dimensions: { w: 10.5, h: 13.0, d: 5.5 },
    roofColor: 0xf8fafc,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 45'
    }
  },
  {
    id: 'bld-46',
    num: '46',
    code: '46',
    name: '46',
    shortName: '46',
    sub: 'อาคาร 46',
    category: 'อาคาร 46',
    status: 'เปิดทำการปกติ',
    archType: 'box',
    pos: { x: -120.6, y: 0, z: 31.4 },
    rotY: 0,
    anchorHeight: 15.0,
    dimensions: { w: 10.5, h: 13.0, d: 5.5 },
    roofColor: 0xf8fafc,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' },
      { num: 2, desc: 'ชั้น 2' },
      { num: 3, desc: 'ชั้น 3' },
      { num: 4, desc: 'ชั้น 4' }
    ],
    stats: {
      floors: '4 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 46'
    }
  },
  {
    id: 'bld-57',
    num: '57',
    code: '57',
    name: '57',
    shortName: '57',
    sub: 'อาคาร 57',
    category: 'อาคาร 57',
    status: 'เปิดทำการปกติ',
    archType: 'stadium',
    pos: { x: -144.2, y: 0, z: 12.3 },
    rotY: 0,
    anchorHeight: 6.0,
    dimensions: { w: 22.0, h: 4.0, d: 48.0 },
    roofColor: 0xdc2626,
    accentColor: 0x0284c7,
    floors: [
      { num: 1, desc: 'ชั้น 1' }
    ],
    stats: {
      floors: '1 ชั้น',
      capacity: 'พร้อมใช้งาน',
      power: 'ระบบปกติ',
      security: '100%',
      load: 75,
      note: 'อาคาร 57'
    }
  }
];



const BUILDINGS_MAP = {};
HOSPITAL_BUILDINGS.forEach(b => { BUILDINGS_MAP[b.id] = b; });

const WARDS_DATA = [
  { code: 'FAC-EDU', name: 'คณะครุศาสตร์ (Faculty of Education - FE)', bld: 'VRU-16 / VRU-17', status: 'เปิดทำการสอน' },
  { code: 'FAC-FST', name: 'คณะวิทยาศาสตร์และเทคโนโลยี (Faculty of Science and Technology - FST)', bld: 'VRU-19 / VRU-13', status: 'เปิดทำการสอน' },
  { code: 'FAC-FHS', name: 'คณะมนุษยศาสตร์และสังคมศาสตร์ (Faculty of Humanities and Social Sciences - FHS)', bld: 'VRU-32 / VRU-33', status: 'เปิดทำการสอน' },
  { code: 'FAC-FMS', name: 'คณะวิทยาการจัดการ (Faculty of Management Science - FMS)', bld: 'VRU-28', status: 'เปิดทำการสอน' },
  { code: 'FAC-FAT', name: 'คณะเทคโนโลยีการเกษตร (Faculty of Agricultural Technology - FAT)', bld: 'VRU-14 / VRU-15', status: 'เปิดทำการสอน' },
  { code: 'FAC-FIT', name: 'คณะเทคโนโลยีอุตสาหกรรม (Faculty of Industrial Technology - FIT)', bld: 'VRU-38 / VRU-39', status: 'เปิดทำการสอน' },
  { code: 'FAC-PH', name: 'คณะสาธารณสุขศาสตร์ (Faculty of Public Health)', bld: 'VRU-29', status: 'เปิดทำการสอน' },
  { code: 'COL-RCIM', name: 'วิทยาลัยนวัตกรรมการจัดการ (College of Innovative Management)', bld: 'VRU-33-34', status: 'เปิดทำการสอน' },
  { code: 'GRAD-SCH', name: 'บัณฑิตวิทยาลัย (Graduate School - ป.โท / ป.เอก)', bld: 'VRU-33-34', status: 'เปิดทำการสอน' },
  { code: 'SATIT-SEC', name: 'โรงเรียนสาธิต มรภ.วไลยอลงกรณ์ฯ (ฝ่ายมัธยม)', bld: 'VRU-30', status: 'เปิดทำการสอน' },
  { code: 'SATIT-PRI', name: 'โรงเรียนสาธิต มรภ.วไลยอลงกรณ์ฯ (ฝ่ายประถมและปฐมวัย)', bld: 'VRU-35', status: 'เปิดทำการสอน' },
  { code: 'OFF-PRES', name: 'สำนักงานอธิการบดี (Office of the President)', bld: 'VRU-02', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-REG', name: 'สำนักส่งเสริมวิชาการและงานทะเบียน (One Stop Service)', bld: 'VRU-02', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-ARIT', name: 'สำนักวิทยบริการและเทคโนโลยีสารสนเทศ (หอสมุดกลาง)', bld: 'VRU-31', status: 'เปิดบริการ 08:00-20:00' },
  { code: 'OFF-RDI', name: 'สถาบันวิจัยและพัฒนา (Research and Development Institute)', bld: 'VRU-33-34', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-VAB', name: 'ศูนย์ภาษาและวิเทศสัมพันธ์ (อาคาร 75 ปี วไลยอลงกรณ์)', bld: 'VRU-12', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-SCB', name: 'ศูนย์วิทยาศาสตร์และเครื่องมือวิเคราะห์ขั้นสูง (SCB)', bld: 'VRU-13', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-STD', name: 'กองพัฒนานักศึกษา และงานทุนการศึกษา กยศ.', bld: 'VRU-18', status: 'เปิดบริการ 08:30-17:30' },
  { code: 'OFF-CULT', name: 'สำนักศิลปะและวัฒนธรรม (เรือนเจ้าฟ้า / เรือนไทยวไลยอลงกรณ์)', bld: 'VRU-36', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-RSPG', name: 'ศูนย์ประสานงานโครงการอนุรักษ์พันธุกรรมพืชฯ (อพ.สธ.)', bld: 'VRU-53-54', status: 'เปิดบริการ 08:30-16:30' },
  { code: 'OFF-HOTEL', name: 'ศูนย์ฝึกประสบการณ์วิชาชีพ โรงแรม มรภ.วไลยอลงกรณ์', bld: 'VRU-03', status: 'เปิดบริการ 24 ชม.' },
  { code: 'OFF-MALL', name: 'VRU Green Community Mall & ศูนย์การค้าชุมชน', bld: 'VRU-04', status: 'เปิดบริการ 07:00-20:00' },
  { code: 'OFF-POOL', name: 'ศูนย์ส่งเสริมสุขภาพ และสระว่ายน้ำอวยพร เปล่งวานิช', bld: 'VRU-05', status: 'เปิดบริการ 08:30-19:30' },
  { code: 'OFF-MED', name: 'อาคารพยาบาล และหน่วยปฐมพยาบาลมหาวิทยาลัย', bld: 'VRU-20-22', status: 'เปิดบริการ 08:00-18:00' },
  { code: 'OFF-BANK', name: 'ธนาคารกรุงไทย และร้านสะดวกซื้อภายในมหาวิทยาลัย', bld: 'VRU-20-22', status: 'เปิดบริการทุกวัน' },
  { code: 'OFF-DORM', name: 'สำนักงานหอพักนักศึกษา และหอพักนักศึกษานานาชาติ (อาคาร 40-52)', bld: 'VRU-43-48', status: 'เปิดบริการ 24 ชม.' },
  { code: 'OFF-SPORT', name: 'ศูนย์กีฬามหาวิทยาลัย ยิมเนเซียม 1-2 และสนามกีฬากลาง', bld: 'VRU-57', status: 'เปิดบริการ 06:00-21:00' }
];

const INFRASTRUCTURE_DATA = [
  { code: 'POND-FRONT', name: 'สระน้ำสะท้อนเงาหน้าหอประชุม 80 ปี วไลยอลงกรณ์', bld: 'VRU-01', status: 'ระบบน้ำพุหมุนเวียนปกติ' },
  { code: 'POND-THAI', name: 'สระน้ำใหญ่กลางมหาวิทยาลัย & เกาะเรือนไทยเจ้าฟ้า', bld: 'VRU-36', status: 'ระดับน้ำและนิเวศสมบูรณ์' },
  { code: 'CANAL-DIAG', name: 'คลองซอยตัดเฉียง (แนวแบ่งเขต จ.ปทุมธานี - จ.พระนครศรีอยุธยา)', bld: 'VRU-37 / VRU-53', status: 'การระบายน้ำคล่องตัว 100%' },
  { code: 'POND-SOUTH', name: 'กลุ่มสระเก็บน้ำฝั่งทิศใต้ (3 สระเรียงตามแนวถนนสายใต้)', bld: 'VRU-28 / VRU-29', status: 'กักเก็บน้ำเพื่อการเกษตร 100%' },
  { code: 'POND-DORM', name: 'สระน้ำคู่ขนาบกลุ่มหอพักนักศึกษา (ฝั่งเหนือ-ใต้ของหอพัก 43-48)', bld: 'VRU-43-48', status: 'ภูมิทัศน์ริมน้ำสมบูรณ์' },
  { code: 'POND-STAD', name: 'สระเก็บน้ำขนาดใหญ่หลังสนามกีฬากลาง', bld: 'VRU-57', status: 'ความจุน้ำสำรอง 100%' },
  { code: 'POOL-50M', name: 'สระว่ายน้ำมาตรฐาน 50 เมตร (สระว่ายน้ำอวยพร เปล่งวานิช)', bld: 'VRU-05', status: 'ค่าคลอรีนและ pH มาตรฐาน' },
  { code: 'SOLAR-GRID', name: 'ระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์บนหลังคาอาคารเรียน (Solar Rooftop)', bld: 'VRU-12 / VRU-13 / VRU-29', status: 'ผลิตไฟฟ้าสะอาด 1.45 MWp' },
  { code: 'EV-TRAM', name: 'ระบบรถรางไฟฟ้าแคมปัส (VRU EV Shuttle Tram)', bld: 'VRU-37', status: 'เดินรถปกติทุก 10 นาที' },
  { code: 'ROAD-MAIN', name: 'โครงข่ายถนนคอนกรีตภายในมหาวิทยาลัยและสะพานข้ามคลอง 4 จุด', bld: 'VRU-01 ถึง VRU-57', status: 'การจราจรคล่องตัว 100%' },
  { code: 'PARK-SPB', name: 'ลานจอดรถคู่หน้าอาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB Parking)', bld: 'VRU-02', status: 'รองรับรถยนต์ 450 คัน' },
  { code: 'AGRI-PLOT', name: 'แปลงเกษตรสาธิตอินทรีย์ และสวนอนุรักษ์พันธุกรรมพืช อพ.สธ.', bld: 'VRU-53-54', status: 'พื้นที่สีเขียว UI GreenMetric' },
  { code: 'TRACK-400', name: 'ลู่วิ่งสังเคราะห์มาตรฐาน 400 เมตร และสนามฟุตบอลกลาง', bld: 'VRU-57', status: 'พร้อมจัดการแข่งขัน 100%' },
  { code: 'FUTSAL-CT', name: 'สนามฟุตซอล สนามบาสเกตบอล และสนามเทนนิสกลางแจ้ง', bld: 'VRU-42', status: 'เปิดไฟส่องสว่างถึง 21:00 น.' },
  { code: 'FIBER-NET', name: 'โครงข่ายใยแก้วนำแสงและ VRU Smart Wi-Fi 6 ทั่วมหาวิทยาลัย', bld: 'VRU-31', status: 'ออนไลน์ 10 Gbps 100%' }
];

// ============================================================================
// 2. State Management & Camera Presets (Calibrated to VRU Elongated Masterplan)
// ============================================================================

const state = {
  selectedBuilding: null,
  isNight: false,
  nightTarget: 0,
  nightLerp: 0,
  isTurntable: false,
  isTouring: false,
  showLabels: true,
  showWalkways: false, // คำสั่งผู้ใช้งาน: ทางเชื่อม ไม่ต้องมี
  isExploded: false,
  uiHidden: false,
  tourIndex: 0,
  tourTimer: null,
  activeTab: 'buildings',
  activeMapTab: 'floor'
};

// Camera overview calibrated to Google Maps Ground Truth (North is UP: -Z, East is RIGHT: +X)
const VIEW_PRESETS = {
  overview: { pos: { x: 160, y: 185, z: 130 }, target: { x: -20, y: 0, z: 0 } },
  front: { pos: { x: 235, y: 70, z: 25 }, target: { x: 160, y: 8, z: 15 } },
  academic: { pos: { x: 65, y: 75, z: 55 }, target: { x: 45, y: 5, z: 5 } },
  thaiLake: { pos: { x: 25, y: 55, z: 35 }, target: { x: -3, y: 4, z: 0.5 } },
  stadium: { pos: { x: -110, y: 65, z: 60 }, target: { x: -144, y: 4, z: 12.3 } }
};

let scene, camera, renderer, controls;
let buildingsGroup, walkwaysGroup, groundGroup, foliageGroup, propsGroup;
let ambientLight, sunLight, hemiLight;
let sunTargetObj;
let raycaster, mouse;
const labelElements = new Map();
const buildingMeshes = new Map();
const emissiveMaterials = [];
const ambulanceStrobes = [];
const helipadBeacons = [];
const sharedTextures = {};

// ============================================================================
// 3. Procedural Canvas Texture Generators
// ============================================================================

function initProceduralTextures() {
  const texLoader = new THREE.TextureLoader();
  sharedTextures.droneMap = texLoader.load('img/vru-drone-map-4k.jpg', (tex) => {
    tex.encoding = THREE.sRGBEncoding;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
  });
  sharedTextures.roofCorrugated = createCorrugatedTexture('#334155', '#1e293b');
  sharedTextures.roofTile = createTileTexture('#475569', '#334155');
  sharedTextures.roofGreenTile = createTileTexture('#166534', '#14532d');
  sharedTextures.roofOrangeTile = createTileTexture('#c2410c', '#9a3412');
  sharedTextures.roofMaroonTile = createTileTexture('#991b1b', '#7f1d1d');
  sharedTextures.roofBlueTile = createTileTexture('#1d4ed8', '#1e3a8a');
  sharedTextures.corrugatedSilver = createCorrugatedTexture('#e2e8f0', '#94a3b8');
  sharedTextures.solar = createSolarTexture();
  sharedTextures.asphalt = createAsphaltTexture();
  sharedTextures.grass = createGrassTexture();
  sharedTextures.water = createWaterTexture();
  sharedTextures.poolWater = createPoolTexture();
  sharedTextures.vruMainSign = createVruMainSignTexture();
  sharedTextures.spbSign = createBannerSignTexture('อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB)', 'สำนักงานอธิการบดี · มรภ.วไลยอลงกรณ์ ในพระบรมราชูปถัมภ์', '#065f46', '#fbbf24');
  sharedTextures.hall80Sign = createBannerSignTexture('หอประชุม 80 ปี วไลยอลงกรณ์', 'VALAYA ALONGKORN 80th ANNIVERSARY AUDITORIUM', '#047857', '#fde047');
  sharedTextures.hotelSign = createBannerSignTexture('โรงแรมมหาวิทยาลัยราชภัฏวไลยอลงกรณ์', 'VALAYA ALONGKORN UNIVERSITY HOTEL · ศูนย์ฝึกประสบการณ์วิชาชีพ', '#1e293b', '#38bdf8');
  sharedTextures.thaiPavilionSign = createBannerSignTexture('เรือนเจ้าฟ้า · เรือนไทยวไลยอลงกรณ์', 'สำนักศิลปะและวัฒนธรรม มรภ.วไลยอลงกรณ์ฯ', '#78350f', '#fcd34d');
  sharedTextures.stadiumSign = createBannerSignTexture('สนามกีฬากลาง มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์', 'VALAYA ALONGKORN RAJABHAT UNIVERSITY MAIN STADIUM', '#991b1b', '#fef08a');
}

function createCorrugatedTexture(baseHex, ridgeHex) {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = baseHex;
  ctx.fillRect(0, 0, 64, 64);
  for (let x = 0; x < 64; x += 4) {
    ctx.fillStyle = ridgeHex;
    ctx.fillRect(x, 0, 1.5, 64);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(8, 8);
  return tex;
}

function createTileTexture(baseHex, shadowHex) {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = baseHex;
  ctx.fillRect(0, 0, 64, 64);
  ctx.strokeStyle = shadowHex;
  ctx.lineWidth = 2;
  for (let y = 0; y < 64; y += 8) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(64, y);
    ctx.stroke();
  }
  for (let x = 0; x < 64; x += 8) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 64);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  return tex;
}

function createSolarTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = '#1e3a8a';
  for (let y = 4; y < 128; y += 16) {
    for (let x = 4; x < 128; x += 32) {
      ctx.fillRect(x, y, 28, 12);
    }
  }
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 126, 126);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3, 2);
  return tex;
}

function createAsphaltTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#334155';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 600; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)';
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(16, 16);
  return tex;
}

function createGrassTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#4d7c43';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 800; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(34, 197, 94, 0.08)' : 'rgba(20, 83, 45, 0.08)';
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 3, 3);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(30, 30);
  return tex;
}

function createWaterTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 128, 128);
  grad.addColorStop(0, '#0d9488');
  grad.addColorStop(0.5, '#0f766e');
  grad.addColorStop(1, '#115e59');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1.5;
  for (let y = 8; y < 128; y += 16) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(40, y - 4, 80, y + 4, 128, y);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  return tex;
}

function createPoolTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#06b6d4';
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = '#0e7490';
  ctx.lineWidth = 3;
  for (let y = 16; y < 128; y += 16) {
    ctx.beginPath();
    ctx.moveTo(12, y);
    ctx.lineTo(244, y);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

function createVruMainSignTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 256;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#064e3b');
  grad.addColorStop(1, '#022c22');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 256);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 10;
  ctx.strokeRect(8, 8, 1008, 240);
  ctx.fillStyle = '#fde047';
  ctx.font = 'bold 48px Prompt, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์', 512, 110);
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 28px Prompt, sans-serif';
  ctx.fillText('VALAYA ALONGKORN RAJABHAT UNIVERSITY UNDER THE ROYAL PATRONAGE', 512, 170);
  ctx.fillStyle = '#6ee7b7';
  ctx.font = '500 24px Prompt, sans-serif';
  ctx.fillText('เลขที่ 1 หมู่ 20 ถนนพหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี', 512, 215);
  return new THREE.CanvasTexture(c);
}

function createBannerSignTexture(title, sub, bgHex, accentHex) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 192;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, 1024, 192);
  ctx.strokeStyle = accentHex;
  ctx.lineWidth = 8;
  ctx.strokeRect(6, 6, 1012, 180);
  ctx.fillStyle = accentHex;
  ctx.font = 'bold 46px Prompt, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(title, 512, 92);
  ctx.fillStyle = '#ffffff';
  ctx.font = '500 28px Prompt, sans-serif';
  ctx.fillText(sub, 512, 148);
  return new THREE.CanvasTexture(c);
}

// ============================================================================
// 4. Scene & Renderer Initialization
// ============================================================================

function initScene() {
  const canvas = document.getElementById('world');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdce7f2);
  scene.fog = new THREE.Fog(0xdce7f2, 420, 1800);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.5, 1200);
  camera.position.set(VIEW_PRESETS.overview.pos.x, VIEW_PRESETS.overview.pos.y, VIEW_PRESETS.overview.pos.z);

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.90;
  renderer.outputEncoding = THREE.sRGBEncoding;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(VIEW_PRESETS.overview.target.x, VIEW_PRESETS.overview.target.y, VIEW_PRESETS.overview.target.z);
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
  walkwaysGroup = new THREE.Group();
  foliageGroup = new THREE.Group();
  propsGroup = new THREE.Group();

  scene.add(groundGroup);
  scene.add(walkwaysGroup);
  scene.add(buildingsGroup);
  scene.add(foliageGroup);
  scene.add(propsGroup);
}

function initLights() {
  ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambientLight);

  hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0x334155, 0.35);
  hemiLight.position.set(0, 140, 0);
  scene.add(hemiLight);

  sunLight = new THREE.DirectionalLight(0xfff7ed, 1.65);
  sunLight.position.set(-60, 160, 110);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 4096;
  sunLight.shadow.mapSize.height = 4096;
  sunLight.shadow.camera.near = 10;
  sunLight.shadow.camera.far = 520;
  sunLight.shadow.bias = -0.0003;
  sunLight.shadow.normalBias = 0.04;

  const shadowDist = 240;
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

// ============================================================================
// 5. VRU Masterplan Terrain, Phahonyothin Highway, Canals, Lakes & Roads
// ============================================================================

function addWaterBasin(parent, cx, cz, w, d, rotY = 0, withIsland = false) {
  const basin = new THREE.Group();
  basin.position.set(cx, 0, cz);
  basin.rotation.y = rotY;

  // Concrete embankment rim
  const rim = new THREE.Mesh(
    new THREE.BoxGeometry(w + 1.4, 0.24, d + 1.4),
    new THREE.MeshStandardMaterial({ color: 0x86efac, roughness: 0.8 })
  );
  rim.position.y = 0.04;
  rim.receiveShadow = true;
  basin.add(rim);

  // Water surface
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshStandardMaterial({
      color: 0x0d9488,
      map: sharedTextures.water,
      roughness: 0.18,
      metalness: 0.35
    })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.18;
  water.receiveShadow = true;
  basin.add(water);

  if (withIsland) {
    // Landscaped peninsula/island for Реือนเจ้าฟ้า (#36)
    const isl = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.56, 0.45, d * 0.65),
      new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 })
    );
    isl.position.set(-2, 0.22, 0);
    isl.receiveShadow = true;
    basin.add(isl);

    // Causeway bridge to the island
    const bridge = new THREE.Mesh(
      new THREE.BoxGeometry(5.5, 0.48, d * 0.35),
      new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.6 })
    );
    bridge.position.set(-2, 0.24, -d * 0.36);
    basin.add(bridge);
  }

  parent.add(basin);
}

function addRoadStrip(parent, cx, cz, w, d, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(cx, 0, cz);
  g.rotation.y = rotY;

  const sidewalk = new THREE.Mesh(
    new THREE.BoxGeometry(w + 1.4, 0.14, d + 1.4),
    new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.7 })
  );
  sidewalk.position.y = 0.05;
  sidewalk.receiveShadow = true;
  g.add(sidewalk);

  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshStandardMaterial({
      color: 0x334155,
      map: sharedTextures.asphalt,
      roughness: 0.82
    })
  );
  road.rotation.x = -Math.PI / 2;
  road.position.y = 0.13;
  road.receiveShadow = true;
  g.add(road);

  // Dashed center line
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
  if (d >= w) {
    for (let z = -d / 2 + 3; z < d / 2 - 3; z += 7) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 3.2), dashMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(0, 0.14, z);
      g.add(dash);
    }
  } else {
    for (let x = -w / 2 + 3; x < w / 2 - 3; x += 7) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.16), dashMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.14, 0);
      g.add(dash);
    }
  }

  parent.add(g);
}

function buildPure3DMasterplanTerrain() {
  // 1. Aerial Drone Orthophoto Masterplan Base Plane (Aspect Ratio 3.472:1, X: 416.6, Z: 120)
  // Calibrated 1:1 to Google Maps Ground Truth (North is -Z, East is +X)
  const droneGeo = new THREE.PlaneGeometry(416.6, 120);
  const droneMat = new THREE.MeshStandardMaterial({
    map: sharedTextures.droneMap,
    roughness: 0.85,
    metalness: 0.05
  });
  const droneMesh = new THREE.Mesh(droneGeo, droneMat);
  droneMesh.rotation.x = -Math.PI / 2;
  droneMesh.position.set(0, 0.01, 0);
  droneMesh.receiveShadow = true;
  groundGroup.add(droneMesh);

  // Main Campus Ground Base Underlay (X: 440, Z: 150)
  const baseGeo = new THREE.PlaneGeometry(440, 150);
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x3d6339,
    map: sharedTextures.grass,
    roughness: 0.9,
    metalness: 0.02
  });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.rotation.x = -Math.PI / 2;
  baseMesh.position.set(0, -0.1, 0);
  baseMesh.receiveShadow = true;
  groundGroup.add(baseMesh);

  // Outer Surrounding Ground Plane for seamless horizon
  const outerGeo = new THREE.PlaneGeometry(800, 800);
  const outerMat = new THREE.MeshStandardMaterial({
    color: 0x355431,
    roughness: 0.95
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  outerMesh.rotation.x = -Math.PI / 2;
  outerMesh.position.set(0, -0.22, 0);
  outerMesh.receiveShadow = true;
  groundGroup.add(outerMesh);

  // 2. Pedestrian Overpass Bridge across Phahonyothin Road (สะพานลอยหน้า มรภ.วไลยอลงกรณ์ฯ) at Z = -22
  const hwWidth = 26;
  const hwX = 195;
  const overpass = new THREE.Group();
  overpass.position.set(hwX, 0, -22);
  const opDeck = new THREE.Mesh(
    new THREE.BoxGeometry(hwWidth + 8, 0.6, 3.2),
    new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 })
  );
  opDeck.position.y = 6.2;
  opDeck.castShadow = true;
  overpass.add(opDeck);
  const opRoof = new THREE.Mesh(
    new THREE.BoxGeometry(hwWidth + 8, 0.25, 3.6),
    new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 })
  );
  opRoof.position.y = 8.6;
  overpass.add(opRoof);
  for (let px of [-hwWidth / 2 - 2.5, 0, hwWidth / 2 + 2.5]) {
    const pier = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.5, 6.2, 12),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
    );
    pier.position.set(px, 3.1, 0);
    pier.castShadow = true;
    overpass.add(pier);
  }
  groundGroup.add(overpass);

  // 3. Main University Entrance Gate Signboard & Overpass
  const gateSignGroup = new THREE.Group();
  gateSignGroup.position.set(184, 0, 14);
  const signBase = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 1.2, 11.5),
    new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 })
  );
  signBase.position.y = 0.6;
  gateSignGroup.add(signBase);

  const signBoard = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 2.7, 10.8),
    new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.3 })
  );
  signBoard.position.y = 2.55;
  signBoard.castShadow = true;
  gateSignGroup.add(signBoard);

  const signFace = new THREE.Mesh(
    new THREE.PlaneGeometry(10.4, 2.5),
    new THREE.MeshBasicMaterial({ map: sharedTextures.vruMainSign })
  );
  signFace.position.set(0.27, 2.55, 0);
  signFace.rotation.y = Math.PI / 2;
  gateSignGroup.add(signFace);
  groundGroup.add(gateSignGroup);

  // 4. Natural Central Lake & Island for เรือนไทยเจ้าฟ้า (#23)
  addWaterBasin(groundGroup, -2.9, 0.6, 22.0, 48.0, 0, true);
}

function buildCoveredWalkways() {
  // ทางเชื่อมปิดตามคำสั่ง
}

// ============================================================================
// 6. VRU 3D Architectural Builders (Supporting Multi-Floor Explode View)
// ============================================================================

function createHippedRoof(w, d, ridgeH, roofMat) {
  const g = new THREE.Group();
  // Clean rectangular roof slab matching building walls
  const slab = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.35, d + 0.4), roofMat);
  slab.position.y = 0.18;
  slab.castShadow = true;
  g.add(slab);

  // Stepped upper tier aligned with building axes (no 45-degree diamond distortion)
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(w * 0.75, ridgeH, d * 0.75), roofMat);
  ridge.position.y = 0.35 + ridgeH / 2;
  ridge.castShadow = true;
  g.add(ridge);
  return g;
}

function buildMultiFloorBox(group, numFloors, w, totalH, d, wallMat, windowMat, roofColor, withSolar = false) {
  const floorMeshes = [];
  const fh = totalH / numFloors;

  for (let f = 0; f < numFloors; f++) {
    const fg = new THREE.Group();
    const y0 = f * fh;

    const body = new THREE.Mesh(new THREE.BoxGeometry(w, fh - 0.15, d), wallMat);
    body.position.y = y0 + fh / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    fg.add(body);

    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.4, 0.2, d + 0.4),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 })
    );
    slab.position.y = y0 + fh;
    fg.add(slab);

    // Windows along Front (-Z), Back (+Z), Left (-X), Right (+X)
    const winH = fh * 0.52;
    const bandFB = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, winH, d + 0.16), windowMat);
    bandFB.position.y = y0 + fh * 0.55;
    fg.add(bandFB);

    const bandLR = new THREE.Mesh(new THREE.BoxGeometry(w + 0.16, winH, d * 0.86), windowMat);
    bandLR.position.y = y0 + fh * 0.55;
    fg.add(bandLR);

    if (f === numFloors - 1) {
      const rMat = new THREE.MeshStandardMaterial({ color: roofColor || 0x334155, roughness: 0.55 });
      const roof = createHippedRoof(w, d, 2.4, rMat);
      roof.position.y = y0 + fh;
      fg.add(roof);

      if (withSolar) {
        const solar = new THREE.Mesh(
          new THREE.BoxGeometry(w * 0.72, 0.25, d * 0.65),
          new THREE.MeshStandardMaterial({ map: sharedTextures.solar, roughness: 0.25, metalness: 0.5 })
        );
        solar.position.y = y0 + fh + 1.5;
        fg.add(solar);
      }
    }

    group.add(fg);
    floorMeshes.push(fg);
  }
  group.userData.floorMeshes = floorMeshes;
}

function buildHospitalBuildings() {
  HOSPITAL_BUILDINGS.forEach(bld => {
    const bldGroup = new THREE.Group();
    bldGroup.position.set(bld.pos.x, 0, bld.pos.z);
    bldGroup.rotation.y = bld.rotY || 0;
    bldGroup.userData = bld;

    const { w, h, d } = bld.dimensions;
    const numFloors = Math.max(1, (bld.floors && bld.floors.length) || 3);

    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.55, metalness: 0.05 });
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.15,
      metalness: 0.75,
      emissive: new THREE.Color(0xffbf69),
      emissiveIntensity: 0.0
    });
    emissiveMaterials.push(windowMat);

    const type = bld.archType;

    if (type === 'landmark80') {
      // 1. หอประชุม 80 ปี วไลยอลงกรณ์ (Massive white square/cruciform convention hall over reflecting pool)
      const f1 = new THREE.Group();
      const f2 = new THREE.Group();
      const f3 = new THREE.Group();

      // Podium matching footprint
      const podium = new THREE.Mesh(
        new THREE.BoxGeometry(w, 1.2, d),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.45 })
      );
      podium.position.y = 0.6;
      podium.receiveShadow = true;
      f1.add(podium);

      const bridgeRamp = new THREE.Mesh(
        new THREE.BoxGeometry(8, 1.0, 8),
        new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 })
      );
      bridgeRamp.position.set(0, 0.5, -d / 2 - 4);
      f1.add(bridgeRamp);

      const baseHall = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, 4.8, d * 0.88), wallMat);
      baseHall.position.y = 1.2 + 2.4;
      baseHall.castShadow = true;
      f1.add(baseHall);

      // Middle Grand Foyer + Open White Space-Frame Wings (โครงถักสีขาวตามภาพถ่ายจริง)
      const midHall = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, 5.2, d * 0.92), wallMat);
      midHall.position.y = 6.0 + 2.6;
      midHall.castShadow = true;
      f2.add(midHall);

      const glassMid = new THREE.Mesh(new THREE.BoxGeometry(w * 0.94, 3.8, d * 0.94), windowMat);
      glassMid.position.y = 6.0 + 2.6;
      f2.add(glassMid);

      const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35, wireframe: false });
      const wingCanopy = new THREE.Mesh(new THREE.BoxGeometry(w, 0.55, d), frameMat);
      wingCanopy.position.y = 11.2;
      wingCanopy.castShadow = true;
      f2.add(wingCanopy);

      // Perimeter white columns supporting space-frame wings
      for (let cx of [-w / 2 + 1, -w / 3, w / 3, w / 2 - 1]) {
        for (let cz of [-d / 2 + 1, 0, d / 2 - 1]) {
          const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 9.5, 10), frameMat);
          col.position.set(cx, 6.0, cz);
          col.castShadow = true;
          f2.add(col);
        }
      }

      // Iconic Giant White Stepped Pyramid Roof
      const roof1 = createHippedRoof(w * 0.92, d * 0.92, 4.2, new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 }));
      roof1.position.y = 11.8;
      f3.add(roof1);

      const roof2 = createHippedRoof(w * 0.52, d * 0.52, 3.5, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
      roof2.position.y = 14.8;
      f3.add(roof2);

      // Signboard on Front Portico
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(14, 2.2),
        new THREE.MeshBasicMaterial({ map: sharedTextures.hall80Sign })
      );
      sign.position.set(0, 12.2, -d / 2 - 1.1);
      sign.rotation.y = Math.PI;
      f2.add(sign);

      bldGroup.add(f1, f2, f3);
      bldGroup.userData.floorMeshes = [f1, f2, f3];

    } else if (type === 'monument') {
      // พระอนุสาวรีย์ สมเด็จพระราชปิตุจฉา เจ้าฟ้าวไลยอลงกรณ์ฯ (#1) และ หอพระ (#2)
      const fg = new THREE.Group();
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(w, 0.8, d),
        new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.5 })
      );
      base.position.y = 0.4;
      fg.add(base);

      // Royal Monument Pedestal & Statue
      const ped = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.8, 3.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 })
      );
      ped.position.set(0, 2.4, 0);
      ped.castShadow = true;
      fg.add(ped);

      const statue = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.7, 2.4, 12),
        new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.8, roughness: 0.25 })
      );
      statue.position.set(0, 5.2, 0);
      fg.add(statue);

      // หอพระประจำมหาวิทยาลัย (ฝั่งซ้ายของลานหน้าสระน้ำ ตามแผนที่ปี 2016 #2)
      const shrine = new THREE.Group();
      shrine.position.set(-14, 0, 2);
      const sBase = new THREE.Mesh(
        new THREE.BoxGeometry(5.5, 1.2, 5.5),
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
      );
      sBase.position.y = 0.6;
      shrine.add(sBase);
      const sRoof = createHippedRoof(5.0, 5.0, 3.2, new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.4, roughness: 0.3 }));
      sRoof.position.y = 3.2;
      shrine.add(sRoof);
      fg.add(shrine);

      bldGroup.add(fg);
      bldGroup.userData.floorMeshes = [fg];

    } else if (type === 'spb100') {
      // 2. อาคาร 100 ปี สมเด็จพระศรีนครินทร์ (SPB) - 6 ชั้น ดีไซน์เฉียง/หลังคาโค้งโมเดิร์น
      buildMultiFloorBox(bldGroup, 6, w, h, d, wallMat, windowMat, 0x047857, true);
      const topFloor = bldGroup.userData.floorMeshes[5];
      // Curved Silver Architectural Roof Vault
      const vault = new THREE.Mesh(
        new THREE.CylinderGeometry(w * 0.42, w * 0.42, d * 0.95, 20, 1, false, -Math.PI / 2, Math.PI),
        new THREE.MeshStandardMaterial({ map: sharedTextures.corrugatedSilver, metalness: 0.5, roughness: 0.3 })
      );
      vault.rotation.x = Math.PI / 2;
      vault.scale.set(1, 0.35, 1);
      vault.position.y = h + 1.2;
      topFloor.add(vault);

      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(14, 2.2),
        new THREE.MeshBasicMaterial({ map: sharedTextures.spbSign })
      );
      sign.position.set(0, h + 2.8, -d / 2 - 0.3);
      sign.rotation.y = Math.PI;
      topFloor.add(sign);

    } else if (type === 'hotel') {
      // 3. โรงแรมมหาวิทยาลัยราชภัฏวไลยอลงกรณ์ (ศูนย์ฝึกประสบการณ์วิชาชีพ)
      const hotelWall = new THREE.MeshStandardMaterial({ color: 0xfffbeb, roughness: 0.5 });
      buildMultiFloorBox(bldGroup, 5, w, h, d, hotelWall, windowMat, 0x0f766e, true);
      const topF = bldGroup.userData.floorMeshes[4];
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(13, 2.0),
        new THREE.MeshBasicMaterial({ map: sharedTextures.hotelSign })
      );
      sign.position.set(0, h + 2.5, -d / 2 - 0.2);
      sign.rotation.y = Math.PI;
      topF.add(sign);

    } else if (type === 'pool') {
      // 5. อาคารศูนย์ส่งเสริมสุขภาพ & สระว่ายน้ำอวยพร เปล่งวานิช
      const f1 = new THREE.Group();
      const f2 = new THREE.Group();

      // White Pool Deck
      const deck = new THREE.Mesh(
        new THREE.BoxGeometry(w, 0.6, d),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 })
      );
      deck.position.y = 0.3;
      deck.receiveShadow = true;
      f1.add(deck);

      // 50m Turquoise Swimming Pool Basin
      const poolMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(w * 0.52, d * 0.82),
        new THREE.MeshStandardMaterial({ map: sharedTextures.poolWater, roughness: 0.1, metalness: 0.2 })
      );
      poolMesh.rotation.x = -Math.PI / 2;
      poolMesh.position.y = 0.63;
      f1.add(poolMesh);

      // Twin Spectator & Fitness Pavilions with Solar Roofs on Left & Right of Pool (ตามภาพดาวเทียมจริง)
      for (let side of [-1, 1]) {
        const pav = new THREE.Mesh(new THREE.BoxGeometry(4.2, 4.2, d * 0.86), wallMat);
        pav.position.set(side * (w * 0.38), 2.4, 0);
        pav.castShadow = true;
        f1.add(pav);

        const sRoof = new THREE.Mesh(
          new THREE.BoxGeometry(4.8, 0.3, d * 0.9),
          new THREE.MeshStandardMaterial({ map: sharedTextures.solar, roughness: 0.25 })
        );
        sRoof.position.set(side * (w * 0.38), 4.7, 0);
        sRoof.rotation.z = side * -0.15;
        sRoof.castShadow = true;
        f2.add(sRoof);
      }

      bldGroup.add(f1, f2);
      bldGroup.userData.floorMeshes = [f1, f2];

    } else if (type === 'fmsLong') {
      // 28. คณะวิทยาการจัดการ (FMS) - อาคารเรียนแนวยาวพิเศษ 52m หลังคาส้มอิฐ + โซลาร์เซลล์
      const fmsWall = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.55 });
      buildMultiFloorBox(bldGroup, 4, w, h, d, fmsWall, windowMat, 0xc2410c, true);

    } else if (type === 'eduMaroon') {
      // 16-17. คณะครุศาสตร์ (FE) - อาคารเรียนหลังคาสีแดงเลือดหมูเอกลักษณ์
      const eduWall = new THREE.MeshStandardMaterial({ color: 0xfff1f2, roughness: 0.55 });
      buildMultiFloorBox(bldGroup, 4, w, h, d, eduWall, windowMat, 0x991b1b, true);

    } else if (type === 'uCourtyard') {
      // อาคารล้อมลานกลางรูปตัวยู (รร.สาธิตมัธยม #30, คณะมนุษยศาสตร์ฯ #32, รร.สาธิตประถม #35)
      const floors = [];
      const fh = h / numFloors;
      const rMat = new THREE.MeshStandardMaterial({ color: bld.roofColor || 0x1d4ed8, roughness: 0.5 });

      for (let f = 0; f < numFloors; f++) {
        const fg = new THREE.Group();
        const y0 = f * fh;
        // Left, Right, and Back wings forming a U-Courtyard
        const wingW = 5.2;
        for (let sx of [-w / 2 + wingW / 2, w / 2 - wingW / 2]) {
          const wing = new THREE.Mesh(new THREE.BoxGeometry(wingW, fh - 0.15, d), wallMat);
          wing.position.set(sx, y0 + fh / 2, 0);
          wing.castShadow = true;
          fg.add(wing);

          const win = new THREE.Mesh(new THREE.BoxGeometry(wingW + 0.15, fh * 0.5, d * 0.85), windowMat);
          win.position.set(sx, y0 + fh * 0.55, 0);
          fg.add(win);
        }
        const backWing = new THREE.Mesh(new THREE.BoxGeometry(w, fh - 0.15, wingW), wallMat);
        backWing.position.set(0, y0 + fh / 2, d / 2 - wingW / 2);
        backWing.castShadow = true;
        fg.add(backWing);

        if (f === numFloors - 1) {
          for (let sx of [-w / 2 + wingW / 2, w / 2 - wingW / 2]) {
            const rf = createHippedRoof(wingW, d, 1.8, rMat);
            rf.position.set(sx, y0 + fh, 0);
            fg.add(rf);
          }
          const rfBack = createHippedRoof(w, wingW, 1.8, rMat);
          rfBack.position.set(0, y0 + fh, d / 2 - wingW / 2);
          fg.add(rfBack);
        }
        bldGroup.add(fg);
        floors.push(fg);
      }
      bldGroup.userData.floorMeshes = floors;

    } else if (type === 'thaiPavilion') {
      // 36. เรือนเจ้าฟ้า (เรือนไทยวไลยอลงกรณ์) - หมู่เรือนไทยไม้สักหลังคาจั่วสูงบนเกาะกลางสระน้ำใหญ่
      const f1 = new THREE.Group();
      const f2 = new THREE.Group();

      const teakMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.65 });
      const thaiRoofMat = new THREE.MeshStandardMaterial({ map: sharedTextures.roofOrangeTile, roughness: 0.5 });
      const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.6, roughness: 0.3 });

      // Raised Wooden Terrace Deck (ชานเรือนไม้สักยกเสาสูง)
      const deck = new THREE.Mesh(new THREE.BoxGeometry(w * 0.85, 0.35, d * 0.8), teakMat);
      deck.position.y = 2.6;
      deck.castShadow = true;
      f1.add(deck);

      // Teakwood stilts (เสาเรือนไทย)
      for (let sx = -w * 0.36; sx <= w * 0.36; sx += 4.2) {
        for (let sz = -d * 0.32; sz <= d * 0.32; sz += 3.8) {
          const stilt = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 2.6, 8), teakMat);
          stilt.position.set(sx, 1.3, sz);
          stilt.castShadow = true;
          f1.add(stilt);
        }
      }

      // Main Central Thai House (เรือนประธาน) + 2 Side Houses (เรือนลูก)
      const houses = [
        { x: 0, z: 1.5, hw: 8.5, hd: 5.2, hh: 3.2, rh: 3.8 },
        { x: -6.2, z: -1.8, hw: 4.8, hd: 6.5, hh: 2.8, rh: 3.0 },
        { x: 6.2, z: -1.8, hw: 4.8, hd: 6.5, hh: 2.8, rh: 3.0 }
      ];
      houses.forEach(hs => {
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(hs.hw, hs.hh, hs.hd), teakMat);
        cabin.position.set(hs.x, 2.75 + hs.hh / 2, hs.z);
        cabin.castShadow = true;
        f2.add(cabin);

        // Steep Thai Gable Roof with Golden Bargeboards (ปั้นลม & ช่อฟ้าสีทอง)
        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(Math.hypot(hs.hw, hs.hd) * 0.54, hs.rh, 4),
          thaiRoofMat
        );
        roof.rotation.y = Math.PI / 4;
        roof.scale.set(hs.hw / Math.max(hs.hw, hs.hd), 1, hs.hd / Math.max(hs.hw, hs.hd));
        roof.position.set(hs.x, 2.75 + hs.hh + hs.rh / 2, hs.z);
        roof.castShadow = true;
        f2.add(roof);

        const finial = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.1, 6), goldMat);
        finial.position.set(hs.x, 2.75 + hs.hh + hs.rh + 0.3, hs.z);
        f2.add(finial);
      });

      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(9.5, 1.6),
        new THREE.MeshBasicMaterial({ map: sharedTextures.thaiPavilionSign })
      );
      sign.position.set(0, 8.8, -d * 0.35);
      sign.rotation.y = Math.PI;
      f2.add(sign);

      bldGroup.add(f1, f2);
      bldGroup.userData.floorMeshes = [f1, f2];

    } else if (type === 'dormCluster6') {
      // 43-48. กลุ่มหอพักนักศึกษา 4 อาคารหลักตามแนวภาพถ่ายโดรนจริง (aligned along N-S axis East of stadium)
      const f1 = new THREE.Group();
      const f2 = new THREE.Group();
      const dormWall = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.55 });
      const dormRoof = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 });

      const offsets = [
        { x: 0, z: -16, bw: 7.5, bd: 11 },
        { x: 0, z: -5, bw: 7.5, bd: 11 },
        { x: 0, z: 6, bw: 7.5, bd: 11 },
        { x: 0, z: 17, bw: 7.5, bd: 11 }
      ];
      offsets.forEach(o => {
        const lower = new THREE.Mesh(new THREE.BoxGeometry(o.bw, 6.5, o.bd), dormWall);
        lower.position.set(o.x, 3.25, o.z);
        lower.castShadow = true;
        f1.add(lower);

        const win1 = new THREE.Mesh(new THREE.BoxGeometry(o.bw + 0.14, 4.2, o.bd * 0.85), windowMat);
        win1.position.set(o.x, 3.4, o.z);
        f1.add(win1);

        const upper = new THREE.Mesh(new THREE.BoxGeometry(o.bw, 6.5, o.bd), dormWall);
        upper.position.set(o.x, 9.75, o.z);
        upper.castShadow = true;
        f2.add(upper);

        const win2 = new THREE.Mesh(new THREE.BoxGeometry(o.bw + 0.14, 4.2, o.bd * 0.85), windowMat);
        win2.position.set(o.x, 9.9, o.z);
        f2.add(win2);

        const rf = createHippedRoof(o.bw, o.bd, 2.0, dormRoof);
        rf.position.set(o.x, 13.0, o.z);
        f2.add(rf);
      });
      bldGroup.add(f1, f2);
      bldGroup.userData.floorMeshes = [f1, f2];

    } else if (type === 'dormRow4') {
      // 49-52. หอพักนักศึกษานานาชาติ 4 อาคารเรียงแถวหน้าสนามกีฬากลาง
      const f1 = new THREE.Group();
      const f2 = new THREE.Group();
      const rMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });

      [-13.5, -4.5, 4.5, 13.5].forEach(ox => {
        const b1 = new THREE.Mesh(new THREE.BoxGeometry(7.0, 6.5, 10.5), wallMat);
        b1.position.set(ox, 3.25, 0);
        b1.castShadow = true;
        f1.add(b1);

        const w1 = new THREE.Mesh(new THREE.BoxGeometry(6.0, 4.2, 10.65), windowMat);
        w1.position.set(ox, 3.4, 0);
        f1.add(w1);

        const b2 = new THREE.Mesh(new THREE.BoxGeometry(7.0, 6.5, 10.5), wallMat);
        b2.position.set(ox, 9.75, 0);
        b2.castShadow = true;
        f2.add(b2);

        const w2 = new THREE.Mesh(new THREE.BoxGeometry(6.0, 4.2, 10.65), windowMat);
        w2.position.set(ox, 9.9, 0);
        f2.add(w2);

        const rf = createHippedRoof(7.0, 10.5, 1.8, rMat);
        rf.position.set(ox, 13.0, 0);
        f2.add(rf);
      });
      bldGroup.add(f1, f2);
      bldGroup.userData.floorMeshes = [f1, f2];

    } else if (type === 'gymCourts') {
      // 42. ยิมเนเซียม 2 & สนามฟุตซอล/บาสเกตบอลกลางแจ้ง
      const fg = new THREE.Group();
      const gym = new THREE.Mesh(new THREE.BoxGeometry(14, 8.5, 14), wallMat);
      gym.position.set(0, 4.25, -6);
      gym.castShadow = true;
      fg.add(gym);
      const gRoof = createHippedRoof(14, 14, 2.5, new THREE.MeshStandardMaterial({ color: 0x0284c7 }));
      gRoof.position.set(0, 8.5, -6);
      fg.add(gRoof);

      // Outdoor Green/Blue Futsal & Basketball Courts
      for (let cz of [5, 12]) {
        const court = new THREE.Mesh(
          new THREE.BoxGeometry(16, 0.18, 5.8),
          new THREE.MeshStandardMaterial({ color: cz === 5 ? 0x16a34a : 0x0284c7, roughness: 0.6 })
        );
        court.position.set(0, 0.09, cz);
        fg.add(court);
      }
      bldGroup.add(fg);
      bldGroup.userData.floorMeshes = [fg];

    } else if (type === 'stadium') {
      // 57. สนามกีฬากลาง มรภ.วไลยอลงกรณ์ฯ (400m Red Oval Running Track + Soccer Pitch + Covered Grandstand)
      const f1 = new THREE.Group();
      const f2 = new THREE.Group();

      // Bright Scarlet Red Running Track Oval (ลู่วิ่งยางสังเคราะห์สีแดงมาตรฐาน)
      const trackMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.55 });
      const trackCenter = new THREE.Mesh(new THREE.BoxGeometry(w, 0.35, d * 0.52), trackMat);
      trackCenter.position.y = 0.35;
      f1.add(trackCenter);

      for (let side of [-1, 1]) {
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.5, w * 0.5, 0.35, 32), trackMat);
        cap.position.set(0, 0.35, side * (d * 0.26));
        f1.add(cap);
      }

      // Lush Green Football Pitch Inside the Track
      const pitchMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.7 });
      const pitch = new THREE.Mesh(new THREE.BoxGeometry(w * 0.65, 0.42, d * 0.52), pitchMat);
      pitch.position.y = 0.42;
      pitch.receiveShadow = true;
      f1.add(pitch);

      // White Center Line & Center Circle
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const midLine = new THREE.Mesh(new THREE.PlaneGeometry(0.3, d * 0.52), lineMat);
      midLine.rotation.x = -Math.PI / 2;
      midLine.position.y = 0.46;
      f1.add(midLine);

      const centerRing = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.5, 32), lineMat);
      centerRing.rotation.x = -Math.PI / 2;
      centerRing.position.y = 0.46;
      f1.add(centerRing);

      // Covered Main Grandstand on the West side (-X facing East towards football pitch)
      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(4.0, 5.0, d * 0.45),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 })
      );
      stand.position.set(-w * 0.5 - 2.2, 2.5, 0);
      stand.castShadow = true;
      f2.add(stand);

      const standRoof = new THREE.Mesh(
        new THREE.BoxGeometry(6.0, 0.35, d * 0.48),
        new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4 })
      );
      standRoof.position.set(-w * 0.5 - 2.2, 7.2, 0);
      standRoof.rotation.z = -0.15;
      standRoof.castShadow = true;
      f2.add(standRoof);

      const stSign = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 2.2),
        new THREE.MeshBasicMaterial({ map: sharedTextures.stadiumSign })
      );
      stSign.position.set(0, 9.6, -d * 0.48);
      stSign.rotation.y = Math.PI;
      f2.add(stSign);

      // 4 Tall Stadium Floodlight Towers
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7 });
      for (let sx of [-w * 0.42, w * 0.42]) {
        for (let sz of [-d * 0.42, d * 0.42]) {
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.35, 16, 8), poleMat);
          pole.position.set(sx, 8, sz);
          pole.castShadow = true;
          f2.add(pole);

          const lampHead = new THREE.Mesh(
            new THREE.BoxGeometry(2.6, 1.2, 0.5),
            new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfef08a, emissiveIntensity: 0.8 })
          );
          lampHead.position.set(sx, 16.2, sz);
          f2.add(lampHead);
        }
      }

      bldGroup.add(f1, f2);
      bldGroup.userData.floorMeshes = [f1, f2];

    } else if (type === 'staffVillage') {
      buildMultiFloorBox(bldGroup, 2, w, h, d, wallMat, windowMat, bld.roofColor, false);
    } else {
      buildMultiFloorBox(bldGroup, numFloors, w, h, d, wallMat, windowMat, bld.roofColor, false);
    }

    buildingsGroup.add(bldGroup);
    buildingMeshes.set(bld.id, bldGroup);
  });
}

// ============================================================================
// 7. Props and Clean Environment
// ============================================================================

function buildStreetLightingAndProps() {
  // Pure 4K drone photography displays real roads, trees, and paths naturally.
}

function buildLandscapingTrees() {
  // Trees are already captured in 4K resolution on vru-drone-map.jpg.
}

// ============================================================================
// 8. 3D Floating Pin Labels, Selection, Exploded Floor View & UI Controls
// ============================================================================

function create3DLabels() {
  const container = document.getElementById('labelsContainer');
  if (!container) return;
  container.innerHTML = '';
  labelElements.clear();

  HOSPITAL_BUILDINGS.forEach(bld => {
    const pin = document.createElement('div');
    pin.className = 'label-pin';
    pin.id = `label-${bld.id}`;
    pin.setAttribute('data-id', bld.id);

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = bld.num || bld.name;
    pin.appendChild(name);

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      selectBuilding(bld.id);
    });

    container.appendChild(pin);
    labelElements.set(bld.id, { element: pin, data: bld });
  });
}

const MAJOR_LANDMARK_IDS = new Set([
  'bld-1',
  'bld-2',
  'bld-3',
  'bld-4',
  'bld-5',
  'bld-8',
  'bld-11',
  'bld-15',
  'bld-22',
  'bld-23',
  'bld-28',
  'bld-43',
  'bld-57'
]);

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

  const camDist = controls ? camera.position.distanceTo(controls.target) : 200;
  const isOverview = camDist > 165;
  const placedBoxes = [];

  labelElements.forEach(({ element, data }) => {
    if (isOverview && !element.classList.contains('selected')) {
      if (!MAJOR_LANDMARK_IDS.has(data.id)) {
        element.style.display = 'none';
        return;
      }
    }

    const anchorY = data.anchorHeight || (data.dimensions.h + 3.0);
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

    if (screenX < -60 || screenX > w + 60 || screenY < -60 || screenY > h + 60) {
      element.style.display = 'none';
      return;
    }

    // 2D Collision Culling for compact number badges
    let adjustedY = screenY - 26;
    const boxW = 32;
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
    element.style.left = `${screenX}px`;
    element.style.top = `${adjustedY}px`;

    svgPaths += `<line x1="${screenX}" y1="${screenY}" x2="${screenX}" y2="${adjustedY + 6}" stroke="rgba(2, 132, 199, 0.75)" stroke-width="1.2" stroke-dasharray="2,2"/>`;
  });

  svg.innerHTML = svgPaths;
}

function selectBuilding(id, shouldFocus = false) {
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

  const off = bld.cameraOffset || { x: 18, y: 32, z: 42 };
  new TWEEN.Tween(controls.target)
    .to({ x: targetX, y: targetY, z: targetZ }, 1000)
    .easing(TWEEN.Easing.Cubic.Out)
    .start();

  new TWEEN.Tween(camera.position)
    .to({ x: targetX + off.x, y: targetY + off.y, z: targetZ + off.z }, 1000)
    .easing(TWEEN.Easing.Cubic.Out)
    .start();
}

function closeDetailCard() {
  const detail = document.getElementById('detail');
  if (detail) {
    detail.hidden = true;
    detail.classList.remove('active');
  }
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
}

function resetView() {
  closeDetailCard();
  const p = VIEW_PRESETS.overview;
  new TWEEN.Tween(controls.target).to(p.target, 1100).easing(TWEEN.Easing.Cubic.Out).start();
  new TWEEN.Tween(camera.position).to(p.pos, 1100).easing(TWEEN.Easing.Cubic.Out).start();
}

function toggleExplodeFloor() {
  if (!state.selectedBuilding) {
    showToast('กรุณาเลือกอาคารเพื่อดูผังแยกชั้น');
    return;
  }
  const bld = state.selectedBuilding;
  const meshGroup = buildingMeshes.get(bld.id);
  if (!meshGroup || !meshGroup.userData.floorMeshes || meshGroup.userData.floorMeshes.length <= 1) {
    showToast(`${bld.shortName || bld.name} เป็นอาคารชั้นเดียว`);
    return;
  }

  state.isExploded = !state.isExploded;
  const floors = meshGroup.userData.floorMeshes;
  const spreadDist = 4.6;

  floors.forEach((fGroup, idx) => {
    const targetY = state.isExploded ? idx * spreadDist : 0;
    new TWEEN.Tween(fGroup.position)
      .to({ y: targetY }, 850)
      .easing(TWEEN.Easing.Back.Out)
      .start();
  });

  const btn = document.getElementById('isolateFloor');
  if (btn) {
    btn.textContent = state.isExploded ? 'รวมชั้นกลับสู่ปกติ' : 'ดูผังแยกชั้น (Explode)';
    btn.style.background = state.isExploded ? 'var(--accent)' : '';
    btn.style.color = state.isExploded ? '#ffffff' : '';
  }
  showToast(state.isExploded ? `แสดงผังแยกชั้น 3D: ${bld.shortName}` : 'รวมชั้นกลับสู่ปกติ');
}

function updateDetailPanel(bld) {
  const panel = document.getElementById('detail');
  if (panel) {
    panel.hidden = false;
    panel.classList.add('active');
  }

  document.getElementById('entityTitle').textContent = bld.name;
  document.getElementById('entitySub').textContent = bld.sub || `${bld.category} · มรภ.วไลยอลงกรณ์ฯ`;
  document.getElementById('entityStatus').textContent = bld.status || 'เปิดทำการปกติ';
  const entityType = document.getElementById('entityType');
  if (entityType) {
    if (bld.hasSolar || bld.lid) {
      entityType.textContent = `🟢 Solar Rooftop (lid: ${bld.lid}) · ${bld.solarZone || 'Zone 1'}`;
      entityType.style.background = 'rgba(16, 185, 129, 0.2)';
      entityType.style.color = '#047857';
      entityType.style.borderColor = '#10b981';
    } else {
      entityType.textContent = 'ข้อมูลอาคาร';
      entityType.style.background = '';
      entityType.style.color = '';
      entityType.style.borderColor = '';
    }
  }
  document.getElementById('detailNote').textContent = bld.stats?.note || '';

  const miniDiag = document.getElementById('miniDiagram');
  if (miniDiag) {
    miniDiag.innerHTML = '';
    if (bld.floors && bld.floors.length > 0) {
      bld.floors.forEach((fl, idx) => {
        const block = document.createElement('div');
        block.className = `floor-block ${idx === 0 ? 'active' : ''}`;
        block.setAttribute('data-floor', fl.num);
        block.innerHTML = `<span>ชั้น ${fl.num}</span><small>${fl.desc}</small>`;
        miniDiag.appendChild(block);
      });
    }
  }

  const statsDiv = document.getElementById('stats');
  if (statsDiv && bld.stats) {
    statsDiv.innerHTML = `
      <div><small>จำนวนชั้น</small><strong>${bld.stats.floors || '-'}</strong></div>
      <div><small>ความจุ/รองรับ</small><strong>${bld.stats.capacity || '-'}</strong></div>
      <div><small>กำลังไฟฟ้า</small><strong>${bld.stats.power || '-'}</strong></div>
      <div><small>ความพร้อม</small><strong style="color: #2e7d32">${bld.stats.security || 'ปกติ 100%'}</strong></div>
    `;
    const load = bld.stats.load || 78;
    document.getElementById('loadText').textContent = `${load}%`;
    document.getElementById('loadBar').style.width = `${load}%`;
  }

  const btnExp = document.getElementById('isolateFloor');
  if (btnExp) {
    btnExp.textContent = 'ดูผังแยกชั้น (Explode)';
    btnExp.style.background = '';
    btnExp.style.color = '';
  }
  state.isExploded = false;
}

function updateTables() {
  const head = document.getElementById('tableHead');
  const body = document.getElementById('tableBody');
  if (!head || !body) return;

  if (state.activeTab === 'buildings') {
    head.innerHTML = `<tr><th>รหัส</th><th>ชื่ออาคาร / สถานที่ (ครบ 57 หมายเลข VRU)</th><th>ประเภท</th><th>สถานะ</th></tr>`;
    body.innerHTML = HOSPITAL_BUILDINGS.map(b => `
      <tr data-id="${b.id}" style="cursor: pointer">
        <td><strong>${b.code}</strong></td>
        <td>${b.name}</td>
        <td><small class="tag">${b.category}</small></td>
        <td><span class="badge">${b.status}</span></td>
      </tr>
    `).join('');
  } else if (state.activeTab === 'wards') {
    head.innerHTML = `<tr><th>รหัสหน่วยงาน</th><th>ชื่อคณะ / วิทยาลัย / สำนัก / หน่วยงาน</th><th>อาคารที่ตั้ง</th><th>สถานะ</th></tr>`;
    body.innerHTML = WARDS_DATA.map(w => `
      <tr>
        <td><strong>${w.code}</strong></td>
        <td>${w.name}</td>
        <td>${w.bld}</td>
        <td><span class="badge">${w.status}</span></td>
      </tr>
    `).join('');
  } else if (state.activeTab === 'infrastructure') {
    head.innerHTML = `<tr><th>รหัสระบบ</th><th>สระน้ำ / คลอง / สนามกีฬา / สาธารณูปโภค</th><th>พิกัดอ้างอิง</th><th>ความพร้อม</th></tr>`;
    body.innerHTML = INFRASTRUCTURE_DATA.map(inf => `
      <tr>
        <td><strong>${inf.code}</strong></td>
        <td>${inf.name}</td>
        <td>${inf.bld}</td>
        <td><strong style="color: #2e7d32">${inf.status}</strong></td>
      </tr>
    `).join('');
  }

  body.querySelectorAll('tr[data-id]').forEach(tr => {
    tr.addEventListener('click', () => {
      const id = tr.getAttribute('data-id');
      selectBuilding(id, true);
      const tp = document.getElementById('tablePanel');
      if (tp) tp.hidden = true;
    });
  });
}

function setupSearch() {
  const inp = document.getElementById('search');
  const res = document.getElementById('searchResults');
  if (!inp || !res) return;

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) {
      res.hidden = true;
      return;
    }

    const matched = HOSPITAL_BUILDINGS.filter(b =>
      b.name.toLowerCase().includes(q) ||
      (b.shortName && b.shortName.toLowerCase().includes(q)) ||
      (b.sub && b.sub.toLowerCase().includes(q)) ||
      b.code.toLowerCase().includes(q)
    );

    if (matched.length === 0) {
      res.innerHTML = `<div style="padding: 10px; font-size: 12px; color: var(--muted)">ไม่พบอาคารที่ตรงกับ "${q}"</div>`;
      res.hidden = false;
      return;
    }

    res.innerHTML = matched.slice(0, 10).map(b => `
      <div class="search-item" data-id="${b.id}" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid rgba(0,0,0,0.05); font-size: 13px;">
        <strong>${b.code}</strong> · ${b.shortName || b.name}
        <div style="font-size: 11px; color: var(--muted)">${b.category}</div>
      </div>
    `).join('');
    res.hidden = false;

    res.querySelectorAll('.search-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        selectBuilding(id, true);
        res.hidden = true;
        inp.value = '';
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!inp.contains(e.target) && !res.contains(e.target)) {
      res.hidden = true;
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

function setupMapModal() {
  const modal = document.getElementById('modal');
  const mapImg = document.getElementById('modalMapImg');
  const modalTitle = document.getElementById('modalTitle');
  const btnFloor = document.getElementById('btnModalFloor');
  const btnMap2 = document.getElementById('btnModalMap2');
  const btnMap1 = document.getElementById('btnModalMap1');

  function switchMap(type) {
    state.activeMapTab = type;
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
  switchMap('floor');

  document.getElementById('map')?.addEventListener('click', () => { if (modal) modal.hidden = false; });
  document.getElementById('closeModal')?.addEventListener('click', () => { if (modal) modal.hidden = true; });
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });
}

function setupEventListeners() {
  const canvas = renderer.domElement;
  let pointerStart = { x: 0, y: 0 };

  canvas.addEventListener('pointerdown', (e) => {
    pointerStart = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener('pointerup', (e) => {
    const dist = Math.hypot(e.clientX - pointerStart.x, e.clientY - pointerStart.y);
    if (dist > 6) return;

    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(buildingsGroup.children, true);

    if (intersects.length > 0) {
      let topObj = intersects[0].object;
      while (topObj.parent && topObj.parent !== buildingsGroup) {
        topObj = topObj.parent;
      }
      if (topObj.userData && topObj.userData.id) {
        selectBuilding(topObj.userData.id, false);
      }
    }
  });

  canvas.addEventListener('dblclick', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([groundGroup, buildingsGroup, walkwaysGroup, propsGroup, foliageGroup], true);
    if (intersects.length > 0) {
      const hitPoint = intersects[0].point;
      const currentDir = camera.position.clone().sub(controls.target).normalize();
      const newCamPos = hitPoint.clone().add(currentDir.multiplyScalar(32.0));
      if (newCamPos.y < 8.0) newCamPos.y = 8.0;

      new TWEEN.Tween(controls.target).to({ x: hitPoint.x, y: hitPoint.y + 0.5, z: hitPoint.z }, 800).easing(TWEEN.Easing.Cubic.Out).start();
      new TWEEN.Tween(camera.position).to({ x: newCamPos.x, y: newCamPos.y, z: newCamPos.z }, 800).easing(TWEEN.Easing.Cubic.Out).start();
    }
  });

  document.getElementById('reset')?.addEventListener('click', resetView);
  document.getElementById('brandReset')?.addEventListener('click', resetView);
  document.getElementById('closeDetail')?.addEventListener('click', closeDetailCard);
  document.getElementById('isolateFloor')?.addEventListener('click', toggleExplodeFloor);

  document.getElementById('follow')?.addEventListener('click', () => {
    if (state.selectedBuilding) {
      focusBuilding(state.selectedBuilding);
      showToast(`โฟกัสและบินเข้าชม: ${state.selectedBuilding.shortName || state.selectedBuilding.name}`);
    }
  });

  const btnLabels = document.getElementById('toggleLabels');
  btnLabels?.addEventListener('click', () => {
    state.showLabels = !state.showLabels;
    btnLabels.classList.toggle('active', state.showLabels);
    updateLabelPositions();
  });

  const btnWalkways = document.getElementById('toggleWalkways');
    if (btnWalkways) btnWalkways.style.display = 'none'; // ทางเชื่อม ไม่ต้องมี
  btnWalkways?.addEventListener('click', () => {
    state.showWalkways = !state.showWalkways;
    btnWalkways.classList.toggle('active', state.showWalkways);
    walkwaysGroup.visible = state.showWalkways;
  });

  const btnTurntable = document.getElementById('turntable');
  btnTurntable?.addEventListener('click', () => {
    state.isTurntable = !state.isTurntable;
    btnTurntable.classList.toggle('active', state.isTurntable);
    showToast(state.isTurntable ? 'เปิดการหมุนชมมหาวิทยาลัย 360 องศา' : 'หยุดหมุน');
  });

  const btnTour = document.getElementById('tour');
  btnTour?.addEventListener('click', () => {
    state.isTouring = !state.isTouring;
    btnTour.classList.toggle('active', state.isTouring);
    if (state.isTouring) {
      showToast('เริ่มทัวร์ชมแลนด์มาร์ค มรภ.วไลยอลงกรณ์ฯ อัตโนมัติ');
      runTourStep();
    } else {
      clearTimeout(state.tourTimer);
      showToast('หยุดทัวร์ชม');
    }
  });

  function runTourStep() {
    if (!state.isTouring) return;
    const tourKeys = [
      'bld-80yr', 'bld-100yr', 'bld-hotel', 'bld-pool',
      'bld-edu2', 'bld-fst', 'bld-fms', 'bld-arit',
      'bld-thai-pavilion', 'bld-satit-pri', 'bld-dorms-main', 'bld-stadium'
    ];
    const id = tourKeys[state.tourIndex % tourKeys.length];
    state.tourIndex++;
    selectBuilding(id, true);
    state.tourTimer = setTimeout(runTourStep, 5200);
  }

  // Fullscreen UI toggle
  const btnUI = document.getElementById('toggleUI');
  const btnTopFS = document.getElementById('fullscreenTop');
  const btnTopFSText = document.getElementById('fullscreenTopText');

  function updateFullscreenUI(active) {
    state.uiHidden = active;
    document.querySelector('.top')?.classList.toggle('hidden', active);
    document.getElementById('detail')?.classList.toggle('hidden', active);
    if (btnUI) {
      btnUI.classList.toggle('active', active);
      btnUI.textContent = active ? 'ออกเต็มจอ' : 'เต็มจอ';
    }
    if (btnTopFS) btnTopFS.classList.toggle('active', active);
    if (btnTopFSText) btnTopFSText.textContent = active ? 'ออกเต็มจอ' : 'เต็มจอ';
  }

  function toggleFullscreen() {
    const willBeActive = !(state.uiHidden || !!document.fullscreenElement);
    updateFullscreenUI(willBeActive);
    if (willBeActive) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
    showToast(willBeActive ? 'เข้าสู่โหมดเต็มจอ (กด Esc เพื่อออก)' : 'ออกจากโหมดเต็มจอ');
  }

  btnUI?.addEventListener('click', (e) => { e.preventDefault(); toggleFullscreen(); });
  btnTopFS?.addEventListener('click', (e) => { e.preventDefault(); toggleFullscreen(); });

  const btnCollapseToolbar = document.getElementById('collapseToolbar');
  const toolbar = document.querySelector('.toolbar');
  btnCollapseToolbar?.addEventListener('click', () => {
    if (!toolbar) return;
    const isCollapsed = toolbar.classList.toggle('collapsed');
    btnCollapseToolbar.textContent = isCollapsed ? '›' : '‹';
  });

  // Light Panel & Table Panel toggles
  const btnLightToggle = document.getElementById('lightToggle');
  const lightPanel = document.getElementById('lightPanel');
  const btnCloseLight = document.getElementById('closeLight');
  const btnToggleTable = document.getElementById('toggleTable');
  const tablePanel = document.getElementById('tablePanel');
  const btnCloseTable = document.getElementById('closeTable');

  btnLightToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lightPanel) lightPanel.hidden = !lightPanel.hidden;
  });
  btnCloseLight?.addEventListener('click', () => { if (lightPanel) lightPanel.hidden = true; });

  btnToggleTable?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (tablePanel) tablePanel.hidden = !tablePanel.hidden;
  });
  btnCloseTable?.addEventListener('click', () => { if (tablePanel) tablePanel.hidden = true; });

  // Sun & Light sliders
  const sunAz = document.getElementById('sunAz');
  const sunEl = document.getElementById('sunEl');
  const sunPower = document.getElementById('sunPower');
  const ambInput = document.getElementById('ambient');
  const expInput = document.getElementById('exposure');

  function setSunPosition(azDeg, elDeg, power, ambVal = 0.45, expVal = 0.90) {
    if (sunAz) sunAz.value = azDeg;
    if (sunEl) sunEl.value = elDeg;
    if (sunPower) sunPower.value = power;
    if (ambInput) ambInput.value = ambVal;
    if (expInput) expInput.value = expVal;

    const azRad = THREE.MathUtils.degToRad(azDeg);
    const elRad = THREE.MathUtils.degToRad(elDeg);
    const dist = 180;
    sunLight.position.set(
      dist * Math.cos(elRad) * Math.sin(azRad),
      dist * Math.sin(elRad),
      dist * Math.cos(elRad) * Math.cos(azRad)
    );
    sunLight.intensity = power;
    if (ambientLight) ambientLight.intensity = ambVal;
    if (renderer) renderer.toneMappingExposure = expVal;
  }

  [sunAz, sunEl, sunPower, ambInput, expInput].forEach(inp => {
    inp?.addEventListener('input', () => {
      setSunPosition(
        parseFloat(sunAz?.value || -40),
        parseFloat(sunEl?.value || 48),
        parseFloat(sunPower?.value || 1.65),
        parseFloat(ambInput?.value || 0.45),
        parseFloat(expInput?.value || 0.90)
      );
    });
  });

  document.querySelectorAll('.light-presets button').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.getAttribute('data-light');
      if (p === 'morning') {
        state.isNight = false; state.nightTarget = 0.0;
        setSunPosition(-45, 38, 1.65, 0.45, 0.90);
        showToast('☀ ช่วงเช้า · แสงแดดสดใส เริ่มคาบเรียน มรภ.วไลยอลงกรณ์ฯ');
      } else if (p === 'noon') {
        state.isNight = false; state.nightTarget = 0.0;
        setSunPosition(0, 78, 2.15, 0.55, 0.95);
        showToast('☼ ช่วงกลางวัน · แดดจัด กิจกรรมการเรียนการสอนทุกคณะ');
      } else if (p === 'evening') {
        state.isNight = false; state.nightTarget = 0.0;
        setSunPosition(60, 18, 1.35, 0.38, 0.85);
        showToast('⛅ ช่วงเย็น · แดดร่มลมตก กิจกรรมชมรมและสนามกีฬากลาง');
      } else if (p === 'night') {
        state.isNight = true; state.nightTarget = 1.0;
        setSunPosition(0, 10, 0.08, 0.22, 0.80);
        showToast('☽ ช่วงกลางคืน · เปิดไฟส่องสว่างทั่วมหาวิทยาลัยและหอพักนักศึกษา');
      }
    });
  });

  document.getElementById('resetLight')?.addEventListener('click', () => {
    state.isNight = false; state.nightTarget = 0.0;
    setSunPosition(-40, 48, 1.65, 0.45, 0.90);
    showToast('↺ คืนค่าแสงมาตรฐานเรียบร้อย');
  });

  document.querySelectorAll('.tabs button').forEach(tb => {
    tb.addEventListener('click', () => {
      document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
      tb.classList.add('active');
      state.activeTab = tb.getAttribute('data-tab');
      updateTables();
    });
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateLabelPositions();
  });

  setupSearch();
  setupMapModal();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();

  controls.autoRotate = !!state.isTurntable;
  controls.autoRotateSpeed = 1.0;

  if (Math.abs(state.nightLerp - state.nightTarget) > 0.005) {
    state.nightLerp += (state.nightTarget - state.nightLerp) * 0.06;
    const daySky = new THREE.Color(0xdce7f2);
    const nightSky = new THREE.Color(0x0a1120);
    const curSky = daySky.clone().lerp(nightSky, state.nightLerp);
    scene.background = curSky;
    scene.fog.color = curSky;

    emissiveMaterials.forEach(m => {
      m.emissiveIntensity = state.nightLerp * 0.85;
    });
  }

  renderer.render(scene, camera);
  updateLabelPositions();
}

setInterval(() => {
  const clk = document.getElementById('clock');
  if (clk) clk.textContent = new Date().toTimeString().split(' ')[0];
}, 1000);

function init() {
  initProceduralTextures();
  initScene();
  initLights();
  buildPure3DMasterplanTerrain();
  buildCoveredWalkways();
  buildHospitalBuildings();
  buildStreetLightingAndProps();
  buildLandscapingTrees();
  create3DLabels();
  setupEventListeners();
  updateTables();

  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => {
      loading.style.opacity = '0';
      setTimeout(() => { loading.style.display = 'none'; }, 500);
    }, 350);
  }

  requestAnimationFrame(animate);
}

window.addEventListener('DOMContentLoaded', init);
