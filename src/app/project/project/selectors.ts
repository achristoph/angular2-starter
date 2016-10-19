const getTasks = () => {
      return (state) => state
        .map(s => s.task)
        .distinctUntilChanged();
    };

    const percentDone = () => {
      return (state) => state
        .let(getTasks())
        .map(tasks => {
          const totalDone = tasks.filter((t: Task) => t.done).length;
          const total = tasks.length;
          return total > 0 ? (totalDone / total) : 0;
        });
    };
