import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Start() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="px-4 md:px-6 py-6 md:py-12 lg:py-16 xl:py-24 2xl:py-32">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Adventurers</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Step-by-Step Characters
            </p>
          </div>
          <div className="prose prose-gray mx-auto dark:prose-invert">
            <p>
              Your first step in playing an adventurer in the Dungeons & Dragons
              game is to imagine and create a character of your own. Your
              character is a combination of game statistics, roleplaying hooks,
              and your imagination. You choose a race (such as human or
              halfling) and a class (such as fighter or wizard). You also invent
              the personality, appearance, and backstory of your character. Once
              completed, your character serves as your representative in the
              game, your avatar in the Dungeons & Dragons world.
            </p>
            <p>
              Before you dive into step 1 below, think about the kind of
              adventurer you want to play. You might be a courageous fighter, a
              skulking rogue, a fervent cleric, or a flamboyant wizard. Or you
              might be more interested in an unconventional character, such as a
              brawny rogue who likes hand-to-hand combat, or a sharpshooter who
              picks off enemies from afar. Do you like fantasy fiction featuring
              dwarves or elves? Try building a character of those races. Do you
              want your character to be the toughest adventurer at the table?
              Consider a class like barbarian or paladin. If you don&apos;t know
              where else to begin, take a look at the illustrations in this book
              to see what catches your interest.
            </p>
            <p>
              Once you have a character in mind, follow these steps in order,
              making decisions that reflect the character you want. Your
              conception of your character might evolve with each choice you
              make. What&apos;s important is that you come to the table with a
              character you&apos;re excited to play.
            </p>
            <p>
              Throughout this, we use the term
              <strong> character sheet </strong>
              to mean whatever you use to track your character, whether
              it&apos;s a formal character sheet (like the one at the end of
              this book), some form of digital record, or a piece of notebook
              paper. An official D&D character is a fine place to start until
              you know what information you need and how you use it during the
              game.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/" className={buttonVariants({ variant: 'outline' })}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
