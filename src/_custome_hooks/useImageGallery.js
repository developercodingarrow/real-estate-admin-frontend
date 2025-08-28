import { useState, useCallback } from "react";

const useImageGallery = (initialImages = [], maxImages = 5) => {
  const [images, setImages] = useState(initialImages);

  //   const addImages = useCallback(
  //     (fileList) => {
  //       // FileList is array-like; convert to real array
  //       const files = Array.from(fileList || []);
  //       console.log("[hook:addImages] received files:", files);

  //       if (files.length === 0) return;

  //       setImages((prev) => {
  //         const remaining = Math.max(0, maxImages - prev.length);
  //         const filesToAdd = files.slice(0, remaining);

  //         // Keep it simple in step-1: store basic metadata + original File
  //         const newItems = filesToAdd.map((file) => ({
  //           id:
  //             typeof crypto !== "undefined" && crypto.randomUUID
  //               ? crypto.randomUUID()
  //               : `${Date.now()}_${Math.random()}`,
  //           file, // keep the File object for later (previews/upload)
  //           name: file.name,
  //           size: file.size,
  //           type: file.type,
  //           preview,
  //         }));

  //         const next = [...prev, ...newItems];
  //         console.log("[hook:addImages] next images state:", next);
  //         return next;
  //       });
  //     },
  //     [maxImages]
  //   );

  const addImages = useCallback(
    (fileList) => {
      const files = Array.from(fileList || []);
      if (files.length === 0) return;

      setImages((prev) => {
        const remaining = Math.max(0, maxImages - prev.length);
        const filesToAdd = files.slice(0, remaining);

        const newItems = filesToAdd.map((file) => {
          const id =
            typeof crypto !== "undefined" && crypto.randomUUID
              ? crypto.randomUUID()
              : `${Date.now()}_${Math.random()}`;

          // create preview URL here — this is required
          const preview = URL.createObjectURL(file);

          return {
            id,
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            preview, // <-- important
          };
        });

        return [...prev, ...newItems];
      });
    },
    [maxImages]
  );

  const removeImage = useCallback((imageId) => {
    setImages((prev) => {
      const toRemove = prev.find((p) => p.id === imageId);
      if (toRemove) {
        try {
          URL.revokeObjectURL(toRemove.preview);
        } catch (e) {}
      }
      return prev.filter((p) => p.id !== imageId);
    });
  }, []);

  const clearAllImages = useCallback(() => {
    // revoke then clear
    setImages((prev) => {
      prev.forEach((p) => {
        try {
          URL.revokeObjectURL(p.preview);
        } catch (e) {}
      });
      return [];
    });
  }, []);

  return { images, addImages, removeImage, clearAllImages, maxImages };
};

export default useImageGallery;
