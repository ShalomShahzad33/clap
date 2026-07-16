export const cabinetMembers = [
  {
    slug: 'riaz-anjum',
    name: 'Riaz Anjum',
    role: 'President',
    location: 'Pakistan',
    group: 'President',
    image: null,
    bio: [
      'Riaz Anjum is Advocate High Court and President of the Christian Lawyers Association in Pakistan (CLAP).',
      'He leads the association in its commitment to justice, human dignity, equality, and the rule of law, serving vulnerable communities and strengthening the Christian legal profession across Pakistan.',
    ],
  },
  {
    slug: 'jawad-farhat-khokhar',
    name: 'Jawad Farhat Khokhar',
    role: 'Senior Vice President (2025–26)',
    location: 'Lahore',
    group: 'Vice Presidents',
    image: null,
    bio: [
      'Jawad Farhat Khokhar is Advocate High Court and Senior Vice President of CLAP (2025–26). He previously served as General Secretary of CLAP (2018–2019).',
      'He is a law graduate (LL.B) with an M.A. in Political Science and holds life memberships of the Lahore Bar Association, High Court Bar Association, and Tax Bar Association.',
    ],
  },
  {
    slug: 'sarfraz-khokhar',
    name: 'Sarfraz Khokhar',
    role: 'Vice President (2025–26)',
    location: 'Lahore',
    group: 'Vice Presidents',
    image: null,
    bio: [
      'Sarfraz Khokhar is Advocate High Court and Vice President of CLAP (2025–26). He is a law graduate (LL.B) and holds life membership of the Lahore Bar Association and High Court Bar Association (2016).',
      'Office: First Floor office # 5, Fazal-e-Miran Plaza near Lahore High Court.',
    ],
  },
  {
    slug: 'abisaloom-robin-bhatti',
    name: 'Abisaloom Robin Bhatti',
    role: 'General Secretary (2025–26)',
    location: 'Lahore',
    group: 'General Secretary',
    image: null,
    bio: [
      'Abisaloom Robin Bhatti is Advocate High Court and presently serves as General Secretary of Christian Lawyers Association in Pakistan (CLAP) for the 2025–2026 session. He previously served as Joint Secretary of CLAP (2023–2024).',
      'He holds an LLM from the University of Lahore, a B.A. LLB (Hons) from the University of the Punjab Law College, and an M.A. in International Relations from the University of Lakki Marwat.',
      'After enrolling with the Punjab Bar Council, Lahore Bar Association, and Lahore High Court Bar Association, he embarked on a successful legal practice providing counsel to prominent companies and individuals. His community service includes membership in the Association of International Lawyers, the Jail Committee Lahore Bar, and the Human Rights Committee Punjab Bar Council.',
      'Dedicated to harnessing innovation in legal service and championing social justice, he continues to contribute legal aid and human rights advocacy in the community.',
    ],
  },
  {
    slug: 'ishtiaq-gill',
    name: 'Ishtiaq Gill',
    role: 'Joint Secretary (2025–26)',
    location: 'Lahore',
    group: 'Joint Secretary',
    image: null,
    bio: [
      'Ishtiaq Gill is Advocate High Court and Joint Secretary of CLAP (2025–26). He is a law graduate (LL.B) from City Law College Lahore with a B.A. from the University of Punjab.',
      'Punjab Bar Council enrollment: 2014. Life membership of Lahore Bar Association and High Court Bar Association (2018).',
      'Office: Main Bazar Youhanabad opposite Saint John Secondary School, Feruzpur Road, Lahore.',
    ],
  },
  {
    slug: 'shakeel-wilson-rajpoot',
    name: 'Shakeel Wilson Rajpoot',
    role: 'Finance Secretary (2025–26)',
    location: 'Lahore',
    group: 'Finance Secretary',
    image: null,
    bio: [
      'Shakeel Wilson Rajpoot is Advocate High Court with a strong academic and professional background in law and political science. He completed Matric and FA from the Lahore Board, followed by a BA and MA in Political Science from the University of the Punjab. He later pursued his LLB from the Pakistan College of Law, affiliated with the University of the Punjab.',
      'He is currently serving as Finance Secretary of the Christian Lawyers Association in Pakistan (2025–2026). He is also a Life Member of the Lahore Bar Association and a Life Member of the Christian Lawyers Association in Pakistan.',
      'Shakeel Wilson Rajpoot has been enrolled with the Punjab Bar Council since 2020 as a licensed Advocate. With dedication to justice, professional integrity, and community representation, he continues to serve the legal fraternity with commitment and excellence.',
    ],
  },
  {
    slug: 'rauf-khan',
    name: 'Rauf Khan',
    role: 'Press Secretary (2025–26)',
    location: 'Lahore',
    group: 'Executive Members',
    image: null,
    bio: [
      'Rauf Khan is Advocate High Court and presently serves as Executive Member of the CLAP Cabinet (2025–26) as Press Secretary.',
      'He completed Matriculation in Science from St. Mary\'s High School Mariyam Nishat Colony, Intermediate (I.Com) and Bachelor (B.Com) from Government Diyal Singh College Lahore, and LL.B from Punjab University (City Law College Lahore). He has practiced law since 2013, with Lower Court Licence in 2013 and High Court Licence in 2015.',
      'He is a Life Member of Lahore Bar Association and High Court Bar Association, Member of Punjab Bar Council, and Member of Christian Lawyers Association in Pakistan (CLAP). He is an ex-member of Legal Committees including Human Rights, Jail Reform, and Minorities Affairs committees of Lahore Bar Association, High Court Bar Association, and Punjab Bar Council.',
      'Achievements include an Appreciation Award in 2023 from Eternal Life Ministry Isaac TV Pastor Anwar Fazal, and an Award in 2019 from Ex-Joint Secretary CLAP (2019–20) and Ex-Library Secretary Lahore Bar Association (2023–24) Mr. AD Choudhary Advocate High Court.',
      'He practices in Criminal, Civil, and Family Laws. Email: raufkhan517@gmail.com. Mobile: +92 300 4698928, +92 316 0141534.',
      'His aim is to provide legal aid to the persecuted Christian community, work against forced conversion and child marriages, and advance the rule of law, minority rights, human rights, and youth development within the Christian community.',
    ],
  },
];

export function getCabinetMemberBySlug(slug) {
  return cabinetMembers.find((member) => member.slug === slug) ?? null;
}
