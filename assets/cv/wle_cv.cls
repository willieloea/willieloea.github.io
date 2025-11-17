\ProvidesClass{wle_cv} % create new class called wle_cv
\LoadClass{article}    % inherit commands and environments from article class

% ========================
% === Default Packages ===
% ========================
\RequirePackage{changepage}
\RequirePackage{fontawesome5}         % for icons
\RequirePackage{fontspec}             % for system fonts
\RequirePackage{geometry}             % for page margins
\RequirePackage[hidelinks]{hyperref}  % for hyperlinks
\RequirePackage{indentfirst}          % for indenting first paragraph
\RequirePackage[bb=boondox]{mathalfa} % for x.com logo


% ======================
% === Document Setup ===
% ======================
% Set default page layout
\geometry{a4paper,margin=15mm}

% Set fonts
\setmainfont{Nunito}

% =========================
% === Personal Commands ===
% =========================
\newcommand{\webref}[2]{\href{#1}{\underline{\smash{#2}}}}
\newcommand{\home}[1]{\faMapMarker* #1}
\newcommand{\email}[1]{\href{mailto:#1}{\underline{\smash{\faEnvelope[regular]}}} #1}
\newcommand{\github}[1]{\href{https://github.com/#1}{\underline{\smash{\faGithub}}}}
\newcommand{\linkedin}[1]{\href{https://www.linkedin.com/in/#1/}{\underline{\smash{\faLinkedinIn}}}}
\newcommand{\x}[1]{\href{https://x.com/#1}{\underline{\smash{$\mathbb{X}$}}}}
\newcommand{\phone}[2]{\href{tel:#1}{\underline{\smash{\faPhone*}}} #2}
\newcommand{\website}[1]{\href{https://#1}{\underline{\smash{\faLink}}} #1}

\renewcommand{\maketitle}[1]{
  \begin{center}
    % name
    {\Huge\bfseries #1}

    \vspace{0.5em}
    % contact info
    \home{Western Cape}\quad
    \email{willieloea@gmail.com}\quad
    \phone{+27714943857}{071 494 3857}\quad
    \website{willieloea.github.io}\quad
    \github{willieloea}
    \linkedin{willieloea}
    \x{willieloea} willieloea\quad
  \end{center}
}

% =============================
% === Personal Environments ===
% =============================
\newenvironment{cvsection}[1]{
  \section*{#1}
  \vspace{-0.75em}
  \begin{adjustwidth}{1em}{0pt}
}{
  \end{adjustwidth}
}

\endinput
