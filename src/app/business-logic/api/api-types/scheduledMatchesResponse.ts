type scheduledMatchesResponse = {
  awayScore: {
    current: number;
    display: number;
    innings: {
      inning1: {
        run: number;
      };
      inning2: {
        run: number;
      };
      inning3: {
        run: number;
      };
      inning4: {
        run: number;
      };
      inning5: {
        run: number;
      };
      inning6: {
        run: number;
      };
      inning7: {
        run: number;
      };
      inning8: {
        run: number;
      };
      inning9: {
        run: number;
      };
    };
    inningsBaseball: {
      errors: number;
      hits: number;
    };
    normaltime: number;
    period1: number;
    period2: number;
    period3: number;
    period4: number;
    period5: number;
    period6: number;
    period7: number;
  };
  awayTeam: {
    country: {
      alpha2: string;
      name: string;
    };
    id: number;
    name: string;
    nameCode: string;
    shortName: string;
    slug: string;
    sport: {
      id: number;
      name: string;
      slug: string;
    };
    subTeams: [];
    teamColors: {
      primary: string;
      secondary: string;
      text: string;
    };
    type: number;
    userCount: number;
  };
  changes: {
    changeTimestamp: number;
    changes: [string, string];
  };
  crowdsourcingDataDisplayEnabled: boolean;
  customId: string;
  finalResultOnly: boolean;
  hasEventPlayerStatistics: boolean;
  hasGlobalHighlights: boolean;
  homeScore: {
    current: number;
    display: number;
    innings: {
      inning1: {
        run: number;
      };
      inning2: {
        run: number;
      };
      inning3: {
        run: number;
      };
      inning4: {
        run: number;
      };
      inning5: {
        run: number;
      };
      inning6: {
        run: number;
      };
      inning7: {
        run: number;
      };
      inning8: {
        run: number;
      };
      inning9: {
        run: number;
      };
    };
    inningsBaseball: {
      errors: number;
      hits: number;
    };
    normaltime: number;
    period1: number;
    period2: number;
    period3: number;
    period4: number;
    period5: number;
    period6: number;
    period7: number;
  };
  homeTeam: {
    country: {
      alpha2: string;
      name: string;
    };
    id: number;
    name: string;
    nameCode: string;
    shortName: string;
    slug: string;
    sport: {
      id: number;
      name: string;
      slug: string;
    };
    subTeams: [];
    teamColors: {
      primary: string;
      secondary: string;
      text: string;
    };
    type: number;
    userCount: number;
  };
  id: number;
  periods: {
    current: string;
    extra1: string;
    inning1: string;
    inning2: string;
    inning3: string;
    inning4: string;
    inning5: string;
    inning6: string;
    inning7: string;
    inning8: string;
    inning9: string;
  };
  roundInfo: {
    round: number;
  };
  slug: string;
  startTimestamp: number;
  status: {
    code: number;
    description: string;
    type: string;
  };
  time: {
    currentPeriodStartTimestamp: number;
  };
  tournament: {
    category: {
      alpha2: string;
      flag: string;
      id: number;
      name: string;
      slug: string;
      sport: {
        id: number;
        name: string;
        slug: string;
      };
    };
    id: number;
    name: string;
    priority: number;
    slug: string;
    uniqueTournament: {
      category: {
        alpha2: string;
        flag: string;
        id: number;
        name: string;
        slug: string;
        sport: {
          id: number;
          name: string;
          slug: string;
        };
      };
      crowdsourcingEnabled: boolean;
      displayInverseHomeAwayTeams: boolean;
      hasBoxScore: boolean;
      hasEventPlayerStatistics: boolean;
      hasPerformanceGraphFeature: boolean;
      id: number;
      name: string;
      slug: string;
      userCount: number;
    };
  };
  winnerCode: number;
}[];
