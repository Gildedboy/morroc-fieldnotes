import { getCollection } from 'astro:content';
import { guideHref } from '../lib/paths';
import { dungeonEntrances, locations } from '../data/locations';

export async function GET() {
  const guides = await getCollection('guides', guide => guide.data.publication === 'published');
  const index = guides.map(guide => ({
    title: guide.data.title,
    description: guide.data.description,
    category: guide.data.category,
    href: guideHref(guide.id),
    text: `${guide.data.tags.join(' ')} ${dungeonEntrances.filter(entry => entry.kind === guide.id).map(entry => [entry.name, entry.directions, entry.requirements, entry.extraRequirements?.join(' '), entry.notes, entry.route?.join(' '), entry.locationId ? locations.find(location => location.id === entry.locationId)?.access : '', entry.places.map(place => place.label).join(' ')].filter(Boolean).join(' ')).join(' ')} ${(guide.body ?? '')
      .replace(/^import .+$/gm, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\([^)]*https?:[^)]*\)/g, '')
      .replace(/[#*_`{}]/g, ' ')
      .replace(/\s+/g, ' ')}`,
  }));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
