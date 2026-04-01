export const serviceFamilies = [
  {
    slug: 'water-damage',
    title: 'Water Damage',
    shortTitle: 'Water',
    intro:
      'Water losses escalate by the hour. We deploy extraction, drying, and moisture verification to return your property to pre-loss condition.',
    description:
      'Burst pipes, appliance failures, and overflows require immediate mitigation to reduce structural damage and prevent microbial growth.',
    damages: [
      {
        slug: 'water-restoration',
        title: 'Water Restoration',
        summary:
          'Full water restoration combines emergency response, moisture control, and repair planning to return affected areas to safe use.',
        paragraphs: [
          [
            { type: 'text', text: 'Water restoration starts with fast assessment and controlled drying. If the source is active plumbing failure, begin with our ' },
            { type: 'link', text: 'broken pipes', to: '/services/water-damage/broken-pipes' },
            { type: 'text', text: ' workflow to prevent ongoing loss.' },
          ],
          [
            { type: 'text', text: 'Where contamination risks exist, restoration should be coordinated with ' },
            { type: 'link', text: 'sewage backup', to: '/services/water-damage/sewage-backup' },
            { type: 'text', text: ' cleanup standards before rebuild work begins.' },
          ],
        ],
        related: ['broken-pipes', 'sewage-backup', 'toilet-overflow'],
      },
      {
        slug: 'broken-pipes',
        title: 'Broken Pipes',
        summary:
          'Broken pipes can release large volumes of water quickly and require immediate containment to protect structure and contents.',
        paragraphs: [
          [
            { type: 'text', text: 'Pipe failures frequently impact walls, cabinets, and flooring before the leak is found. After stopping the source, rapid ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' reduces secondary damage.' },
          ],
          [
            { type: 'text', text: 'If affected spaces include bathrooms, pipe events can overlap with ' },
            { type: 'link', text: 'toilet overflow', to: '/services/water-damage/toilet-overflow' },
            { type: 'text', text: ' sanitation requirements.' },
          ],
        ],
        related: ['water-restoration', 'toilet-overflow', 'sewage-backup'],
      },
      {
        slug: 'sewage-backup',
        title: 'Sewage Backup',
        summary:
          'Sewage backup events require specialized decontamination, containment, and material handling to protect occupant health.',
        paragraphs: [
          [
            { type: 'text', text: 'Sewage losses are not standard water events and need category-specific cleanup procedures. After decontamination, phased ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' returns the structure to service.' },
          ],
          [
            { type: 'text', text: 'In mixed-loss scenarios, sewage events can also follow severe weather and should be coordinated with ' },
            { type: 'link', text: 'flood mitigation', to: '/services/storm-damage/flood-mitigation' },
            { type: 'text', text: ' protocols.' },
          ],
        ],
        related: ['water-restoration', 'flood-mitigation', 'toilet-overflow'],
      },
      {
        slug: 'toilet-overflow',
        title: 'Toilet Overflow',
        summary:
          'Toilet overflows can damage finishes quickly and may require sanitization depending on contamination level and source.',
        paragraphs: [
          [
            { type: 'text', text: 'Toilet overflows often affect subfloors and adjacent rooms beyond visible water lines. Fast ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' limits long-term material deterioration.' },
          ],
          [
            { type: 'text', text: 'If wastewater contamination is present, use ' },
            { type: 'link', text: 'sewage backup', to: '/services/water-damage/sewage-backup' },
            { type: 'text', text: ' handling standards before reconstruction.' },
          ],
        ],
        related: ['water-restoration', 'sewage-backup', 'broken-pipes'],
      },
    ],
  },
  {
    slug: 'fire-damage',
    title: 'Fire Damage',
    shortTitle: 'Fire',
    intro:
      'From emergency securing through full rebuild, we restore properties impacted by direct flame, smoke, and suppression side effects.',
    description:
      'Fire losses involve structural damage, smoke contamination, and often secondary water impacts that require coordinated restoration.',
    damages: [
      {
        slug: 'smoke-damage',
        title: 'Smoke Damage',
        summary:
          'Smoke residues can spread far beyond the burn zone and require source-focused cleaning and odor treatment.',
        paragraphs: [
          [
            { type: 'text', text: 'Smoke particles migrate through porous finishes and HVAC pathways quickly. When structural materials are also affected, combine smoke treatment with ' },
            { type: 'link', text: 'fire damage restoration', to: '/services/fire-damage/fire-damage-restoration' },
            { type: 'text', text: ' planning.' },
          ],
          [
            { type: 'text', text: 'If suppression efforts introduced water into the structure, coordinate smoke cleanup with ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' to reduce secondary losses.' },
          ],
        ],
        related: ['fire-damage-restoration', 'post-fire-reconstruction', 'water-restoration'],
      },
      {
        slug: 'fire-damage-restoration',
        title: 'Fire Damage Restoration',
        summary:
          'Fire damage restoration includes stabilization, contamination removal, and structured recovery toward full rebuild.',
        paragraphs: [
          [
            { type: 'text', text: 'Fire restoration begins with safety controls, scope documentation, and immediate mitigation. Persistent odor and particulate concerns are handled under ' },
            { type: 'link', text: 'smoke damage', to: '/services/fire-damage/smoke-damage' },
            { type: 'text', text: ' workflows.' },
          ],
          [
            { type: 'text', text: 'Once mitigation is complete, projects transition into ' },
            { type: 'link', text: 'post-fire reconstruction', to: '/services/fire-damage/post-fire-reconstruction' },
            { type: 'text', text: ' for full occupancy recovery.' },
          ],
        ],
        related: ['smoke-damage', 'post-fire-reconstruction', 'commercial-fire-damage'],
      },
      {
        slug: 'post-fire-reconstruction',
        title: 'Post-Fire Reconstruction',
        summary:
          'Post-fire reconstruction restores structural and finish systems after mitigation is complete and the site is ready to rebuild.',
        paragraphs: [
          [
            { type: 'text', text: 'Reconstruction follows verified mitigation and covers framing, finishes, and system replacements. If smoke contamination persists, revisit ' },
            { type: 'link', text: 'smoke damage', to: '/services/fire-damage/smoke-damage' },
            { type: 'text', text: ' treatment before closeout.' },
          ],
          [
            { type: 'text', text: 'For businesses, reconstruction sequencing can be coordinated through ' },
            { type: 'link', text: 'commercial fire damage', to: '/services/commercial/commercial-fire-damage' },
            { type: 'text', text: ' recovery plans.' },
          ],
        ],
        related: ['fire-damage-restoration', 'smoke-damage', 'commercial-fire-damage'],
      },
    ],
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage',
    shortTitle: 'Storm',
    intro:
      'Storm events can involve wind, roof breaches, and flood-related intrusion. We stabilize your property and restore it quickly.',
    description:
      'From emergency board-up to roof and interior restoration, our team handles storm losses from first response through final rebuild.',
    damages: [
      {
        slug: 'flood-mitigation',
        title: 'Flood Mitigation',
        summary:
          'Fast flood response limits structural damage and helps prevent microbial growth after severe weather.',
        paragraphs: [
          [
            { type: 'text', text: 'Flood mitigation starts with rapid extraction, containment, and moisture control. For complete recovery, integrate ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' once conditions are stabilized.' },
          ],
          [
            { type: 'text', text: 'If the roof system is compromised, temporary protection like ' },
            { type: 'link', text: 'emergency tarping', to: '/services/storm-damage/emergency-tarping' },
            { type: 'text', text: ' helps prevent additional interior damage.' },
          ],
        ],
        related: ['wind-damage', 'emergency-tarping', 'water-restoration'],
      },
      {
        slug: 'wind-damage',
        title: 'Wind Damage',
        summary:
          'High winds can tear roofing and siding, creating openings that expose interiors to water intrusion.',
        paragraphs: [
          [
            { type: 'text', text: 'Wind events frequently require immediate security measures. If openings are present, begin with ' },
            { type: 'link', text: 'emergency board-up', to: '/services/storm-damage/emergency-board-up' },
            { type: 'text', text: ' before permanent repairs are scheduled.' },
          ],
          [
            { type: 'text', text: 'Roof impacts are addressed through dedicated ' },
            { type: 'link', text: 'roof restoration', to: '/services/storm-damage/roof-restoration' },
            { type: 'text', text: ' scopes to restore weather protection.' },
          ],
        ],
        related: ['emergency-board-up', 'roof-restoration', 'flood-mitigation'],
      },
      {
        slug: 'emergency-board-up',
        title: 'Emergency Board-Up',
        summary:
          'Board-up services secure damaged doors, windows, and openings immediately after a storm.',
        paragraphs: [
          [
            { type: 'text', text: 'Emergency board-up helps stop further weather intrusion and secures the property. If roof sections are exposed, combine with ' },
            { type: 'link', text: 'emergency tarping', to: '/services/storm-damage/emergency-tarping' },
            { type: 'text', text: ' for full temporary protection.' },
          ],
          [
            { type: 'text', text: 'After stabilization, phased ' },
            { type: 'link', text: 'storm restoration', to: '/services/storm-damage/storm-restoration' },
            { type: 'text', text: ' can begin.' },
          ],
        ],
        related: ['emergency-tarping', 'storm-restoration', 'wind-damage'],
      },
      {
        slug: 'emergency-tarping',
        title: 'Emergency Tarping',
        summary:
          'Rapid roof tarping keeps rain out and protects structure and contents while permanent repairs are arranged.',
        paragraphs: [
          [
            { type: 'text', text: 'Emergency tarping is a critical first step for roof-impacting storms. Permanent resolution follows with ' },
            { type: 'link', text: 'roof restoration', to: '/services/storm-damage/roof-restoration' },
            { type: 'text', text: ' once conditions are safe.' },
          ],
          [
            { type: 'text', text: 'If water has already entered the structure, coordinate with ' },
            { type: 'link', text: 'flood mitigation', to: '/services/storm-damage/flood-mitigation' },
            { type: 'text', text: ' and dry-out.' },
          ],
        ],
        related: ['roof-restoration', 'flood-mitigation', 'emergency-board-up'],
      },
      {
        slug: 'storm-restoration',
        title: 'Storm Restoration',
        summary:
          'Comprehensive storm restoration combines mitigation, repairs, and reconstruction under one scope.',
        paragraphs: [
          [
            { type: 'text', text: 'Full storm restoration includes structural repair, finish replacement, and recovery sequencing. Many projects include dedicated ' },
            { type: 'link', text: 'wind damage', to: '/services/storm-damage/wind-damage' },
            { type: 'text', text: ' and water mitigation phases.' },
          ],
          [
            { type: 'text', text: 'For business properties, this approach scales through our ' },
            { type: 'link', text: 'commercial storm cleanup', to: '/services/commercial/commercial-storm-cleanup' },
            { type: 'text', text: ' service.' },
          ],
        ],
        related: ['wind-damage', 'flood-mitigation', 'commercial-storm-cleanup'],
      },
      {
        slug: 'roof-restoration',
        title: 'Roof Restoration',
        summary:
          'Roof restoration addresses storm-impacted roofing systems to stop leaks and restore long-term protection.',
        paragraphs: [
          [
            { type: 'text', text: 'Roof systems exposed to wind and debris need full inspection and scope-based repair. Until work begins, ' },
            { type: 'link', text: 'emergency tarping', to: '/services/storm-damage/emergency-tarping' },
            { type: 'text', text: ' prevents secondary water intrusion.' },
          ],
          [
            { type: 'text', text: 'If moisture impacts interior materials, follow with ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' to complete recovery.' },
          ],
        ],
        related: ['emergency-tarping', 'water-restoration', 'storm-restoration'],
      },
    ],
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    shortTitle: 'Commercial',
    intro:
      'Commercial restoration requires strict scope control, documentation, and phased execution to reduce business interruption.',
    description:
      'From retail to multi-unit and office spaces, we coordinate mitigation and reconstruction with insurer-ready documentation.',
    damages: [
      {
        slug: 'commercial-water-damage',
        title: 'Commercial Water Damage',
        summary:
          'Commercial water losses require rapid stabilization and detailed documentation to protect operations and claim outcomes.',
        paragraphs: [
          [
            { type: 'text', text: 'Commercial water events demand phased execution to keep critical operations active. Where weather is involved, combine with ' },
            { type: 'link', text: 'commercial storm cleanup', to: '/services/commercial/commercial-storm-cleanup' },
            { type: 'text', text: ' for full recovery management.' },
          ],
          [
            { type: 'text', text: 'When source water is sanitary plumbing, workflows align with residential ' },
            { type: 'link', text: 'broken pipes', to: '/services/water-damage/broken-pipes' },
            { type: 'text', text: ' response standards at commercial scale.' },
          ],
        ],
        related: ['commercial-storm-cleanup', 'commercial-odor-removal', 'broken-pipes'],
      },
      {
        slug: 'commercial-fire-damage',
        title: 'Commercial Fire Damage',
        summary:
          'Commercial fire losses require rapid containment, smoke remediation, and phased reconstruction to reopen safely.',
        paragraphs: [
          [
            { type: 'text', text: 'Commercial fire projects combine structural and environmental recovery. Odor and air-quality concerns are handled through ' },
            { type: 'link', text: 'commercial odor removal', to: '/services/commercial/commercial-odor-removal' },
            { type: 'text', text: ' services.' },
          ],
          [
            { type: 'text', text: 'Core fire workflows align with our ' },
            { type: 'link', text: 'fire damage restoration', to: '/services/fire-damage/fire-damage-restoration' },
            { type: 'text', text: ' standards and documentation practices.' },
          ],
        ],
        related: ['commercial-odor-removal', 'fire-damage-restoration', 'post-fire-reconstruction'],
      },
      {
        slug: 'commercial-odor-removal',
        title: 'Commercial Odor Removal',
        summary:
          'Odor removal in occupied commercial spaces requires source-focused treatment and controlled disruption.',
        paragraphs: [
          [
            { type: 'text', text: 'Commercial odor events after smoke or water exposure require source-level treatment, not masking. These scopes commonly pair with ' },
            { type: 'link', text: 'commercial fire damage', to: '/services/commercial/commercial-fire-damage' },
            { type: 'text', text: ' work.' },
          ],
          [
            { type: 'text', text: 'If moisture contributes to odor, combine treatment with ' },
            { type: 'link', text: 'water restoration', to: '/services/water-damage/water-restoration' },
            { type: 'text', text: ' for full correction.' },
          ],
        ],
        related: ['commercial-fire-damage', 'commercial-water-damage', 'water-restoration'],
      },
      {
        slug: 'commercial-storm-cleanup',
        title: 'Commercial Storm Cleanup',
        summary:
          'Storm-impacted commercial properties need fast debris removal, stabilization, and dry-out to limit downtime.',
        paragraphs: [
          [
            { type: 'text', text: 'Commercial storm cleanup includes immediate protection, debris control, and phased restoration planning. Temporary security often begins with ' },
            { type: 'link', text: 'emergency board-up', to: '/services/storm-damage/emergency-board-up' },
            { type: 'text', text: ' and site stabilization.' },
          ],
          [
            { type: 'text', text: 'Roof-impacting events may also require ' },
            { type: 'link', text: 'roof restoration', to: '/services/storm-damage/roof-restoration' },
            { type: 'text', text: ' coordinated with interior mitigation.' },
          ],
        ],
        related: ['emergency-board-up', 'roof-restoration', 'commercial-water-damage'],
      },
    ],
  },
]

export function getServiceFamily(serviceSlug) {
  return serviceFamilies.find((family) => family.slug === serviceSlug)
}

export function getDamagePage(serviceSlug, damageSlug) {
  const family = getServiceFamily(serviceSlug)
  if (!family) return null
  return family.damages.find((damage) => damage.slug === damageSlug) ?? null
}

export function getAllDamagesMap() {
  const map = new Map()
  serviceFamilies.forEach((family) => {
    family.damages.forEach((damage) => {
      map.set(damage.slug, {
        ...damage,
        familySlug: family.slug,
        familyTitle: family.title,
      })
    })
  })
  return map
}
