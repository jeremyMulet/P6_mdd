package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jérémy MULET on 31/10/2023.
 */

public interface PostRepository extends JpaRepository<Post, Long> {
}
