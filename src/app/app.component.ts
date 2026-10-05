import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  projectTitle: string;
  description: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'BACKEND' | 'FRONTEND' | 'FULLSTACK';
  shortDesc: string;
  fullDesc: string;
  architecture: string;
  highlights: string[];
  techStack: string[];
  metrics: string;
  image: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; tag: string }[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Alioune Badara Sock - Portfolio';
  
  // Theme & Navigation state
  isDarkMode = signal<boolean>(true);
  currentLang = signal<'FR' | 'EN'>('FR');
  mobileMenuOpen = signal<boolean>(false);
  activeSkillTab = signal<string>('ALL');
  activeProjectTab = signal<string>('ALL');
  
  // Selected Project Modal
  selectedProject = signal<Project | null>(null);

  // Contact Form state
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  formSubmitted = signal<boolean>(false);
  formSending = signal<boolean>(false);

  // Personal Info
  personalInfo = {
    name: 'Alioune Badara Sock',
    title: 'INGÉNIEUR LOGICIEL FULL STACK JAVA / ANGULAR',
    subtitle: 'Spécialisé Applications Métiers & Architectures Back-End Spring Boot',
    tagline: 'Conception et développement de microservices haute performance, architectures évolutives et interfaces Angular dynamiques.',
    email: 'badarasock90@gmail.com',
    phone: '+221 77 170 92 80',
    location: 'Dakar / Liberté 6 extension, Sénégal',
    github: 'https://github.com/Badarels',
    avatar: 'profile.png',
    experienceYears: '4+',
    status: 'Disponible pour opportunités & projets'
  };

  // Experiences
  experiences: Experience[] = [
    {
      id: 'bcs-med',
      role: 'Développeur Java / Angular',
      company: 'Business Center Services',
      location: 'Dakar, Sénégal',
      period: 'Depuis Avril 2023',
      isCurrent: true,
      projectTitle: 'Plateforme de Gestion des Missions de Remplacement des Médecins',
      description: [
        'Analyse des besoins métiers et conception modulaire (Médecins, Centres Hospitaliers, Missions, Planning, Utilisateurs).',
        'Développement back-end Microservices Spring Boot et front-end Angular 19 avec tableaux de bord réactifs.',
        'Intégration d’outils de recherche/filtrage multi-critères avancés et notifications en temps réel.',
        'Mise en place de la sécurité renforcée (JWT, gestion granulaire des rôles et permissions).',
        'Optimisation des performances et algorithme d’automatisation d’affectation intelligente des médecins.',
        'Développement d’interfaces réactives Angular (Formulaires complexes, validation stricte, consommation REST APIs).'
      ],
      techStack: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'Git', 'Jenkins', 'GitLab CI/CD', 'Microservices', 'JWT']
    },
    {
      id: 'bcs-crm',
      role: 'Développeur Full Stack',
      company: 'Business Center Services',
      location: 'Dakar, Sénégal',
      period: 'Août 2021 – 2022',
      projectTitle: 'CRM Laravel pour la Gestion des Appels et Qualification des Employés',
      description: [
        'Conception et développement intégral de l’architecture du CRM d’entreprise.',
        'Implémentation des modules de suivi des appels, reporting d’activité et KPIs de qualification.',
        'Développement back-end Laravel robuste, maintenance évolutive et corrective.',
        'Sécurisation des accès via authentification native et gestion RBAC des rôles & permissions.'
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API', 'Git']
    },
    {
      id: 'free-school',
      role: 'Développeur Java / Angular (Freelance)',
      company: 'Freelance',
      location: 'Dakar, Sénégal',
      period: '2020 – 2021',
      projectTitle: 'Application de Gestion d’un Établissement Scolaire',
      description: [
        'Conception de l’API REST sécurisée avec Spring Boot et Spring Security (Auth JWT).',
        'Développement des modules CRUD pour étudiants, enseignants, emplois du temps et cours.',
        'Interface utilisateur Angular moderne avec formulaires réactifs et gestion d’état côté client.'
      ],
      techStack: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security', 'JWT', 'TypeScript']
    },
    {
      id: 'free-bank',
      role: 'Développeur C# (Freelance)',
      company: 'Freelance',
      location: 'Dakar, Sénégal',
      period: '2019 – 2020',
      projectTitle: 'Application Bancaire Desktop Enterprise',
      description: [
        'Développement de l’application bancaire de gestion des comptes, clients et transactions.',
        'Création des interfaces utilisateur ergonomiques sous WPF avec formulaires interactifs.',
        'Modélisation de la base de données SQL Server et procédures stockées.'
      ],
      techStack: ['C#', 'WPF', '.NET', 'SQL Server', 'Architecture N-Tiers']
    }
  ];

  // Projects
  projects: Project[] = [
    {
      id: 'proj-med',
      title: 'Plateforme Médicale Microservices',
      category: 'FULLSTACK',
      shortDesc: 'Système cloud de gestion et d’affectation en temps réel des missions de remplacement de médecins.',
      fullDesc: 'Application d’envergure déployée en architecture Microservices Spring Boot. Elle permet d’automatiser l’affectation des médecins selon la disponibilité, d’assurer le suivi du planning médical des hôpitaux et d’envoyer des alertes en temps réel.',
      architecture: 'Microservices Spring Cloud, API Gateway, Spring Security JWT, Angular 19 Single Page App, Docker containers.',
      highlights: [
        'Tableaux de bord réactifs Angular avec statistiques temps réel',
        'Filtres de recherche multicritères avancés (spécialité, région, dates)',
        'Système de notification push & email instantané',
        'Déploiement conteneurisé Docker & CI/CD GitLab'
      ],
      techStack: ['Spring Boot', 'Angular 19', 'PostgreSQL', 'Docker', 'Jenkins', 'Microservices'],
      metrics: 'Gain de 60% de temps sur le dispatching médical',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Badarels'
    },
    {
      id: 'proj-crm',
      title: 'CRM Call Tracking & Reporting',
      category: 'FULLSTACK',
      shortDesc: 'Solution d’entreprise Laravel pour le pilotage des centres d’appels et la qualification des collaborateurs.',
      fullDesc: 'CRM complet permettant de suivre le volume d’appels en temps réel, de calculer l’efficience des téléopérateurs et d’éditer des rapports statistiques personnalisables.',
      architecture: 'Architecture MVC Laravel, Base MySQL optimisée avec indexation, Formulaires réactifs et API REST.',
      highlights: [
        'Module de qualification rapide en cours d’appel',
        'Exportation de rapports PDF & Excel automatisée',
        'Gestion granulaire des droits utilisateurs (RBAC)'
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Chart.js', 'REST API'],
      metrics: '+45% d’amélioration du suivi qualitatif',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Badarels'
    },
    {
      id: 'proj-school',
      title: 'EduManager - Spring & Angular',
      category: 'FULLSTACK',
      shortDesc: 'Plateforme scolaire intégrée pour le suivi académique, les inscriptions et le calcul des notes.',
      fullDesc: 'Solution complète pour établissements d’enseignement supérieur permettant la gestion des étudiants, enseignants, cours, notes et plannings.',
      architecture: 'Back-end Spring Boot REST API, authentification JWT, Front-end Angular avec formulaires réactifs.',
      highlights: [
        'Gestion des bulletins de notes automatisée',
        'Espace personnalisé étudiants & professeurs',
        'Filtres et recherche d’élèves instantanée'
      ],
      techStack: ['Spring Boot', 'Angular', 'MySQL', 'Spring Security', 'JWT'],
      metrics: 'Adopté par 1 500+ utilisateurs actifs',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Badarels'
    },
    {
      id: 'proj-bank',
      title: 'Système Bancaire Enterprise WPF',
      category: 'BACKEND',
      shortDesc: 'Application C# / .NET hautement sécurisée pour le traitement des comptes et des transactions bancaires.',
      fullDesc: 'Logiciel bancaire permettant la création de comptes, les dépôts/retraits, le virement de fonds et la génération de relevés bancaires sous contrôle strict.',
      architecture: 'Architecture N-Tiers C# WPF, Base de données SQL Server avec transactions ACID.',
      highlights: [
        'Sécurité accrue sur le mouvement des capitaux',
        'Validation multi-niveaux des dépôts et retraits',
        'Interface WPF moderne et fluide'
      ],
      techStack: ['C#', 'WPF', 'SQL Server', '.NET Framework'],
      metrics: '100% de conformité bancaire transactionnelle',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/Badarels'
    }
  ];

  // Skills Categories
  skillCategories: SkillCategory[] = [
    {
      title: 'Back-End & Microservices',
      icon: 'fa-solid fa-server',
      skills: [
        { name: 'Java & Spring Boot', level: 95, tag: 'Expert' },
        { name: 'Spring Security & JWT', level: 90, tag: 'Avancé' },
        { name: 'Architectures Microservices', level: 88, tag: 'Avancé' },
        { name: 'APIs REST & OpenAPI', level: 95, tag: 'Expert' },
        { name: 'PHP & Laravel', level: 82, tag: 'Maîtrisé' },
        { name: 'C# & .NET', level: 75, tag: 'Intermédiaire' }
      ]
    },
    {
      title: 'Front-End & UI Web',
      icon: 'fa-solid fa-code',
      skills: [
        { name: 'Angular (19/18/17)', level: 92, tag: 'Expert' },
        { name: 'TypeScript & JavaScript', level: 90, tag: 'Avancé' },
        { name: 'Formulaires Réactifs & RxJS', level: 92, tag: 'Expert' },
        { name: 'HTML5 / SCSS / CSS3', level: 90, tag: 'Avancé' },
        { name: 'React & Ecosystem', level: 70, tag: 'Intermédiaire' }
      ]
    },
    {
      title: 'Bases de Données & Data',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'PostgreSQL', level: 88, tag: 'Avancé' },
        { name: 'MySQL / MariaDB', level: 90, tag: 'Avancé' },
        { name: 'SQL Server', level: 80, tag: 'Maîtrisé' },
        { name: 'Optimisation de Requêtes & Index', level: 85, tag: 'Avancé' }
      ]
    },
    {
      title: 'DevOps, Tools & IA',
      icon: 'fa-solid fa-cubes-stacked',
      skills: [
        { name: 'Docker & Conteneurisation', level: 85, tag: 'Avancé' },
        { name: 'Git, GitLab CI/CD, Jenkins', level: 88, tag: 'Avancé' },
        { name: 'Veille IA & Agents de productivité', level: 85, tag: 'Avancé' },
        { name: 'Architecture Applicative & Modularité', level: 92, tag: 'Expert' }
      ]
    }
  ];

  // Education
  education = [
    {
      diploma: 'Master en Génie Logiciel',
      institution: 'ISI (Institut Supérieur d’Informatique) – Dakar',
      period: '2020 – 2022',
      details: 'Spécialisation en génie logiciel, ingénierie des exigences, architectures distribuées et sécurité des SI.'
    },
    {
      diploma: 'Licence en Génie Logiciel',
      institution: 'ISI (Institut Supérieur d’Informatique) – Dakar',
      period: '2014 – 2017',
      details: 'Fondamentaux de la programmation orientée objet, bases de données relationnelles, algorithmique et web.'
    },
    {
      diploma: 'Baccalauréat Scientifique (Série S2)',
      institution: 'Lycée de Sokone',
      period: '2013 – 2014',
      details: 'Option Sciences Expérimentales & Mathématiques.'
    }
  ];

  // Languages & Interests
  languages = [
    { name: 'Français', level: 'Courant / Bilingue', percent: 100 },
    { name: 'Anglais', level: 'Intermédiaire / Technique', percent: 75 },
    { name: 'Wolof', level: 'Langue Maternelle', percent: 100 }
  ];

  interests = [
    { title: 'Veille Technologique & IA', desc: 'Expérimentation continue des agents IA, LLMs et outils de productivité dev.' },
    { title: 'Lecture & Recherche', desc: 'Ouvrages d’architecture logicielle, Clean Code et patrons de conception.' },
    { title: 'Sport', desc: 'Pratique régulière pour entretenir la discipline et le bien-être.' }
  ];

  // Filtering functions
  get filteredProjects(): Project[] {
    const tab = this.activeProjectTab();
    if (tab === 'ALL') return this.projects;
    return this.projects.filter(p => p.category === tab);
  }

  toggleTheme() {
    this.isDarkMode.update(val => !val);
    if (this.isDarkMode()) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }

  toggleLang() {
    this.currentLang.update(lang => lang === 'FR' ? 'EN' : 'FR');
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(val => !val);
  }

  openProjectModal(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  submitContact() {
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) return;
    
    this.formSending.set(true);
    setTimeout(() => {
      this.formSending.set(false);
      this.formSubmitted.set(true);
      this.contactData = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.formSubmitted.set(false), 6000);
    }, 1200);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV_Alioune_Badara_Sock.pdf';
    link.download = 'CV_Alioune_Badara_Sock.pdf';
    link.target = '_blank';
    link.click();
  }

  printCV() {
    window.print();
  }
}

