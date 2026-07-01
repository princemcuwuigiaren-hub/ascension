// ASCENSION — placeholder data
// This is structural/demo data only. Real domain content is authored
// separately against the schema in the architecture doc.

const ASCENSION_DATA = {
  totalPoints: 365,
  streak: 14,
  domains: [
    {
      id: 'physical', name: 'Physical', glyph: '⬡',
      overview: 'Strength, stamina, and how your body carries you through the day.',
      gain: 'A body that keeps up with what you ask of it.',
      subdomains: [
        { id: 'strength', name: 'Strength', why: 'Raw capacity — what you can lift, push, hold.', tier: 'intermediate' },
        { id: 'stamina', name: 'Stamina', why: 'Endurance under sustained effort.', tier: 'beginner' },
        { id: 'flexibility', name: 'Flexibility', why: 'Range of motion, injury prevention.', tier: 'beginner' },
        { id: 'posture', name: 'Posture', why: 'How you hold yourself, daily.', tier: 'advanced' },
      ]
    },
    {
      id: 'mind', name: 'Mind', glyph: '◎',
      overview: 'Focus, discipline, and the quality of your attention.',
      gain: 'A mind that does what you point it at.',
      subdomains: [
        { id: 'focus', name: 'Focus & Discipline', why: 'Sustained, undistracted effort.', tier: 'intermediate' },
        { id: 'reflection', name: 'Reflection', why: 'Processing, not just producing.', tier: 'beginner' },
      ]
    },
    {
      id: 'finance', name: 'Finance', glyph: '◈',
      overview: 'Habits around money — saving, awareness, planning.',
      gain: 'Fewer surprises, more control.',
      subdomains: [
        { id: 'saving', name: 'Saving Habits', why: 'Small, consistent set-asides.', tier: 'beginner' },
        { id: 'awareness', name: 'Awareness', why: 'Knowing where money actually goes.', tier: 'intermediate' },
      ]
    },
    {
      id: 'skills', name: 'Skills', glyph: '⚙',
      overview: 'Craft, output, and creative production.',
      gain: 'Things that exist because you made them.',
      subdomains: [
        { id: 'production', name: 'Creative Production', why: 'Shipping, not just planning.', tier: 'intermediate' },
        { id: 'learning', name: 'Deliberate Learning', why: 'Deep study, not passive consumption.', tier: 'beginner' },
      ]
    },
    {
      id: 'appearance', name: 'Appearance', glyph: '✦',
      overview: 'Grooming and presentation — how you show up.',
      gain: 'Looking like someone who has it together.',
      subdomains: [
        { id: 'grooming', name: 'Grooming', why: 'Baseline upkeep, consistently.', tier: 'beginner' },
      ]
    },
  ],
  todaySlate: [
    { domainId: 'physical', subdomainId: 'stamina', title: 'Stamina Session B', minutes: 18, pts: 20, status: 'pending' },
    { domainId: 'mind', subdomainId: 'focus', title: '25-Minute Deep Work Block', minutes: 25, pts: 20, status: 'done' },
    { domainId: 'finance', subdomainId: 'saving', title: 'Set Aside Something', minutes: 3, pts: 15, status: 'overdue' },
  ],
  tierOrder: ['beginner', 'intermediate', 'advanced'],
};
