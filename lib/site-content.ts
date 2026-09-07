export type SiteLink = {
  title: string;
  description?: string;
  href: string;
  date?: string;
  external?: boolean;
};

/* -------------------------------------------------------------------------
   home
   ------------------------------------------------------------------------- */

/** shown top-left. swap for a real headshot; this is the salesforce photo. */
export const photo = { src: "/images/recap.jpeg", alt: "Dariel Gutierrez" };

/** leave empty to hide the email line */
export const email = "darielguu@gmail.com";

/** ascii art shown under the bio on the about page */
export const asciiArt = `                                !??!^
                              7G&&&##P!
                             :Y&&&&#B#BJ
                              :!YG&&#&&#^
                                  :?YG&&Y^:
                                      P&B~
                                  :: ~G&#5
                                J#G??G&&BGY~
                               ~55:^5###B5J?!
                                    ?7Y5BGPY7?^
                                  !J555B#&#GYY~
                                 7GB##&#&&&&&GJ~
                               ^P#B5YJYPYJP&&#Y?
                             ^YPJ~^!?JPGB#&&&#P!
                                 ^??JGBG555B&#BJ
                                    :!^^ :~JB##G:
                                            75BB?
                                         :^:!?P#5
                                        ^!??YPGBP:
                                     :^!Y5PPGPBG5:
                                  :~?7YPBB#BGBBP~
   ^!~^::                   ^~~?55PPG#B######BP^
   :!Y5P7?~~^:  : :::^~!JJYPBBB###&&&&&&&&##G~
   :^!7YG#BGP5YJJY5PPGBB#####&&&&&&&&&&&##G?
    :^~!YG##&&#&#####B##B######&&&&&&&##BG!
    ::^!7Y5PPGGGPPPGB#GGPPYPP5BB##&&&&#GPP^
      ^^~!?7J77Y5G5PP5YJ??!!?75PB##&##BBGP^
      :^^~~~~!7J5PYJ7!~~ ::^^!J5PBB##BBBGBJ
      : : ::^!?7?!!~:^       ~?J5G###B#B#BG^
           :^?7!~~::        ::!JGB####B##G#P
           :^!?^            :^?75G####BBB#BB?
          :^^^:             :!7JGB##&##BBBBBP7:
           :                ^7J5BB#BG#BGB#B#B#GY~:
                           :^?J5BBGGB#G#BBBGB#&&&#G55J7!^^:
                           :~?Y5PGGBBBBBBBGGBGB###B#BB#BBBBP55JYJ??!^:
                           ~!J75PGPPPGB5P5GGGB##BBBGG5YP55Y?77!~^:
                         : ~7YYPGGGP5P5PP5PPGGGGGGP5Y7J7!~~^ :
                          ~?P5PBGPPPPPP5Y5JY5PBPGPY7?~!:::
                         ^~JP5GPGGPPGPP5Y5?Y5GPPY7?~^:
                        ^?J55P5PG5GGGP5YJY?YP5PYY!!^ :
                       :!?JGG5P5G5PPG5YJ7YY5PP5Y7!~^:
                      :~?Y5PG555PGPB5P5Y7YPG5YJ7?~^::
                      ^7J5BBG5YP5PBPYPPJJ55555J7?~:::
                     ::?JP#BYYYP5GBP5PYY5PY5JJ7?!^:
                      :^?YGGGYJP5PP55YYYPJJJ!?!!^
                      :^~75G5PYGPPYPYPPPYJJ?^~~:::
                      :^!YYPPY5YYY557YY5Y!!^~:: ::
                       ~?7JY55YYJYYYYJ7!!:::
                       ^!7Y5PJJYY5Y7??!^:::
                      :~!J55J77YJ77~~:^::
                      ~!??YJ7777!^^
                      ~!?JJJ?!!^::
                     ^^!7YJ77~^:
                    ::~~?7!!~~::`;

/** right-hand page list, in order */
export const nav: SiteLink[] = [
  { title: "About", href: "/" },
  { title: "Bookshelf", href: "/readlog" },
  { title: "Philosophy", href: "/philosophy" },
  { title: "GitHub", href: "https://github.com/darielgu", external: true },
  { title: "LinkedIn", href: "https://linkedin.com/in/dariel-gutierrez", external: true },
  { title: "X", href: "https://x.com/darielguu", external: true },
];

export const hackathonWinners = new Set(["mock ai", "2ndbrain", "hireme", "automa"]);

/* -------------------------------------------------------------------------
   projects
   ------------------------------------------------------------------------- */

export const projects: SiteLink[] = [
  {
    title: "detection of ai in writing",
    description: "BERT classifier that tells human writing from AI writing.",
    date: "04/2026",
    href: "/detection-ai-writing",
  },
  {
    title: "2ndbrain",
    description: "Remember who someone is and what you promised them.",
    date: "04/2026",
    href: "/2ndbrain",
  },
  {
    title: "automa",
    description: "Desktop app that runs your job search end to end.",
    date: "04/2026",
    href: "/automa",
  },
  {
    title: "careermax",
    description: "Resume optimization that gets past ATS filters.",
    date: "01/2026",
    href: "/careermax",
  },
  {
    title: "pelosi portfolio",
    description: "Email alerts every time Nancy Pelosi trades.",
    date: "11/2025",
    href: "/pelosi",
  },
  {
    title: "hireme",
    description: "Interview prep platform for technical interviews.",
    date: "11/2025",
    href: "/hireme",
  },
  {
    title: "ideasurf",
    description: "The search browser for startups.",
    date: "11/2025",
    href: "/ideasurf",
  },
  {
    title: "mock ai",
    description: "Simulated interviewer with feedback on answers and delivery.",
    date: "10/2025",
    href: "/mock-ai",
  },
  {
    title: "ai tutor",
    description: "Tutor over your own notes with retrieval.",
    date: "10/2025",
    href: "/ai-tutor",
  },
  {
    title: "interview prep",
    description: "Resume and role research workflow with deep search.",
    date: "10/2025",
    href: "/interview-prep",
  },
  {
    title: "goatforce",
    description: "MCP-powered CRM for sales reps.",
    date: "08/2025",
    href: "/goatforce",
  },
];

/* -------------------------------------------------------------------------
   writing and reading
   ------------------------------------------------------------------------- */

export const blogs: SiteLink[] = [
  {
    title: "Summer 2025",
    description: "Summer at Salesforce.",
    href: "/salesforce-recap",
  },
  {
    title: "Philosophy",
    description: "Things to live by.",
    href: "/philosophy",
  },
];

export const books: SiteLink[] = [
  { title: "Meditations", href: "/readlog", date: "2026" },
  { title: "Deep Work", href: "/readlog", date: "2026" },
  { title: "Designing Data-Intensive Applications", href: "/readlog", date: "2026" },
];
