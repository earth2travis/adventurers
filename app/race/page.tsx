import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Race() {
  return (
    <div className="px-4 md:px-6 py-6 md:py-12 lg:py-16 xl:py-24 2xl:py-32">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Adventurers</h1>
          <p className="text-gray-500 dark:text-gray-400">Choose A Race</p>
        </div>
        <div className="prose prose-gray mx-auto dark:prose-invert">
          <p>
            Every character belongs to a race, one of the many intelligent
            humanoid species in the D&D world. The most common player character
            races are dwarves, elves, halflings, and humans. Some races also
            have subraces, such as mountain dwarf or wood elf. Chapter 2
            provides more information about these races, as well as the less
            widespread races of dragonborn, gnomes, half-elves, half-orcs, and
            tieflings.
          </p>
          <p>
            The race you choose contributes to your character&apos;s identity in
            an important way, by establishing a general appearance and the
            natural talents gained from culture and ancestry. Your
            character&apos;s race grants particular racial traits, such as
            special senses, proficiency in one or more skills, or the ability to
            use minor spells. These traits sometimes dovetail with the
            capabilities of certain classes (see step 2). For example, the
            racial traits of lightfoot halflings make them exceptional rogues,
            and high elves tend to be powerful wizards. Sometimes playing
            against type can be fun, too. Half-orc paladins and mountain dwarf
            wizards, for example, can be unusual but memorable characters.
          </p>
          <p>
            Your race also increases one or more of your ability scores, which
            you determine in step 3. Note these increases and remember to apply
            them later.
          </p>
          <p>
            Record the traits granted by your race on your character sheet. Be
            sure to note your starting languages and your base speed as well.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger>Race</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Human</DropdownMenuItem>
                <DropdownMenuItem>Half-Orc</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/" className={buttonVariants({ variant: 'outline' })}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
