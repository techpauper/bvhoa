import { Subdivision, Director } from './types';

export const SUBDIVISIONS: Subdivision[] = [
  {
    id: 'meadow-view',
    name: 'Meadow View',
    description: 'A serene collection of homes overlooking the central community wildflower meadows.',
    image: 'https://picsum.photos/seed/meadow/800/600',
    features: ['Walking Trails', 'Wildflower Preserve', 'Quiet Cul-de-sacs']
  },
  {
    id: 'oak-ridge',
    name: 'Oak Ridge',
    description: 'Nestled among century-old oak trees, offering natural shade and a majestic atmosphere.',
    image: 'https://picsum.photos/seed/oak/800/600',
    features: ['Mature Landscaping', 'Elevated Views', 'Large Lots']
  },
  {
    id: 'willow-creek',
    name: 'Willow Creek',
    description: 'Waterfront living along the gentle curves of the Bloom Village creek system.',
    image: 'https://picsum.photos/seed/creek/800/600',
    features: ['Creek Access', 'Fishing Pier', 'Waterfront Benches']
  },
  {
    id: 'pine-grove',
    name: 'Pine Grove',
    description: 'A cozy neighborhood surrounded by evergreen pines, providing year-round privacy.',
    image: 'https://picsum.photos/seed/pine/800/600',
    features: ['Evergreen Buffer', 'Community Fire Pit', 'Wooded Trails']
  },
  {
    id: 'sunny-vale',
    name: 'Sunny Vale',
    description: 'Bright and open, this subdivision features the community pool and recreation center.',
    image: 'https://picsum.photos/seed/sunny/800/600',
    features: ['Pool Access', 'Tennis Courts', 'Playground']
  }
];

export const DIRECTORS: Director[] = [
  {
    name: 'Sarah Jenkins',
    role: 'President',
    email: 'president@bloomvillage.com',
    bio: 'Sarah has lived in Bloom Village for 12 years and is passionate about community gardening.',
    image: 'https://picsum.photos/seed/sarah/400/400'
  },
  {
    name: 'Michael Chen',
    role: 'Vice President',
    email: 'vp@bloomvillage.com',
    bio: 'Michael brings 15 years of urban planning experience to the board.',
    image: 'https://picsum.photos/seed/michael/400/400'
  },
  {
    name: 'Robert Miller',
    role: 'Treasurer',
    email: 'treasurer@bloomvillage.com',
    bio: 'A retired CPA, Robert ensures our community finances are transparent and robust.',
    image: 'https://picsum.photos/seed/robert/400/400'
  },
  {
    name: 'Linda Thompson',
    role: 'Secretary',
    email: 'secretary@bloomvillage.com',
    bio: 'Linda manages community communications and event planning.',
    image: 'https://picsum.photos/seed/linda/400/400'
  },
  {
    name: 'David Wilson',
    role: 'Director at Large',
    email: 'david@bloomvillage.com',
    bio: 'David focuses on safety and maintenance across all five subdivisions.',
    image: 'https://picsum.photos/seed/david/400/400'
  }
];
