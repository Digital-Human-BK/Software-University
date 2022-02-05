function constructionCrew(worker){
  if (worker.dizziness == true) {
    worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
  }

  return worker;
}
constructionCrew({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }
)
constructionCrew({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }
)
constructionCrew({ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }
)