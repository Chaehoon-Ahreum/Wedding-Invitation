/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김채훈",
    nameEn: "김채훈",
    father: "김재수",
    mother: "윤미연",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "백아름",
    nameEn: "백아름",
    father: "백영수",
    mother: "한영순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-12",
    time: "14:00",
    venue: "H스퀘어웨딩홀",
    hall: "(한양대 동문회관)",
    address: "서울특별시 성동구 마조로 22-2",
    tel: "0507-1338-9999",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10931903",
      naver: "https://map.naver.com/p/entry/place/38325837?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202609080943%26locale%3Dko%26svcName%3Dmap_pcv5%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202609080943%26locale%3Dko%26svcName%3Dmap_pcv5",
      tmap: "https://tmap.life/4c240a74"

    }
  },

  // ── 인사말 ──
  invitation: {
    title: "/n/n소중한 분들을 초대합니다",
    message: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n바쁘시더라도 오셔서\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김채훈", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "김재수", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "윤미연", bank: "OO은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "백아름", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "백영수", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "한영순", bank: "OO은행", number: "000-000-000000" }
    ]
  },

  
};
